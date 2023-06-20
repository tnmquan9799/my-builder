import { Routes, Route, BrowserRouter } from "react-router-dom";

import { ROUTES } from "./constants";

import Layout from "../components/layout/Layout";
import Homepage from "../containers/Homepage";
import Builder from "../containers/Builder";

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<Homepage />} path={ROUTES.HOMEPAGE} />
            <Route element={<Builder />} path={ROUTES.BUILDER} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
};

export default AppRouter;