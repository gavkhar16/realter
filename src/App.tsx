import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    { path: "/registration-page", 
      element: <RegistrationPage /> 
    },
    { path: "/main-page", 
      element: <MainPage /> 

    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
