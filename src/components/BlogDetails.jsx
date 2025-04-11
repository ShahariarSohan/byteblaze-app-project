import React, { useState } from "react";

import { Link, useLoaderData } from "react-router-dom";
import { MdBookmarkAdd } from "react-icons/md";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";
import Content from "./Content";
import Author from "./Author";
import Bookmarks from "../pages/Bookmarks";

const BlogDetails = () => {
  const [show, setShow] = useState(1);
  const details = useLoaderData();
  const {
    id,
    title,
    reading_time_minutes,
    readable_publish_date,
    tags,
    cover_image,
    comments_count,
    public_reactions_count,
    body_html,
    body_markdown,
    url,
  } = details;
  return (
    <div className="max-w-2xl px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 dark:bg-gray-100 dark:text-gray-900">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
            <div className="flex items-center md:space-x-2">
              <p className="text-sm">
                {reading_time_minutes} min read . {readable_publish_date}
              </p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              {comments_count} comments .{public_reactions_count}
              {""} reactions.
            </p>
          </div>
        </div>
        <div className="flex gap-4  items-center">
          <div className="flex">
            <Link to={`/blogs/${id}`}>
              <div
                onClick={() => setShow(1)}
                className={
                  show === 1
                    ? "flex font-bold items-center gap-2  border-t border-r border-l p-2"
                    : "flex font-bold items-center gap-2 border-b  p-2"
                }
              >
                <IoBookmarkOutline className=" text-xl font-bold"></IoBookmarkOutline>
                Content
              </div>
            </Link>
            <Link to="author">
              <div
                onClick={() => setShow(2)}
                className={
                  show === 2
                    ? "flex font-bold items-center gap-2  border-t border-r border-l p-2"
                    : "flex font-bold items-center gap-2 border-b  p-2"
                }
              >
                <FaBookOpen className="flex justify-around text-xl font-bold"></FaBookOpen>
                Author
              </div>
            </Link>
          </div>
          <div
            className="rounded-full p-2 bg-red-200 hover:shadow-md"
            onClick={() => setShow(3)}
          >
            <MdBookmarkAdd className="font-bold text-2xl text-secondary"></MdBookmarkAdd>
          </div>
        </div>
      </article>

      {show === 1 ? (
        <Content details={details}></Content>
      ) : show === 2 ? (
        <Author details={details}></Author>
      ) : (
        <Bookmarks details={details}></Bookmarks>
      )}
    </div>
  );
};

export default BlogDetails;
