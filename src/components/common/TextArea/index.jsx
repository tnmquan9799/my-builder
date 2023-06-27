import styles from "./index.module.css";

const TextArea = ({ title, value, onChange }) => {
    return (
        <div className={styles.textAreaWrapper}>
            <label htmlFor="text-area">
                {title}:
            </label>
            <textarea id="text-area" name="text-area" rows={10} cols={30} defaultValue={value} onChange={(e) => onChange(e?.target?.value)} />
        </div>
    )
}
export default TextArea;