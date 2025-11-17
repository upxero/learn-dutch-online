'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export default function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextParam = searchParams.get("next");
  const next = nextParam ? decodeURIComponent(nextParam) : "/dashboard";

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const email = (e.target as HTMLFormElement).email.value;
    const password = (e.target as HTMLFormElement).password.value;

    try {
      const response = await fetch("https://cms.learn-dutch-online.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        const token = data.data.access_token;

        // Opslaan in localStorage (optioneel)
        localStorage.setItem("auth_token", token);
        localStorage.setItem("refresh_token", data.data.refresh_token);

        // Cookie voor hoofddomein + subdomeinen
        document.cookie = `directus_token=${token}; path=/; domain=.learn-dutch-online.com; Secure; SameSite=None`;

        console.log("Redirecting to:", next);
        window.location.href = next;
      } else {
        alert(data.errors?.[0]?.message || "Inloggen mislukt.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Er is iets misgegaan bij het inloggen.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" placeholder="your@email.com" required className="form-input w-full" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" placeholder="••••••••" autoComplete="on" required className="form-input w-full" />
      </div>
      <button type="submit" className="btn w-full bg-blue-600 text-white">Sign In</button>
    </form>
  );
}
