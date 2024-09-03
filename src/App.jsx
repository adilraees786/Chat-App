import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import { Link } from "react-router-dom";
import Signup from "./screens/Signup"
import Login from "./screens/login"
import Home from "./screens/home"


const router = createBrowserRouter([
  {path: "/home", element: <Home/>},
  { path: "/signup", element: <Signup/> },
  {path: "/login", element: <Login/>},

]);

function App() {
  
  return ( <RouterProvider router={router}>

  </RouterProvider> )
}




export default App;