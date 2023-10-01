import { motion } from "framer-motion";

import { styles } from "../styles";
import {  StarsCanvas } from "./canvas";
import dp from "../assets/dp.jpeg";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
     
         <img src={dp} alt="" className="rounded-full h-32 w-32 object-cover " />

    

     
    </section>
  );
};

export default Hero;
