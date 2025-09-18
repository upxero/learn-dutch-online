"use client";

export default function ReviewPart() {
  return (
    <div className="space-y-12 text-center">
      {/* Titelblok */}
      <div className="bg-blue-900 text-white py-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold">Review</h2>
      </div>

      {/* Info blok */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700">
          Leave a review about your lessons at Learn-Dutch-Online and convince
          others.
        </p>
      </div>

      {/* Buttons */}
      <div className="space-y-4">
        <a
            href="https://www.facebook.com/tutordutchfrench/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md cursor-pointer text-center"
        >
            Facebook
        </a>
        <a
            href="https://g.page/r/CVM0jtnTUo1LEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md cursor-pointer text-center"
        >
            Google
        </a>
        <a
            href="https://www.linkedin.com/company/learn-dutch-online/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md cursor-pointer text-center"
        >
            LinkedIn
        </a>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500 mt-8">
        Copyright @Learn-Dutch-Online B.V.. Any illegal reproduction or
        distribution of this content will result in immediate legal action.
      </p>
    </div>
  );
}
