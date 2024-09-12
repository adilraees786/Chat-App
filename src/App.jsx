

import NotFound from "./screens/Notfound";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
// import Loading from "./screens/Loading";
import Home from "./screens/Home";
import Chatlist from "./screens/Chatlist";
import Chat from "./screens/Chat"
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    // { path: "/loading", element: <Loading/>, },
    { path: "*", element: <NotFound/>, },
    { path: "/home", element: <Home/>, },
    { path: "/chat", element: <Chat/>, },
    { path: "/chatlist", element: <Chatlist/>, },
    { path: "/login", element: <Login/>, },
    { path: "/signup", element: <Signup/>, },
  ]);

  return <RouterProvider router={router} />
}