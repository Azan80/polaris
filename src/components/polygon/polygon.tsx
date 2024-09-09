import React from 'react';
import Image from 'next/image';
import { FaClipboardList, FaRegCheckCircle, FaTools, FaRecycle, FaFileInvoiceDollar, FaHome } from 'react-icons/fa';
import styles from '@/styles/polygon/polygon.module.css';

const KeyPhases = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}>Key Phases</h2>
      </div>
      <div className={styles.backgroundContainer}>
        <Image
          src="/images/backgroundimage/energy.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className={styles.backgroundImage}
        />
        <div className={styles.overlay}></div>
        <div className={styles.keyPhasesContainer}>
          <div className={styles.iconStructure}>
            <div className={styles.iconItem}>
<div className={styles.perm}><p>Assessment And Planning</p></div>
              <div className={styles.doubleCircle}>
                <FaClipboardList className={styles.icon} />
              </div>
    
            </div>
            <div className={styles.iconItem}>
              <div className={styles.perm}> <p>Permitting and compliance</p></div>

              <div className={styles.doubleCircle}>
                <FaRegCheckCircle className={styles.icon} />
              </div>

            </div>
            <div className={styles.iconItem}>
            <p>Dismantling</p>
              <div className={styles.doubleCircle}>
                <FaTools className={styles.icon} />
              </div>

            </div>
            <div className={styles.iconItem}>
              <div className={styles.doubleCircle}>
                <FaRecycle className={styles.icon} />
              </div>
              <p>Recycling and Disposal</p>
            </div>
            <div className={styles.iconItem}>
              <div className={styles.doubleCircle}>
                <FaFileInvoiceDollar  className={styles.icon} />
              </div>
       <div className={styles.fin}>       <p>Finance and Documentation</p></div>
            </div>
            <div className={styles.iconItem}>
              <div className={styles.doubleCircle}>
                <FaHome className={styles.icon} />
              </div>
              <p>Site Restoration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyPhases;