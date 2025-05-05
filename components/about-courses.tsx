export default function AboutCourses() {
  return (
    <section className="bg-slate-100 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="bg-white rounded-2xl shadow-md p-10">
          {/* Section header */}
            <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-4xl font-bold text-slate-800 leading-tight">
                Dutch for Every Level
            </h2>
            <p className="text-lg font-bold text-gray-700">
                A forward thinking approach for 21st century tuition
            </p>
            </div>
          {/* Columns */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Beginner Course */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Beginners Dutch Course</h3>
              <ul className="list-disc list-inside space-y-1 text-base">
                <li>Build a strong foundation in Dutch</li>
                <li>Prepare for your Civic Integration Exam (Inburgeringsexamen)</li>
                <li>Communicate confidently in daily life</li>
                <li>Shop, ask questions at work, navigate transport</li>
                <li>Discover Dutch culture – greetings to traditions</li>
              </ul>
            </div>

            {/* Intermediate Course */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Intermediate Dutch Course</h3>
              <ul className="list-disc list-inside space-y-1 text-base">
                <li>Speak Dutch with confidence</li>
                <li>Grammar, vocabulary &amp; conversation skills</li>
                <li>Boost workplace and social communication</li>
                <li>Express yourself more authentically</li>
              </ul>
            </div>

            {/* Integration Prep */}
            <div>
              <h3 className="text-xl font-semibold mb-2">Civic Integration Prep</h3>
              <p className="text-base">
                Are you signed up for exams like CNaVT, ITNA, or AKV?
                We’ll help you prepare so you can take the challenge with confidence.
              </p>
            </div>
          </div>

          {/* CTA Section */}
            <div className="mt-16 text-center">
            <a
                className="btn group mb-8 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:w-auto"
                href="/courses"
            >
                <span className="relative inline-flex items-center">
                More about the courses{" "}
                <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                    -&gt;
                </span>
                </span>
            </a>

            {/* Corporate Solutions */}
            <div className="max-w-3xl mx-auto text-center text-base space-y-2">
                <h3 className="text-xl font-semibold">Corporate Solutions</h3>
                <p>
                We provide customized programs and courses for large and small companies.
                </p>
                <p>
                We offer employers and recruiters a live and detailed overview of their employee's
                progress, attendance, and schedule among other benefits.
                </p>
                <a
                className="btn group mt-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-sm hover:bg-[length:100%_150%] sm:w-auto"
                href="contact"
                >
                <span className="relative inline-flex items-center">
                Reach out to us {" "}
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
