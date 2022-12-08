import { createBrowserRouter } from "react-router-dom";
import AllProjects from "../Pages/AllProjects/AllProjects";
import Home from "../Pages/Home/Home";
import Root from "../Root/Root";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/allprojects",
                element: <AllProjects />
            },
        ]
    }
])

export default routes;