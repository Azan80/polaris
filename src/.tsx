import React from "react";
import {FaRecycle} from "react-icons/fa";
import { RiReservedFill } from "react-icons/ri";
import { RiCurrencyFill } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6"; 
import { FaSeedling } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { RiPlug2Fill } from "react-icons/ri";
import Image from "next/image";
import styles from "@/styles/polygon/polygon.module.css";

const PolarisContainer = () => {
  const items = [
    { icon: <FaCircleCheck className={styles.dev} size={32} />, styles: { transform: 'rotate(75deg)' } },
    { icon: <RiPlug2Fill className={styles.dev} size={32} />, styles: { transform: 'rotate(-100deg)' } },
    { icon: <RiDeleteBinFill className={styles.dev} size={32} />, styles: { transform: 'rotate(-200deg)' } },
    { icon: <FaSeedling className={styles.dev} size={32} />, styles: { transform: 'rotate(155deg)' } },
    { icon: <RiCurrencyFill className={styles.dev} size={32} />, styles: { transform: 'rotate(105deg)' } },
    { icon: <FaRecycle className={styles.dev} size={32} />, styles: { transform: 'rotate(0deg)' } },
    { icon: <RiReservedFill className={styles.dev} size={32} />, styles: { transform: 'rotate(0deg)' } }
  ];

  const totalItems = items.length;
  const angleStep = (2 * Math.PI) / totalItems;
  const rotationOffset = Math.PI / -4.6;
  const polygonWidth = 181.02;
  const polygonHeight = 181.49;

  const gap = 15;
  const radius = (polygonWidth + gap) / (2 * Math.sin(Math.PI / totalItems));

  return (
    <div className={styles.polarisContainer}>
      <div className={styles.title}>
        <h1>HOW DO WE <span className={styles.Color}>DO THAT</span></h1>
      </div>
      <div className={styles.polarisItems}>
        <div className={styles.polarisLogo}>
          <Image
            src="/images/applogo/image_360-1.png"
            alt="Logo"
            width={100}
            height={100}
            className={styles.logoImage}
          />
        </div>
        {items.map((item, index) => {
          const angle = index * angleStep + rotationOffset;
          const left = `calc(50% + ${radius * Math.cos(angle)}px - ${polygonWidth / 2}px)`;
          const top = `calc(50% + ${radius * Math.sin(angle)}px - ${polygonHeight / 2}px)`;
          const rotation = (angle + Math.PI / 2) * (180 / Math.PI);

          return (
            <div
              key={index}
              className={styles.polarisItem}
              style={{
                left: left,
                top: top,
                transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
              }}
            >
              <div className={styles.polarisItemContent}>
                <div className={styles.iconWrapper} style={item.styles}>
                  {item.icon}
                </div>
              </div>
         
            </div>
          );
        })}
      </div>
      <div className={styles.polarisLabel}>
       <span className={styles.plan}>
        <p>Assesment And Planning</p>
       </span>
              </div>
    </div>
  );
};

export default PolarisContainer;
