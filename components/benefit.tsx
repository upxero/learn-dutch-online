export default function Benefit() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Grid layout */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Bulletpoints */}
            <div className="text-left text-lg space-y-4">
              <ul className="list-disc list-inside">
                <li>Free to use course material included</li>
                <li>Sign up and any time, no semester intake schedule</li>
                <li>Structured courses and study path</li>
                <li>Progress at your own pace and on your own schedule</li>
                <li>Highly competitive pricing</li>
                <li>Ages 10 years & older</li>
                <li>Staatsexamen NT2 I & II, inburgeringsexamen and AKV preparation</li>
                <li>Learn Your Way: Set program or personalized pace</li>
                <li>Completely paper-free</li>
                <li>Global Access, No Travel Needed</li>
                <li>Safe, Secure and private</li>
              </ul>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src="images/benefit_book.jpg"
                alt="Course Benefits"
                className="w-full max-w-sm rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center">
            <p className="text-xl font-medium mb-4">
              Talk to a Dutch Expert – Free with no obligation
            </p>
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
          </div>
        </div>
      </div>
    </section>
  );
}
