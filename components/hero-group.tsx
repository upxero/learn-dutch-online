import PageIllustration from "@/components/page-illustration";

export default function HeroGroup() {
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
          <source src="/videos/learn_dutch_group.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-bold md:text-6xl mb-4">Goup Courses </h1>
          <p className="text-lg text-gray-200 max-w-2xl mb-8">
          Some basic details about the goup courses we offer
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md"
              href="/contact"
            >
              Contact Us <span className="ml-1">-&gt;</span>
            </a>
            <a
              className="btn bg-white text-gray-800 hover:bg-gray-100 px-6 py-3 rounded-md shadow-md"
              href="#course"
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
