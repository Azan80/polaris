import React from 'react';
import styles from '@/styles/benefits/benefits.module.css';
import Image from 'next/image';

function Benefits() {
  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <div className={styles.title}>
        <h2>Your <span>Benefits</span></h2>
        </div>
        <ul className={styles.benefitsList}>
          <li className={styles.benefitItem}>
            <span>Increased efficiency</span> in site inspections, especially for utility-scale installations
          </li>
          <li className={styles.benefitItem}>
            <span>Higher accuracy</span> in issue identification and documentation across vast areas
          </li>
          <li className={styles.benefitItem}>
            <span>Data-driven decision making</span> for remediation of large-scale systems
          </li>
          <li className={styles.benefitItem}>
            <span>Streamlined process</span> from inspection to action plan for complex sites
          </li>
          <li className={styles.benefitItem}>
            <span>Optimized resource allocation</span> for maintenance and repairs of utility-scale installations
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
  );
}

export default Benefits;
