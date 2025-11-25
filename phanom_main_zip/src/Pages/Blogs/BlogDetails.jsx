// Pages/Blogs/BlogDetails.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import BlogPostCard from "../../Components/BlogsComponents/BlogDetails/BlogPic";
import ContentTable from "../../Components/BlogsComponents/BlogDetails/ContentTable";
import MiddleInfo from "../../Components/BlogsComponents/BlogDetails/MiddleInfo";
import Inquiry from "../../Components/BlogsComponents/BlogDetails/Inquiry";
import ThreeCardSection from "../../Components/BlogsComponents/BlogDetails/ReadCard";
import NewsPaper from "../../Components/BlogsComponents/Allblogs/NewsPaper";
import FAQs from "../../GlobalComponents/FAQs";

const API_BASE = "https://admin.phanomprofessionals.com";

/* -------------------- utils -------------------- */
const slugify = (text = "") =>
  text
    .toString()
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

function addIdsAndBuildToc(rawHtml) {
  // safe guards
  if (!rawHtml || typeof rawHtml !== "string") {
    return { html: "", toc: [] };
  }

  const container = document.createElement("div");
  container.innerHTML = rawHtml;

  // Assign IDs to h2/h3 if missing, and build TOC from the same DOM
  const seen = new Map();
  const toc = [];
  container.querySelectorAll("h2, h3").forEach((el) => {
    const level = Number(el.tagName.substring(1)); // 2 / 3
    const text = (el.textContent || "").trim();
    if (!text) return;

    if (!el.id) {
      const base = slugify(text) || "section";
      const n = seen.get(base) || 0;
      seen.set(base, n + 1);
      el.id = n ? `${base}-${n + 1}` : base;
    }

    toc.push({ id: el.id, level, text });
  });

  return { html: container.innerHTML, toc };
}

// Tiny CSS.escape fallback
const cssEscape = (str) =>
  window.CSS && CSS.escape ? CSS.escape(str) : str.replace(/[^a-zA-Z0-9_-]/g, "\\$&");

/* -------------------- component -------------------- */
const BlogDetails = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const middleRef = useRef(null);
  const mainRef = useRef(null);

  // Fetch single post by slug (works with either /slug/{slug} or list+filter)
  useEffect(() => {
    let cancelled = false;
    async function load() {
      setLoading(true);
      try {
        let res = await fetch(`${API_BASE}/api/blog/posts/slug/${encodeURIComponent(slug)}`);
        if (res.ok) {
          const json = await res.json();
          !cancelled && setPost(json?.data || json);
        } else {
          const res2 = await fetch(
            `${API_BASE}/api/blog/posts?slug=${encodeURIComponent(slug)}&per_page=1`
          );
          const j2 = await res2.json();
          const first = Array.isArray(j2?.data) ? j2.data[0] : null;
          !cancelled && setPost(first || null);
        }
      } catch (e) {
        console.warn("Post fetch failed:", e);
        !cancelled && setPost(null);
      } finally {
        !cancelled && setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  // Hand-off wheel to middle scroller (your original behavior)
  useEffect(() => {
    const handleWheel = (e) => {
      const el = middleRef.current;
      const main = mainRef.current;
      if (!el || !main) return;

      const rect = main.getBoundingClientRect();
      const touchesTop = rect.top <= 0;
      const touchesBottom = rect.bottom >= window.innerHeight;

      const atTop = el.scrollTop === 0;
      const atBottom = Math.ceil(el.scrollTop + el.clientHeight) >= el.scrollHeight;

      // Down
      if (touchesTop && e.deltaY > 0 && !atBottom) {
        e.preventDefault();
        el.scrollTop += e.deltaY;
      }
      // Up
      if (touchesBottom && e.deltaY < 0 && !atTop) {
        e.preventDefault();
        el.scrollTop += e.deltaY;
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, []);

  // Map backend fields → one content string
  const rawContent = useMemo(() => {
    if (!post) return "";
    return (
      post.content || post.body || post.html || post.rich_text || post.richHtml || ""
    );
  }, [post]);

  // Process content once → ids + toc
  const { html: processedHtml, toc } = useMemo(
    () => addIdsAndBuildToc(rawContent),
    [rawContent]
  );

  // TOC click → scroll the MIDDLE column (not window)
  const handleTocNavigate = (id) => {
    const container = middleRef.current;
    if (!container) return;
    const target = container.querySelector(`#${cssEscape(id)}`);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (loading) {
    return <div className="pt-24 px-5 sm:px-16 text-gray-500">Loading…</div>;
  }
  if (!post) {
    return <div className="pt-24 px-5 sm:px-16 text-gray-500">Post not found.</div>;
  }

  // Debug hint if content is empty
  if (!rawContent) {
    console.warn("Blog content is empty for slug:", slug, post);
  }

  return (
    <>
      {/* Hero card (uses post cover/title/author/date) */}
      <BlogPostCard post={post} />

      <div ref={mainRef} className="main grid grid-cols-1 md:grid-cols-12 px-5 sm:px-16">
        {/* Left Sidebar : TOC */}
        <div className="hidden md:block md:col-span-3 sticky top-0 h-screen">
          <ContentTable toc={toc} onNavigate={handleTocNavigate} />
        </div>

        {/* Middle Content (independent scroll) */}
        <div
          ref={middleRef}
          className="col-span-1 md:col-span-6 h-screen overflow-y-auto scrollbar-hide"
        >
          <MiddleInfo post={post} processedHtml={processedHtml} rawEmpty={!rawContent} />
        </div>

        {/* Right Sidebar */}
        <div className="hidden md:block md:col-span-3 sticky top-0 h-screen border-l">
          <Inquiry />
        </div>
      </div>

      {/* Rest */}
      <div className="pt-20 px-5 sm:px-16">
        <FAQs />
        <ThreeCardSection />
        <NewsPaper />
      </div>
    </>
  );
};

export default BlogDetails;
