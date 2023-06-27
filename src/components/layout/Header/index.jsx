import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {ROUTES} from "../../../routes/constants";

import avatar from '../../../assets/images/avatar.jpg';

import styles from './index.module.css';

const Header = () => {
    const navigate = useNavigate();

    const isBuilderMode = useSelector((state) => state?.commonReducer?.isBuilderMode);

    const handleExport = () => {
        const templateHTML = document.querySelector("#templateDisplay").outerHTML;
        const blob = new Blob([templateHTML], {type: "text/html"});
        const url = URL.createObjectURL(blob);
        const tempEl = document.createElement("a");
        document.body.appendChild(tempEl);
        tempEl.href = url;
        tempEl.download = "your-web.html";
        tempEl.click();
        setTimeout(() => {
            URL.revokeObjectURL(url);
            tempEl.parentNode.removeChild(tempEl);
        }, 2000);
    }

    return (
        <div className={styles.headerWrapper}>
            <img className={styles.avatar} src={avatar} alt='avatar' />
            {isBuilderMode && (
                <div className={styles.buttonWrapper}>
                    <button className={styles.customButton} onClick={() => navigate(ROUTES.HOMEPAGE)}>Back to Homepage</button>
                    <button className={styles.customButton} onClick={handleExport}>Export</button>
                </div>
            )}
        </div>
    )
};

export default Header;