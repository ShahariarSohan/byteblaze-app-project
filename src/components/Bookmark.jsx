import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdDeleteForever } from "react-icons/md";
import { handleDelete } from "../Utils/LocalStorage";

const Bookmark = ({ bookmark }) => {
  const { id, title, description, cover_image, readable_publish_date } =
    bookmark;
  return (
    <div className=" border-2 hover:border-secondary translate-2 duration-200 p-5">
      <Link
        to={`/blogs/${id}`}
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
      <div className="flex justify-center">
        <MdDeleteForever
          onClick={() => handleDelete(id)}
          className="text-4xl text-secondary"
        >
          Delete
        </MdDeleteForever>
      </div>
    </div>
  );
};

Bookmark.propTypes = {};

export default Bookmark;
