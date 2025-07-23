import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import type { IconType } from "react-icons";
import { IoIosArrowRoundForward } from "react-icons/io";

interface Props {
  title: string;
  icon: IconType;
  text: string;
  url: string;
}

export default function ContactCard({ title, icon: Icon, text, url }: Props) {
  return (
    <Link className={styles.card} href={url} target="_blank">
      <div className="flex gap-5">
        <div className={styles.icon}>
          <Icon size={22} color="#332f9a" />
        </div>
        <div>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
      <IoIosArrowRoundForward size={30} />
    </Link>
  );
}
