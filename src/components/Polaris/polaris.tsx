import React from 'react';
import Image from 'next/image';
import styles from '@/styles/polaris/polaris.module.css';

function Polaris() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.Dark}>WELCOME TO </span>
        POLARIS<br />
        ECOSYSTEMS!
        <span className={styles.iconCon}>
          <Image
            src="/icons/Frame (1).png"
            alt="Logo"
            width={10}
            height={10}
            className={styles.icon}
          />
        </span>
      </h1>

      <div className={styles.cardsContainer}>
        <div className={styles.cardSmall1}>
          <div className={styles.imageTop}>
            <Image
              src="/images/webimage/pic 2.png"
              alt="Top Image"

              width={100}
              height={100}
              className={styles.top}
            />
          </div>
          <div className={styles.imageBottom}>
          <Image
   src="/images/backgroundimage/image (6).png"
   alt="Bottom Image"
   width={500}
   height={500}
   className={styles.bottom}
/>

          </div>
        </div>
        <div className={styles.cardLarge}>
          <div>
                 <h1>About Us</h1>
          <p className={styles.description}>
            At Polaris EcoSystems, we deliver a sophisticated array of integrated solutions tailored to the evolving needs of the solar industry.
          </p>
          <p className={styles.description}>
            Our commitment to excellence and sustainability drives us to provide comprehensive services that span from operational strategy to project execution, ensuring solar investments achieve their fullest potential.
          </p>
          <p className={styles.description}>
            By combining deep industry knowledge with innovative practices, we help our clients navigate the complexities of the renewable energy landscape with confidence and precision.
          </p>
          <button className={styles.learnMoreButton}>Find out more</button>
          </div>
     
        </div>
        <div className={styles.cardSmall2}>
          <h2 className={styles.cardTitle}>Why Choose Us</h2>
          <ul className={styles.bulletList}>
            <li className={styles.bulletItem}>
            <span>.</span>  <strong>Experience</strong><br/> <p>Our commitment to excellence and sustainability drives us to provide comprehensive services that span.</p>
            </li>
            <li className={styles.bulletItem}>
            <span>.</span>  <strong>Support</strong><br/> <p>Our commitment to excellence and sustainability drives us to provide comprehensive services that span.</p>
            </li>
            <li className={styles.bulletItem}>
            <span>.</span>  <strong>Industry Certified</strong><br/><p>Our commitment to excellence and sustainability drives us to provide comprehensive services that span.</p> 
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Polaris;
