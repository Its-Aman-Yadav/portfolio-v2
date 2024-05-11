"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Project Manager, GSSoC",
    description1:
      "Strategic Coordination: Lead planning efforts, aligning timelines and goals with stakeholders.",
    description2:
      "Team Leadership: Guide contributors, fostering collaboration and providing support.",
    description3:
      "Quality Assurance: Ensure documentation meets standards, iterating for improvement",
    techstack: "Github , Git",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Project Manager, GSSoC
        <br /> May 2024 - Present
      </div>
    ),
  },
  {
    title: "GDSC Lead, Google",
    description1:
      "Facilitate event organization and coordination among student leaders.",
    description2:
      "Foster an inclusive and engaged community within GDSC chapters.",
    description3:
      "Support skills development through workshops and networking opportunities",
    techstack: "",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        GDSC Lead, Google
        <br /> July 2023 - May 24
      </div>
    ),
  },
  {
    title: "Full Stack Developer, Fiverr",
    description1:
      "Completed over 6 projects at Fiverr as a freelancer",
    description2:
      "Worked ReactJS, MongoDB, Tailwind CSS",
    description3:
      "Acheived 5 star rating over 6 clients",
    techstack: "ReactJS, MongoDB, Daisy UI, Github, Vercel",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Full Stack Developer Freelancer
        <br /> Fiverr
      </div>
    ),
  },
];

function WorkEx() {
  return (
    <div className="p-10">
       <h1 className="mt-20 justify-center items-center md:mt-0 text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400" style={{textAlign: "center"}}>
  Work Experience
</h1>
      <StickyScroll content={content} />
    </div>
  );
}

export default WorkEx;
