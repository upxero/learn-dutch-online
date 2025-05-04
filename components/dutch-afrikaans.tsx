import Image from "next/image";

export default function DutchForAfrikaans() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-4xl mx-auto my-10">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/dutch_african.png"
                alt="Dutch for Afrikaans Speakers"
                width={600}
                height={400}
                className="rounded-xl object-cover w-full"
              />
            </div>
            <div className="w-full md:w-1/2 text-gray-800">
              <h2 className="text-2xl font-bold mb-4">Dutch for Afrikaans speakers</h2>
              <p className="mb-4">
                There is a common misconception that if you can speak Afrikaans, you can speak Dutch.
                This is not entirely accurate as the two languages share a very large part of their
                respective vocabularies but in practice there are some significant, and unexpected,
                hurdles to overcome to bridge the gap.
              </p>
              <p className="mb-4">
                You can find some books and guides that are commercially available, but most of them are
                rather outdated and they don't place as much focus on bridging the practical gap as they
                do on the theoretical gap.
              </p>
              <p className="mb-4">
                Our custom Dutch for Afrikaans course is created, maintained and updated by native and
                second language Afrikaans speakers, which is why it has become so hugely popular with
                South Africans. <em>Ons praat jou taal en deel in jou kultuur.</em>
              </p>
              <div className="mt-6 mb-6 text-left">
                <a
                  className="btn bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md shadow-md"
                  href="/contact"
                >
                  Contact us to find out more <span className="ml-1">-&gt;</span>
                </a>
              </div>
              <p className="mb-2 text-sm">
                Lesson time slots are available for booking between <strong>09:00 and 21:00 C.E.T.</strong> from Monday to Friday and from <strong>09:00 to 13:00 C.E.T.</strong> on Saturdays.
              </p>
              <p className="text-sm">
                If you work according to a set daily schedule we can pre-book your lessons on a regular
                time slot or routine. For those who have a far less predictable way of life, contact us,
                and we can customize your time-slots accordingly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
