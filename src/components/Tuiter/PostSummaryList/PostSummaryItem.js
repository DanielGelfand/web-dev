import React from "react";

const PostSummaryItem = ({
  post = {
    topic: "Web Development",
    userName: "ReactJS",
    time: "2h",
    title:
      "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
    image: "../../../images/react-blue.png",
  },
}) => {
  return (
    <>
      <li class="list-group-item">
        <div>
          <img
            width="80"
            height="80"
            style={{ float: "right", borderRadius: "10px" }}
            src={post.image}
            alt="listitem"
          />
          <span class="wd-darker-gray">{post.topic}</span>
          {post.topic ? <br /> : ""}
          <b>
            {post.userName} <i class="fas fa-check-circle"></i>
          </b>
          <span class="wd-darker-gray"> - {post.time}</span>
          <br />
          <b>{post.title}</b>
        </div>
      </li>
    </>
  );
};

export default PostSummaryItem;
