import Image from "next/image";
import Business from "@/public/images/training_award.png";

export default function DutchTuitionIntro() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Left Image */}
          <div className="rounded-lg overflow-hidden">
            <Image
              src={Business}
              alt="Dutch Tuition"
              layout="responsive"
              placeholder="blur"
            />
          </div>

          {/* Right Text and Button */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold text-slate-800 leading-tight">
              Best Online Dutch<br />
              Language Tuition Service
            </h2>
            <p className="text-xl font-semibold text-blue-600 mt-2">
              – Western Europe
            </p>
            <p className="mt-6 text-lg text-gray-700">
            Learning Dutch means more than just words – it's about culture. At Learn Dutch Online, we help students connect with daily life in Belgium and the Netherlands, with proven results and award-winning methods.
            </p>

            <div className="mt-8">
              <a
                className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                href="https://www.corporatevision-news.com/issues/education-and-training-awards-2021/20/"
              >
                <span className="relative inline-flex items-center">
                  Click here for more{" "}
                  <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
