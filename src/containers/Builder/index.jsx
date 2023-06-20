import { Link } from 'react-router-dom';

import {ROUTES} from '../../routes/constants';

import styles from './Builder.module.css';

const Builder = () => {
    return (
        <div className={styles.builderWrapper}>
            <h1>hello</h1>
            <Link to={ROUTES.HOMEPAGE}>redirect to homepage</Link>
        </div>
    )
};

export default Builder;