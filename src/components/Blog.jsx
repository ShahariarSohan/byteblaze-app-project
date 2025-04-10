import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { id, title, description, cover_image, readable_publish_date } = blog;

  return (
    <Link
      rel="noopener noreferrer"
      href="#"
      className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
    >
      {cover_image ? (
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src={cover_image}
        />
      ) : (
        <img
          role="presentation"
          className="object-cover w-full rounded h-44 dark:bg-gray-500"
          src="/error.jpg"
        />
      )}
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
          {title}
        </h3>
        <span className="text-xs dark:text-gray-600">
          {readable_publish_date}
        </span>
        <p>{description}</p>
      </div>
    </Link>
  );
};

Blog.propTypes = {};

export default Blog;
