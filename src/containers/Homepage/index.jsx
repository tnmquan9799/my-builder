import { Link } from 'react-router-dom';

import {ROUTES} from '../../routes/constants';

const Homepage = () => {
    return (
        <div>
            <h1>hello</h1>
            <Link to={ROUTES.BUILDER}>redirect to builder</Link>
        </div>
    )
};

export default Homepage;