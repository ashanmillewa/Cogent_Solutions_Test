import { motion } from "framer-motion";

export const EventPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 to-grey-900 text-white pt-22">
      {/* Main Content */}
      <div className=" flex flex-col md:flex-row items-center justify-between px-6 py-6 md:py-24 max-w-7xl mx-auto space-y-6 md:space-y-0 md:space-x-12">
        {/* Text Content */}
        <div className="text-center md:w-1/2 mt-10">
          <p className="text-sm text-gray-300 font-bold mb-2">Organized By</p>
          <h2 className="text-7xl font-bold text-pink-300 mb-4">FINASTRA</h2>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 ">
            Reimagine Banking: <br />
            Adapt. Evolve. Thrive.
          </h1>

          <div className="text-blue-900 font-bold space-y-1">
            <p>
              <span className="font-bold">Date:</span> 9th April 2025
            </p>
            <p>
              <span className="font-bold">Time:</span> 9:30 AM - 2:00 PM GMT+2
            </p>
            <p>The Nile Ritz-Carlton, Cairo, Egypt</p>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-10 ">
          <motion.img
            src="/src/assets/EventPage.jpg"
            alt="Event Banner"
            className="w-full h-auto rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default EventPage;
