"use client";

import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SkypeIcon from "@mui/icons-material/Chat";
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

const Contact: React.FC = () => {
  return (
    <div className="mt-12 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Information</h2>

      <div className="p-6 bg-white shadow-md rounded-lg space-y-6">
        <div className="flex items-start gap-3">
          <TravelExploreIcon className="text-blue-600 mt-1" />
          <p>
            <strong>Lesson hours may vary</strong> due to Language Trainer time zones
          </p>
        </div>

        <div className="flex items-start gap-3">
          <AccessTimeIcon className="text-blue-600 mt-1" />
          <div>
            <p><strong>Office hours:</strong></p>
            <ul className="ml-4 list-disc">
              <li>Monday to Friday: 09.00 - 17.00 CET</li>
              <li>Saturday: 09.00 - 13.00 CET</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <PhoneIcon className="text-blue-600 mt-1" />
          <p><strong>Phone:</strong> +32 (0) 470 57 31 85</p>
        </div>

        <div className="flex items-start gap-3">
          <EmailIcon className="text-blue-600 mt-1" />
          <div>
            <p><strong>Email:</strong></p>
            <ul className="ml-4 list-disc">
              <li>contact@learn-dutch-online.eu</li>
              <li>veronique.duvivier@gmail.com</li>
            </ul>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <SkypeIcon className="text-blue-600 mt-1" />
          <p><strong>Skype:</strong> veronique_duvivier</p>
        </div>

        <div className="flex items-start gap-3">
          <LanguageIcon className="text-blue-600 mt-1" />
          <div>
            <p><strong>Follow us on:</strong></p>
            <ul className="ml-4 list-disc">
              <li className="flex items-center gap-1">
                <FacebookIcon fontSize="small" />
                <a
                  href="https://www.facebook.com/tutordutchfrench/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-1">
                <LinkedInIcon fontSize="small" />
                <a
                  href="https://www.linkedin.com/company/learn-dutch-online/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <ConnectWithoutContactIcon className="text-blue-600 mt-1" />
          <p>
            <strong>Contact person:</strong> Veronique Duvivier / founder and manager at Learn Dutch Online
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
