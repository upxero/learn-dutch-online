'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bannerImage from "@/public/images/banner-6.jpg";

export default function BeginnersPlusClient() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      const nextPath = encodeURIComponent("/intermediate-nederlands-plus-2");
      router.push(`/signin?next=${nextPath}`);
      return;
    }

    fetch("https://cms.learn-dutch-online.com/users/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then(() => setLoading(false))
      .catch(() => {
        localStorage.removeItem("auth_token");
        router.push(`/signin?next=/intermediate-nederlands-plus-2`);
      });
  }, []);

  if (loading) return <p>Even laden...</p>;

  const items = [
    { label: "Les 11 - Interculturele communicatie", link: "https://sites.google.com/view/int-dutch-pl-11-23-01/deel-1-discussie" },
    { label: "Les 12 - Slapen op het werk", link: "https://sites.google.com/view/int-dutch-pl-12-23-01/deel-1-discussie" },
    { label: "Les 13 - Sparen", link: "https://sites.google.com/view/int-dutch-pl-13-23-01/deel-1-discussie" },
    { label: "Les 14 - Mens en dier", link: "https://sites.google.com/view/int-dutch-pl-14-23-01/deel-1-discussie" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative h-80 w-full">
        <Image
          src={bannerImage}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center px-4 leading-tight">
            Intermediate Nederlands Plus
            <br />
            <span className="text-2xl font-normal">B1 - B2</span>
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-black mb-8">Cursusoverzicht</h2>
        <ul className="space-y-3 text-center text-black">
          {items.map((item, index) => (
            <li key={index}>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-lg hover:underline ${
                    item.label.startsWith("Sessie") ? "font-semibold" : ""
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <span
                  className={`text-lg text-black ${
                    item.label.startsWith("Sessie") ? "font-semibold" : ""
                  }`}
                >
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}