import React from 'react';
import Image from 'next/image';
import styles from '@/styles/leader/leader.module.css';

const Leadership = () => {
  return (
    <div className={styles.leadershipSection}>

      <div>
      <Image
          src="/images/backgroundimage/Group 2.svg"
          alt="Logo"
          width={100}
          height={100}
          className={styles.backgroundImage}
        />
      </div>

      <h2 className={styles.heading}><span className={styles.Our}>Our</span> Leadership</h2>
      <div className={styles.cardContainer}>

        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image 
              src="/images/backgroundimage/image (6).png" 
              alt="Wesley Ladd" 
              width={120} 
              height={120} 
              className={styles.image} 
            />
          </div>
          <h3 className={styles.name}><span className={styles.wes}>Wesley</span> Ladd</h3>
          <p className={styles.title}>Chief Executive Officer</p>
          <p className={styles.description}>
            Wesley Ladds career is marked by his leadership of consulting projects for major organizations, including Fortune 100 firms and government clients.
          </p>
          <button className={styles.readMore}>Read more</button>
        </div>


        <div className={styles.card}>
          <div className={styles.imageContainer}>
            <Image 
              src="/images/webimage/Ellipse 7 (2).png" 
              alt="Saxon Metzger" 
              width={120} 
              height={120} 
              className={styles.image} 
            />
          </div>
          <h3 className={styles.name}><span className={styles.wes}>Saxon</span> Metzger</h3>
          <p className={styles.title}>President - Chief Operating Officer</p>
          <p className={styles.description}>
            Saxon Metzger brings a decade of experience in sustainability and six years in the renewables industry. As the founder of Eighth Generation Consulting.
          </p>
          <button className={styles.readMore}>Read more</button>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
