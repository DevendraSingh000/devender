import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Tools() {
  const cardRefs = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    // Heading Animation
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 70%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    }

    // Cards Animation
    cardRefs.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            delay: index * 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "top 60%",
              scrub: true,
            },
          }
        );
      }
    });
  }, []);

  const toolsData = [
    { img: "/assets/Tailwind CSS.png", name: "Tailwind CSS", desc: "CSS Framework" },
    { img: "/assets/React.png", name: "React.js", desc: "JavaScript Library" },
    { img: "/assets/Figma.png", name: "Figma", desc: "Design Tool" },
    { img: "/assets/HTML5.png", name: "HTML", desc: "Markup Language" },
    { img: "/assets/CSS3.png", name: "CSS", desc: "Styling Language" },
    { img: "/assets/JavaScript.png", name: "JavaScript", desc: "Programming Language" },
    { img: "/assets/download.png", name: "Express.js", desc: "Backend Framework" },
    { img: "/assets/MongoDB.png", name: "MongoDB", desc: "NoSQL Database" },
    { img: "/assets/Canva.png", name: "Canva", desc: "Design Tool" },
    { img: "/assets/images (1).jpeg", name: "Framer Motion", desc: "Animation Library" },
    { img: "/assets/gsap.png", name: "GSAP", desc: "Animation Library" }
  ];

  return (
    <div className='w-[90%] mx-auto my-20'>
      {/* Heading with Animation */}
      <h1 ref={headingRef} className='flex justify-center items-center my-10 text-center opacity-0 translate-y-10'>
        <span className='text-purple-500 text-3xl md:text-4xl font-semibold'>PREMIUM TOOLS</span>
      </h1>

      {/* Tools Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center'>
        {toolsData.map((tool, index) => (
          <div
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
            className='flex items-center w-full max-w-xs p-4 shadow-md rounded-lg opacity-0 translate-y-10'
          >
            <img className='h-16 w-16 m-2 object-cover' src={tool.img} alt={tool.name} />
            <div>
              <h1 className='text-2xl font-semibold'>{tool.name}</h1>
              <p className='text-gray-600'>{tool.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
