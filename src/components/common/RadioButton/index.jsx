import styles from "./index.module.css";

const RadioButton = ({ title, options, value, onChange }) => {
    return (
        <div className={styles.radioButtonWrapper}>
            <label>
                {title}:
            </label>
            <div className={styles.optionsWrapper}>
                {options?.map((item) => (
                    <div key={item?.id} className={styles.option}>
                        <input defaultChecked={value === item?.value} type="radio" id={item?.value} value={item?.value} name={title} onClick={() => onChange(item?.value)} />
                        <p>{item?.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RadioButton;