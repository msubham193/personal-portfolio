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

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
