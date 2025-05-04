import { motion } from "framer-motion";

const Agenda = () => {
  const agendaItems = [
    {
      time: "09:30 AM",
      title: "Registration & Welcome Coffee",
      tag: "Registration",
    },
    {
      time: "10:00 AM",
      title: "Opening Remarks",
      speaker:
        "Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking",
    },
    {
      time: "10:10 AM",
      title: "Keynote session: Digital Transformation in a Gen AI World",
      speaker:
        "Ms. Siobhan Byron, Executive Vice President, Finastra Universal Banking",
    },
    {
      time: "10:30 AM",
      title:
        "Decoding the Future - Transformation: The Opportunity & Time is Now",
      speaker:
        "Mr. Daragh O’Byrne, Senior Director, Marketing, Universal Banking, Finastra",
    },
    {
      time: "11:00 AM",
      title:
        "Panel Discussion: Customer Acquisition - Gaining New Customers in a Hyper Competitive World",
      speaker: "Hamid Nirouzad, Ahmad Hamdy, Ms. Riham Ismail Kassem Muhammad",
    },
    {
      time: "11:30 AM",
      title:
        "Panel Discussion: Customer Retention - Keeping Customers When Loyalty Is Dead",
      speaker:
        "Karim El Mourabet, Solution Consulting Director - Middle East & Africa, Finastra Universal Banking Heba Yehia, Head of Digital Products, Arab African International Bank; Ismail Ali, Co-Founder and CEO of CARITech ohamed Elazzazy, Head of IT Governance and Change Management, Al-Baraka Bank Egypt",
    },
    {
      time: "12:00 PM",
      title: "Coffee Break & Networking",
    },
    {
      time: "12:30 PM",
      title: "Panel Discussion: Cost to Serve: Deliver Customer Delight",
      speaker: `Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking
  Shehab Moustafa, Country Center of Excellence Director, Money Fellows;
  Matthew Hughes, Head of FS&I, International Markets, Atos
  Emad Shawky Habib Hanna, Chief Data and Analytics Officer, Banque Misr.`,
    },
    {
      time: "01:00 PM",
      title: `The Essential Elements: What do you need to be "all things to all people"?`,
      speaker: `Narendra Mistry, Chief Product and Technology Officer, Finastra Universal Banking`,
    },
    {
      time: "01:30 PM",
      title: "Making the case for change: The Question is How",
      speaker: `Marwan Abouzeid, Principal Solutions Consultant & Customer Value Lead, MEA & APAC, Finastra Universal Banking`,
    },
    {
      time: "01:50 PM",
      title: "Closing Remarks",
      speaker: `Rudy Kawmi, Managing Director - Middle East, Africa & Asia-Pacific, Finastra Universal Banking`,
    },
    {
      time: "02:00 PM",
      title: "Lunch",
    },
  ];

  return (
    <div id="agenda" className="bg-gradient-to-br from-gray-800 to-blue-500 mx-auto p-8 space-y-8">
      <div className="text-center">
        <motion.h2
          className="text-4xl font-light text-white text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h2 className="text-4xl font-semibold">Agenda</h2>
        </motion.h2>
      </div>

      {agendaItems.map((item, index) => (
        <motion.div
          key={index}
          className=" lg:pl-50 lg:pr-50 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: false, amount: 0.3 }} // Trigger when 30% of element is in view
        >
          <div
            className={`bg-blue-100 p-6 rounded-lg shadow-md ${
              index % 2 === 0 ? "sm:col-start-1" : "sm:col-start-2 sm:col-end-3"
            }`}
          >
            <h3 className="text-xl font-bold mb-2">
              {item.time} | {item.title}
            </h3>
            <p>{item.speaker}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Agenda;
