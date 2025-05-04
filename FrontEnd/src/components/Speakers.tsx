import { motion } from "framer-motion";

const people = [
  {
    name: "Mr. Mohamed Elazzazy",
    role: "Head of IT Governance and Change Management Al-Baraka Bank Egypt",
    imageUrl: "/src/assets/speakers/1s.png",
  },
  {
    name: "Mr. Shehab Moustafa",
    role: "Country Center of Excellence Director Money Fellows",
    imageUrl: "/src/assets/speakers/2s.jpg",
  },
  {
    name: "Mr. Marwan Abouzeid",
    role: "Principal Solutions Consultant & Customer Value Lead, MEA & APAC Finastra",
    imageUrl: "/src/assets/speakers/3s.jpg",
  },
  {
    name: "Mr. Karim El Mourabet",
    role: "Solution Consulting Director - MEA Finastra",
    imageUrl: "/src/assets/speakers/4s.jpg",
  },
  {
    name: "Ms. Siobhan Byron",
    role: "Executive Vice President, Universal Banking Finastra",
    imageUrl: "/src/assets/speakers/5s.jpg",
  },
  {
    name: "Mr. Narendra Mistry",
    role: "Chief Product and Technology Officer Universal Banking Finastra",
    imageUrl: "/src/assets/speakers/6s.jpg",
  },
  {
    name: "Mr. Ahmed Hamdy Bahey El Din",
    role: "Head of Information Technology Incolease",
    imageUrl: "/src/assets/speakers/7s.png",
  },
  {
    name: "Mr. Emad Shawky Habib Hanna",
    role: "Chief Data and Analytics Officer Banque Misr",
    imageUrl: "/src/assets/speakers/8s.png",
  },
  {
    name: "Ms. Heba Yehia",
    role: "Head of Digital Products Arab African International Bank",
    imageUrl: "/src/assets/speakers/9s.jpg",
  },
  {
    name: "Mr. Hamid Nirouzad",
    role: "Managing Director - Africa Finastra Universal",
    imageUrl: "/src/assets/speakers/10s.jpg",
  },
  {
    name: "Mr. Rudy Kawmi",
    role: "Managing Director - Middle East, Africa & Asia-Pacific Finastra Universal Banking",
    imageUrl: "/src/assets/speakers/11s.jpg",
  },
  {
    name: "Mr. Matthew Hughes",
    role: "Head of FS&I, International Markets Atos",
    imageUrl: "/src/assets/speakers/12s.jpg",
  },
  {
    name: "Mr. Daragh OByrne",
    role: "Senior Director, Marketing, Universal Banking, Finastra",
    imageUrl: "/src/assets/speakers/13s.JPG",
  },
  {
    name: "Dr. Ismail Ali",
    role: "Co-Founder and CEO of CARITech",
    imageUrl: "/src/assets/speakers/14s.jpg",
  },
  {
    name: "Ms. Riham Muhammad",
    role: "Corporate CEX Senior Analyst FABMISR",
    imageUrl: "/src/assets/speakers/15s.png",
  },
];

// export const Speakers = () => {
//   return (
//     <div className="bg-white py-24 sm:py-32">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="mx-auto max-w-2xl lg:mx-0">
//           <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Our Speakers</h2>
//         </div>
//         <ul
//           role="list"
//           className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
//         >
//           {people.map((person) => (
//             <li key={person.name}>
//               <img alt="" src={person.imageUrl} className="mx-auto size-24 rounded-full" />
//               <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
//               <p className="text-sm/6 text-gray-600">{person.role}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   )
// }

// export default Speakers

export const Speakers = () => {
  return (
    <div className="min-h-screen bg-blue-100 text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Our Speakers
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-x-8 gap-y-16 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 justify-center"
        >
          {people.map((person) => (
            <motion.li
              key={person.name}
              whileHover={{ scale: 1.1, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="cursor-pointer"
            >
              <img
                alt={person.name}
                src={person.imageUrl}
                className="mx-auto size-24 rounded-full"
              />
              <h3 className="mt-6 text-base font-semibold tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm text-gray-600">{person.role}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Speakers;
