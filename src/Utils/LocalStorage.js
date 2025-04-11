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

export { getBookmarks, storeBookmarks }