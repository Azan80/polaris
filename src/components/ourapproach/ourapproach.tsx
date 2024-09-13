import React from 'react'
import styles from "@/styles/ourapproach/ourapproach.module.css"
import Image from 'next/image'

function ourapproach() {
  return (
    <div className={styles.container}>
      <div className={styles.headingcon}>
        <h1>Our <span>Approach</span></h1>
      </div>
      <div className={styles.textcontainer}>
      <p className={styles.description}>
      At Polaris EcoSystems, we believe that successful projects are built on strong partnerships. We work closely with our clients, tailoring our services to meet their specific needs and goals. Whether it&apos;s optimizing the performance of an existing solar farm, conducting preventive maintenance to extend system lifespan, or managing the complexities of decommissioning, our team is committed to delivering excellence at every stage of the project lifecycle.
          </p>
          <p className={styles.description}>
          By choosing Polaris EcoSystems, you&apos;re not just selecting a service provider - you&apos;re partnering with a forward-thinking team dedicated to maximizing the value and sustainability of your renewable energy investments. Let us help you navigate the complexities of utility-scale solar and energy storage systems, ensuring your projects are not just successful today, but continue to deliver value well into the future
          </p>
      </div>
      <div className={styles.imagecontainer}>
      <Image
            src="/work/Rectangle 8.png"
            alt="Logo"
            width={500}
            height={500}
            className={styles.image}
           />
      </div>
    </div>
  )
}

export default ourapproach
