import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${
            border
              ? "border-t [border-image:linear-gradient(to_right,transparent,var(--color-slate-200),transparent)1]"
              : ""
          }`}
        >
          {/* 1st block - Logo */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div>
              <Logo />
            </div>
            <div className="text-sm text-gray-600">
              &copy; Learn Dutch Online 2025 - All rights reserved.
              <br />
              <span className="text-sm text-gray-600">
                Made with ❤️ by <Link href="https://www.upxero.com/" target="_blank" className="text-blue-500 hover:text-blue-600">Upxero</Link>
              </span>
            </div>
          </div>

          {/* 2nd block - Navigation */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-gray-600 transition hover:text-gray-900" href="/">Home</Link></li>
              <li><Link className="text-gray-600 transition hover:text-gray-900" href="/courses">Courses</Link></li>
              <li><Link className="text-gray-600 transition hover:text-gray-900" href="/group-courses">Group Courses</Link></li>
              <li><Link className="text-gray-600 transition hover:text-gray-900" href="/test">Test Your Level</Link></li>
              <li><Link className="text-gray-600 transition hover:text-gray-900" href="/testimonials">Testimonials</Link></li>
            </ul>
          </div>

          {/* 3rd block - Help & Info */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Help &amp; Info</h3>
            <ul className="space-y-2 text-sm">
              <li><Link className="text-gray-600 transition hover:text-gray-900" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="text-gray-600 transition hover:text-gray-900" href="https://dashboard.learn-dutch-online.com/">Dashboard</Link></li>
              <li><Link className="text-gray-600 transition hover:text-gray-900" href="/contact">Contact</Link></li>
              <li><Link className="text-gray-600 transition hover:text-gray-900" href="/corporate">Corporate</Link></li>
            </ul>
          </div>

          {/* 4th block - Social */}
          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Social</h3>
            <ul className="flex gap-1">
              <li>
                <Link
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                  href="https://www.facebook.com/tutordutchfrench/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-7 w-7 fill-current" viewBox="0 0 32 32">
                    <path d="M19 6h5V0h-5c-3.9 0-7 3.1-7 7v4H7v6h5v15h6V17h5l1-6h-6V7c0-0.6 0.4-1 1-1z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link
                  className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
                  href="https://www.linkedin.com/company/learn-dutch-online/"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="h-7 w-7 fill-current" viewBox="0 0 32 32">
                    <path d="M12 12h5.5v2.6h.1c.8-1.5 2.8-2.6 4.9-2.6 5.2 0 6.2 3.3 6.2 7.6V30h-6v-8.4c0-2 0-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V30h-6V12zm-9-8C1.3 4 0 5.3 0 7s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm-3 8h6v18H0V12z" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Decorative Text and Glow */}
      <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-linear-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Learn'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Learn'] after:[text-shadow:0_1px_0_white]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3" aria-hidden="true">
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]" />
        </div>
      </div>
    </footer>
  );
}
