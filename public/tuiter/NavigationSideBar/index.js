const NavigationSidebar = () => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i>
                </a>
                <a class="list-group-item" href="home.html">
                    <i class="fas fa-home"></i> <div class="d-none d-xl-inline">Home</div>
                </a>
                <a class="list-group-item active" href="explore.html">
                    <i class="fas fa-hashtag"></i> <div class="d-none d-xl-inline">Explore</div>
                </a>
                <a class="list-group-item" href="notifications.html">
                    <i class="fas fa-bell"></i> <div class="d-none d-xl-inline">Notifications</div>
                </a>
                <a class="list-group-item" href="messages.html">
                     <i class="fas fa-envelope"></i> <div class="d-none d-xl-inline">Messages</div>
                </a>
                <a class="list-group-item" href="bookmarks.html">
                    <i class="fas fa-bookmark"></i> <div class="d-none d-xl-inline">Bookmarks</div>
                </a>
                <a class="list-group-item" href="lists.html">
                    <i class="fas fa-list"></i> <div class="d-none d-xl-inline">Lists</div>
                </a>
                <a class="list-group-item" href="profile.html">
                    <i class="fas fa-user"></i> <div class="d-none d-xl-inline">Profile</div>
                </a>
                <a class="list-group-item" href="more.html">
                    <i class="fas fa-circle"></i> <div class="d-none d-xl-inline">More</div>
                </a>
            
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
