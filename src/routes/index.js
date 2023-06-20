import { createBrowserRouter } from "react-router-dom";

import { ROUTES } from "./constants";

import Homepage from "../containers/Homepage";
import Builder from "../containers/Builder";

const routes = createBrowserRouter([
    {
        path: ROUTES.HOMEPAGE,
        element: <Homepage />
    },
    {
        path: ROUTES.BUILDER,
        element: <Builder />
    }
]);

export default routes;