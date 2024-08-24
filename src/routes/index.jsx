import { useRoutes } from "react-router-dom"
import Home from "../routes/home/Home"
import Register from "../routes/register/Register"

const RouterController = () => {
  return useRoutes([
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "/register",
        element: <Register/>,
    }
  ])
}

export default RouterController