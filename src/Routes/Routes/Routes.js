import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category/Category";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import News from "../../pages/News/News/News";
import Profile from "../../pages/others/Profile/Profile";
import TermsAndConditions from "../../pages/others/TermsAndConditions/TermsAndConditions";

import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: () =>
          fetch("https://dragon-news-server-five-blond.vercel.app/news"),
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-five-blond.vercel.app/category/${params.id}`
          ),
        element: <Category></Category>,
      },
      {
        path: "/news/:id",
        loader: ({ params }) =>
          fetch(
            `https://dragon-news-server-five-blond.vercel.app/news/${params.id}`
          ),
        element: (
          <PrivateRoute>
            <News></News>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "terms",
        element: <TermsAndConditions></TermsAndConditions>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
