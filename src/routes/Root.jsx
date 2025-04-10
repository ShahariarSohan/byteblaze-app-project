import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import Bookmarks from "../pages/Bookmarks";
import BlogDetails from "../components/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("https://dev.to/api/articles"),
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(`https://dev.to/api/articles/${params.id}`),
      },
      {
        path: "/bookmarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);

export default router;
