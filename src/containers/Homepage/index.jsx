import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { actionSetSelectedTemplate } from '../../store/common'; 

import {ROUTES} from '../../routes/constants';

import { TEMPLATES } from '../../helpers/data/templates';

import { TEMPLATE_KEY } from '../../constants';

import styles from './index.module.css';

const Homepage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleClickTemplate = (item) => {
        dispatch(actionSetSelectedTemplate(item));
        
        localStorage.setItem(TEMPLATE_KEY, JSON.stringify(item));

        navigate(ROUTES.BUILDER);
    }

    return (
        <div className={styles.homepageWrapper}>
            <div className={styles.content}>
                <h1>Choose a template to start</h1>
                <div className={styles.templateWrapper}>
                    {TEMPLATES.map((item) => (
                        <div key={item?.id} className={styles.template} onClick={() => handleClickTemplate(item)}>
                            <div className={styles.photo} />
                            <div className={styles.label}>{item?.name}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default Homepage;