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

export default function CorporateTestimonials() {
  const [index, setIndex] = useState(0);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleTestimonials = () => {
    if (isMobile) return [testimonials[index]];
    return [testimonials[index], testimonials[(index + 1) % testimonials.length], testimonials[(index + 2) % testimonials.length]];
  };

  return (
    <section className="bg-white mt-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-20">

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className={`grid gap-8 ${isMobile ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"}`}
          >
            {getVisibleTestimonials().map((t, i) => (
              <div key={i} className="rounded-xl bg-slate-100 p-6 shadow-xl text-center">
                <div className="mb-4">
                  <div className="text-xl font-bold text-gray-700">{t.name}</div>
                  <div className="text-sm text-blue-500">{t.role}</div>
                </div>
                <p className="text-gray-800 text-base mb-3 italic">“{t.text}”</p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center mt-8">
          <a
            href="https://g.page/r/CVM0jtnTUo1LEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md transition"
          >
            Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
