import React from 'react';
import Image from 'next/image';
import { RiReservedFill,RiCheckboxCircleFill ,RiPlug2Fill,RiRecycleFill, RiCurrencyFill,RiSeedlingFill} from "react-icons/ri";
import styles from '@/styles/polygon/polygon.module.css';

const KeyPhases = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.headingContainer}>
        <h2 className={styles.heading}><span className={styles.key}>Key</span> <span className={styles.phases}>Phases</span></h2>
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
          <div className={styles.verticalLine}></div> {/* Vertical line added here */}
          <div className={styles.iconStructure}>
            <div className={styles.iconItem}>
              <div className={styles.perm}><p>Assessment And Planning</p></div>
              <div className={styles.doubleCircle}>
                <RiReservedFill className={styles.icon} />
              </div>
            </div>
            <div className={styles.iconItem}>
              <div className={styles.perm}><p>Permitting and compliance</p></div>
              <div className={styles.doubleCircle}>
                <RiCheckboxCircleFill className={styles.icon} />
              </div>
            </div>
            <div className={styles.iconItem}>
              <div className={styles.perm}><p>Dismantling</p></div>
              <div className={styles.doubleCircle}>
                <RiPlug2Fill className={styles.icon} />
              </div>
            </div>
            <div className={styles.iconItem}>
              <div className={styles.doubleCircle}>
                <RiRecycleFill className={styles.icon} />
              </div>
              <div className={styles.fin}><p>Recycling and Disposal</p></div>
            </div>
            <div className={styles.iconItem}>
              <div className={styles.doubleCircle}>
                <RiCurrencyFill className={styles.icon} />
              </div>
              <div className={styles.fin}><p>Finance and Documentation</p></div>
            </div>
            <div className={styles.iconItem}>
              <div className={styles.doubleCircle}>
                <RiSeedlingFill className={styles.icon} />
              </div>
              <div className={styles.fin}><p>Site Restoration</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyPhases;
