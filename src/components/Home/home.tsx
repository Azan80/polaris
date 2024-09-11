import React from "react";
import styles from "@/styles/home/home.module.css";
import Image from "next/image";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.containerBackground}>
        <Image
          src="/images/backgroundimage/Group 2.png"
          alt="Logo"
          width={100}
          height={100}
          className={styles.backgroundImage}
        />

        <div className={styles.containerText}>
          <span className={styles.textDark}>
            YOUR WAY TO<br />
            A {" "}
            <span className={styles.textlight}>
              <span className={styles.rotatingWords}>
                <span>SUSTAINABLE</span>
                <span>GREENER</span>
                <span>CARBON-FREE</span>
                <span>FUTURE</span>
                <span>DECOMMISSIONED</span>

              </span>
            </span>
          </span>
          <br />
          <span className={styles.textDark}>FUTURE</span>

          <p className={styles.TextDescription}>
            Expert Removal, Recycling, and Restoration
            <br />
            Services for End-of-Life Solar Systems.
          </p>

          <button>Learn more</button>
        </div>

        <div className={styles.containerImage2}>
          <div className={styles.lineContainer}>
            <div className={styles.verticalLine}></div>
            <div className={styles.verticalLine}></div>
          </div>
          <Image
            src="/images/backgroundimage/Group (1).png"
            alt="Logo"
            width={100}
            height={100}
            className={styles.backgroundImage2}
          />

        </div>
      </div>
    </div>
  );
}

export default Home;
