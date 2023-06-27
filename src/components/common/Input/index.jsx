import styles from './index.module.css';

const InputNumber = ({ title, value, onChange, type }) => {
    return (
        <div className={styles.inputNumberWrapper}>
            <label>
                {title}:
            </label>
            <input type={type || "text"} defaultValue={value} onChange={(e) => onChange( type === "number" ? Number(e?.target?.value) : e?.target?.value)} />
        </div>
    )
}

export default InputNumber;