import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "../pages/Home";
import { Vite } from "../pages/Vite";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Page not found</div>,
  },
  {
    path: "/vite",
    element: <Vite />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;
export { CustomRouter };
