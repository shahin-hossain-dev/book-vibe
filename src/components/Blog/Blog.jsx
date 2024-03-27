import React from "react";

const Blog = ({ blog }) => {
  const { title, content, author, date } = blog;

  return (
    <div className="card  bg-base-100 shadow-xl">
      <div className="card-body space-y-4">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
        <div className=" flex gap-3 items-center">
          <span>
            <span className="font-semibold">Author:</span> {author}
          </span>
          <span>
            <span className="font-semibold">Date:</span> {date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
