import { useEffect, useState } from "react";

const API_BASE = "https://admin.phanomprofessionals.com";

export default function BlogCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/blog/categories`)
      .then(r => r.json())
      .then(setCategories)
      .catch(() => setCategories([]));
  }, []);

  return (
    <div className="flex justify-between bg-gradient-to-r from-[#469AE0] via-[#9A4DE4] to-[#D01AE5] py-3 px-5 md:px-16">
      <h1 className="text-white font-bold text-2xl md:text-3xl">Blogs</h1>
      <div className="lg:flex gap-4 text-white my-auto hidden">
        {categories.map(c => (
          <a key={c.id} href={`/blogs?category=${c.slug}`} className="hover:text-white/80">
            {c.name}
          </a>
        ))}
      </div>
    </div>
  );
}
