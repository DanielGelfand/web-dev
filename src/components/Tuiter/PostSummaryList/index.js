import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
  return (
    <div>
      <ul class="list-group" position="relative">
        {posts.map((post) => (
          <PostSummaryItem post={post} />
        ))}
      </ul>
    </div>
  );
};

export default PostSummaryList;
