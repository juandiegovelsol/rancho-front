import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "../pages/Home";
import { MenuPage } from "../pages/MenuPage";
import { ReservePage } from "../pages/ReservePage";
import { EventPage } from "../pages/EventPage";
import { ContactPage } from "../pages/ContactPage";
import { Vite } from "../pages/Vite";

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
  {
    path: "/contacto",
    element: <ContactPage />,
  },
  {
    path: "/vite",
    element: <Vite />,
  },
]);

const CustomRouter = () => <RouterProvider router={router}></RouterProvider>;
export { CustomRouter };
