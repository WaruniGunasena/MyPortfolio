import React, { useRef, useState } from 'react'
import "./contact.scss"
import {motion, useInView} from "framer-motion"
import emailjs from '@emailjs/browser';

const variants = {
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1,
        },
    },
}

const Contact = () => {

    const ref = useRef();
    const formRef = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const isInView = useInView(ref, {margin:"-100px"});

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7re6m2t', 'template_ie3a6kt', formRef.current, {
        publicKey: 'Y0H8tVJE0ZVlfPsWr',
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        },
      );
  };

  return (
    <motion.div 
    ref={ref}
    className='contact' 
    variants={variants} 
    initial="initial" 
    whileInView="animate">
        <motion.div className="textContainer" variants={variants}>
            <motion.h1 variants={variants}>Let's work together</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>waruni@university.com</span>
            </motion.div>
            <motion.div className="item" variants={variants} >
                <h2>Address</h2>
                <span>Moratuwa, Sri Lanka</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>+98 71 521 2317</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.div className='phoneSvg'
            initial={{opacity:1}}
            whileInView={{opacity:0}}
            transition={{delay:3, duration:1}}
            >
                <svg width="450px" height="450px" viewBox='0 0 32.666 32.666'>
                    <motion.path
                        strokeWidth={0.2}
                        fill='none'
                        initial={{pathLength:0}}
                        animate={isInView && {pathLength:1}}
                        transition={{duration: 3}}
                        d = "M21 5.5C21 14.0604 14.0604 21 5.5 21C5.11378 21 4.73086 20.9859 4.35172 20.9581C3.91662 20.9262 3.69906 20.9103 3.50103 20.7963C3.33701 20.7019 3.18146 20.5345 3.09925 20.364C3 20.1582 3 19.9181 3 19.438V16.6207C3 16.2169 3 16.015 3.06645 15.842C3.12515 15.6891 3.22049 15.553 3.3441 15.4456C3.48403 15.324 3.67376 15.255 4.05321 15.117L7.26005 13.9509C7.70153 13.7904 7.92227 13.7101 8.1317 13.7237C8.31637 13.7357 8.49408 13.7988 8.64506 13.9058C8.81628 14.0271 8.93713 14.2285 9.17882 14.6314L10 16C12.6499 14.7999 14.7981 12.6489 16 10L14.6314 9.17882C14.2285 8.93713 14.0271 8.81628 13.9058 8.64506C13.7988 8.49408 13.7357 8.31637 13.7237 8.1317C13.7101 7.92227 13.7904 7.70153 13.9509 7.26005L13.9509 7.26005L15.117 4.05321C15.255 3.67376 15.324 3.48403 15.4456 3.3441C15.553 3.22049 15.6891 3.12515 15.842 3.06645C16.015 3 16.2169 3 16.6207 3H19.438C19.9181 3 20.1582 3 20.364 3.09925C20.5345 3.18146 20.7019 3.33701 20.7963 3.50103C20.9103 3.69907 20.9262 3.91662 20.9581 4.35173C20.9859 4.73086 21 5.11378 21 5.5Z " />
                        </svg>
            </motion.div>
                <motion.form
                ref={formRef}
                onSubmit={sendEmail}
                initial={{opacity:0}}
                 whileInView={{opacity:1}}
                transition={{delay:4, duration:1}}
                >
                    <input type='text' required placeholder='Name' name='name'/>
                    <input type='email' required placeholder='Email' name='email'/>
                    <textarea rows={8} placeholder='Message' name='message'/>
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </motion.form>
            </div>
    </motion.div>
  )
}

export default Contact