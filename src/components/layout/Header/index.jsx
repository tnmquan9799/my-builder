import { useSelector } from 'react-redux';

import styles from './index.module.css';

const Header = () => {
    const isBuilderMode = useSelector((state) => state?.commonReducer?.isBuilderMode);

    return (
        <div className={styles.headerWrapper}>
            <div className={styles.fakeAvatar} />
            {isBuilderMode && (
                <button className={styles.exportButton}>Export</button>
            )}
        </div>
    )
};

export default Header;