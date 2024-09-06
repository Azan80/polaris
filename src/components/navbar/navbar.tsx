"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/navbar/navbar.module.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

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
        <a href="#home" className={styles.navLink}>Home</a>
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#solution" className={styles.navLink}>Solution</a>
        <a href="#contact" className={styles.navLinkContact}>Contact</a>
      </div>
    </div>
  );
}

export default Navbar;
