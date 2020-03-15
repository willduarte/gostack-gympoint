import React from "react";

function Comment({ data }) {
  return (
    <div className="comment">
      <div className="comment-author">
        <img src={data.author.avatar} alt={data.author.name} />
      </div>
      <div className="comment-content">
        <p>
          <b>{data.author.name}</b> {data.content}
        </p>
      </div>
    </div>
  );
}

export default Comment;
