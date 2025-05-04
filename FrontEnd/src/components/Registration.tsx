import React, { useState } from "react";
import { motion } from "framer-motion";
import { addApplicant, ApplicantData } from "../services/applicantService";
import Swal from "sweetalert2";

export const Registration = () => {
  const [formData, setFormData] = useState<ApplicantData>({
    firstName: "",
    lastName: "",
    jobTitle: "",
    companyName: "",
    mobileNumber: "",
    email: "",
    webUrl: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      Swal.fire({
        icon: "warning",
        title: "Consent Required",
        text: "You must agree to the privacy policy before registering.",
      });
      return;
    }

    // Mobile number validation (must be exactly 10 digits)
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.mobileNumber)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Mobile Number",
        text: "Mobile number must be exactly 10 digits.",
      });
      return;
    }

    try {
      const response = await addApplicant(formData);
      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Registration successful!",
          showConfirmButton: false,
          timer: 2000,
        });
        setFormData({
          firstName: "",
          lastName: "",
          jobTitle: "",
          companyName: "",
          mobileNumber: "",
          email: "",
          webUrl: "",
          consent: false,
        });
      } else {
        const errorData = await response.json();
        Swal.fire({
          icon: "error",
          title: "Registration failed",
          text: errorData.message,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire({
        icon: "error",
        title: "Something went wrong",
        text: "Please try again later.",
      });
    }
  };

  return (
    <div
      id="registration"
      className="min-h-screen bg-gray-900 flex items-center justify-center px-4"
    >
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl w-full">
        {/* Left Side Text */}
        <div className="text-white flex flex-col justify-center">
          <h1 className="text-5xl font-semibold mb-4">Register Now</h1>
          <p className="text-lg font-medium">
            Join us for an unforgettable experience!
          </p>
          <div className="md:w-1/2 mt-10">
            <motion.img
              src="/src/assets/register.png"
              alt="Event Banner"
              animate={{ x: [0, 50, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>

        {/* Form */}
        <form
          className="bg-gradient-to-br from-blue-500 to-gray-700 p-8 rounded-2xl shadow-xl space-y-4 text-black"
          onSubmit={handleSubmit}
        >
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-white placeholder-black bg-gray-100"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-white placeholder-black bg-gray-100"
          />
          <input
            name="jobTitle"
            type="text"
            placeholder="Job Title"
            value={formData.jobTitle}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-white placeholder-black bg-gray-100"
          />
          <input
            name="companyName"
            type="text"
            placeholder="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-white placeholder-black bg-gray-100"
          />
          <input
            name="mobileNumber"
            type="tel"
            placeholder="Mobile Number"
            value={formData.mobileNumber}
            onChange={(e) => {
              const onlyNums = e.target.value.replace(/\D/g, "");
              setFormData((prev) => ({ ...prev, mobileNumber: onlyNums }));
            }}
            maxLength={10}
            className="w-full p-3 rounded-md border border-white placeholder-black bg-gray-100"
          />

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-white placeholder-black bg-gray-100"
          />
          <input
            name="webUrl"
            type="url"
            placeholder="Website URL"
            value={formData.webUrl}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-white placeholder-black bg-gray-100"
          />
          <div className="flex items-start gap-2 text-sm text-white">
            <input
              name="consent"
              type="checkbox"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1"
            />
            <label>
              By filling out the registration form to attend our event, you
              agree and consent to{" "}
              <a href="#" className="text-white hover:text-pink-200">
                Cogent Solutions Privacy Policy.
              </a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-900 hover:bg-blue-600 text-white transition-colors py-3 rounded-md font-semibold"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
