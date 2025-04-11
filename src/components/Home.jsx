import React, { useEffect, useRef } from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { IoLogoGithub } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Exprience from './Exprience.jsx';
import About from './About.jsx';
import Tools from './Tools.jsx';
import Footer from './Footer.jsx';
import Contect from './Contect.jsx';
import gsap from 'gsap';

function Home() {
  const animated = useRef([])
  const imgpopup = useRef([])

  useEffect(() => {
    gsap.fromTo(
      animated.current,

      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, delay: 3, stagger: 0.2, ease: "power2.out" }

    )
  });
  useEffect(() => {
    gsap.fromTo(
      imgpopup.current,
      { opacity: 0, scale:0.5 },
      { opacity: 1, scale:1, duration: 1.5, delay: 3, stagger: 0.2, ease: "elastic.out(1, 0.5)" }

    )
  })

  return (
    <>
      <div className='flex flex-col md:flex-row items-center justify-center min-h-screen overflow-x-hidden p-6 md:p-20 '>
        {/* Left Section */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
          <p
            ref={(el) => (animated.current[0] = el)}
            style={{
              background: "linear-gradient(90deg, rgba(152,0,241,1) 19%, rgba(113,118,233,1) 66%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              textShadow: `
                4px 4px 8px rgba(152, 0, 241, 0.5),
                -4px -4px 8px rgba(113, 118, 233, 0.5),
                -4px 4px 8px rgba(152, 0, 241, 0.5),
                4px -4px 8px rgba(113, 118, 233, 0.5),
                0px 0px 10px rgba(255, 255, 255, 0.4)
              `,
            }}
            className='text-white text-4xl sm:text-5xl md:text-6xl font-mono font-bold'
          >
            FRONTEND DEVELOPER
          </p>
          <p ref={(el) => (animated.current[1] = el)} className='my-2 text-2xl sm:text-3xl font-semibold'>Devendra Singh</p>
          <p ref={(el) => (animated.current[2] = el)} className='my-2 text-lg sm:text-xl max-w-lg'>
            I create responsive, user-friendly websites with clean code and modern designs, ensuring optimal performance and seamless user experiences.
          </p>

          {/* Social Icons */}
          <div ref={(el) => (animated.current[3] = el)} className="flex justify-center text-white gap-4 md:gap-6 mt-4">
            {[
              { path: "https://github.com/", icon: <IoLogoGithub className="hover:scale-125 duration-500" /> },
              { path: "https://www.instagram.com/devendra__singh____7773/", icon: <FaInstagram className="text-[#E1306C] hover:scale-125 duration-500" /> },
              { path: "https://www.linkedin.com/feed/", icon: <FaLinkedin className="text-[#0077B5] hover:scale-125 duration-500" /> },
            ].map(({ path, icon }, i) => (
              <Link key={i} to={path} className="text-xl md:text-3xl transition-transform">
                {icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="flex justify-center items-center w-full md:w-1/2 my-10  md:my-0">
          <div ref={imgpopup} className="h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96 rounded-full border-2 border-white shadow-[0px_0px_50px_15px_rgba(152,0,241,1)]">
            <img

              src="/assets/devender.jpg"
              alt="profile"
              className="h-full w-full rounded-full object-cover -rotate-3"
            />
          </div>
        </div>
      </div>

      {/* About and Experience Sections */}
      <About path="/about" element={<About />} />
      <Exprience path="/exprience" element={<Exprience />} />
      <Tools path="/tools" element={<Tools />} />
      <Contect path="/contect" element={<Contect />} />
      <Footer />
    </>
  );
}

export default Home;
