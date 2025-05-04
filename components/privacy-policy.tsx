"use client";

import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        The online store on the website processes personal data provided by the Customer to fulfill orders,
        confirm Terms and Conditions, handle shipments, and facilitate necessary communication as required by law.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">General Provisions</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>The personal data controller, in compliance with GDPR (“Regulation”), is the company (“Controller”).</li>
        <li>Contact details of the Controller: [Insert contact details]</li>
        <li>Personal data means any information relating to an identified or identifiable natural person.</li>
      </ol>

      <h2 className="text-xl font-semibold mt-6 mb-2">Source of Personal Data</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Controller processes personal data obtained with consent and collected during the purchase process.</li>
        <li>Only identification and contact details necessary for the contract are processed.</li>
        <li>Data is used for shipping, accounting, and communication during the legal retention period. Data is not made public or transferred internationally.</li>
      </ol>

      <h2 className="text-xl font-semibold mt-6 mb-2">Purpose of Data Processing</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Website registration (GDPR Chapter 4, Section 2).</li>
        <li>Fulfilling orders (name, address, email, telephone).</li>
        <li>Compliance with laws arising from the customer relationship.</li>
        <li>Personal data is essential for concluding a purchase contract.</li>
      </ol>

      <h2 className="text-xl font-semibold mt-6 mb-2">Duration of Data Storage</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>Data is stored as long as necessary for legal obligations and up to 3 years after contract ends.</li>
        <li>All data is deleted after the legal storage period.</li>
      </ol>

      <h2 className="text-xl font-semibold mt-6 mb-2">Recipients and Processors</h2>
      <p className="mb-2">
        Third parties that process customer data are essential subcontractors, including:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Webnode AG (online store system)</li>
        <li>Shipping company</li>
        <li>Google Analytics (website analytics)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Customer Rights</h2>
      <ul className="list-disc pl-5 space-y-1">
        <li>Right to access</li>
        <li>Right to rectification</li>
        <li>Right to erasure</li>
        <li>Right to object</li>
        <li>Right to data portability</li>
        <li>Right to withdraw consent via email or in writing</li>
        <li>Right to lodge a complaint with the supervisory authority</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Data Security</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>All technical and organizational measures are taken to protect personal data.</li>
        <li>Data storage is secured via passwords, antivirus software, and routine system maintenance.</li>
      </ol>

      <h2 className="text-xl font-semibold mt-6 mb-2">Final Provisions</h2>
      <ol className="list-decimal pl-5 space-y-2">
        <li>By placing an order, the customer accepts this policy in full.</li>
        <li>Consent is given by checking the box in the purchase form.</li>
        <li>The Controller may update this policy, and changes will be published on the website.</li>
      </ol>
    </div>
  );
};

export default PrivacyPolicy;
