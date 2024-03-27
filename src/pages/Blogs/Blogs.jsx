import React from "react";
import { useLoaderData } from "react-router-dom";
import Blog from "../../components/Blog/Blog";

const Blogs = () => {
  const blogs = useLoaderData();

  return (
    <div>
      <h2 className="text-center text-2xl lg:text-4xl font-bold bg-[#1313130D] p-8 rounded-2xl">
        Blogs
      </h2>
      <div className="flex flex-col gap-6 mt-6 lg:mt-12">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
