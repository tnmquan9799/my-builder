import styles from './index.module.css';

const ColorPicker = ({ color, onChange }) => {
    return (
        <div className={styles.colorPickerWrapper}>
            <label htmlFor="color">
                Color:
            </label>
            <input type='color' defaultValue={color} onChange={(e) => onChange(e?.target?.value)} />
        </div>
    )
}

export default ColorPicker;