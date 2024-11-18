import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import  {MainPage}  from "./pages/MainPage/MainPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import FavoritesPage from "./pages/FavoritsPage/FavoritsPage";
import CardPage from "./pages/CardPage/CardPage";
import { GlobalStyle } from "./theme/globalStyle";

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
     element : <FavoritesPage/>
    },
    {
      path: "/card/:id",
      element: <CardPage />,
    }
  ]);

  return (
    <>
    <GlobalStyle/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
