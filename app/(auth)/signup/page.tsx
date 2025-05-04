'use client'

import { useRouter } from "next/navigation";
import Link from "next/link";
import { FormEvent } from "react"; // Importeren van FormEvent voor typeveiligheid

export default function SignUp() {
  const router = useRouter();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    // Eenvoudige validatie (kan verder worden uitgebreid)
    if (!email || !password || !username) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // API-aanroep naar Strapi om gebruiker te registreren
      const response = await fetch("http://localhost:1337/api/auth/local/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect naar login of dashboard na succesvolle registratie
        router.push("/signin"); // Of een andere route naar keuze
      } else {
        // Foutmelding bij mislukte registratie
        alert(data.error.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Er is iets misgegaan bij de registratie.");
    }
  }

  return (
    <>
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Create your account</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              className="form-input w-full py-2"
              type="text"
              placeholder="Your Username"
              required
            />
          </div>
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
            Sign Up
          </button>
        </div>
      </form>
      <div className="mt-6 text-center">
        <Link className="text-sm text-gray-700 underline hover:no-underline" href="/signin">
          Already have an account? Sign in
        </Link>
      </div>
    </>
  );
}

