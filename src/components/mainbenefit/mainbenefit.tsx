import React from 'react'
import styles from '@/styles/mainbenefit/mainbenefit.module.css'
import Image from 'next/image'
function mainbenefit() {
  return (
    <div className={styles.container}>
    <div className={styles.textcontainer}>
      <div className={styles.title}>
      <h2>Your <span>Benefits</span></h2>
      </div>
      <ul className={styles.benefitsList}>
        <li className={styles.benefitItem}>
          <span>Access</span> to certified, qualified, licensed, and bonded crews for any project scale
        </li>
        <li className={styles.benefitItem}>
          <span>Improved system performance</span> and longevity through data-driven maintenance
        </li>
        <li className={styles.benefitItem}>
          <span>Reduced downtime </span> and increased energy production
        </li>
        <li className={styles.benefitItem}>
          <span>Scalable solutions</span> adaptable to growing installation sizes
        </li>
        <li className={styles.benefitItem}>
          <span> Cost-effective</span> maintenance strategies optimizing your ROI
        </li>
      </ul>
    </div>
    <div className={styles.imagecontainer}>
      <Image
        src='/inspection/person2.png'
        alt='Solar mill background' 
        width={500}
        height={500}
        className={styles.image}
      />
    </div>
    </div>
  )
}

export default mainbenefit
