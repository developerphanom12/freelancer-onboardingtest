// Components/BlogsComponents/BlogDetails/MiddleInfo.jsx
import React from "react";

/**
 * props:
 *  - post               : whole post (title, author, published_at, etc.)
 *  - processedHtml      : content with injected ids (string)
 *  - rawEmpty (boolean) : show hint if backend had empty content
 */
export default function MiddleInfo({ post, processedHtml, rawEmpty }) {
  // const author = post?.author || "Team";
  const date = post?.published_at ? new Date(post.published_at) : null;

  return (
    <article>
      <div className="post-meta">
        {/* <span>{author}</span> */}
        {date && (
          <>
            <span className="post-meta__sep">•</span>
            <time dateTime={date.toISOString()}>{date.toLocaleDateString()}</time>
          </>
        )}
      </div>

      {processedHtml ? (
        <div
          id="post-content"
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: processedHtml }}
        />
      ) : (
        <div className="hint">
          {rawEmpty ? "No content found for this post." : "Could not render content."}
        </div>
      )}
    </article>
  );
}
