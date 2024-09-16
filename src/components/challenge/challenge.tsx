import React from 'react'
import styles from '@/styles/Challenge/challenge.module.css'
import Image from 'next/image'
function challenge() {
  return (
    <div className={styles.container}>
        <div className={styles.imagecontainer}>
        <Image
          src='/inspection/person1.png'
          alt='Solar mill background' 
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
      <div  className={styles.textContent}>
          <h1 className={styles.heading}>
          The <span className={styles.highlight}>Challenge</span>
          </h1>
          <p className={styles.description}>
          As solar installations grow beyond 1 megawatt in capacity, the sheer scale of these utility-sized sites present unique challenges. Traditional inspection methods become inefficient and unreliable, making it increasingly difficult to accurately inventory assets, document issues, and confirm proper remediation.
          </p>
          <p className={styles.description}>
          Furthermore, the information collected is often not easily accessible to the maintenance team, leading to inefficiencies in the repair process. This is where our innovative approach comes in, revolutionizing the inspection process for large-scale solar installations.
          </p>
        </div> 
    </div>
  )
}

export default challenge
