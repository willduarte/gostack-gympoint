import React from "react";

import Comment from "./Comment";

function PostItem({ data }) {
  return (
    <div className="post-item">
      <header className="post-author">
        <img src={data.author.avatar} alt={data.author.name} />
        <div className="author-name">
          <p>{data.author.name}</p>
          <small>{data.date}</small>
        </div>
      </header>
      <section className="post-content">
        <p>{data.content}</p>
      </section>
      <section className="post-comments">
        {data.comments.map(comment => (
          <Comment key={comment.id} data={comment} />
        ))}
      </section>
    </div>
  );
}

export default PostItem;
