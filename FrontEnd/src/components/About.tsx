
export const About = () => {
  return (
    <div id="agenda" className="bg-black text-white px-6 md:px-20 py-16 space-y-10">
      <div className="text-center">
        <h2 className="text-4xl font-semibold">About Finastra </h2>
      </div>

      <div className="space-y-6 text-gray-300 text-lg leading-relaxed w-full max-w-5xl mx-auto text-justify">
        <p className="text-lg leading-relaxed mb-4">
          Finastra is a global provider of financial services software
          applications across Lending, Payments, Treasury and Capital Markets,
          and Universal (retail and digital) Banking. Committed to unlocking the
          potential of people, businesses and communities everywhere, its vision
          is to accelerate the future of Open Finance through technology and
          collaboration, and its pioneering approach is why it is trusted by
          ~8,100 financial institutions, including 45 of the world's top 50
          banks.
        </p>
        <p className="text-lg">
          For more information, visit{" "}
          <a
            href="https://www.finastra.com"
            className="text-blue-400 underline"
          >
            www.finastra.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
