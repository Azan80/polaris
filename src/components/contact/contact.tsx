"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/contact/contact.module.css';
import toast, { Toaster } from 'react-hot-toast';

interface ContactUsProps {
  homePage?: boolean;
}

const ContactUs: React.FC<ContactUsProps> = ({ homePage = false }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loadingToast = toast.loading('Sending...');
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        toast.success('Email sent successfully');
      } else {
        toast.error(result.error || 'Failed to send email');
      }
    } catch (error) {
      toast.error('Failed to send email');
    } finally {
      toast.dismiss(loadingToast); // Dismiss the loading toast
    }
  };
  

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
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className={homePage ? styles.homePageButton : styles.defaultButton}
          >
            Contact Us
          </button>
        </form>
      </div>
      <Toaster position="top-right" /> 
    </div>
  );
};

export default ContactUs;
