import React from "react";
import "./index.css";

const Post = () => {
  return (
    <div className="post">
      <div className="container">
        <div className="input-group">
          <label>Username</label>
          <input type="text" />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" />
        </div>
        <button className="btn">Post</button>
      </div>
    </div>
  );
};

export default Post;
