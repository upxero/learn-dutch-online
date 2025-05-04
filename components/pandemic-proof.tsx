export default function PandemicProof() {
    return (
      <section className="bg-slate-100 py-16">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
            Pandemic-proof Dutch tuition
          </h2>
  
          <p className="text-lg mb-4">
            Due to the nature of online tuition, your health is in no means compromised by being exposed to a class or environment that could contain persons infected with contagious diseases, provided you don't choose a compromised venue to log on from.
          </p>
  
          <p className="text-lg mb-4">
            Please take a moment to view the World Health Organization's guide with information and instructions on remaining safe from infection:{" "}
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              click here
            </a>
          </p>
  
          <p className="text-lg mb-8">
            Online tuition is nothing new to us and has always been our speciality. Our services are tailored to provide the best results for the online environment and have not been adapted from conventional alternatives.
          </p>
  
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/images/pandemic_proof.jpg"
              alt="Pandemic-proof Dutch Tuition"
              className="w-full max-w-sm rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  }
  