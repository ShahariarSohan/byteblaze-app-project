import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Content = ({ blog }) => {
  const { title, tags, cover_image, body_html, body_markdown, url } = blog;
  return (
    <div>
      <div className="dark:text-gray-800">
        <img src={cover_image} alt="" className="rounded-md" />
      </div>
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

Content.propTypes = {};

export default Content;
