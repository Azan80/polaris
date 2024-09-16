import React from 'react'
import styles from '@/styles/decocard/card.module.css'
import Image from 'next/image'
function card() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1>Our <span>Process</span></h1>
      </div>
      <div className={styles.grid}>
        <div className={styles.card}>
          <Image
            src='/deco/n1.png'
            alt='Solar mill background'
            width={465}
            height={179}
            className={styles.image}
          />
          <div className={styles.cardContent}>
            <div className={styles.number}>01</div>
            <div className={styles.descriptionContainer}>
              <h2 className={styles.descriptionTitle}>Site Assessment and Planning</h2>
              <p className={styles.description}>
              We conduct a thorough evaluation of the site and develop a tailored decommissioning plan that prioritizes environmental protection and material recovery.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src='/deco/n2.png'
            alt='Solar mill background'
            width={465}
            height={179}
            className={styles.image}
          />
          <div className={styles.cardContent}>
            <div className={styles.number}>02</div>
            <div className={styles.descriptionContainer}>
              <h2 className={styles.descriptionTitle}>Safe Dismantling</h2>
              <p className={styles.description}>
              Our certified teams carefully dismantle solar panels, mounting structures, and electrical components, ensuring safe handling of all materials.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src='/deco/n3.png'
            alt='Solar mill background'
            width={465}
            height={179}
            className={styles.image}
          />
          <div className={styles.cardContent}>
            <div className={styles.number}>03</div>
            <div className={styles.descriptionContainer}>
              <h2 className={styles.descriptionTitle}>Recycling and Responsible Disposal</h2>
              <p className={styles.description}>
              We maximize recycling of all feasible materials, including solar panels, metals, and electronics, partnering with certified recycling facilities.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src='/deco/n4.png'
            alt='Solar mill background'
            width={465}
            height={179}
            className={styles.image}
          />
          <div className={styles.cardContent}>
            <div className={styles.number}>04</div>
            <div className={styles.descriptionContainer}>
              <h2 className={styles.descriptionTitle}>Site Restoration</h2>
              <p className={styles.description}>
              We restore the site to its original condition or prepare it for future use, following all local environmental regulations.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src='/deco/n5.png'
            alt='Solar mill background'
            width={465}
            height={179}
            className={styles.image}
          />
          <div className={styles.cardContent}>
            <div className={styles.number}>05</div>
            <div className={styles.descriptionContainer}>
              <h2 className={styles.descriptionTitle}>Documentation and Certification</h2>
              <p className={styles.description}>
              We provide comprehensive reports detailing the entire decommissioning process, material disposition, and R2 compliance certification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default card
