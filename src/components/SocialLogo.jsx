import React from "react";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import github from "../assets/github.png";

const SocialLogo = () => {
  const logos = [
    {
      name: twitter,
      link: "https://twitter.com/msubham193",
    },
    {
      name: facebook,
      link: "https://www.facebook.com/msubham193",
    },
    {
      name: instagram,
      link: "https://www.instagram.com/__subham.mishra__/",
    },
    {
      name: github,
      link: "https://github.com/msubham193",
    },
  ];
  return (
    <div className="flex gap-6   ">
      {logos.map((item) => (
        <a href={item.link} className="cursor-pointer" key={item.link}>
          <img src={item.name} alt="" className="h-8 w-8 cursor-pointer" />
        </a>
      ))}
    </div>
  );
};

export default SocialLogo;
