import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/polaris/polaris.module.css';

function Polaris() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Polaris EcoSystems</title>
        <meta name="description" content="Welcome to Polaris EcoSystems" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.section}>
          <div className={styles.imageContainer}>
          <div className={styles.lineContainer}>
            <div className={styles.verticalLine}></div>
          </div>
            <Image
              src="/images/webimage/pic 2.png"
              alt="Solar Panels"
              width={100}
              height={100}
              className={styles.image1}
            />
            <Image
              src="/images/webimage/pic 1.png"
              alt="Installation"
              width={100}
              height={100}
              className={styles.image2}
            />
          
             <Image
            src="/images/webimage/Clip path group (1).png"
            alt="Logo"
            width={100}
            height={100}
            className={styles.image3}
          />
          </div>

          <div className={styles.textContainer}>
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

            <p className={styles.description}>
              At Polaris EcoSystems, we deliver a sophisticated array of integrated solutions tailored to the evolving needs of the solar industry.
            
            </p>
            <p className={styles.description}>
              Our commitment to excellence and sustainability drives us to provide comprehensive services that span from operational strategy to project execution, ensuring solar investments achieve their fullest potential.
            </p>
            <p className={styles.description}>
              By combining deep industry knowledge with innovative practices, we help our clients navigate the complexities of the renewable energy landscape with confidence and precision.
            </p>
            <button className={styles.learnMoreButton}>Learn more</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Polaris;
