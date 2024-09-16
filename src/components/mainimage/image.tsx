import React from 'react'
import styles from '@/styles/mainimage/image.module.css'
import Image from 'next/image'
function image() {
  return (
    <div className={styles.container}>
    <div className={styles.imagecontainer}>
      <Image
        src='/main/ben.jpg'
        alt='Solar mill background' 
        width={1000}
        height={1000}
        className={styles.image}
      />
      <div className={styles.textOverlay}>Utility-Scale Maintenance & Repair
      <p>
      Comprehensive solutions for solar and energy storage installations
   </p>
      </div>
    </div>
    <div className={styles.description}>
      <p>Utility-scale maintenance and repair for solar or wind farms involves regular upkeep and timely fixes to ensure optimal performance and longevity of energy assets. This includes monitoring equipment, cleaning solar panels, checking inverters, replacing faulty parts, and addressing electrical or mechanical issues. Proper maintenance minimizes downtime, maximizes energy output, and extends the lifespan of the system, ensuring efficient and reliable renewable energy production.</p>
      <button>Schedule Maintenance</button>
    </div>
  </div>
  )
}

export default image
