import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      image: "https://www.primewebdev.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Dview%26id%3D1xttdfxQiXA3OzgaH3bqvk8tc2T-49TEZ&w=1200&q=75",
      heading: "Cafe",
      path: '',
      dec: "A modern and visually appealing cafe website built using React, Tailwind CSS, and Framer Motion. It features a beautifully animated layout to showcase menu items, interior ambiance, customer reviews, and contact information — all optimized for mobile responsiveness and user engagement.",
    },
    {
      image: "https://www.primewebdev.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Dview%26id%3D1oAeZqJQ70KYpXlEx9RajZwDVq18aepwm&w=2048&q=75",
      heading: "GYM",
      dec: "A sleek and high-energy gym landing page designed with React and Tailwind CSS, incorporating smooth Motion animations. It promotes fitness programs, trainer bios, membership plans, and workout galleries — all crafted to motivate visitors and drive sign-ups effectively.",
    },
    {
      image: "https://www.primewebdev.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Dview%26id%3D1lYOYTIX5uUIgThzdczD3O-tNI0ErT1gv&w=2048&q=75",
      heading: "Jewellery",
      dec: "An elegant and luxurious website for a jewellery brand, built with React and Tailwind CSS. It emphasizes stunning product visuals, smooth interactions, and responsive design. The layout showcases collections, details, and trust elements to enhance the brand’s premium appeal.",
    },
    {
      image: "https://www.primewebdev.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Dview%26id%3D1g7iL2Ix5ylBVcGaZn7xrDXBE3JvCIBAu&w=2048&q=75",
      heading: "Kitchen",
      dec: "A clean and modern kitchen design showcase website developed with React and GSAP. It highlights modular kitchen layouts, appliances, and premium design inspirations. The site includes smooth animations, service breakdowns, and client testimonials to attract interior design clients.",
    },
    {
      image: "https://www.primewebdev.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Dview%26id%3D1LBRe7tjHTvRtpp0dHdZIL0Rlfl-kNC7I&w=2048&q=75",
      heading: "Salon",
      dec: "A stylish and responsive salon website created with React and Tailwind CSS. It features dynamic animations, services listing, stylist profiles, and customer booking options. The design is built to attract modern clients and showcase the salon’s unique vibe and expertise.",
    },
    {
      image: "https://www.primewebdev.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fuc%3Fexport%3Dview%26id%3D1VOlp745R-kdJ_VJWwnv-xNwdEXubIxOc&w=2048&q=75",
      heading: "Dental",
      dec: "A professional and user-friendly dental clinic website developed with React, Tailwind CSS, and GSAP. It includes service descriptions, appointment forms, team bios, and animated trust elements — all designed to build credibility and make patient onboarding seamless and engaging.",
    },
  ];
  

  return (
    <section className="py-16 px-4 bg-black">
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-[#9333EA]">Recent Projects</h1>
        <p className="text-gray-500 mt-2">Explore some of my latest web creations</p>
      </div>

      <div className="grid gap-10 max-w-6xl mx-auto">
        {projects.map((item, i) => (
          <div
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            className="bg-black border-2 shadow-xl rounded-3xl overflow-hidden flex flex-col md:flex-row items-center transition duration-300 hover:scale-[1.01]"
          >
            <div className="w-full md:w-[300px] h-[200px]">
              <img
                src={item.image}
                alt={item.heading}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 flex relative flex-col w-full items-start justify-between gap-4">
              <div className='w-[80%]'>
                <h2 className="text-4xl font-semibold text-white">{item.heading}</h2>
                <p className="text-gray-600 mt-2 text-sm md:text-base">{item.dec}</p>
              </div>
              <Link to={item.path} className="bg-[#9333EA] absolute right-2 bottom-1 text-white px-5 py-2 mt-3 rounded-xl hover:bg-purple-700 transition-all duration-300 w-fit">
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
