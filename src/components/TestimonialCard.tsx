"use client";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Testimonials = [
  {
    quote:
    "Impressed by their ability to seamlessly integrate front-end and back-end components, resulting in a polished and functional application.",
    name: "Sarah Thompson",
  },
  {
    quote:
    "Communicative and receptive to our project requirements, delivering timely updates and addressing any concerns promptly.",
    name: "David Rodriguez",
  },
  {
    quote:
    "Their attention to detail shines through in the quality of code produced, ensuring our application is robust and scalable.",
    name: "Emily Chen",
  },
  {
    quote:
    "A true team player who actively collaborated with our in-house developers, contributing valuable insights and expertise.",
    name: "Chris Morales",
  },
  {
    quote:
    "Delivered beyond our expectations, demonstrating versatility in tackling diverse technical challenges with finesse.",
    name: " Michael Johnson",
  },
  {
    quote:
    "Reliable and professional, consistently delivering projects on schedule while maintaining a high standard of workmanship.",
    name:  "Anna Smith",
  },
];

function TestimonialCard() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        What my Clients says - 
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={Testimonials}
            direction="right"
            speed="slow"
          />
           <InfiniteMovingCards
            items={Testimonials}
            direction="left"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
