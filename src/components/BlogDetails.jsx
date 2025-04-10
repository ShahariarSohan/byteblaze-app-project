import React from "react";
import Markdown from "react-markdown";
import { Link, useLoaderData } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import { IoBookmarkOutline } from "react-icons/io5";
import { FaBookOpen } from "react-icons/fa";

const BlogDetails = () => {
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
        <div className="flex gap-4">
          <Link to={`/blogs/${id}`}>
            <div className="flex font-bold items-center gap-2">
              <IoBookmarkOutline className=" text-xl font-bold"></IoBookmarkOutline>
              Content
            </div>
          </Link>
          <Link to="author">
            <div className="flex font-bold items-center gap-2">
              <FaBookOpen className=" text-xl font-bold"></FaBookOpen>
              Author
            </div>
          </Link>
        </div>
        <div className="dark:text-gray-800">
          <img src={cover_image} alt="" className="rounded-md" />
        </div>
      </article>
      <div>
        <div className="flex flex-wrap py-6 gap-3 border-t border-dashed dark:border-gray-600">
          {tags.map((tag, idx) => (
            <a className="hover:underline" tag={tag} key={idx}>
              {"#"}
              {tag}
            </a>
          ))}
        </div>
        <Link to={url}>
          <h1 className="text-3xl font-bold  hover:underline focus:underline ">
            {title}
          </h1>
        </Link>
        <div className="space-y-2">
          <Markdown rehypePlugins={rehypeRaw}>{body_html}</Markdown>
          <Markdown>{body_markdown}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
