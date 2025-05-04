import PageIllustration from "@/components/page-illustration";

export default function HeroPrivacy() {
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
          <source src="/videos/learn_dutch_privacy.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
          <h1 className="text-5xl font-bold md:text-6xl mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-200 max-w-2xl mb-8">
          Learn how we collect, use, and protect your personal data when you use our services
          </p>
        </div>

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
    </section>
  );
}
