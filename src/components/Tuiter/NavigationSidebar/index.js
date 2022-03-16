import React from "react";
const NavigationSidebar = ({ active = "explore" }) => {
  return (
    <div>
      <div className="list-group">
        <a className="list-group-item p-lg-2" href="/">
          <i className="fab fa-twitter"></i>
        </a>
        <a className="list-group-item p-lg-2" href="home.html">
          <i className="fas fa-home"></i>
          <div className="d-lg-inline-block">Home</div>
        </a>
        <a className="list-group-item active p-lg-2" href="explore.html">
          <i className="fas fa-hashtag"></i> <span>Explore</span>
        </a>
        <a className="list-group-item p-lg-2" href="notifications.html">
          <i className="fas fa-bell"></i> <span>Notifications</span>
        </a>
        <a className="list-group-item p-lg-2" href="messages.html">
          <i className="fas fa-envelope"></i> <span>Messages</span>
        </a>
        <a className="list-group-item p-lg-2" href="bookmarks.html">
          <i className="fas fa-bookmark"></i> <span>Bookmarks</span>
        </a>
        <a className="list-group-item p-lg-2" href="lists.html">
          <i className="fas fa-list"></i> <span>Lists</span>
        </a>
        <a className="list-group-item p-lg-2" href="profile.html">
          <i className="fas fa-user"></i> <span>Profile</span>
        </a>
        <a className="list-group-item p-lg-2" href="more.html">
          <i className="fas fa-circle"></i> <span>More</span>
        </a>
      </div>
      <div className="d-grid mt-2">
        <a href="tweet.html" className="btn btn-primary btn-block rounded-pill">
          Tuit
        </a>
      </div>
    </div>
  );
};
export default NavigationSidebar;
