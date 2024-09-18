"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/navbar/navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [capabilitiesOpen, setCapabilitiesOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const toggleAboutDropdown = () => setAboutOpen(prev => !prev);
  const toggleCapabilitiesDropdown = () => setCapabilitiesOpen(prev => !prev);

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="/images/applogo/image_360-1.png"
          alt="Logo"
          width={150}
          height={40}
          className={styles.logoImage}
        />
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>

      {/* Navigation Links */}
      <div className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <div className={`${styles.navLinkWrapper} ${styles.centered}`}>
          <a href="#about" className={`${styles.navLink} ${styles.navLink1}`} onClick={toggleAboutDropdown}>About</a>
          {aboutOpen && (
            <div className={`${styles.dropdown} ${styles.aboutDropdown}`}>
              <a href="/leadership" className={styles.dropdownLink}>Our Leadership</a>
              <a href="/approach" className={styles.dropdownLink}>Our Approach</a>
            </div>
          )}
        </div>

        <div className={`${styles.navLinkWrapper} ${styles.centered}`}>
          <a href="#solution"className={`${styles.navLink} ${styles.navLink2}`}  onClick={toggleCapabilitiesDropdown}>Our Capabilities</a>
          {capabilitiesOpen && (
            <div className={styles.dropdown}>
              <a href="/inspection" className={styles.dropdownLink}>Site Inspection</a>
              <a href="/maintenance" className={styles.dropdownLink}>Maintenance and Repair</a>
              <a href="/decommissioning" className={styles.dropdownLink}>Decommissioning</a>
            </div>
          )}
        </div>

        <a href="#contact" className={`${styles.navLinkContact} ${styles.navLinkc}`}>Contact Us</a>
      </div>
    </div>
  );
}

export default Navbar;
