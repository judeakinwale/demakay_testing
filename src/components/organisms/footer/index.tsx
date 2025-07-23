import React from "react";
import styles from "./styles.module.css";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { SiInstagram } from "react-icons/si";
import { LuArrowUpFromDot } from "react-icons/lu";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section: Logo and Tagline */}
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>Demakay Inc.</h2>
          <p className={styles.tagline}>Strategic Insights. Leading Impact.</p>
        </div>

        {/* Company Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Company</h3>
          <ul className={styles.navList}>
            <li>
              <a href="#" className={styles.navLink}>
                Services
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Case Studies
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Blog
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* About Section (part of Company) */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>&nbsp;</h3>{" "}
          {/* Placeholder for alignment */}
          <ul className={styles.navList}>
            <li>
              <a href="#" className={styles.navLink}>
                About
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Team
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Careers
              </a>
            </li>
            <li>
              <a href="#" className={styles.navLink}>
                Press Release
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Contact</h3>
          <ul className={styles.navList}>
            <Link href={"tel:+14376883745"}>P: +1 4376-883-745</Link>
            <Link href={"mailto:info@demakayconsulting.ca"}>
              E: info@demakayconsulting.ca
            </Link>
          </ul>
        </div>

        {/* Address Section */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>Address</h3>
          <ul className={styles.navList}>
            <li>Canada Office</li>
          </ul>
        </div>
      </div>

      <>
        <div className={styles.iconsWrapper}>
          <a href="#home" className={styles.socialLink}>
            <LuArrowUpFromDot />
          </a>
          {/* Social Media Icons */}
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialLink}>
              <FaLinkedinIn />
            </a>
            <a href="#" className={styles.socialLink}>
              <RiTwitterXLine />
            </a>
            <a href="#" className={styles.socialLink}>
              <FaFacebookF />
            </a>
            <a href="#" className={styles.socialLink}>
              <SiInstagram />
            </a>
          </div>
        </div>
      </>

      {/* Bottom Bar: Copyright and Legal Links */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          {new Date().getFullYear()} &copy; Demakay Inc. All rights reserved.
        </p>
        <div className={styles.legalLinks}>
          <a href="#" className={styles.legalLink}>
            Terms & Conditions
          </a>
          <a href="#" className={styles.legalLink}>
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
