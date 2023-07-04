import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "../pages/Home";
import { MenuPage } from "../pages/MenuPage";
import { ReservePage } from "../pages/ReservePage";
import { EventPage } from "../pages/EventPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>Page not found</div>,
  },
  {
    path: "/menu",
    element: <MenuPage />,
  },
  {
    path: "/reservas",
    element: <ReservePage />,
  },
  {
    path: "/eventos",
    element: <EventPage />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;
export { CustomRouter };
