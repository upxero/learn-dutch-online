"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

interface CorporateFormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone?: string;
  employeesCount: string;
  trainingInterest: string;
  message?: string;
}

const ContactForm: React.FC = () => {
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-corporate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      <h2 className="text-3xl font-bold text-center mb-8">Corporate Contact Form</h2>
      <form onSubmit={handleSubmit} className="p-6 bg-white shadow-md rounded-lg space-y-6">
        <div>
          <label className="block font-semibold mb-1">Company Name</label>
          <input
            type="text"
            name="companyName"
            className="w-full border rounded p-2"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Contact Person</label>
          <input
            type="text"
            name="contactPerson"
            className="w-full border rounded p-2"
            value={formData.contactPerson}
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
          <label className="block font-semibold mb-1">Phone (optional)</label>
          <input
            type="text"
            name="phone"
            className="w-full border rounded p-2"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Number of Employees</label>
          <input
            type="text"
            name="employeesCount"
            className="w-full border rounded p-2"
            value={formData.employeesCount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Training Interest</label>
          <select
            name="trainingInterest"
            className="w-full border rounded p-2"
            value={formData.trainingInterest}
            onChange={handleChange}
            required
          >
            <option value="">--Please select--</option>
            <option>Dutch for Employees</option>
            <option>Flemish for Employees</option>
            <option>Integration Exam Preparation</option>
            <option>Custom Corporate Training</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold mb-1">Message (optional)</label>
          <textarea
            name="message"
            className="w-full border rounded p-2"
            rows={3}
            value={formData.message}
            onChange={handleChange}
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
  );
};

export default ContactForm;
