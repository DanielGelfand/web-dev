import React from "react";
import PostSummaryList from "../PostSummaryList/index.js";
import "./index.css";

const ExploreComponent = () => {
  return (
    <div>
      <div className="input-group mb-2">
        <i className="fa fa-search wd-search-icon"></i>
        <input
          type="text"
          className="form-control form-input h-75"
          placeholder="       Search Tuiter"
          style={{
            borderRadius: "40px",
            position: "relative",
            right: "20px",
            zindex: "-1",
          }}
        />
        <a href="explore-settings.html">
          <i className="fas fa-cog fs-4 text-primary wd-gear"></i>
        </a>
      </div>

      <ul className="nav nav-tabs mb-2">
        <li className="nav-item">
          <a
            className="nav-link active px-3 px-lg-2 px-xl-3"
            href="for-you.html"
          >
            For you
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3 px-md-2 px-xl-3" href="trending.html">
            Trending
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3 px-lg-2 px-xl-3" href="news.html">
            News
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link px-3 px-lg-2 px-xl-3" href="sports.html">
            Sports
          </a>
        </li>
        <li className="nav-item d-sm-none d-md-block">
          <a
            className="nav-link px-3 px-lg-2 px-xl-3"
            href="entertainment.html"
          >
            Entertainment
          </a>
        </li>
      </ul>

      <div className="card">
        <div className="wd-position-relative">
          <h2 className="wd-text-overlay">SpaceX's Starship</h2>
          <img
            className="card-img-top"
            src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=600"
          />
        </div>
      </div>
      <PostSummaryList />
    </div>
  );
};
export default ExploreComponent;
