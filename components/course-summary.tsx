import Image from "next/image";

const CourseSummary = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Commitment nurtures success</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Course 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="w-full h-40 mb-4 overflow-hidden rounded-xl">
              <Image
                src="/images/course_1.jpeg"
                alt="Course 1 Image"
                width={400}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Beginners Dutch online - Civic integration test (inburgeringsexamen)</h3>
            <p className="text-gray-600 mb-4">
              We recommend this course to anyone who has no knowledge of Dutch and want to start learning from scratch. It is also ideal for those who are familiar with the language but who have had no formal training on the basics or foundation of Dutch.
            </p>
            <p className="text-gray-600 mb-4">
              This course is designed to be an effective introduction to learning to understand, read, write and speak Dutch, making it a valuable survival tool in The Netherlands or Belgium.
            </p>
            <p className="text-gray-600 mb-4">
              After signing up we allocate to you, a personal language trainer who guides you through various aspects of the course. Topics covered includes: Pronunciation and articulation, most commonly used words, numbers and basic concepts generally taken for granted such as telling the time and introducing yourself.
            </p>
            <p className="text-gray-600 mb-4">
              More technical aspects such as grammar gets covered in detail, such as verbs, nouns, pronouns, plurals and tenses in their various forms. With a lot of multi-media tools and the guidance of your language coach, these topics are broken down into easy to process chunks which you will be able to implement on a day-to-day basis.
            </p>
            <p className="text-gray-600 mb-6">
              We also believe in teaching you the language to use as naturally as possible and don't make use of traditional means like drill sentences which are only intended to help you pass a specific test.
            </p>
            <a href="/contact" className="text-blue-500 font-semibold">Contact us for more info</a>
          </div>

          {/* Course 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="w-full h-40 mb-4 overflow-hidden rounded-xl">
              <Image
                src="/images/course_2.jpg"
                alt="Course 2 Image"
                width={400}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Intermediate Dutch online (Staatsexamen NT2)</h3>
            <p className="text-gray-600 mb-4">
              Intermediate Dutch is focussed on further developing your abilities once you are familiar with the basics and have the foundation in place.
            </p>
            <p className="text-gray-600 mb-4">
              Your trainer starts you off by expanding on your understanding of sentences and expressions. Here you learn to better communicate topics related to your general environment and beyond such as professional interactions, education and travelling among many others.
            </p>
            <p className="text-gray-600 mb-4">
              The aim of the course is to improve your abilities to the point where you can have more complex discussions and describe topics like dreams, experiences, future ambitions and many more topics in greater detail.
            </p>
            <p className="text-gray-600 mb-4">
              Use and understanding of grammar is significantly improved. More focus is given on how to use grammar correctly in more complex conversation, such as longer sentence constructions with more emphasis on timing and context.
            </p>
            <p className="text-gray-600 mb-6">
              We take this opportunity to discuss the Dutch culture and community related topics which is useful to those who aren't familiar with this aspect of Dutch life.
            </p>
            <a href="/contact" className="text-blue-500 font-semibold">Contact us for more info</a>
          </div>

          {/* Course 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="w-full h-40 mb-4 overflow-hidden rounded-xl">
              <Image
                src="/images/course_3.jpg"
                alt="Course 3 Image"
                width={400}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">CNaVT, ITNA and other exams</h3>
            <p className="text-gray-600 mb-4">
              A workshop approach focused on preparation for these and other related examinations. It is not suitable for beginners who want to take a shortcut, but rather experienced speakers who want to sharpen their skills specifically for examinations.
            </p>
            <p className="text-gray-600 mb-6">
              As a personal language training service we assist with preparing you for a variety of examinations and tests which are not always presented by traditional language training institutions. If you have an industry related examination which is not mentioned or is less common, please feel free to contact us so that we can assess your requirements and how we can help you.
            </p>
            <a href="/contact" className="text-blue-500 font-semibold">Contact us for more info</a>
          </div>

          {/* Course 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="w-full h-40 mb-4 overflow-hidden rounded-xl">
              <Image
                src="/images/course_4.jpg"
                alt="Course 4 Image"
                width={400}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Intermediate Plus (B1–B2) – Staatsexamen programma 2</h3>
            <p className="text-gray-600 mb-4">
              For doctors, dentists, nurses, psychiatrists and other medical professionals who are new to the Netherlands, the AKV exam is a daunting prospect no more.
            </p>
            <p className="text-gray-600 mb-4">
              Our course has been developed from years of experience in preparing professionals from the medical industry and is regularly updated according to new developments.
            </p>
            <p className="text-gray-600 mb-6">
              We help you prepare for every aspect of the exam, not only in language, but also in how you will be tested and what to expect through each chapter while guided by your personal trainers.
            </p>
            <a href="/contact" className="text-blue-500 font-semibold">Contact us for more info</a>
          </div>

          {/* Course 5 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="w-full h-40 mb-4 overflow-hidden rounded-xl">
              <Image
                src="/images/course_5.jpg"
                alt="Course 5 Image"
                width={400}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Group Lessons</h3>
            <p className="text-gray-600 mb-4">
              Group classes are beneficial in specific circumstances where colleagues, employees, families or groups of friends with the same timing and goals need training.
            </p>
            <p className="text-gray-600 mb-4">
              We offer courses for small group classes on request and based on the requirements of the group and assess how many participants we would include per class.
            </p>
            <p className="text-gray-600 mb-6">
              As the quality of information transfer gets reduced per attendee, we advise a maximum of 4 people per group and for less intensive training we can include up to 6 members.
            </p>
            <a href="/contact" className="text-blue-500 font-semibold">Contact us for more info</a>
          </div>

          {/* Course 6 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="w-full h-40 mb-4 overflow-hidden rounded-xl">
              <Image
                src="/images/course_6.jpg"
                alt="Course 6 Image"
                width={400}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Nederlands voor je werknemers</h3>
            <p className="text-gray-600 mb-4">
              Ben jij een Nederlands of Vlaams bedrijf met anderstalige werknemers? Wij kunnen je werknemers Nederlands leren en daarbij onze cursus aanpassen aan de sector waarin jullie werkzaam zijn.
            </p>
            <p className="text-gray-600 mb-6">
              Contacteer ons gerust voor meer informatie, mogelijkheden en prijzen.
            </p>
            <a href="/contact" className="text-blue-500 font-semibold">Contacteer ons nu</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSummary;
