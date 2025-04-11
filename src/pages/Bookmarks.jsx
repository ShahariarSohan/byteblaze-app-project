import React, { useEffect, useState } from "react";
import { getBookmarks, handleDeleteBookmarks } from "../Utils/LocalStorage";
import Bookmark from "../components/Bookmark";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    setBookmarks(getBookmarks());
  }, []);
  const handleDelete = (id) => {
    handleDeleteBookmarks(id);
    setBookmarks(getBookmarks());
  };
  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 container mx-auto py-10">
      {bookmarks?.map((bookmark) => (
        <Bookmark
          key={bookmark.id}
          bookmark={bookmark}
          handleDelete={handleDelete}
        ></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
