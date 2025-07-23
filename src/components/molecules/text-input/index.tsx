import React from "react";
import styles from "./styles.module.css";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function TextInput({ label, name, ...props }: Props) {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <input type="text" name={name} {...props} />
    </div>
  );
}
