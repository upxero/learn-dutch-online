'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import bannerImage from "@/public/images/banner-5.jpg";

export default function BeginnersPlusClient() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("auth_token");
    if (!token) {
      const nextPath = encodeURIComponent("/intermediate-dutch-plus-1");
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
        router.push(`/signin?next=/intermediate-dutch-plus-1`);
      });
  }, []);

  if (loading) return <p>Even laden...</p>;

  const items = [
    { label: "Les 1 - Verkopen", link: "https://sites.google.com/view/int-dutch-pl-1-23-01/deel-1-spreken" },
    { label: "Les 2 - Vergaderen", link: "https://sites.google.com/view/int-dutch-pl-2-23-01/deel-1-discussie" },
    { label: "Les 3 - Media", link: "https://sites.google.com/view/int-dutch-pl-3-23-01/deel-1-discussie" },
    { label: "Les 4 - Mobiliteit", link: "https://sites.google.com/view/int-dutch-pl-04-23-01/deel-1-discussie" },
    { label: "Les 5 - Lichaamstaal", link: "https://sites.google.com/view/int-dutch-pl-5-23-01/deel-1-discussie" },
    { label: "Les 6 - Mens en techniek", link: "https://sites.google.com/view/int-dutch-pl-6-23-01/deel-1-discussie" },
    { label: "Les 7 - Sfeer op het werk", link: "https://sites.google.com/view/int-dutch-pl-7-23-01/deel-1-discussie" },
    { label: "Les 8 - Burn out", link: "https://sites.google.com/view/int-dutch-pl-8-23-01/deel-1-discussie" },
    { label: "Les 9 - Etiquette op het werk", link: "https://sites.google.com/view/int-dutch-pl-9-23-01/deel-1-discussie" },
    { label: "Les 10 - Review 1", link: "https://sites.google.com/view/int-dutch-pl-eval-1-23-01/deel-1-luisteren-en-schrijven" },
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