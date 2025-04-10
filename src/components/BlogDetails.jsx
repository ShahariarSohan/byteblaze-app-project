import React from "react";
import { useLoaderData } from "react-router-dom";

const BlogDetails = () => {
  const detail = useLoaderData();
  console.log(detail);
  return <div>BlogDetails</div>;
};

export default BlogDetails;
