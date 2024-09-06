import React from 'react';
import Head from 'next/head';
import styles from '@/styles/work/work.module.css';

function Work() {
  return (
    <div className={styles.container}>
      <Head>
        <title>How We Work</title>
      </Head>
      <h1 className={styles.title}><span className={styles.let}>Lets find out</span> <span className={styles.How}>How</span> <span className={styles.Work}>We Work</span></h1>
      <img src="/work/Rectangle 8.png" alt="How We Work" className={styles.image} />
      <div className={styles.listContainer}>
        <div className={styles.listColumn}>
          <div className={styles.listItem}>
            <h2><span className={styles.Dark}>1.</span><br/> ESG Reporting</h2>
            <p>At Polaris, we assist clients in navigating the complexities of ESG reporting with tailored solutions that align with their specific needs and objectives.</p>
          </div>
          <div className={styles.listItem}>
            <h2><span className={styles.Dark}>3.</span><br/> Financial Management</h2>
            <p>At Polaris, we assist clients in navigating the complexities of ESG reporting with tailored solutions that align with their specific needs and objectives.</p>
          </div>
        </div>
        <div className={styles.listColumn}>
          <div className={styles.listItem}>
            <h2><span className={styles.Dark}>2.</span><br/> Sustainability</h2>
            <p>At Polaris, we assist clients in navigating the complexities of ESG reporting with tailored solutions that align with their specific needs and objectives.</p>
          </div>
          <div className={styles.listItem}>
            <h2><span className={styles.Dark}>4.</span><br/> Environmental Impact</h2>
            <p>At Polaris, we assist clients in navigating the complexities of ESG reporting with tailored solutions that align with their specific needs and objectives.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
