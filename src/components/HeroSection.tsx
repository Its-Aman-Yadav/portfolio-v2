"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Highlight } from "./ui/hero-highlight";
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className=" md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b text-white">
          Aman Yadav
        </h1>
        <div className="mt-2 w-screen h-40 relative -z-10">
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          <div className="mt-2 mb-5"></div>

          <div className="m-10 p-10">
             <p>Currently <Highlight className="text-black dark:text-white">
             leading projects at GirlScript Summer of Code,
        </Highlight> I am actively honing my management and team leadership skills, while also contributing to open-source projects with a focus on software development. My role as <Highlight className="text-black dark:text-white">
        Google Developer Student Club Lead
        </Highlight> at Google enriched my experience in organizing events and fostering the largest tech community at my college.</p> 
</div>

          <div className="-mt-4 -ml-8 z-10">
           
            <div className="mt-4">
              <Button
                 borderRadius="1.75rem"
                 className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                 onClick={() => window.open("https://drive.google.com/file/d/1HJtm6e_OeoKk-E0IcZWtI0dQ8dSW_d-j/view?usp=drive_link", "_blank")}
                 >
                  Chekout Resume
             </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
