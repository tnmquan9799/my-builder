import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {actionSetIsBuilderMode} from "../../../store/common";

import {ROUTES} from "../../../routes/constants";

import Header from "../Header";

import styles from "./index.module.css";

const Layout = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === ROUTES.BUILDER) {
            dispatch(actionSetIsBuilderMode(true))
        } else {
            dispatch(actionSetIsBuilderMode(false))
        }
    }, [location.pathname, dispatch]);

    return (
        <div className={styles.layoutWrapper}>
            <Header />
            <main className={styles.content}>
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;