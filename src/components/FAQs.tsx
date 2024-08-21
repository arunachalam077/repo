"use client"
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from "react";
import MinusIcon from "../assets/icons/minus.svg";
import PlusIcon from "../assets/icons/plus.svg";
const items = [
  {
    question: "Arun jacky",
    answer:
      'one of the best digital marketing companies in Chennai. I have worked with them for the past two years for my digital marketing needs and I can confidently say that they have exceeded my expectations. They have a team of experienced digital marketing professionals who understand the latest trends and technologies in the digital marketing world and provide excellent services that meet my business needs. They are always available to provide guidance and advice whenever I need it, which makes it easy to make the right decisions for my business. I would highly recommend them to anyone looking for a reliable and professional digital marketing company.',
  },
  {
    question: "Mathesh maddy",
    answer:
      "“Working with Agency has been an absolute pleasure! Their team is knowledgeable, professional, and truly passionate about their work. They’ve helped us increase our online visibility and attract more customers to our business. I highly recommend them to anyone looking for a reliable marketing partner .”",
  },
  {
    question: "Karnan Nicholas",
    answer:
      "I have used the services of Michtam Tecno Solution in Chennai for my digital marketing campaigns and they have been really great. They have implemented a comprehensive online marketing strategy that has helped me to reach my target audience and generate more leads and sales. They have provided me with detailed reports on the progress of my campaigns, which have been very helpful in monitoring my results. They have also provided me with the necessary tools and resources to ensure my campaigns are effective.",
  },
  {
    question: "john",
    answer:
      "I am really happy with the results. They have helped me with digital marketing, SEO and website design services. Their team is very knowledgeable, experienced and helpful. The quality of work they do is outstanding. They are also up to date with the latest trends in the digital marketing industry. I highly recommend them if you are looking to get ahead of your competition.",
  },
];

const AccordinationItem = ({question, answer}:{question:string, answer: string}) => {
  const[isOpen, setIsOpen] = useState(false);
  return(
   
    <div className=" py-7 border-b border-white/30" onClick={() => setIsOpen(!isOpen)}>
    <div className="flex items-center ">
      <span className="flex-1 text-lg font-bold">{question}</span>
      {isOpen ? <MinusIcon /> :<PlusIcon />}
      
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div 
        initial={{opacity: 0, height: 0, marginTop: 0}}
        animate={{opacity: 1, height: "auto" , marginTop:'16px'}}
        exit={{opacity: 0, height: 0, marginTop: 0}}
          >{answer}</motion.div>

      )}
      </AnimatePresence>
    
  </div>
  
    
  )
}

export const FAQs = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 bg-gradient-to-b from-[#5D2CA8] to-black ">
      <div className="container">
        <h2 className="text-5xl sm:text-6xl sm:w-[648px] mx-auto text-center text-white tracking-tighter">
        Love From Clients
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
         {items.map(({question, answer}) => (
            <AccordinationItem question={question} answer={answer} key={question}/>
         ))}
        </div>
      </div>
    </div>
  )
};
