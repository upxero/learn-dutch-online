"use client";

import React, { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";

interface FormData {
  name: string;
  email: string;
  currentLevel: string;
  course: string;
  motivation: string;
  motherTongue: string;
  otherLanguages: string;
  referral: string;
}

const CourseSignupForm: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    currentLevel: "",
    course: "",
    motivation: "",
    motherTongue: "",
    otherLanguages: "",
    referral: "",
  });

  const [token, setToken] = useState<string | null>(null);

  // Turnstile callback registreren
  useEffect(() => {
    (window as any).onTurnstileSuccess = function (token: string) {
      setToken(token);
    };
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!token) {
      alert("Please verify you are not a robot.");
      return;
    }

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          token,
        }),
      });

      if (res.ok) {
        router.push("/thank-you");
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("Submission error. Please try again.");
    }
  };

  return (
    <>
      {/* Cloudflare Turnstile Script */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />

      <div className="mt-12 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Form</h2>

        <form
          onSubmit={handleSubmit}
          className="p-6 bg-white shadow-md rounded-lg space-y-6"
        >
          <div>
            <label className="block font-semibold mb-1">
              Your first and last name
            </label>
            <input
              type="text"
              name="name"
              className="w-full border rounded p-2"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              name="email"
              className="w-full border rounded p-2"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Did you have lessons before? If so, what is your current level of Dutch?
            </label>
            <input
              type="text"
              name="currentLevel"
              className="w-full border rounded p-2"
              value={formData.currentLevel}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Which course would you like to start with?
            </label>
            <select
              name="course"
              className="w-full border rounded p-2"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">--Please select--</option>
              <option>Ultimate Beginners Dutch (A0-A1 level)</option>
              <option>Civic integration preparation (A2 level)</option>
              <option>Ultimate beginners Flemish (A0-A1 level)</option>
              <option>Intermediate Dutch (A2-B1 level)</option>
              <option>Intermediate Flemish (A2-B1 level)</option>
              <option>Advanced Dutch (B2-C1 level)</option>
              <option>Dutch for dentists</option>
              <option>Dutch for nurses</option>
              <option>Corporate and HR solutions</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Why do you want to learn Dutch?
            </label>
            <textarea
              name="motivation"
              className="w-full border rounded p-2"
              rows={3}
              value={formData.motivation}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              What is your mother tongue?
            </label>
            <input
              type="text"
              name="motherTongue"
              className="w-full border rounded p-2"
              value={formData.motherTongue}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              Which other languages do you speak and at which level?
            </label>
            <input
              type="text"
              name="otherLanguages"
              className="w-full border rounded p-2"
              value={formData.otherLanguages}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">
              How did you find us?
            </label>
            <select
              name="referral"
              className="w-full border rounded p-2"
              value={formData.referral}
              onChange={handleChange}
            >
              <option value="">--Please select--</option>
              <option value="Google">Google</option>
              <option value="Facebook">Facebook</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Recommendation or referral">
                Recommendation or referral
              </option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Turnstile Widget */}
          <div className="flex justify-center">
            <div
              className="cf-turnstile"
              data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
              data-callback="onTurnstileSuccess"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CourseSignupForm;
