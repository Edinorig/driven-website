import React from "react";
import styles from "./InputData.module.css";

const InputData = ({
  textInput,
  typeInput,
  placeholder,
  name,
  initials,
  validation,
  onChange,
  value
}) => {
  return (
    <div className={styles.wrapperInput}>
      <h5>
        <p className={styles.inpurPimaryText}>{textInput}</p>
      </h5>
      <input
        type={typeInput}
        name={name}
        className={`${styles.inputData} ${styles[initials]} ${
          validation === false ? styles.errorMessage : ""
        }`}
        placeholder={placeholder}
        required
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default InputData;
