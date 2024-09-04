// src/components/Navbar.js
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/navbar/navbar.module.css';

function Navbar() {
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
      <div className={styles.navLinks}>
        <a href="#home" className={styles.navLink}>Home</a>
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#other" className={styles.navLink}>Solution</a>
        <a href="#other" className={styles.navLinkContact}>Contact</a>

      </div>
    </div>
  );
}

export default Navbar;
