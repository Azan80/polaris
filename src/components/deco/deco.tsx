import React from 'react';
import { PiFeather } from 'react-icons/pi';
import { TbWorld } from 'react-icons/tb';
import { FiDollarSign } from 'react-icons/fi';
import { IoMdCheckboxOutline } from 'react-icons/io';
import styles from '@/styles/deco/deco.module.css';

function Deco() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        WHY <span style={{ color: '#006fb9' }}>DECOMMISSIONING?</span>
      </h1>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <PiFeather className={styles.icon} />
          </div>
          <h2><span className={styles.Headings}>Environmental</span> Protection</h2>
          <p>
            Decommissioning allows for the recovery and recycling of valuable materials, such as silicon, glass, and metals from solar panels.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <TbWorld className={styles.icon} />
          </div>
          <h2><span className={styles.Headings}>Land</span> Reclamation</h2>
          <p>
            Decommissioning allows the land to be restored to its original condition or prepared for new uses, such as agriculture or redevelopment.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <FiDollarSign className={styles.icon} />
          </div>
          <h2><span className={styles.Headings}>Economic</span> Benefits</h2>
          <p>
            Materials recovered from decommissioned solar panels can be sold or reused, offsetting some of the costs associated with decommissioning.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.iconContainer}>
            <IoMdCheckboxOutline className={styles.icon} />
          </div>
          <h2> <span className={styles.Headings}>Compliance with</span> Regulations</h2>
          <p>
            Decommissioning regulations help companies avoid legal penalties and ensures that they meet environmental and safety standards.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Deco;
