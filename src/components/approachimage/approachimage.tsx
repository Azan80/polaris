import React from 'react';
import styles from '@/styles/containerimage/image.module.css';
import Image from 'next/image';
function approachimage() {
  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
<Image

src='/images/backgroundimage/solarmill.jpg'
width={500}
height={500}
className={styles.image}
/>
<div className={styles.textOverlay}>Our Approach</div>
      </div>
    </div>
  )
}

export default approachimage
