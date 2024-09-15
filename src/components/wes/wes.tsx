import React from 'react';
import styles from '@/styles/wes/wes.module.css';
import Image from 'next/image';
import { RiGraduationCapFill } from 'react-icons/ri';
import { RiMedalFill } from 'react-icons/ri';

function Wes() {
  return (
    <div className={styles.container}>
      <div className={styles.imagecon}>
        <Image
          src="/images/backgroundimage/image (6).png"
          alt="Logo"
          width={500}
          height={500}
          className={styles.image}
        />
      </div>
   
      <div className={styles.title}>
        <h1>Wesley <span>Ladd</span></h1>
      </div>
      <div className={styles.info1}>
        <span className={styles.icon} ><RiMedalFill     size={20} /></span> <p>Chief Executive Officer</p>
      </div>
      <div className={styles.info2}>
        <span className={styles.icon}><RiGraduationCapFill  size={20}/></span> <p>MBA</p>
      </div>
      <div className={styles.textcontainer}>
      <p className={styles.description}>
      Wesley Ladd&apos;s career is marked by his leadership of consulting projects for major organizations, including Fortune 100 firms and government clients. His journey began in general business management, laying a solid foundation for his future pursuits. After earning his MBA, Wesley spent a number of years in Cybersecurity, where he honed his skills for strategic planning and resource management.
          </p>
          <p className={styles.description}>
          Passionate about building and empowering sustainable communities, Wesley has leveraged his expertise to drive strategic initiatives that promote efficient use of resources. His commitment to sustainability and community empowerment is evident in his approach to consulting, where he emphasizes strategic planning and the efficient allocation of available resources to achieve long-term goals. Wesley&apos;s leadership and vision have been instrumental in guiding our company towards a sustainable future.
          </p>
      </div>
      <div className={styles.ceocon}>
      <Image
          src="/leader/CEO.png"
          alt="Logo"
          width={500}
          height={500}
          className={styles.ceo}
        />
      </div>
    </div>
  );
}

export default Wes;
