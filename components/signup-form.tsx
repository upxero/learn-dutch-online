"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
    <div className="mt-12 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Form</h2>
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg space-y-6">
        <div>
          <label className="block font-semibold mb-1">Your first and last name</label>
          <input type="text" name="name" className="w-full border rounded p-2" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input type="email" name="email" className="w-full border rounded p-2" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label className="block font-semibold mb-1">
            Did you have lessons before? If so, what is your current level of Dutch?
          </label>
          <input type="text" name="currentLevel" className="w-full border rounded p-2" value={formData.currentLevel} onChange={handleChange} />
        </div>
        <div>
          <label className="block font-semibold mb-1">Which course would you like to start with?</label>
          <select name="course" className="w-full border rounded p-2" value={formData.course} onChange={handleChange}>
            <option value="">--Please select--</option>
            <option>Ultimate Beginners Dutch (A0-A1 level)</option>
            <option>Civic integration preparation (A2 level)</option>
            <option>Ultimate beginners Flemish (A0-A1 level)</option>
            <option>Intermediate Dutch (A2-B1 level)</option>
            <option>Intermediate Flemish (A2-B1 level)</option>
            <option>Intermediate + Dutch (B1-B2 level)</option>
            <option>Intermediate + Flemish (B1-B2 level)</option>
            <option>Advanced Dutch (B2-C1 level)</option>
            <option>Advanced Flemish (B2-C1 level)</option>
            <option>Dutch for dentists</option>
            <option>Dutch for nurses</option>
            <option>French for beginners</option>
            <option>CNaVT exam preparation (B2 or C1 level)</option>
            <option>Corporate and HR solutions</option>
            <option>Individual or couples classes : Dutch for Afrikaans speakers</option>
            <option>Individual or couples classes : Flemish for Afrikaans speakers</option>
            <option>Group classes : Flemish for Afrikaans speakers</option>
            <option>Group classes : Dutch for Afrikaans speakers</option>
            <option>Group classes : conversational Dutch</option>
            <option>Group classes : conversational Flemish</option>
            <option>Group classes : Dutch integration exam preparation (A2 or B1)</option>
            <option>Staatexamen programma 1 (B1)</option>
            <option>Staatsexamen programma 2 (B2)</option>
            <option>Civic integration exam preparation (B1 level)</option>
            <option>Beginners PLUS Flemish (A1-A2)</option>
            <option>Beginners PLUS Dutch (A1-A2)</option>
            <option>Dutch for Children (10-13 years old)</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">Why do you want to learn Dutch?</label>
          <textarea name="motivation" className="w-full border rounded p-2" rows={3} value={formData.motivation} onChange={handleChange} />
        </div>
        <div>
          <label className="block font-semibold mb-1">What is your mother tongue?</label>
          <input type="text" name="motherTongue" className="w-full border rounded p-2" value={formData.motherTongue} onChange={handleChange} />
        </div>
        <div>
          <label className="block font-semibold mb-1">Which other languages do you speak and at which level?</label>
          <input type="text" name="otherLanguages" className="w-full border rounded p-2" value={formData.otherLanguages} onChange={handleChange} />
        </div>
        <div>
          <label className="block font-semibold mb-1">How did you find us?</label>
          <select name="referral" className="w-full border rounded p-2" value={formData.referral} onChange={handleChange}>
            <option value="">--Please select--</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Recommendation or referral">Recommendation or referral</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="text-center">
          <button type="submit" className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseSignupForm;
