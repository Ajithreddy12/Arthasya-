import emailjs from "@emailjs/browser";

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  templates: {
    contact: import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT,
    application: import.meta.env.VITE_EMAILJS_TEMPLATE_APPLICATION,
  },
};

emailjs.init(EMAILJS_CONFIG.publicKey);

const sendEmail = async (templateId, templateParams) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      templateId,
      templateParams
    );

    console.log("Email sent successfully:", response.status, response.text);
    return {
      success: true,
      message: "Email sent successfully!",
      response,
    };
  } catch (error) {
    console.error("EmailJS Error:", error);
    return {
      success: false,
      message: error.text || "Failed to send email. Please try again.",
      error,
    };
  }
};

export const sendContactEmail = async (formData) => {
  const templateParams = {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    subject: formData.subject,
    message: formData.message,
  };

  return sendEmail(EMAILJS_CONFIG.templates.contact, templateParams);
};

export const sendCareerEmail = async (formData) => {
  const templateParams = {
    form_type: "Career Application",
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    dob: formData.dob,
    address: formData.address,
    district: formData.district,
    state: formData.state,
    gender: formData.gender,
    about: formData.about,
    position: formData.role || "General Application",
    photo_url: formData.photoUrl || "Not provided",
    resume_url: formData.resumeUrl || "Not provided",
    identity_proof_url: formData.identityProofUrl || "Not provided",
  };

  return sendEmail(EMAILJS_CONFIG.templates.application, templateParams);
};

export const sendFreelancerEmail = async (formData) => {
  const templateParams = {
    form_type: "Freelancer Application",
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    dob: formData.dob,
    address: formData.address,
    district: formData.district,
    state: formData.state,
    gender: formData.gender,
    about: formData.about,
    position: formData.role || "Freelancer",
    photo_url: formData.photoUrl || "Not provided",
    resume_url: formData.resumeUrl || "Not provided",
    identity_proof_url: formData.identityProofUrl || "Not provided",
  };

  return sendEmail(EMAILJS_CONFIG.templates.application, templateParams);
};

export default {
  sendContactEmail,
  sendCareerEmail,
  sendFreelancerEmail,
};
