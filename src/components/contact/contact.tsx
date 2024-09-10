import React from 'react';
import Image from 'next/image';
import styles from '@/styles/contact/contact.module.css';

const ContactUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <Image
                    src="/images/backgroundimage/4k.jpg"
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                />
                <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
                <h1><span className={styles.contact}>Contact</span> Us</h1>
                <form className={styles.form}>
                    <div className={styles.inputGroup}>
                        <input type="text" placeholder="First Name" required />
                        <input type="text" placeholder="Last Name" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="email" placeholder="Email" required />
                        <input type="tel" placeholder="Phone" required />
                    </div>
                    <textarea placeholder="Message..." required></textarea>
                    <button type="submit">Contact Us</button>
                </form>
            </div>
        </div>
    );
};


export default ContactUs;
