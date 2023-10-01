import { motion } from "framer-motion";

import { styles } from "../styles";
import {  StarsCanvas } from "./canvas";
import dp from "../assets/dp.jpeg";


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div
        className={`absolute inset-0 top-0  max-w-7xl mx-auto ${styles.paddingX} flex flex-col items-center   justify-center gap-5 transition-all duration-300 ease-in-out`}
      >
         <img src={dp} alt="" className="rounded-full h-32 w-32 object-cover " />

        <div className=" text-center mb-5">
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm <span className="text-[#915EFF]">Subham</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Full stack web developer & <br className="sm:block hidden" />
            Artificial Inteligence Enthusiast
          </p>
        </div>
      </div>

      <StarsCanvas />

      
    </section>
  );
};

export default Hero;
