
import { motion } from "framer-motion";

const services = [
  {
    description: "Learn from industry experts",
    icon: "💡",
    bgColor: "bg-blue-800",
  },
  {
    description: "Stay ahead of emerging trends",
    icon: "📈",
    bgColor: "bg-gray-800",
  },
  {
    description: "Connect with fellow banking professionals",
    icon: "🤝",
    bgColor: "bg-blue-800",
  },
  {
    description: "Enhance your knowledge, skills, and network",
    icon: "🚀",
    bgColor: "bg-gray-800",
  },
  {
    description: "Share your expertise and experience with peers",
    icon: "🗣️",
    bgColor: "bg-blue-800",
  },
];


const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  }),
};

export const EventOverview = () => {
  return (
    <div
      id="overview"
      className="bg-black text-white px-6 md:px-20 py-16 space-y-10"
    >
      <div className="text-center">
        <h2 className="text-4xl font-semibold">Event Overview</h2>
      </div>

      <div className="space-y-6 text-gray-300 text-lg leading-relaxed w-full max-w-5xl mx-auto text-justify">
        <p>
          Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking
          Forum, "Reimagine Banking: Adapt. Evolve. Thrive." This exclusive
          event is designed to help you navigate and excel in the rapidly
          evolving banking landscape.
        </p>
        <p>
          Our forum will bring together business and technology experts,
          industry leaders, and visionaries to share their insights on the
          latest trends and challenges in the banking sector. You'll gain
          valuable knowledge on topics such as Generative AI, the impact of
          volatility, globalization challenges, persistent supply chain issues,
          recession threats, shifts in competitive dynamics, and evolving
          regulations.
        </p>
        <p>
          Each session will delve into the implications, challenges, and
          opportunities these topics present, providing you with practical
          strategies to leverage the latest technologies and capitalize on
          emerging opportunities. This is a unique chance to learn from the best
          in the industry, stay ahead of the curve, and connect with fellow
          retail banking professionals.
        </p>
        <p>
          Don’t miss this opportunity to enhance your knowledge, skills, and
          network in the finance and banking sector. Register today and secure
          your place at this must-attend event!
        </p>
      </div>

      <div className="py-12 px-4 text-center">
      <motion.h2
        className="text-4xl font-semibold mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        What we offer
      </motion.h2>
      <div className="grid md:grid-cols-5 gap-4">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`text-white p-6 rounded-lg space-y-4 ${service.bgColor}`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
          >
            <div className="text-4xl">{service.icon}</div>
            <p className="text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default EventOverview;
