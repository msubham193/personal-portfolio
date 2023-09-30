import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  medal,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  leetcode,
  airbnb,
  thoughts,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "AI",
    icon: mobile,
  },
  {
    title: "Problem Solver",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Winner in Coding Competition",

    icon: medal,
    iconBg: "#383E56",
    date: "Sept 2023 - Sept 2023",
    points: [
      "Got first Position in Inter College Coding Competition ",
      "Solved 3 out of 5 problems on HackerRank in 60 minutes.",
    ],
  },
  {
    title: "Runner's Up in Web developement Competition",

    icon: medal,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Mar 2023",
    points: [
      "Got 2nd position in Inter college Web Development Competition",
      "Developed CarDekho Clone Website using HTML , CSS & Javscript",
    ],
  },
  {
    title: "Problems Solver solved almost 500+ algorithimic problems",

    icon: leetcode,
    iconBg: "#383E56",
    date: "Jan 2021 - Present",
    points: [
      "Solved Data Structures and algorithms problems on Various platforms like LeetCode , Geeks for Geeks and Coding Ninjas",
    ],
  },
];

const projects = [
  {
    name: "Blog App",
    description:
      "Web-based platform that allows Users to create blogs and read blogs in daily basis, user can like and give their feed back. also a user can follow another user.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "text-amber-600",
      },
    ],
    image:
      "https://camo.githubusercontent.com/75f304fb0f31baf93f964def099af8e25f86186efa6ed93cecc5680b1950bfd4/68747470733a2f2f666972656261736573746f726167652e676f6f676c65617069732e636f6d2f76302f622f636f6d6d756e6974792d34383663372e61707073706f742e636f6d2f6f2f53637265656e73686f74253230323032332d30372d32372532306174253230322e31382e3532253230504d2d6d696e2e706e673f616c743d6d6564696126746f6b656e3d30386632623334632d353138652d346161632d623032342d373961653734386434366336",
    source_code_link: "https://github.com/msubham193/Blog-Nextjs",
  },
  {
    name: "Thoughts",
    description:
      "Web application that enables users to Share their Thoughts like twitter & user can create thoughts and can like and give feedback on other's thoughts",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "text-amber-600",
      },
    ],
    image: thoughts,
    source_code_link: "https://github.com/msubham193/thoughts-web-application",
  },
  {
    name: " Hotel Booking(airbnb)",
    description:
      "A comprehensive Hotel booking platform that allows users to book hotels, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "text-amber-600",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: airbnb,
    source_code_link: "https://github.com/msubham193/airbnb-next-js",
  },
];

export { services, technologies, experiences, projects };
