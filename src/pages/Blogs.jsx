import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import Blog from "../components/Blog";

const Blogs = () => {
  const [show, setShow] = useState(false);
  const blogs = useLoaderData();

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div>
          <Link
            to={`/blogs/${blogs[0].id}`}
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <img
              src={blogs[0].cover_image}
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                {blogs[0].title}
              </h3>
              <span className="text-xs dark:text-gray-600">
                {blogs[0].readable_publish_date}
              </span>
              <p>{blogs[0].description}</p>
            </div>
          </Link>
        </div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {show
            ? blogs
                .slice(1, 30)
                ?.map((blog) => <Blog key={blog.id} blog={blog}></Blog>)
            : blogs
                .slice(1, 13)
                ?.map((blog) => <Blog key={blog.id} blog={blog}></Blog>)}
        </div>
        <div className="flex justify-center">
          {show ? (
            <button
              onClick={() => setShow(false)}
              type="button"
              className="px-6 py-3  rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600 font-bold"
            >
              Show less
            </button>
          ) : (
            <button
              onClick={() => setShow(true)}
              type="button"
              className="px-6 py-3  rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600 font-bold"
            >
              Show more...
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
