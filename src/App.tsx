import React from "react";
import "./App.css";
import { useGetPost } from "./hooks/posts";
import { PostCard } from "./components/post";
import { Post } from "./custom-types/post";

function App() {
  const { isFetching, data: posts } = useGetPost();

  return (
    <div className="App flex justify-center flex-wrap">
      {isFetching && "Getting posts..."}
      {!isFetching &&
        posts?.map((post: Post) => {
          return <PostCard key={post.id} post={post} />;
        })}
    </div>
  );
}

export default App;
