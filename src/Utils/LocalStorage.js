const getBookmarks = () => {
    const storedBookmarks = localStorage.getItem("bookmarks")
    if (storedBookmarks) {
        return JSON.parse(storedBookmarks)
    }
    else {
        return []
    }
}

const storeBookmarks = bookmark => {
    const bookmarks = getBookmarks()
    bookmarks.push(bookmark)
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks))
}

const handleDeleteBookmarks = id => {
    const bookmarks = getBookmarks();
    const filteredBookmarks = bookmarks.filter((bookmark) => (bookmark.id !== id))
    localStorage.setItem("bookmarks", JSON.stringify(filteredBookmarks))
}
export { getBookmarks, storeBookmarks, handleDeleteBookmarks }