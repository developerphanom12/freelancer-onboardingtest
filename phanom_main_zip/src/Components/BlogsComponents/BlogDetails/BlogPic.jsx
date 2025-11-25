import React from "react";

export default function BlogPostCard({ post }) {
  const cover =
    post?.cover_image ||
    "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?semt=ais_hybrid&w=740&q=80";

  return (
    <div className="w-full flex justify-center pb-8 pt-20 px-5 ">
      <div className="relative overflow-hidden rounded-lg shadow-lg max-w-6xl p-4 w-full h-64 md:h-96">
        <img
          src={cover}
          alt={post?.title || "Cover"}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/80 to-blue-500/70"></div>

        <div className="relative md:w-1/2 w-full z-10 h-full flex flex-col justify-center p-1 text-white">
          <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-4 text-left">
            {post?.title || "—"}
          </h1>
          <div className="flex items-center gap-2 text-sm text-orange-100">
            <span>{post?.author || "Team"}</span>
            {post?.published_at ? (
              <>
                <span>•</span>
                <span>{new Date(post.published_at).toLocaleDateString()}</span>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
