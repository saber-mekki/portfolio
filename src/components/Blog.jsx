import React from "react";

const Blog = () => {
  const posts = [
    { id: 1, title: "Coming sooon !!!", content: "" },
  
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ marginBottom: "20px" }}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
