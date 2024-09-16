import React from 'react'
import styles from "@/styles/maincard/card.module.css"
import Image from 'next/image'
function card() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Our <span>Approach</span></h1>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <Image
            src='/main/n1.png'
            alt='Solar mill background'
            width={465}
            height={179}
            className={styles.image}
          />
          <div className={styles.cardContent}>
            <div className={styles.number}>01</div>
            <div className={styles.descriptionContainer}>
              <h2 className={styles.descriptionTitle}>Comprehensive Inspections</h2>
              <p className={styles.description}>
              We utilize AI-powered pre-inspection inventory and GIS-enhanced on-site inspections to identify issues accurately across vast areas.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src='/main/n2.png'
            alt='Solar mill background'
            width={465}
            height={179}
            className={styles.image}
          />
          <div className={styles.cardContent}>
            <div className={styles.number}>02</div>
            <div className={styles.descriptionContainer}>
              <h2 className={styles.descriptionTitle}>Data-Driven Maintenance Planning</h2>
              <p className={styles.description}>
              Our cutting-edge software analyzes inspection data to create strategic maintenance and repair plans, optimizing system performance and longevity.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src='/main/n3.png'
            alt='Solar mill background'
            width={465}
            height={179}
            className={styles.image}
          />
          <div className={styles.cardContent}>
            <div className={styles.number}>03</div>
            <div className={styles.descriptionContainer}>
              <h2 className={styles.descriptionTitle}>Skilled Execution</h2>
              <p className={styles.description}>
              Our certified and licensed crews execute maintenance and repairs with precision, adhering to the highest industry standards and safety protocols.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src='/main/n4.png'
            alt='Solar mill background'
            width={465}
            height={179}
            className={styles.image}
          />
          <div className={styles.cardContent}>
            <div className={styles.number}>04</div>
            <div className={styles.descriptionContainer}>
              <h2 className={styles.descriptionTitle}>Continuous Monitoring</h2>
              <p className={styles.description}>
              We implement advanced monitoring systems to track performance and quickly identify any emerging issues, ensuring proactive maintenance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default card
