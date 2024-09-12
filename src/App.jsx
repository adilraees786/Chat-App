
import Home from "./screens/Home";
import Chat from "./screens/Chat"
import Login from "./screens/Login";
import Signup from "./screens/Signup";
// import Loading from "./screens/Loading";
import Chatlist from "./screens/Chatlist";
import NotFound from "./screens/Notfound";
import Navbar from "./components/Navbar"




import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    { path: "/navbar", element: <Navbar/>, },
    // { path: "/loading", element: <Loading/>, },
    { path: "*", element: <NotFound/>, },
    { path: "/home", element: <Home/>, },
    { path: "/chat", element: <Chat/>, },
    { path: "/login", element: <Login/>, },
    { path: "/signup", element: <Signup/>, },
    { path: "/chatlist", element: <Chatlist/>, }

  
  ]);

  return <RouterProvider router={router} />
}