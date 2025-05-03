import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

function About() {
  const anim = useRef([]);

  useEffect(() => {
    anim.current.forEach((el) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%", 
              end: "top 40%", 
              scrub: true, // Scroll ke sath animation sync ho jayegi
            },
          }
        );
      }
    });
  }, []);
  

  return (
    <div className="my-16 px-4">
      {/* Heading */}
      <div ref={(el) => (anim.current[0] = el)} className="text-center px-4">
        <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words">
          I Know That{" "}
          <span className="text-purple-500 mx-1 sm:mx-2">Good Design</span>
        </p>
        <p className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl break-words mb-10 sm:mb-16 md:mb-20">
          Means <span className="text-purple-500 ml-1 sm:ml-2">Good Business</span>
        </p>
      </div>

      {/* Skills Section */}
      <div className="w-full flex flex-wrap justify-center gap-8 text-white">
        {[
          {
            src: "/assets/bloackchin.jpg",
            pra: "I am a blockchain developer and know very well how blockchain is created and works",
            alter: "Blockchain Developer",
            heading: "Blockchain Developer",
          },
          {
            src: "/assets/front.png",
            pra: "I am a frontend developer with a passion for building beautiful and functional websites",
            alter: "Frontend Developer",
            heading: "Frontend Developer",
          },
          {
            src: "/assets/backend.png",
            alter: "Backend Developer",
            pra: "I am a backend developer with a passion for building and managing beautiful websites",
            heading: "Backend Developer",
          },
        ].map(({ pra, src, alter, heading }, i) => (
          <div
            key={i}
            ref={(el) => (anim.current[i + 1] = el)}
            className="h-[300px] w-64 max-w-sm border border-white shadow-lg rounded-2xl text-white hover:scale-105 duration-700"
          >
            <img className="object-cover rounded-2xl h-[170px] w-full" src={src} alt={alter} />
            <p className="font-bold m-2">{heading}</p>
            <p className="m-2">{pra}</p>
          </div>
        ))}
      </div>

      {/* About Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center my-32 space-y-8 lg:space-y-0 lg:space-x-8 w-full px-4">
        <div ref={(el) => (anim.current[4] = el)}  className="flex justify-center items-center">
          <div className="h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] rounded-full border-2 border-white shadow-lg flex justify-center items-center">
            <img src="/assets/devender.jpg" alt="" className="h-full object-cover w-full rounded-full -rotate-3" />
          </div>
        </div>
        <div className="flex flex-col items-center lg:items-start space-y-4 p-6 text-center lg:text-left">
          <p ref={(el) => (anim.current[5] = el)} className="text-xl font-mono border-b pb-5">About me</p>
          <p ref={(el) => (anim.current[6] = el)} className="text-4xl font-extralight">
            Who is <span className="text-purple-600 font-bold">Devendra Singh?</span>
          </p>
          <p ref={(el) => (anim.current[7] = el)} className="text-xl font-extralight max-w-lg">
          At the heart of my work lies a clear vision: build modern, impactful, and performance-driven digital experiences. I'm Devendra Singh, a front-end developer with a strong foundation in web technologies and a growing command over full-stack development. I specialize in crafting responsive websites and user interfaces using HTML, CSS, JavaScript, React.js, Tailwind CSS, and PHP. With a passion for clean code and seamless functionality, I focus on delivering solutions that combine aesthetics with efficiency. My goal is to help businesses and individuals establish a strong digital presence using the latest tools and technologies. Let’s build something exceptional together.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6">
            <div ref={(el) => (anim.current[8] = el)} className="text-center">
              <p className="font-bold text-4xl text-purple-600">365+</p>
              <p className="font-extralight text-2xl text-gray-400">Days Experience</p>
            </div>
            <div ref={(el) => (anim.current[9] = el)} className="text-center">
              <p className="font-bold text-4xl text-purple-600">3+</p>
              <p className="font-extralight text-2xl text-gray-400">Projects Completed</p>
            </div>
            {/* <div ref={(el) => (anim.current[10] = el)} className="text-center">
              <p className="font-bold text-4xl text-purple-600">2+</p>
              <p className="font-extralight text-2xl text-gray-400">Companies Served</p>
            </div> */}
          </div>

          {/* Button */}
          <button
            ref={(el) => (anim.current[11] = el)}
            className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-bold mt-6 shadow-lg transition-all duration-500 ease-in-out transform hover:scale-110 hover:bg-purple-700 hover:shadow-purple-500/50"
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
