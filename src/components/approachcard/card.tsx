import React from 'react'
import styles from '@/styles/approachcard/card.module.css'
import Image from 'next/image'

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Our <span>Approach</span></h1>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <Image
            src='/inspection/card1.png'
            alt='Solar mill background'
            width={465}
            height={179}
            className={styles.image}
          />
          <div className={styles.cardContent}>
            <div className={styles.number}>01</div>
            <div className={styles.descriptionContainer}>
              <h2 className={styles.descriptionTitle}>AI-Powered Pre-Inspection Inventory</h2>
              <p className={styles.description}>
                We utilize advanced computer vision AI models to automatically inventory the site before physical inspection, ensuring a comprehensive and efficient process even for vast utility-scale installations.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src='/inspection/card2.png'
            alt='Solar mill background'
            width={465}
            height={179}
            className={styles.image}
          />
          <div className={styles.cardContent}>
            <div className={styles.number}>02</div>
            <div className={styles.descriptionContainer}>
              <h2 className={styles.descriptionTitle}>GIS-Enhanced On-Site Inspection</h2>
              <p className={styles.description}>
              Our team employs GIS software and geolocation technology to precisely document any issues identified with system components during the physical inspection, maintaining accuracy across large areas.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src='/inspection/card3.png'
            alt='Solar mill background'
            width={465}
            height={179}
            className={styles.image}
          />
          <div className={styles.cardContent}>
            <div className={`${styles.number} ${styles.number3}`}>03</div>
            <div className={styles.descriptionContainer}>
              <h2 className={styles.descriptionTitle}>Cutting-Edge Reporting Software</h2>
              <p className={styles.description}>
              All collected data is integrated into our state-of-the-art software, generating detailed reports that form the basis of our remediation planning, regardless of the site&apos;s size.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src='/inspection/card4.png'
            alt='Solar mill background'
            width={465}
            height={179}
            className={styles.image}
          />
          <div className={styles.cardContent}>
            <div className={styles.number}>04</div>
            <div className={styles.descriptionContainer}>
              <h2 className={styles.descriptionTitle}>Intelligent Remediation Planning</h2>
              <p className={styles.description}>
              Based on the severity and type of issues identified, our software formulates a strategic remediation plan, prioritizing actions for optimal system performance and longevity, ensuring efficient management of large-scale sites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
