import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {ROUTES} from "../../../routes/constants";

import avatar from "../../../assets/images/avatar.jpg";

import styles from "./index.module.css";

const Header = () => {
    const navigate = useNavigate();

    const isBuilderMode = useSelector((state) => state?.commonReducer?.isBuilderMode);

    const [loading, setLoading] = useState(false);

    const handleExport = () => {
        setLoading(true);

        const templateHTML = document.querySelector("#templateDisplay").outerHTML;
        const blob = new Blob([templateHTML], {type: "text/html"});
        const url = URL.createObjectURL(blob);
        const tempEl = document.createElement("a");
        document.body.appendChild(tempEl);
        tempEl.href = url;
        tempEl.download = "your-web.html";
        setTimeout(() => {
            tempEl.click();
            setLoading(false);
        }, 2000);
        setTimeout(() => {
            URL.revokeObjectURL(url);
            tempEl.parentNode.removeChild(tempEl);
        }, 2000);
    }

    return (
        <div className={styles.headerWrapper}>
            <img className={styles.avatar} src={avatar} alt="avatar" />
            {isBuilderMode && (
                <div className={styles.buttonWrapper}>
                    <button className={styles.customButton} onClick={() => navigate(ROUTES.HOMEPAGE)}>Back to Homepage</button>
                    <button disabled={loading} className={styles.customButton} onClick={handleExport}>
                        Export
                        {loading && <div className={styles.loader} />}
                    </button>
                </div>
            )}
        </div>
    )
};

export default Header;