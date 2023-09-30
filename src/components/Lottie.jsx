import React from "react";
import Lottie from "react-lottie";
import Hii from "../assets/lottie/hii.json";
const LottieComponent = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Hii,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={200} width={200}></Lottie>;
};

export default LottieComponent;
