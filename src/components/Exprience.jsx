import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RiGraduationCapFill } from "react-icons/ri";
import { LuPencilLine } from "react-icons/lu";

gsap.registerPlugin(ScrollTrigger);

const ExperienceCard = ({ icon: Icon, title, data, animRef }) => (
  <div ref={animRef} className="w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-lg rounded-xl p-6 border border-gray-300 bg-[radial-gradient(circle,_rgba(113,118,233,0.5)_23%,_rgba(152,0,241,0.5)_66%)] shadow-lg flex flex-col items-center text-center opacity-0 translate-y-10">
    <div className='flex flex-col items-center justify-center w-full'>
      <Icon className='text-3xl sm:text-4xl md:text-5xl' />
      <p className='text-xl sm:text-2xl md:text-3xl font-bold mx-3 sm:mx-4'>{title}</p>
    </div>
    <div className='w-full bg-white border my-4'></div>
    {data.map(({ year, institution, course, percantage }, index) => (
      <div key={index} className='mb-4'>
        <p className='text-lg sm:text-xl md:text-2xl font-semibold'>{institution}</p>
        <p className='text-gray-300 text-xs sm:text-sm md:text-lg'>{course}</p>
        <p className='text-gray-300 text-xs sm:text-sm md:text-lg'>{percantage}</p>
        <p className='text-sm sm:text-md md:text-lg'>{year}</p>
      </div>
    ))}
  </div>
);

const Experience = () => {
  const educationData = [
    {
      year: "2020-21",
      institution: "Rajasthan Vidhya Mandir (Jaipur)",
      percantage: "10th – Ajmer Board, with 85%",
      course: "",
    },
    {
      year: "2022-23",
      institution: "Rajasthan Vidhya Mandir (Jaipur)",
      percantage: "12th – Ajmer Board, with 76%",
      course: "",
    },
    {
      year: "2023 to 2026",
      institution: "S.S.G. Pareek College",
      course: "Bachelor of Computer Applications (Pursuing)",
    },
  ];
  

  const workData = [
    { year: "2023 to 2026", institution: "S.S.G. Preek College", course: "Intern Web Development" },
    { year: "2024 to 2025", institution: "Freelance Projects", course: "FrontEnd Developer" },
    // { year: "2025-2027", institution: "Tech Company", course: "Software Developer" }
  ];

  const animRefs = useRef([]);
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
            end: "top 50%",
            scrub: true,
          },
        }
      );
    }

    // Cards Animation
    animRefs.current.forEach((el) => {
      if (el) {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        });
      }
    });
  }, []);

  return (
    <div className='my-20 px-4 w-full flex flex-col items-center'>
      {/* Heading Section with Animation */}
      <div ref={headingRef} className="text-center opacity-0 translate-y-10">
        <p className='font-bold text-xl sm:text-2xl md:text-3xl'>
          My <span className='text-purple-500 mx-1 sm:mx-2'>Academic</span> And
        </p>
        <p className='font-bold text-xl sm:text-2xl md:text-3xl'>
          <span className='text-purple-500 mx-1 sm:mx-2'>Professional</span> Journey
        </p>
      </div>

      {/* Cards Section */}
      <div className='mt-10 sm:mt-12 flex flex-col md:flex-row flex-wrap items-center justify-center gap-6 sm:gap-10 w-full px-2 sm:px-6'>
        <ExperienceCard icon={RiGraduationCapFill} title="Education" data={educationData} animRef={(el) => (animRefs.current[0] = el)} />
        {/* <ExperienceCard icon={LuPencilLine} title="Work & Experience" data={workData} animRef={(el) => (animRefs.current[1] = el)} /> */}
      </div>
    </div>
  );
};

export default Experience;
