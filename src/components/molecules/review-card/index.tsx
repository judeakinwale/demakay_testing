"use client";

import React from "react";
import styles from "./styles.module.css";
// import Image from "next/image";
import type { ReviewCardProps } from "@/types";
import { Tag } from "@/components/atoms";
import { RiDoubleQuotesL } from "react-icons/ri";
import { Avatar, AvatarIcon } from "@heroui/react";

export default function ReviewCard({
  width,
  fullName,
  organization,
  thoughts,
  position,
}: ReviewCardProps & { width?: string }) {
  return (
    <div className={styles.card} style={{ width: Number(width) ?? undefined }}>
      <RiDoubleQuotesL />
      <q>{thoughts}</q>
      <div className={styles.author}>
        {/* <Image
          src={author.image}
          alt={author.fullName}
          width={100}
          height={100}
          className={styles.image}
        /> */}
        <Avatar
          classNames={{
            base: "bg-linear-to-br from-[#f2f5f1] to-[#FF705B]",
            icon: "text-black/80",
          }}
          icon={<AvatarIcon />}
        />
        <div className={styles.authorInfo}>
          <p className={styles.fullName}>{fullName}</p>
          <Tag text={`${position}, ${organization}`} variant="child" />
        </div>
      </div>
    </div>
  );
}
