import React from 'react'
import styles from "@/styles/expertise/expertise.module.css"
import Image from 'next/image'
function expertise() {
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
          Our <span className={styles.highlight}>Expertise</span>
          </h1>
          <p className={styles.description}>
          We specialize in utility-scale maintenance and operations for solar and energy storage installations. Our approach combines cutting-edge technology with a highly skilled workforce to ensure optimal performance and longevity of your systems. We pride ourselves on providing certified, qualified, licensed, and bonded crews capable of handling projects at any required scale.
          </p>
          
        </div> 
    </div>
  )
}

export default expertise
