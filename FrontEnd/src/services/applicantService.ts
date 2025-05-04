
export interface ApplicantData {
    firstName: string;
    lastName: string;
    jobTitle: string;
    companyName: string;
    mobileNumber: string;
    email: string;
    webUrl: string;
    consent: boolean;
  }
  
  export const addApplicant = async (formData: ApplicantData): Promise<Response> => {
    const response = await fetch("https://localhost:7058/api/Applicant/api/AddApplicants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  
    return response;
  };
  