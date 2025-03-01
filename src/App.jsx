import { createBrowserRouter, RouterProvider } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { NotFound } from "./components/not-found";
import { Users } from "./pages/users";
import { UserDetails } from "./pages/user-details";
import { ErrorPage } from "./components/error-page"
import { Search } from "./pages/search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "user/:id",
        element: <UserDetails />,
      },
      {
        path: "search",
        element: <Search />,
      },
    
    ],
  },
]);

function AppRouter() {
  return (
    <RouterProvider router = {router}/>
  )
}

export default AppRouter
