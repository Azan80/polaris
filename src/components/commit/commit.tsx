import React from 'react'
import styles from '@/styles/commit/commit.module.css'
import Image from 'next/image'
function commit() {
  return (
    <div className={styles.container}>
        <div className={styles.imagecontainer}>
        <Image
          src='/deco/pic.png'
          alt='Solar mill background' 
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
      <div  className={styles.textContent}>
          <h1 className={styles.heading}>
          Our <span className={styles.highlight}>Commitment</span>
          </h1>
          <p className={styles.description}>
          We specialize in R2 compliant and fully documented decommissioning services for utility-scale solar installations. Our approach ensures environmentally friendly and green processes are used throughout the decommissioning process, maximizing material recycling and providing comprehensive reporting and certification of compliance.
          </p>
          
        </div> 
    </div>
  )
}

export default commit
