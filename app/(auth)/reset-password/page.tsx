'use client';

import { FormEvent, useState } from "react";

export default function ResetPassword() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    const email = (e.target as HTMLFormElement).email.value;

    try {
      const response = await fetch("https://cms.learn-dutch-online.com/auth/password/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ A reset email has been sent. Please check your inbox.");
      } else {
        setMessage(data.errors?.[0]?.message || "Unable to start password reset.");
      }
    } catch (err) {
      console.error("Reset request error:", err);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Reset Password</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              className="form-input w-full py-2"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button
            type="submit"
            disabled={loading}
            className="btn w-full bg-blue-600 text-white shadow-sm cursor-pointer"
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </div>
      </form>

      {message && (
        <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
      )}
    </>
  );
}
