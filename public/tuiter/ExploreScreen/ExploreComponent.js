import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="col-8 col-sm-10 col-lg-6">
            <div class="input-group mb-2">
                <i class="fa fa-search wd-search-icon"></i>
                <input type="text" class="form-control form-input h-75"
                       placeholder="       Search Tuiter"
                       style="border-radius:40px; position:relative; right:20px; z-index: -1;">
                <a href="explore-settings.html">
                    <i class="fas fa-cog fs-4 text-primary wd-gear"></i>
                </a>
            </div>

            <ul class="nav nav-tabs mb-2">
                <li class="nav-item"><a
                        class="nav-link active px-3 px-lg-2 px-xl-3"
                                        href="for-you.html">For you</a></li>
                <li class="nav-item"><a class="nav-link px-3 px-md-2 px-xl-3"
                                        href="trending.html">
                    Trending</a>
                </li>
                <li class="nav-item"><a class="nav-link px-3 px-lg-2 px-xl-3"
                                        href="news.html">News
                </a>
                </li>
                <li class="nav-item"><a class="nav-link px-3 px-lg-2 px-xl-3"
                                        href="sports.html">Sports</a></li>
                <li class="nav-item d-sm-none d-md-block">
                    <a class="nav-link px-3 px-lg-2 px-xl-3"
                       href="entertainment.html">Entertainment</a>
                </li>
            </ul>

            <div class="card">
                <div class="wd-position-relative">
                    <h2 class="wd-text-overlay">SpaceX's
                        Starship</h2>
                    <img class="card-img-top"
                         src="https://techcrunch.com/wp-content/uploads/2019/09/Starship-Mk1-Day.jpg?w=600"/>
                </div>
                </div>
           ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;
