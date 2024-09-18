import React from 'react';
import styles from '@/styles/core/core.module.css';
import Image from 'next/image';

function Core() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        <span className={styles.our}>Our</span> core values
      </h1>
      <div className={styles.flexContainer}>
        {['Innovation', 'Integrity', 'Sustainability'].map((value, index) => (
          <div key={index} className={styles.flexItem}>
            <div className={styles.imageWrapper}>
              <Image
                src="/icons/semi.png"
                alt="Polaris Logo"
                width={100}
                height={100}
                className={styles.semi}
              />
            </div>
            <h2 className={styles.subheading}>{value}</h2>
            <p className={styles.paragraph}>
              {index === 0 && 'Continuously improving processes with cutting-edge technology and creative problem-solving.'}
              {index === 1 && 'Upholding transparency, ethical practices, and trust in every project and partnership'}
              {index === 2 && 'Prioritizing eco-friendly solutions that minimize environmental impact and make our environment safe for future'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Core;
