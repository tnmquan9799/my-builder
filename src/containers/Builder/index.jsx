import { useSelector } from 'react-redux';

import styles from './index.module.css';

const Builder = () => {
    const selectedTemplate = useSelector((state) => state?.commonReducer?.selectedTemplate);

    console.log("======== selectedTemplate", selectedTemplate);

    return (
        <div className={styles.builderWrapper}>
        </div>
    )
};

export default Builder;