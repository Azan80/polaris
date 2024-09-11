// components/Footer.js
import React from 'react';
import Image from 'next/image';
import {  FaPhoneAlt, FaLinkedin} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { BiSolidEnvelope } from "react-icons/bi";
import { TbBrandFacebookFilled } from "react-icons/tb";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import styles from '@/styles/footer/footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footerLogo}>
                <Image src="/images/applogo/image_360-1.png" alt="Polaris Logo" width={256} height={67} />
            </div>
            <div className={styles.footerContact}>
                <h2>Contact Us</h2>
                <p><HiMiniBuildingOffice2 size={30} /> 1234 Energy Drive, Suite<br/> 500, Houston, TX 77002</p>
                <p><BiSolidEnvelope size={23} /> Polariseco@gmail.com</p>
                <p><FaPhoneAlt /> (555) 123-4567</p>
                <div className={styles.socialIcons}>
                    <a href="#"><FaLinkedin /></a>
                    <a href="#"><TbBrandFacebookFilled /></a>
                    <a href="#"><FaXTwitter /></a>
                </div>
            </div>
            <div className={styles.footerQuickLinks}>
                <h2>Quick Links</h2>
                <ul>
                <li><a href="about.html">About</a></li>
    <li><a href="#">Team</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">News</a></li>
    <li><a href="#">Careers</a></li>
    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
