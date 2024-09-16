import React from 'react'
import styles from '@/styles/decoimage/image.module.css'
import Image from 'next/image'
function image() {
  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <Image
          src='/deco/image.jpg'
          alt='Solar mill background' 
          width={500}
          height={500}
          className={styles.image}
        />
        <div className={styles.textOverlay}>Utility-Scale Solar Decommissioning
        <p>
        Environmentally Responsible End-of-Life Solutions
     </p>
        </div>
      </div>
      <div className={styles.description}>
        <p>Utility-scale solar decommissioning involves safely dismantling solar installations, removing equipment, recycling materials, and restoring the land. This process ensures environmental protection, regulatory compliance, and responsible waste disposal while preparing the site for future use.</p>
        <button>Request Decommissioning Service</button>
      </div>
    </div>
  )
}

export default image
