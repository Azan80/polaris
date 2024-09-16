// import React from 'react';
// import styles from '@/styles/inspectionimage/image.module.css';
// import Image from 'next/image';

// function ApproachImage() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.imagecontainer}>
//         <Image
//           src='/inspection/image.webp'
//           alt='Solar mill background'
//           width={500}
//           height={500}
//           className={styles.image}
//         />
//         <div className={styles.textOverlay}>Utility-Scale Site Inspections
//         <p>
//         Innovative approach for sites ≥ 1mW
//         </p>
//         </div>
//       </div>
//       <div className={styles.description}>
//         <p>Our leadership team is comprised of experienced industry professionals dedicated to driving innovation, operational excellence, and strategic growth. With a strong vision and commitment to empowering both employees and clients, they guide our company toward achieving long-term success and delivering impactful solutions across various sectors.</p>
//       </div>
//     </div>
//   );
// }

// export default ApproachImage;





import React from 'react'
import styles from '@/styles/inspectionimage/image.module.css';
import Image from 'next/image'
function leaderimage() {
  return (
    <div className={styles.container}>
      <div className={styles.imagecontainer}>
        <Image
          src='/inspection/image.webp'
          alt='Solar mill background' 
          width={500}
          height={500}
          className={styles.image}
        />
        <div className={styles.textOverlay}>Utility-Scale Site Inspections
        <p>
        Innovative approach for sites ≥ 1mW
     </p>
        </div>
      </div>
      <div className={styles.description}>
        <p>A utility-scale solar site inspection involves evaluating the performance, safety, and condition of a large solar power facility. This process includes checking the solar panels, inverters, wiring, and supporting structures to ensure they are functioning efficiently and complying with safety and regulatory standards. Inspections help identify issues such as damage, wear, or misalignment, ensuring optimal energy production and long-term reliability.</p>
        <button>Schedule an Inspection</button>
      </div>
    </div>
  )
}

export default leaderimage


