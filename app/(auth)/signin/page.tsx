'use client'

import { useRouter } from "next/navigation";
import Link from "next/link";
import { FormEvent } from "react";

export default function SignIn() {
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    try {
      // API-aanroep naar Directus om in te loggen
      const response = await fetch("http://localhost:8055/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Opslaan van token in localStorage of cookies voor gebruik in andere verzoeken
        localStorage.setItem("auth_token", data.data.access_token);
        localStorage.setItem("refresh_token", data.data.refresh_token);

        // Redirect naar dashboard of andere pagina
        window.location.href = 'http://localhost:5173/'; // externe redirect naar Vite dashboard
      } else {
        alert(data.errors[0].message); // Foutmelding van Directus
      }
    } catch (error) {
      console.error("Error during login:", error);
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
          Forgot password
        </Link>
      </div>
    </>
  );
}
