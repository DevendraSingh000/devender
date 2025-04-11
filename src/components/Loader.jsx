import React, { useEffect, useRef } from 'react';
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

function Loader() {
    const introPageRef = useRef(null);
    const text = useRef([]);
    const iconsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            iconsRef.current,
            { opacity: 0, y: -50 },
            { duration: 1, opacity: 1, y: 0, stagger: 0.2, ease: "elastic.out(1, 0.4)" }
        );
    }, []);

    useEffect(() => {
        gsap.fromTo(
            text.current,
            { opacity: 0, y: -50 },
            { duration: 1, opacity: 1, y: 0, stagger: 0.2, ease: "elastic.out(1, 0.4)" }
        );
    }, []);

    return (
        <div
            ref={introPageRef}
            className='bg-black absolute top-0 left-0 h-screen w-full flex flex-col justify-center items-center p-4 text-white'
        >
            {/* Social Icons */}
            <div className="flex justify-center text-white gap-4 md:gap-6 mb-4">
                {[
                    { path: "#", icon: <IoLogoGithub className="hover:scale-125 duration-500" /> },
                    { path: "#", icon: <FaInstagram className="text-[#E1306C] hover:scale-125 duration-500" /> },
                    { path: "#", icon: <FaLinkedin className="text-[#0077B5] hover:scale-125 duration-500" /> },
                ].map(({ path, icon }, i) => (
                    <Link
                        ref={(el) => (iconsRef.current[i] = el)}
                        key={i}
                        to={path}
                        className="text-2xl md:text-3xl transition-transform"
                    >
                        {icon}
                    </Link>
                ))}
            </div>

            {/* Welcome Text */}
            <p className='text-xl md:text-2xl flex justify-center space-x-2'>
                {['Hey', ',', 'Welcome', 'To', 'My'].map((word, i) => (
                    <span key={i} ref={el => text.current[i] = el}>{word}</span>
                ))}
            </p>
            
            {/* Portfolio Heading */}
            <span className='flex justify-center flex-row gap-2 mb-4'>
                <p
                    ref={el => text.current[5] = el}
                    style={{ background: "linear-gradient(90deg, rgba(152,0,241,1) 19%, rgba(113,118,233,1) 66%)", WebkitBackgroundClip: "text", color: "transparent" }}
                    className="text-3xl md:text-4xl font-bold text-center"
                >
                    Portfolio Website
                </p>
            </span>
        </div>
    );
}

export default Loader;
