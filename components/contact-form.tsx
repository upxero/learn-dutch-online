"use client";

import React, { useState, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";

interface CorporateFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone?: string;
  employeesCount: string;
  trainingInterest: string;
  message?: string;
}

const CorporateContactForm: React.FC = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<CorporateFormData>({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    employeesCount: "",
    trainingInterest: "",
    message: "",
  });

  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

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

    setLoading(true);

    try {
      const res = await fetch("/api/send-corporate", {
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
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Submission error.");
    }

    setLoading(false);
  };

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />

      <div className="mt-12 max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Corporate Contact Form
        </h2>

        <form
          onSubmit={handleSubmit}
          className="p-6 bg-white shadow-md rounded-lg space-y-6"
        >
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            className="w-full border rounded p-2"
            value={formData.companyName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="contactPerson"
            placeholder="Contact Person"
            className="w-full border rounded p-2"
            value={formData.contactPerson}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border rounded p-2"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone (optional)"
            className="w-full border rounded p-2"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="employeesCount"
            placeholder="Number of Employees"
            className="w-full border rounded p-2"
            value={formData.employeesCount}
            onChange={handleChange}
            required
          />

          <select
            name="trainingInterest"
            className="w-full border rounded p-2"
            value={formData.trainingInterest}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Training --</option>
            <option>Dutch for Employees</option>
            <option>Flemish for Employees</option>
            <option>Integration Exam Preparation</option>
            <option>Custom Corporate Training</option>
          </select>

          <textarea
            name="message"
            placeholder="Message (optional)"
            className="w-full border rounded p-2"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />

          <div className="flex justify-center">
            <div
              className="cf-turnstile"
              data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
              data-callback="onTurnstileSuccess"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md"
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CorporateContactForm;