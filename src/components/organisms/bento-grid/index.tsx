"use client";

import React from "react";
import styles from "./styles.module.css";
import { Button, Tag } from "@/components/atoms";
import backdrop from "@/assets/images/frame-backdrop-1.png";
import Image from "next/image";
import { GiSandsOfTime } from "react-icons/gi";
import { GoShieldCheck } from "react-icons/go";
import { MdAutoGraph } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function ServicesBentoGrid() {
  const router = useRouter();
  return (
    <div className={`main__container ${styles.container}`}>
      {/* column 1 */}
      <div className={styles.col}>
        <div className={styles.row}>
          <Image
            src={backdrop}
            alt="Backdrop"
            fill
            className={styles.backdrop}
          />
          <Tag text="Our Services" />
          <h3 className={styles.title}>
            We&apos;re on The Pulse of Tax Industry Trends
          </h3>
          <Button
            text="Contact us"
            variant="primary"
            onClick={() => router.push("/contact")}
          />
        </div>
        <div className={`${styles.row} ${styles.flexRow}`}>
          <GiSandsOfTime color="#131243" size={50} />
          <div>
            <h4>Time Savings</h4>
            <p>
              Companies reduce financial admin work by 50% with automated
              accounting solutions.
            </p>
          </div>
        </div>
      </div>
      {/* column 2 */}
      <div className={styles.col}>
        <div className={`${styles.row} ${styles.flexRow}`}>
          <MdAutoGraph color="#131243" size={50} />
          <div>
            <h4>Increased Profitability</h4>
            <p>
              Businesses working with Demakay Inc. save up to 30% on taxes
              annually.
            </p>
          </div>
        </div>
        <div className={styles.row}></div>
      </div>
      {/* column 3 */}
      <div className={styles.col}>
        <div className={styles.row}>
          <Image
            src={backdrop}
            alt="Backdrop"
            fill
            className={styles.backdrop}
          />
          <Tag text="Our Mission" />
          <h3 className={styles.title}>
            Growth of Businesses Using Demakay Professional Accounting Services
          </h3>
          <Button
            text="View more"
            variant="primary"
            onClick={() => router.push("#services")}
          />
        </div>
        <div className={`${styles.row} ${styles.flexRow}`}>
          <GoShieldCheck color="#131243" size={50} />
          <div>
            <h4>Risk Reduction</h4>
            <p>
              82% of business failures are due to poor financial management —
              Execor helps prevent this.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
