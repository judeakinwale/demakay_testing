"use client";

import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { BoxReveal } from "@/components/molecules";

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
  pageName: string;
  title: string;
  subText: string;
}>;

export default function PageLayout({
  children,
  pageName,
  subText,
  title,
}: RootLayoutProps) {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`main__container ${styles.contentWrapper}`}>
          <div className={styles.breadcrumbs}>
            <Link href={"/"}>Home</Link>&nbsp;&nbsp;&nbsp; &gt; &nbsp;&nbsp;
            {pageName}
          </div>
          <div className={styles.divider} />
          <div className={styles.texts}>
            <BoxReveal>
              <motion.h3
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
              >
                {title}
              </motion.h3>
            </BoxReveal>
            <motion.p
              initial={{
                opacity: 0,
                x: -10,
              }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              {subText}
            </motion.p>
          </div>
        </div>
      </div>

      {children}
    </>
  );
}
