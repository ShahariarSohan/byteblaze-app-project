import React, { useEffect, useState } from "react";
import { getBookmarks } from "../Utils/LocalStorage";
import Bookmark from "../components/Bookmark";

const Bookmarks = () => {
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    setBookmarks(getBookmarks());
  }, []);
  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 container mx-auto py-10">
      {bookmarks?.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

export default Bookmarks;
