import React from "react";
import styles from "./styles.module.css";

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function TextArea({ label, name, ...props }: Props) {
  return (
    <div className={styles.container}>
      <label htmlFor={name}>{label}</label>
      <textarea rows={4} name={name} {...props} />
    </div>
  );
}
