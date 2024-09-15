import React from 'react';
import styles from '@/styles/saxan/saxon.module.css';
import Image from 'next/image';
import { RiGraduationCapFill } from 'react-icons/ri';
import { RiMedalFill } from 'react-icons/ri';

function Sason() {
  return (
    <div className={styles.container}>
      <div className={styles.imagecon}>
        <Image
          src="/leader/sas.png"
          alt="Logo"
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
      <div className={styles.title}>
        <h1>Saxon <span>Metzger</span></h1>
      </div>
      <div className={styles.info1}>
        <span className={styles.icon} ><RiMedalFill     size={20} /></span> <p>President - Chief Operating Officer</p>
      </div>
      <div className={styles.info2}>
        <span className={styles.icon}><RiGraduationCapFill  size={20}/></span> <p>MBA , PMP</p>
      </div>
      <div className={styles.textcontainer}>
      <p className={styles.description}>
      Prof. Saxon Metzger brings a decade of experience in sustainability and six years in the renewables industry. As the founder of Eighth Generation Consulting, he has utilized his expertise in project management and sustainability to contribute to the industry. His efforts have been recognized with the 2023 Under 30 Award.

          </p>
          <p className={styles.description}>
          In addition to his professional achievements, Prof. Metzger is also a part-time professor at Wilmington University, teaching courses on sustainable business and management. His interest in renewable energy and sustainability has made him a notable figure in the field.
          </p>
      </div>
      <div className={styles.ceocon}>
      <Image
          src="/leader/coo.png"
          alt="Logo"
          width={500}
          height={500}
          className={styles.ceo}
        />
      </div>
    </div>
  );
}

export default Sason;
