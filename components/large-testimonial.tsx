"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Marelize Vermeulen",
    role: "Student Medical Doctor",
    text: "Learn Dutch Online is een leuk bedrijf. Veronique and her team have a phenomenal, smooth running company. The trainers are friendly and proficient, the online systems and materials are very user friendly. The 'Dutch for Afrikaans speakers' program is exactly what we needed to start this journey into learning Dutch. I would recommend this to anyone...",
  },
  {
    name: "Amarise Diedericks",
    role: "Occupational therapist",
    text: "I am thoroughly enjoying my lessons with Learn Dutch Online! In the last three months I have learnt more about the Dutch language and culture than I could dream. No app can do what my wonderful trainers Mieke and Lianne do. Not only am I feeling more comfortable with the language, I feel more equipped to navigate the Netherlands. Het allerbeste!",
  },
  {
    name: "Anthony Senter",
    role: "CEO SDWAN and SASE Solutions",
    text: "After making no progress in converting Afrikaans to Flemish for many years, I discovered Learn Dutch Online. What a difference - our wonderful tutor Jessie took me back to the language basics and now I am learning so much so quickly. My partner is also taking the lessons as a beginner and is also seeing great results. The tutors are awesome (Jessie &...",
  },
  {
    name: "Hannah Debono",
    role: "Midwife Mater Dei Hospital",
    text: "I am a maltese midwife and wish to start working as a midwife in amsterdam. To do so I need to obtain a B2 level in dutch. I started learning dutch with this online school 5 months ago and I couldn’t be happier with my choice. Veronique is so nice and not only helps me with my dutch but helps me on a personal level with all the stress the move brings...",
  },
];

export default function LargeTestimonial() {
  const [index, setIndex] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      return [testimonials[index]];
    }
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(index + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">
        <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
          <h2 className="text-4xl font-bold text-slate-800 leading-tight">
            Student Reviews
          </h2>
          <p className="text-lg font-bold text-gray-700">
            Discover how our Dutch courses have helped students around the world learn flexibly, effectively, and confidently — all from the comfort of their home.
          </p>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className={`grid gap-8 ${
              isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"
            }`}
          >
            {getVisibleTestimonials().map((t, i) => (
              <div
                key={i}
                className="rounded-xl bg-slate-100 p-6 shadow-xl text-center"
              >
                <div className="mb-4">
                  <div className="text-xl font-bold text-gray-700">{t.name}</div>
                  <div className="text-sm text-blue-500">{t.role}</div>
                </div>

                {/* Reviewtekst */}
                <p className="text-gray-800 text-base mb-3 italic">“{t.text}”</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-8">
          <a
            className="btn group w-full max-w-md bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
            href="https://www.facebook.com/tutordutchfrench/reviews" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative inline-flex items-center">
            Check out our reviews on Facebook
              <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                -&gt;
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}


