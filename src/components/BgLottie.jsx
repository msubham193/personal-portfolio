import React from "react";
import Lottie from "react-lottie";
import BG from "../assets/lottie/bg.json";
const BgLottieComponent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: BG,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={100} width={100}></Lottie>;
};

export default BgLottieComponent;
