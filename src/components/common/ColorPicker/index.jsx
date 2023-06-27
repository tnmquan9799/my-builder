import styles from "./index.module.css";

const ColorPicker = ({ title, color, onChange }) => {
    return (
        <div className={styles.colorPickerWrapper}>
            <label htmlFor="color">
                {title}:
            </label>
            <input type="color" defaultValue={color} onChange={(e) => onChange(e?.target?.value)} />
        </div>
    )
}

export default ColorPicker;