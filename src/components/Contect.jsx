import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    emailjs.send(
      'service_aak07tg',
      'template_nisi42c',
      formData,
      'm6DKcooDuabK05NXo'
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    });

    setFormData({
      name: '',
      number: '',
      email: '',
      message: '',
    });
  };

  const formRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Image Animation
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    }

    // Form Animation
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 70%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section className="Contact my-4 sm:my-20 w-full flex justify-center">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Contact Image */}
        <div className=" justify-center hidden sm:flex">
          <img ref={imageRef} className="h-80 md:h-96 w-auto opacity-0 translate-x-[-50px] object-contain " src="/assets/contact.webp" alt="Contact" />
        </div>

        {/* Contact Form */}
        <div className="flex justify-center">
          <form 
            ref={formRef} 
            onSubmit={onSubmit} 
            className="flex border p-6 rounded-lg flex-col w-full max-w-md bg-[radial-gradient(circle,_rgba(113,118,233,0.5)_23%,_rgba(152,0,241,0.5)_66%)] shadow-lg opacity-0 translate-y-10"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-500 mb-5 text-center">Contact Me</h2>

            <div className="flex flex-col space-y-3">
              <label className="text-sm md:text-base">First Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Enter First Name" 
                required 
                className="border text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" 
              />

              <label className="text-sm md:text-base">Mobile No</label>
              <input 
                type="number" 
                name="number" 
                value={formData.number} 
                onChange={handleChange} 
                placeholder="Enter Mobile No" 
                required 
                className="border text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" 
              />

              <label className="text-sm md:text-base">Email</label>
              <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Enter Email" 
                required 
                className="border text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500" 
              />

              <label className="text-sm md:text-base">Your Message</label>
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Write your messages" 
                required 
                className="border text-black p-2 rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-purple-500" 
              ></textarea>
            </div>

            <button
              type="submit"
              className="mt-4 bg-purple-500 text-white p-2 rounded-md transition-all duration-300 ease-in-out 
              hover:bg-purple-600 hover:scale-105 active:scale-95"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
