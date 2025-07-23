import React from "react";
import styles from "./styles.module.css";

interface TagProps {
  text: string;
  variant?: "child" | "standalone" | "secondary";
  fontSize?: "small" | "medium";
}

export default function Tag({
  text,
  variant = "child",
  fontSize = "small",
}: TagProps) {
  return (
    <div className={`${styles.tag} ${styles[variant]} ${styles[fontSize]}`}>
      {text}
    </div>
  );
}
