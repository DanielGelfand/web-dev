import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {

    return (` 
    <div>
        <ul class="list-group" style="position:relative;">
            ${posts.map(post => PostSummaryItem(post)).join('')}
        </ul>
    </div>
    `)

}

export default PostSummaryList;