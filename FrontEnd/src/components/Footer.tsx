import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-8 py-12 text-sm">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Left Column */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Cogent Solutions™</h2>
          <p className="mb-4">
            Through our conferences we transform your business challenges into
            opportunities. Our clients and customers are leading government
            entities and the fortune 500 companies.
          </p>
          <h3 className="text-base font-semibold mb-2">Awards</h3>
          <div className="flex gap-2 flex-wrap">
            <img
              src="/src/assets/footer/f1.png"
              alt="Award 1"
              className="h-16"
            />
            <img
              src="/src/assets/footer/f2.png"
              alt="Award 2"
              className="h-16"
            />
            <img
              src="/src/assets/footer/f3.png"
              alt="Award 3"
              className="h-16"
            />
            <img
              src="/src/assets/footer/f4.png"
              alt="Award 4"
              className="h-16"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4">Our office</h2>
          <div className="grid lg:gap-100 sm:grid-cols-1 md:grid-cols-2">
            <div className="w-[300px] p-4 rounded-lg shadow">
              <ul className="space-y-2">
                <li>
                  <strong>Middle East & Africa HQ</strong>
                  <br />
                  Office No: 209, The Metropolis Tower
                  <br />
                  Business Bay, Dubai, United Arab Emirates
                </li>
                <li>
                  <strong>Asia Pacific HQ</strong>
                  <br />
                  7th floor Green Lanka Tower, Colombo
                  <br />
                  Sri Lanka
                </li>
              </ul>
            </div>
            <div className="w-[300px] p-4 rounded-lg shadow">
              <ul className="space-y-2">
                <li>
                  <strong>Saudi Arabia HQ</strong>
                  <br />
                  Riyadh, Saudi Arabia
                </li>
                <li>
                  <strong>Phone:</strong> +971 50 5718867
                  <br />
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:partnerships@cogentsolutions.ae"
                    className="underline"
                  >
                    partnerships@cogentsolutions.ae
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-xs">
          &copy; 2025 Cogent Solutions Event Management LLC. All Rights Reserved
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#">
            <FaLinkedinIn className="text-white hover:text-blue-500" />
          </a>
          <a href="#">
            <FaFacebookF className="text-white hover:text-blue-500" />
          </a>
          <a href="#">
            <FaInstagram className="text-white hover:text-pink-500" />
          </a>
          <a href="#">
            <FaTwitter className="text-white hover:text-sky-400" />
          </a>
        </div>
      </div>
    </footer>
  );
}
