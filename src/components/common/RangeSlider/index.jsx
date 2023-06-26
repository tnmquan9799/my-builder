import styles from './index.module.css';

const RangeSlider = ({ value, onChange }) => {

    return (
        <div className={styles.rangeSliderWrapper}>
            <label htmlFor="value">
                Content width:
            </label>
            <input type='range' min="0" max="100" defaultValue={value} onChange={(e) => onChange(e?.target?.value)} />
        </div>
    )
}

export default RangeSlider;