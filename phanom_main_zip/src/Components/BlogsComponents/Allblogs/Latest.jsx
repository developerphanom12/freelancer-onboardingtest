// Components/BlogsComponents/Allblogs/Latest.jsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const API_BASE = "https://admin.phanomprofessionals.com";

// defensive helper: if any field comes back with HTML, strip it for list view
const stripHtml = (html = "") => {
  if (!html) return "";
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

export default function Latest() {
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [pageObj, setPageObj] = useState({
    data: [],
    current_page: 1,
    last_page: 1,
    per_page: 9,
  });

  // read filters from URL
  const page = Number(params.get("page") || 1);
  const category = params.get("category") || "";
  const search = params.get("search") || "";

  useEffect(() => {
    let url = `${API_BASE}/api/blog/posts?page=${page}&per_page=${pageObj.per_page || 9}`;
    if (category) url += `&category=${encodeURIComponent(category)}`;
    if (search) url += `&search=${encodeURIComponent(search)}`;

    setLoading(true);
    fetch(url)
      .then((r) => r.json())
      .then((json) => {
        // Expecting Laravel paginator: { current_page, last_page, per_page, data:[...] }
        const safe = {
          data: Array.isArray(json?.data) ? json.data : [],
          current_page: Number(json?.current_page || page),
          last_page: Number(json?.last_page || 1),
          per_page: Number(json?.per_page || 9),
        };
        setPageObj(safe);
      })
      .catch(() => {
        setPageObj({ data: [], current_page: 1, last_page: 1, per_page: 9 });
      })
      .finally(() => setLoading(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, category, search]);

  const totalPages = useMemo(() => pageObj.last_page || 1, [pageObj]);

  const setPageKeepFilters = (p) =>
    setParams({
      page: String(p),
      ...(category && { category }),
      ...(search && { search }),
    });

  const setCategoryFilter = (slug) =>
    setParams({
      page: "1",
      ...(slug && { category: slug }),
      ...(search && { search }),
    });

  return (
    <div className="w-full lg:w-3/5 overflow-y-auto pr-2">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 pb-4">Latest</h1>

      {loading ? (
        <div className="text-gray-500">Loading…</div>
      ) : pageObj.data.length ? (
        <div className="space-y-6">
          {pageObj.data.map((post) => {
            // normalize fields safely
            const title = stripHtml(post.title);
            const excerpt = stripHtml(post.excerpt); // list view shows only excerpt
            const authorText = stripHtml(post.author) || "Team";
            const dateText = post.published_at
              ? new Date(post.published_at).toLocaleDateString()
              : "";
            const cover = post.cover_image || "/placeholder.svg";
            const categoryLabel = stripHtml(post.category) || "General";
            const categorySlug = post.category_slug || "";

            return (
              <div
                key={post.id}
                className="p-0 rounded-lg hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => navigate(`/blogs/${encodeURIComponent(post.slug)}`)}
              >
                <div className="flex flex-col sm:flex-row gap-4 p-2">
                  <div className="flex-shrink-0">
                    <img
                      src={cover}
                      alt={title}
                      className="w-full sm:w-64 h-44 object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="mb-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setCategoryFilter(categorySlug);
                        }}
                        className="inline-block px-3 py-1 pl-0 text-xs font-medium text-gray-700 rounded-md hover:bg-gray-200"
                      >
                        {categoryLabel}
                      </button>
                    </div>

                    <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 leading-tight">
                      {title}
                    </h2>

                    {/* Only excerpt (no HTML content) */}
                    {excerpt ? (
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {excerpt}
                      </p>
                    ) : null}

                    

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{authorText}</span>
                      <span>{dateText}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-500">No posts found.</p>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8 flex-wrap">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setPageKeepFilters(i + 1)}
              className={`px-3 py-1 text-sm rounded ${
                page === i + 1 ? "bg-blue-600 text-white" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {i + 1}
            </button>
          ))}

          {page < totalPages && (
            <button
              onClick={() => setPageKeepFilters(page + 1)}
              className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"
            >
              Next →
            </button>
          )}
        </div>
      )}
    </div>
  );
}
