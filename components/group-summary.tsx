import Image from "next/image";

const GroupSummary = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Your success is our success</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Conversational Flemish/Dutch */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="w-full h-40 mb-4 overflow-hidden rounded-xl">
              <Image
                src="/images/course_1.jpeg"
                alt="Conversational Flemish/Dutch"
                width={400}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Conversational Flemish/Conversational Dutch</h3>
            <p className="text-xl font-semibold mb-4">
              You had lessons before (up to A1+ or A2) but have trouble communicating?
            </p>
            <p className="text-gray-600 mb-4">
              We recommend this course to anyone who had lessons before but lacks the confidence to communicate. Did you reach a A1+ or A2 level in Dutch but feel uncomfortable communicating? Then this course is for you!
            </p>
            <p className="text-gray-600 mb-4">
              This course is designed to up your confidence to speak Dutch as well as extend your vocabulary in Dutch. Through interactive and fun exercises, you will be able to apply and use that grammar that you have learnt already.
            </p>
            <p className="text-gray-600 mb-4">
              After signing up, we allocate to you native Flemish language trainers who guide you through various aspects of the course. Topics covered include: famous Belgians, sports, Belgian food, travelling, and more.
            </p>
            <p className="text-gray-600 mb-6">
              The course consists of a total of 8 sessions of 1 hour. We work with a maximum of 4 students in each group, so we can guarantee you as much speaking opportunity as possible. During each session, fun and interaction are guaranteed. In a structured way, you will be given plenty of opportunities to practice your speaking in Dutch.
            </p>
            <a href="/contact" className="text-blue-500 font-semibold">Contact us for more info</a>
          </div>

          {/* Beginners Flemish/Dutch for Afrikaans speakers */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="w-full h-40 mb-4 overflow-hidden rounded-xl">
              <Image
                src="/images/course_2.jpg"
                alt="Beginners Flemish/Dutch for Afrikaans speakers"
                width={400}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Beginners Flemish/Dutch for Afrikaans speakers</h3>
            <p className="text-xl font-semibold mb-4">
              You are an ultimate beginner but your mother tongue is Afrikaans.
            </p>
            <p className="text-gray-600 mb-4">
              Several of our trainers stay or have stayed in South Africa and can speak Afrikaans.
            </p>
            <p className="text-gray-600 mb-4">
              In this course, we will focus on those aspects of the language that are different between Afrikaans and Dutch.
            </p>
            <p className="text-gray-600 mb-4">
              The aim of the course is to improve your abilities to have basic conversations in Dutch and for you to know precisely where the difference between Afrikaans and Dutch lies.
            </p>
            <p className="text-gray-600 mb-4">
              This course is designed to be an effective introduction to learning to write and speak Dutch, making it a valuable survival tool in The Netherlands or Belgium.
            </p>
            <p className="text-gray-600 mb-6">
              The course consists of a total of 20 sessions of 1 hour. We work with a maximum of 4 students in each group, so we can guarantee you as much speaking opportunity as possible.
            </p>
            <a href="/contact" className="text-blue-500 font-semibold">Contact us for more info</a>
          </div>

          {/* Integration exam preparation */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="w-full h-40 mb-4 overflow-hidden rounded-xl">
              <Image
                src="/images/course_3.jpg"
                alt="Integration exam preparation"
                width={400}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4">Integration exam preparation</h3>
            <p className="text-xl font-semibold mb-4">
              You had lessons before (up to A1+ or A2 level) and want to take the integration exam.
            </p>
            <p className="text-gray-600 mb-4">
              During this course, we will prepare you for the reading, writing, listening, speaking, and KNM part of the integration exam.
            </p>
            <p className="text-gray-600 mb-4">
              In each session, you will extensively work on 1 item of each test. You will get lots of exercises like the ones you can expect on your exam.
            </p>
            <p className="text-gray-600 mb-4">
              You will get homework to prepare you for one KNM item at a time and test your knowledge during each session. Your personal trainer will answer all your questions and give you personal feedback throughout the way.
            </p>
            <p className="text-gray-600 mb-6">
              The course consists of a total of 10 sessions of 1 hour. We work with a maximum of 4 students per group to guarantee you as much personal assistance as we can.
            </p>
            <a href="/contact" className="text-blue-500 font-semibold">Contact us for more info</a>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600 text-xl">
            Lesson time slots are booked between 09:00 and 21:00 C.E.T. from Monday to Friday and from 09:00 to 13:00 C.E.T. on Saturdays. A preset time is booked for these lessons.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GroupSummary;
