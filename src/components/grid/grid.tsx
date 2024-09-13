import Image from 'next/image';
import styles from '@/styles/grid/grid.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.imageGrid}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/webimage/siting.png"
              alt="Solar Panel"
              width={300}
              height={200}
              className={styles.image1}
            />
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/backgroundimage/solarmill.jpg"
              alt="Solar Panel"
              width={300}
              height={200}
              className={styles.image2}
            />
          </div>
        </div>

        <div className={styles.imageGridRight}>
          <div className={styles.imageWrapperRight}>
            <Image
              src="/images/webimage/plat.png"
              alt="Wind Turbine"
              width={300}
              height={200}
              className={styles.image3}
            />
          </div>
          <div className={styles.imageWrapperRight}>
            <Image
              src="/images/backgroundimage/image (6).png"
              alt="Worker at Solar Farm"
              width={300}
              height={200}
              className={styles.image4}
            />
          </div>
        </div>

      </div>

      <div  className={styles.textContent}>
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
  );
};

export default Home;
