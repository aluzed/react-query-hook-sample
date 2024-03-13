import React from "react";
import { useQuery } from "react-query";

export const useGetPost = () => {
  const { isFetching, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  return {
    isFetching,
    error,
    data,
  };
};
