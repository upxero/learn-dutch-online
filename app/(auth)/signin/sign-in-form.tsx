'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";
import Link from "next/link";

export default function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/dashboard";

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    try {
      const response = await fetch("https://www.upxero.be/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("auth_token", data.data.access_token);
        localStorage.setItem("refresh_token", data.data.refresh_token);

        // ✅ Externe redirect naar inhoudspagina
        window.location.href = `https://learn-dutch-online.netlify.app${next}`;
      } else {
        alert(data.errors?.[0]?.message || "Inloggen mislukt.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Er is iets misgegaan bij het inloggen.");
    }
  }

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Sign in to your account</h1>
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
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              className="form-input w-full py-2"
              type="password"
              autoComplete="on"
              placeholder="••••••••"
              required
            />
          </div>
        </div>
        <div className="mt-6">
          <button type="submit" className="btn w-full bg-blue-600 text-white shadow-sm">
            Sign In
          </button>
        </div>
      </form>
      <div className="mt-6 text-center">
        <Link className="text-sm text-gray-700 underline hover:no-underline" href="/reset-password">
          
        </Link>
      </div>
    </>
  );
}
