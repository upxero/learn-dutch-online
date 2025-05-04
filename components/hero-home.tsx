import PageIllustration from "@/components/page-illustration";

export default function HeroCourses() {
  return (
    <section className="relative bg-gray-900 text-white">
      <PageIllustration />

      <div className="relative h-[70vh] w-full overflow-hidden">
        <video
          className="absolute top-0 left-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/learn_dutch_home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-bold md:text-6xl mb-4">Learn Dutch Online</h1>
          <p className="text-lg text-gray-200 max-w-2xl mb-8">
          The best place to learn Dutch, at your own pace and in your own time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
          <a
            className="btn group mb-4 w-full bg-linear-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
            href="/contact"
          >
            <span className="relative inline-flex items-center">
              Contact Us{" "}
              <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                -&gt;
              </span>
            </span>
          </a>
            <a
              className="btn bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-md shadow-md"
              href="#business"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
    </section>
  );
}
