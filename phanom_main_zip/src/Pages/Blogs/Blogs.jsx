import React from "react";
import BlogCategories from "../../Components/BlogsComponents/Allblogs/BlogCategories";
import FeaturedPost from "../../Components/BlogsComponents/Allblogs/FeaturedPost";
import BlogGrid from "../../Components/BlogsComponents/Allblogs/BlogGrid";
import Latest from "../../Components/BlogsComponents/Allblogs/Latest";
import Newsletter from "../../Components/BlogsComponents/Allblogs/NewsPaper";
import MobileAppDevelopment from "../../Components/BlogsComponents/Allblogs/MobileDev";
import EnterpriseDevelopment from "../../Components/BlogsComponents/Allblogs/EnterpiseDev";
import Discuss from "../../Components/BlogsComponents/Allblogs/Discuss";


const Blog=()=> {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* <Navbar /> */}
      <BlogCategories />
      <main className=" mx-auto px-5 md:px-16 py-8">
        <FeaturedPost />
        <BlogGrid />
        <Latest />
        <Newsletter />
        <MobileAppDevelopment />
        <EnterpriseDevelopment />
        <Discuss />
      </main>
    </div>
  );
}

export default Blog;