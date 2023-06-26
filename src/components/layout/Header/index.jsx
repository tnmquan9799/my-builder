import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import {ROUTES} from "../../../routes/constants";

import avatar from '../../../assets/images/avatar.jpg';

import styles from './index.module.css';

const Header = () => {
    const navigate = useNavigate();

    const isBuilderMode = useSelector((state) => state?.commonReducer?.isBuilderMode);

    return (
        <div className={styles.headerWrapper}>
            <img className={styles.avatar} src={avatar} alt='avatar' />
            {isBuilderMode && (
                <div className={styles.buttonWrapper}>
                    <button className={styles.customButton} onClick={() => navigate(ROUTES.HOMEPAGE)}>Back to Homepage</button>
                    <button className={styles.customButton}>Export</button>
                </div>
            )}
        </div>
    )
};

export default Header;