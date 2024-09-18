import React from 'react';
import styles from '@/styles/containerimage/image.module.css';

import Image from 'next/image';

function ApproachImage() {
  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <Image
          src='/images/backgroundimage/solarmill.jpg'
          alt='Solar mill background' 
          width={500}
          height={500}
          className={styles.image}
        />
        <div className={styles.textOverlay}>Our Approach</div>
      </div>
    </div>
  );
}

export default ApproachImage;
