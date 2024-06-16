"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export const products = [
  {
    title: "NetCode",
    link: "https://net-code-ashen.vercel.app/",
    thumbnail: "/projects/NetCode.JPG",
  },
  {
    title: "AI-Assist",
    link: "https://ai-assist.vercel.app/",
    thumbnail: "/projects/AIAssist.JPG",
  },
  {
    title: "Algo Visualizer",
    link: "https://github.com/Its-Aman-Yadav/Algo-Visualizer",
    thumbnail: "/projects/algo.jpg"
  },
  {
    title: "FindGit",
    link: "https://github.com/Its-Aman-Yadav/Find-Git",
    thumbnail: "/projects/gitfind.jpg"
  },
  {
    title: "Instafocus-Pro",
    link:"https://github.com/Its-Aman-Yadav/InstaFocus-Pro",
    thumbnail: "/projects/instafocus.jpg"
  },
  {
    title: "Hustle-Xpress",
    link: "https://hustle-xpress-its-aman-yadavs-projects.vercel.app/",
    thumbnail: "/projects/HX.JPG",
  },

  {
    title: "U-Blog",
    link: "https://www.linkedin.com/posts/itsamanyadav18_blogging-project-technicalwriting-activity-7059886596967301120-oYcE?utm_source=share&utm_medium=member_desktop",
    thumbnail: "/projects/blog.jpg",
  },
  {
    title: "To Do List",
    link: "https://www.linkedin.com/posts/itsamanyadav18_fullstack-css-html-activity-7055424199665827840-vMjk?utm_source=share&utm_medium=member_desktop",
    thumbnail: "/projects/todo.jpg",
  },
  {
    title: "NetCode",
    link: "https://net-code-ashen.vercel.app/",
    thumbnail: "/projects/NetCode.JPG",
  },
  {
    title: "AI-Assist",
    link: "https://ai-assist.vercel.app/",
    thumbnail: "/projects/AIAssist.JPG",
  },
  {
    title: "NetCode",
    link: "https://net-code-ashen.vercel.app/",
    thumbnail: "/projects/NetCode.JPG",
  },

  {
    title: "To Do List",
    link: "https://www.linkedin.com/posts/itsamanyadav18_fullstack-css-html-activity-7055424199665827840-vMjk?utm_source=share&utm_medium=member_desktop",
    thumbnail: "/projects/todo.jpg",
  },
  {
    title: "To Do List",
    link: "https://www.linkedin.com/posts/itsamanyadav18_fullstack-css-html-activity-7055424199665827840-vMjk?utm_source=share&utm_medium=member_desktop",
    thumbnail: "/projects/todo.jpg",
  }

 
];

function HomeProjects() {
  return <HeroParallax products={products} />;

}

export default HomeProjects;
