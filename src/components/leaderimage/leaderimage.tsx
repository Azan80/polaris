import React from 'react'
import styles from "@/styles/leadership/leadership.module.css"
import Image from 'next/image'
function leaderimage() {
  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <Image
          src='/leader/grow.png'
          alt='Solar mill background' 
          width={500}
          height={500}
          className={styles.image}
        />
        <div className={styles.textOverlay}>Our Leadership Team</div>
      </div>
      <div className={styles.description}>
        <p>Our leadership team is comprised of experienced industry professionals dedicated to driving innovation, operational excellence, and strategic growth. With a strong vision and commitment to empowering both employees and clients, they guide our company toward achieving long-term success and delivering impactful solutions across various sectors.</p>
      </div>
    </div>
  )
}

export default leaderimage
