import Image from "next/image";
import PlanetImg from "@/public/images/planet.png";
import PlanetOverlayImg from "@/public/images/planet-overlay.svg";
import PeopleIcon from '@mui/icons-material/People';
import DrawIcon from '@mui/icons-material/Draw';
import PlayLessonIcon from '@mui/icons-material/PlayLesson';
import SavingsIcon from '@mui/icons-material/Savings';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CompostIcon from '@mui/icons-material/Compost';
import MoreTimeIcon from '@mui/icons-material/MoreTime';

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
            Master Dutch at your convenience!
            </h2>
            <p className="text-lg text-gray-200">
            Learn Dutch Online offers a flexible and effective way to achieve your language goals. Whether you're looking for individual or group lessons, private or corporate training, we can tailor a program to fit your needs.
            </p>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                <Image
                  className="rounded-full bg-gray-900"
                  src={PlanetImg}
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src={PlanetOverlayImg}
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />
                  <div>
                    <div className="absolute -left-28 top-16 z-10 animate-float opacity-80 transition-opacity duration-500 text-white text-center w-[253px] h-[56px] flex flex-col justify-center items-center">
                      <span className="text-sm font-semibold">Marelize Vermeulen</span>
                      <span className="text-xs opacity-50">Student Medical Doctor</span>
                      <a href="/testimonials" className="text-sm mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md">
                        See Review →
                      </a>
                    </div>
                    <div className="absolute left-56 top-7 z-10 animate-float delay-1000 opacity-80 transition-opacity duration-500 text-white text-center w-[241px] h-[56px] flex flex-col justify-center items-center">
                      <span className="text-sm font-semibold">Hannah Debono</span>
                      <span className="text-xs opacity-50">Midwife Mater Dei Hospital</span>
                      <a href="/testimonials" className="text-sm mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md">
                        See Review →
                      </a>
                    </div>
                    <div className="absolute -left-20 bottom-24 z-10 animate-float delay-2000 opacity-80 transition-opacity duration-500 text-white text-center w-[243px] h-[56px] flex flex-col justify-center items-center">
                      <span className="text-sm font-semibold">Amarise Diedericks</span>
                      <span className="text-xs opacity-50">Occupational therapist</span>
                      <a href="/testimonials" className="text-sm mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md">
                        See Review →
                      </a>
                    </div>
                    <div className="absolute bottom-32 left-64 z-10 animate-float delay-3000 opacity-80 transition-opacity duration-500 text-white text-center w-[251px] h-[56px] flex flex-col justify-center items-center">
                      <span className="text-sm font-semibold">Anthony Senter</span>
                      <span className="text-xs opacity-50">CEO SDWAN and SASE Solutions</span>
                      <a href="/testimonials" className="text-sm mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-md">
                        See Review →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
              <DrawIcon className="text-blue-500" fontSize="small" />
                <span>Tailored Dutch Lessons</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              Private &amp; Corporate Dutch Lessons for individuals or small groups.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
              <PeopleIcon className="text-blue-500" fontSize="small" />
                <span>Personalized Learning</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              Learn Dutch online, the rewarding way! Our optimized online tuition makes learning enjoyable and efficient. You'll get personal service from real people who are invested in your progress.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
              <PlayLessonIcon className="text-blue-500" fontSize="small" />
                <span>All-Inclusive Materials</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              Dive deeper with multimedia &amp; expert guidance! Our courses include interactive lessons and all materials are included – no hidden fees!
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
              <SavingsIcon className="text-blue-500" fontSize="small" />
                <span>Flexible Pricing</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              Control your learning expenses with flexible payment options.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
              <HandshakeIcon className="text-blue-500" fontSize="small" />
                <span>Language &amp; Culture</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              Courses include traditions and cultural aspects of Belgium and/or the Netherlands.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
              <LiveTvIcon className="text-blue-500" fontSize="small" />
                <span>Live &amp; Focused</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              Live lessons, zero distractions.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
              <CalendarMonthIcon className="text-blue-500" fontSize="small" />
                <span>Your Schedule</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              Custom lesson plans scheduled around your availability.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
              <CompostIcon className="text-blue-500" fontSize="small" />
                <span>Eco-Friendly</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              Paper free for low environmental impact.
              </p>
            </article>
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
              <MoreTimeIcon className="text-blue-500" fontSize="small" />
                <span>Time-Saving</span>
              </h3>
              <p className="text-[15px] text-gray-400">
              No commuting means savings on fuel, energy and time.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
