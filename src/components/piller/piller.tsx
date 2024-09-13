import React from 'react'
import styles from '@/styles/piller/piller.module.css'
import Image from 'next/image'
function piller() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
<h1><span>Our 3</span> core pillars</h1>
      </div>
      <div className={styles.bgimg1}><Image
          src='/work/1.png'
          alt='Solar mill background' 
          width={100}
          height={100}
          className={styles.image}
        /></div>
      
      <div className={styles.title2}>
      <h1>Robust project <span>planning</span></h1>
      </div>
      <div className={styles.description}>
        <p>Robust project planning ensures clear goals, resource allocation, and risk management to keep projects on track and aligned with objectives. It involves defining tasks, setting timelines, and maintaining flexibility to adapt to changing needs.</p>
      </div>
      <div className={styles.bgimg2}><Image
      src='/work/cal.png'
      alt='Solar mill background'
      width={500}
      height={500}
      className={styles.image2}
      /></div>
      <div className={styles.bgimg3}><Image
      src='/work/coin.png'
      alt='Solar mill background'
      width={500}
      height={500}
      className={styles.image3}
      /></div>
      <div className={styles.title3}>
        <h1>Comprehensive <span>financial analysis</span></h1>
      </div>
      <div className={styles.description2}>
        <p>Our company provides comprehensive financial analysis services to help businesses assess their financial health through detailed evaluations of profitability, liquidity, and long-term stability</p>
      </div>
      <div className={styles.bgimg4}><Image
      src='/work/2.png'
      alt='Solar mill background'
      width={500}
      height={500}
      className={styles.image4}
      /></div>
      <div className={styles.title4}>

     <h1>Cutting-edge <span>technology solutions</span></h1>

      </div>
      <div className={styles.description3}>
      Our company delivers cutting-edge technology solutions tailored to meet your unique business needs, utilizing the latest innovations in software, cloud computing, and automation. We drive digital transformation, enhancing operational efficiency and helping you stay ahead in a competitive landscape.
      </div>
      <div className={styles.bgimg5}><Image
      src='/work/3.png'
      alt='Solar mill background'
      width={500}
      height={500}
      className={styles.image5}
      /></div>
      <div className={styles.bgimg6}><Image
      src='/work/proton.png'
      alt='Solar mill background'
      width={500}
      height={500}
      className={styles.image6}
      /></div>
    
    </div>
  )
}

export default piller
