import { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
  // const [userId, setUserId] = useState<number>();
  const pageSize = 10;
  // const [page, setPage] = useState(1);
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });

  if (isLoading) return <p>Loading....</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {/* <select
        onChange={(event) => setUserId(parseInt(event.target.value))}
        className="form-select mb-3"
        value={userId}
      >
        <option value=""></option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </select> */}
      <ul className="list-group mb-3">
        {data.pages.map((page) => (
          <>
            {page.map((post, index) => (
              <li key={index} className="list-group-item">
                {post.title}
              </li>
            ))}
          </>
        ))}
      </ul>
      {/* <button
        disabled={page === 1}
        className="btn btn-primary"
        onClick={() => setPage(page - 1)}
      >
        Previous
      </button> */}
      <button onClick={() => fetchNextPage()} className="btn btn-primary ms-1">
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
