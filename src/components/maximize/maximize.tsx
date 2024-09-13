import Image from 'next/image';
import styles from '@/styles/maximize/maximize.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.imageGrid}>
          <div className={styles.imageWrapper}>
            <Image
              src="/image1.jpg" // Replace with the actual image path
              alt="Solar Panel"
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/image2.jpg" // Replace with the actual image path
              alt="Solar Panel"
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/image3.jpg" // Replace with the actual image path
              alt="Wind Turbine"
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/image4.jpg" // Replace with the actual image path
              alt="Worker at Solar Farm"
              width={300}
              height={200}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.textContent}>
          <h1 className={styles.heading}>
            Maximize the value and sustainability of your 
            <span className={styles.highlight}> renewable energy investments.</span>
          </h1>
          <p className={styles.description}>
            Polaris EcoSystems is a full lifecycle solar and energy storage company, 
            specializing in operations, maintenance, and decommissioning of utility-scale systems. 
            Our approach is built on three core pillars: robust project planning, comprehensive financial 
            analysis, and cutting-edge technology solutions.
          </p>
          <p className={styles.description}>
            We understand that in the rapidly evolving renewable energy sector, efficiency and precision 
            are paramount. Our unique methodology ensures timely, efficient, and budget-conscious project 
            delivery, leveraging industry experience to create innovative solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
