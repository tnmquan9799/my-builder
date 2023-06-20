import { Link } from 'react-router-dom';

import {ROUTES} from '../../routes/constants';

import styles from './index.module.css';

const Homepage = () => {
    return (
        <div className={styles.homepageWrapper}>
            <h1>hello</h1>
            <Link to={ROUTES.BUILDER}>redirect to builder</Link>
        </div>
    )
};

export default Homepage;