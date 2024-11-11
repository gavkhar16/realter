import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { CardPage } from "./pages/CardPage/CardPage";
import { FavoritesPage } from "./pages/FavoritsPage/FavoritsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/registration-page",
      element: <RegistrationPage />,
    },
    {
      path: "/main-page",
      element: <MainPage />,
    },
    {
      path: "/favorits-page",
      element: <FavoritesPage />,
    },
    {
      path: "/card-page",
      element: <CardPage/>
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
