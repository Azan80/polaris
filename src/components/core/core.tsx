import React from 'react'
import styles from '@/styles/core/core.module.css'
import Image from 'next/image'
function Core() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}><span className={styles.our}>Our</span> core values</h1>
      <div className={styles.flexContainer}>
       
        <div className={styles.flexItem}>
        <Image
        src="/icons/semi.png" alt="Polaris Logo" width={100} height={100} className={styles.semi}/>
            <h2 className={styles.subheading}>Innovation</h2>
            <p className={styles.paragraph}>Continuously improving processes with cutting-edge technology and creative problem-solving.</p>
        </div>
        <div className={styles.flexItem}>
        <Image
        src="/icons/semi.png" alt="Polaris Logo"  width={100} height={100} className={styles.semi}/>
            <h2 className={styles.subheading}>Integrity</h2>
            <p className={styles.paragraph}>Upholding transparency, ethical practices, and trust in every project and partnership</p>
        </div>
        <div className={styles.flexItem}>
        <Image
        src="/icons/semi.png" alt="Polaris Logo"  width={100} height={100}className={styles.semi}/>
            <h2 className={styles.subheading}>Sustainability</h2>
            <p className={styles.paragraph}>Prioritizing eco-friendly solutions that minimize environmental impact and make our environment safe for future</p>

        </div>
      </div>
    </div>
  )
}

export default Core
