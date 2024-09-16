import React from 'react'
import styles from '@/styles/decobenefit/benefit.module.css'
import Image from 'next/image'
function benefit() {
  return (
    <div className={styles.container}>
    <div className={styles.textcontainer}>
      <div className={styles.title}>
      <h2>Your <span>Benefits</span></h2>
      </div>
      <ul className={styles.benefitsList}>
        <li className={styles.benefitItem}>
          <span> Compliance with R2</span> (Responsible Recycling) standards and local regulations
        </li>
        <li className={styles.benefitItem}>
          <span> Minimized environmental impact</span> through green decommissioning practices
        </li>
        <li className={styles.benefitItem}>
          <span> Maximized</span> material recovery and recycling
        </li>
        <li className={styles.benefitItem}>
          <span> Comprehensive documentation</span> for regulatory and stakeholder reporting
        </li>
        <li className={styles.benefitItem}>
          <span>Reduced liability</span> through proper handling and disposal of materials
        </li>
        <li className={styles.benefitItem}>
          <span>Expert management </span> of large-scale decommissioning projects
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

export default benefit
