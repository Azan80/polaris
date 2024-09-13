import React from "react";
import styles from "@/styles/home/home.module.css";
import Image from "next/image";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.containerBackground}>
        <Image
          src="/images/backgroundimage/Group 2.svg"
          alt="Logo"
          width={100}
          height={100}
          className={styles.backgroundImage}
        />

        <div className={styles.containerText}>
          <span className={styles.textDark}>
            Your Way To<br />
            a {" "}
            <span className={styles.textlight}>
              <span className={styles.rotatingWords}>
              <span>Sustainable</span>
              <span>Greener</span>
              <span>Carbon-Free</span>
              <span>Future</span>
              <span>Decommissioned</span>


              </span>
            </span>
          </span>
          <br />
          <span className={styles.textDark}>Future</span>

          <p className={styles.TextDescription}>
            Expert Removal, Recycling, and Restoration
            <br />
            Services for End-of-Life Solar Systems.
          </p>

          <button>Learn more</button>
        </div>

        <div className={styles.containerImage2}>
          
          <Image
            src="/images/backgroundimage/real.png"
            alt="Logo"
            width={500}
            height={500}
            className={styles.backgroundImage2}
          />
           <div className={styles.box1}>
           <Image
            src="/icons/project1.png"
            alt="Logo"
            width={100}
            height={100}
            className={styles.project1}
           />
           <h6>Planning</h6>
           <p>Strategic<br/> planning</p>
           </div>
           <div className={styles.box2}>
           <Image
            src="/icons/image (1).png"
            alt="Logo"
            width={100}
            height={100}
            className={styles.project2}
           />
           <h6>Removel</h6>
           <p>Safe and<br/> seamless<br/>removal</p>
           </div>
           <div className={styles.box3}>
           <Image
            src="/icons/icon3.png"
            alt="Logo"
            width={100}
            height={100}
            className={styles.project3}
           />
           <h6>Restoration</h6>
           <p>Transforming<br/> waste into<br/> resources</p>
           </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
