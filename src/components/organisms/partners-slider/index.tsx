import { Marquee } from "@/components/molecules";
import React from "react";
import CBN_LOGO from "@/assets/images/cbn-logo.png";
import NDIC_LOGO from "@/assets/images/ndic-logo.png";
import NIBBS from "@/assets/images/nibbs_logo.png";
import PENSION from "@/assets/images/pension-logo.png";
import FB from "@/assets/svgs/First-Bank-logo.svg";
import Image from "next/image";
import styles from "./styles.module.css";
import { Tag } from "@/components/atoms";

export default function PartnersSlider() {
  const firmsLogo = [CBN_LOGO, NDIC_LOGO, NIBBS, PENSION, FB];
  return (
    <div className={`main__container ${styles.firmsWrapper}`} id="firms">
      <div className={styles.heading}>
        <Tag
          text="Fortune 20+ Professionals Trust Demakay Inc."
          variant="standalone"
        />
      </div>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firmsLogo.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`FIRM ${index}`}
            width={70}
            height={70}
          />
        ))}
      </Marquee>
    </div>
  );
}
