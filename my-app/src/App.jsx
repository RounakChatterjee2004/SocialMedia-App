import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Profile from "./pages/profile/profile";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

function App() {
  const { user } = useContext(AuthContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={user ? <Home /> : <Register />} />
        <Route path="login" element={user ? <Home /> : <Login />} />
        <Route path="register" element={user ? <Home /> : <Register />} />
        <Route
          path="profile/:username"
          element={user ? <Profile /> : <Login />}
        />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
