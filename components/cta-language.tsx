import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";
import DutchCity from "@/public/images/dutch_city.jpg";
import VideoCall from "@/public/images/video_call.jpg";

export default function CtaDutchCourses() {
  return (
    <section className="bg-slate-100" id="cta-dutch">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
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
          <div className="px-4 py-12 md:px-12 md:py-20 flex flex-col gap-20">

            {/* Eerste tekstblok met afbeelding links */}
            <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
              <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={VideoCall}
                  alt="Video Call"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center md:text-left max-w-xl">
                <h2 className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,rgba(30,41,59,0.7),transparent)1] md:text-4xl">
                  Native Speakers Who Match Your Goals
                </h2>
                <p className="mb-6 text-lg text-gray-300">
                  Your allocated trainers are either Flemish or Dutch native speakers, depending on your area of interest, and yes, there is a huge difference when it comes to daily conversation and integration.
                </p>
              </div>
            </div>

            {/* Tweede tekstblok met afbeelding rechts */}
            <div className="flex flex-col items-center justify-center gap-10 md:flex-row-reverse">
              <div className="w-full max-w-sm rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={DutchCity}
                  alt="Dutch City"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
              <div className="text-center md:text-left max-w-xl">
                <h2 className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,rgba(30,41,59,0.7),transparent)1] md:text-4xl">
                  Culture and Language Go Hand in Hand
                </h2>
                <p className="mb-6 text-lg text-gray-300">
                  Are you ready to learn about mills, Carnaval, food and meeting people in the Netherlands while learning Dutch? Contact us to book your free consultation and discover the Dutch training course that works for you.
                </p>
                <a
                  href="/contact"
                  className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-white hover:bg-blue-600 transition"
                >
                  Learn more
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
