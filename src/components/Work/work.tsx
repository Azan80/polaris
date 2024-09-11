"use client";
import { useState } from 'react';
import styles from '@/styles/work/work.module.css';

const cardContent = [
  {
    title: 'ESG Reporting',
    description: `At Polaris, we assist clients in navigating the complexities of ESG reporting with tailored solutions that align with their specific needs and objectives. Our team of experts provides comprehensive support, from identifying relevant ESG metrics to collecting and analyzing data, and preparing detailed reports.`,
    image: '/images/backgroundimage/leave.jpeg',
    overlayColor: '#25991299' 
  },
  {
    title: 'Sustainability',
    description: `At Polaris, we assist clients in navigating the complexities of ESG reporting with tailored solutions that align with their specific needs and objectives. Our team of experts provides comprehensive support, from identifying relevant ESG metrics to collecting and analyzing data, and preparing detailed reports.`,
    image: '/images/backgroundimage/cap.jpg',
    overlayColor: '#12349999' 
  },
  {
    title: 'Financial Management',
    description: `At Polaris, we assist clients in navigating the complexities of ESG reporting with tailored solutions that align with their specific needs and objectives. Our team of experts provides comprehensive support, from identifying relevant ESG metrics to collecting and analyzing data, and preparing detailed reports.`,
    image: '/images/backgroundimage/coins.jpg',
    overlayColor: '#BB700099' 
  },
  {
    title: 'Environmental Impact',
    description: `At Polaris, we assist clients in navigating the complexities of ESG reporting with tailored solutions that align with their specific needs and objectives. Our team of experts provides comprehensive support, from identifying relevant ESG metrics to collecting and analyzing data, and preparing detailed reports.`,
    image: '/images/backgroundimage/mills.jpg',
    overlayColor: '#00585899' 
  },
];

const Cards = () => {
  const [expandedCard, setExpandedCard] = useState(0);

  const handleClick = (cardIndex: number) => {
    setExpandedCard(cardIndex);
  };

  const getTitleMarginRight = (index: number) => {
    const margins = ['130px', '140px', '0px', '10px'];
    return margins[index] || '10px';
  };

  const getTitleMarginBottom = (index: number) => {
    const margins = ['220px', '200px', '350px', '350px'];
    return margins[index] || '270px';
  };

  return (
    <div className={styles.pageContainer}>
      <div className={styles.headingContainer}>
        <h1 className={styles.heading}> <span className={styles.how}>Services</span></h1>
      </div>
      <div className={styles.container}>
        <div className={styles.mainContainer}>
          <div className={styles.cardsContainer}>
            {cardContent.map((card, index) => (
              <div
                key={index}
                className={`${styles.card} ${expandedCard === index ? styles.expanded : styles.collapsed}`}
                onClick={() => handleClick(index)}
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div
                  className={styles.cardOverlay}
                  style={{
                    backgroundColor: card.overlayColor,
                  }}
                />
                <div
                  className={`${styles.cardTitleWrapper} ${expandedCard === index ? styles.titleHorizontal : styles.titleVertical}`}
                  style={{
                    marginRight: expandedCard === index ? getTitleMarginRight(index) : '0',
                    marginBottom: expandedCard === index ? '0' : getTitleMarginBottom(index),
                  }}
                >
                  <h3 className={styles.cardTitle}>{card.title}</h3>
                </div>
                <p className={`${styles.cardDescription} ${expandedCard === index ? styles.descriptionVisible : styles.descriptionHidden}`}>
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
