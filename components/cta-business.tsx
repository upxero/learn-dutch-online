import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";
import Business from "@/public/images/business.jpg";
import PeopleHappy from "@/public/images/people_happy.jpg";

export default function CtaBusiness() {
  return (
    <section className="bg-slate-100" id="cta-business">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          {/* Glow effect */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>

          {/* Stripes background */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>

          {/* Content */}
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2 className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,rgba(30,41,59,0.7),transparent)1] md:mb-12 md:text-4xl">
              Tailored Language Solutions for Business and Individuals
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              Our flexibility and organisational structure allows us to give comprehensive and professional service to individuals as well as small and large business clients at a highly competitive price.
            </p>

            {/* Images */}
            <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row">
              <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={Business}
                  alt="Business"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={PeopleHappy}
                  alt="Happy People"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
