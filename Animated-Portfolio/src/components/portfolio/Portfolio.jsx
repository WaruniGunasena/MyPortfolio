import React, { useRef } from 'react'
import "./porfolio.scss"
import {motion, useScroll, useSpring, useTransform} from "framer-motion"


const items = [
    {
        id:1,
        title:"Expense Tracker",
        img:"https://images.unsplash.com/photo-1742226111230-1f7620e64851?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id:2,
        title:"CRM System",
        img:"https://images.unsplash.com/photo-1742280618932-30c572ac5f61?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        des:"Developed a full-stack application with user authentication (Login & Sign-Up), allowing users to securely manage their income and expenses. Implemented a dashboard that provides a summarized view of total income, expenses, and recent transactions, with all transactions stored securely in a database for better financial tracking."
    },
    {
        id:3,
        title:"Loan approval prediction model ",
        img:"https://images.unsplash.com/photo-1742268350468-345079a1081b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        des:"Developed a full-stack application with user authentication (Login & Sign-Up), allowing users to securely manage their income and expenses. Implemented a dashboard that provides a summarized view of total income, expenses, and recent transactions, with all transactions stored securely in a database for better financial tracking."
    },
    {
        id:4,
        title:"My Portfolio",
        img:"https://images.unsplash.com/photo-1736754074555-54b6abcb2fb4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        des:"Developed a full-stack application with user authentication (Login & Sign-Up), allowing users to securely manage their income and expenses. Implemented a dashboard that provides a summarized view of total income, expenses, and recent transactions, with all transactions stored securely in a database for better financial tracking."
    }
]

const Single = ({item}) =>{
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    return (
    <section ref={ref}>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer">
                    <img src={item.img} alt="" />
                </div>
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.des}</p>
                <button>See Demo</button>
            </motion.div>
            </div>
        </div>
    </section>
    ); 
};

const Portfolio = () => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref,
        offset: [ "end end", "start start"],
    });

    const scaleX =  useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });

  return (
    <div className='porfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div  style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id}/>
        ))}
    </div>
  );
};

export default Portfolio