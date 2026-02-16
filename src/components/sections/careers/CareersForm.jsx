import { useState } from "react";
import { Container, AnimatedSection } from "../../layout";
import { FormInput, FormSelect, FormButton, FormTextarea } from "../../forms";
import { SectionHeading } from "../../element";
import { useFormValidation } from "../../../hooks";
import { sendCareerEmail } from "../../../services";

const CareersForm = () => {
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const roleOptions = [
    { value: "brand-strategist", label: "Brand Strategist" },
    { value: "digital-marketer", label: "Digital Marketing Specialist" },
    { value: "content-writer", label: "Content Writer" },
    { value: "pr-specialist", label: "PR Specialist" },
    { value: "social-media-manager", label: "Social Media Manager" },
    { value: "graphic-designer", label: "Graphic Designer" },
    { value: "other", label: "Other" },
  ];

  const genderOptions = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const validate = (values) => {
    const errors = {};

    if (!values.name.trim()) {
      errors.name = "Name is required";
    } else if (values.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
    }

    if (!values.dob) {
      errors.dob = "Date of birth is required";
    } else {
      const dob = new Date(values.dob);
      const today = new Date();
      const age = today.getFullYear() - dob.getFullYear();
      if (age < 18) {
        errors.dob = "You must be at least 18 years old";
      }
    }

    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^[\d\s\-+()]{10,}$/.test(values.phone)) {
      errors.phone = "Please enter a valid phone number";
    }

    if (!values.address.trim()) {
      errors.address = "Address is required";
    } else if (values.address.trim().length < 10) {
      errors.address = "Please provide a complete address";
    }

    if (!values.district.trim()) {
      errors.district = "District is required";
    }

    if (!values.state.trim()) {
      errors.state = "State is required";
    }

    if (!values.gender) {
      errors.gender = "Gender is required";
    }

    if (!values.role) {
      errors.role = "Please select a position";
    }

    if (values.role === "other" && !values.customRole.trim()) {
      errors.customRole = "Please specify the position";
    }

    if (!values.about.trim()) {
      errors.about = "Please tell us about yourself";
    } else if (values.about.trim().length < 50) {
      errors.about = "Please provide at least 50 characters";
    }

    if (!values.photoUrl.trim()) {
      errors.photoUrl = "Photo URL is required";
    } else if (!/^https?:\/\/.+/.test(values.photoUrl)) {
      errors.photoUrl =
        "Please enter a valid URL (starting with http:// or https://)";
    }

    if (!values.resumeUrl.trim()) {
      errors.resumeUrl = "Resume URL is required";
    } else if (!/^https?:\/\/.+/.test(values.resumeUrl)) {
      errors.resumeUrl =
        "Please enter a valid URL (starting with http:// or https://)";
    }

    if (
      values.identityProofUrl.trim() &&
      !/^https?:\/\/.+/.test(values.identityProofUrl)
    ) {
      errors.identityProofUrl =
        "Please enter a valid URL (starting with http:// or https://)";
    }

    return errors;
  };

  const {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useFormValidation(
    {
      name: "",
      dob: "",
      email: "",
      phone: "",
      address: "",
      district: "",
      state: "",
      gender: "",
      role: "",
      customRole: "",
      photoUrl: "",
      resumeUrl: "",
      identityProofUrl: "",
      about: "",
    },
    validate
  );

  const onSubmit = async (data) => {
    try {
      const submissionData = {
        ...data,
        role: data.role === "other" ? data.customRole : data.role,
        identityProofUrl: data.identityProofUrl || "Not provided",
      };

      const result = await sendCareerEmail(submissionData);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for your application! We'll review it and get back to you soon.",
        });
        resetForm();
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.message || "Failed to submit application. Please try again.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "An unexpected error occurred. Please try again later.",
      });
    }

    setTimeout(() => setSubmitStatus({ type: "", message: "" }), 5000);
  };

  return (
    <section className="py-20 bg-white">
      <Container>
        <AnimatedSection>
          <SectionHeading
            backgroundText="APPLY"
            title="Start your journey with us."
          />
        </AnimatedSection>

        <AnimatedSection className="max-w-3xl mx-auto mt-12">
          <div className="bg-ivory p-8 rounded-lg shadow-lg">
            {submitStatus.message && (
              <div
                className={`mb-6 p-4 rounded-lg border ${submitStatus.type === "success"
                    ? "bg-green-100 border-green-400 text-green-700"
                    : "bg-red-100 border-red-400 text-red-700"
                  }`}
                role="alert"
              >
                {submitStatus.message}
              </div>
            )}

            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(onSubmit);
              }}
              className="space-y-6"
              noValidate
            >
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  Personal Information
                </h3>

                <FormInput
                  id="name"
                  name="name"
                  label="Full Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name}
                  required
                  placeholder="John Doe"
                  autoComplete="name"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    id="dob"
                    name="dob"
                    type="date"
                    label="Date of Birth"
                    value={values.dob}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.dob}
                    required
                    autoComplete="bday"
                  />

                  <FormSelect
                    id="gender"
                    name="gender"
                    label="Gender"
                    value={values.gender}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.gender}
                    required
                    options={genderOptions}
                    placeholder="Select gender"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  Contact Information
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    id="email"
                    name="email"
                    type="email"
                    label="Email Address"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email}
                    required
                    placeholder="john.doe@example.com"
                    autoComplete="email"
                  />

                  <FormInput
                    id="phone"
                    name="phone"
                    type="tel"
                    label="Mobile Number"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.phone}
                    required
                    placeholder="+91 98765 43210"
                    autoComplete="tel"
                  />
                </div>

                <FormTextarea
                  id="address"
                  name="address"
                  label="Address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.address}
                  required
                  rows={3}
                  placeholder="House No., Street, Locality"
                  autoComplete="street-address"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    id="district"
                    name="district"
                    label="District"
                    value={values.district}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.district}
                    required
                    placeholder="e.g., Gurugram"
                  />

                  <FormInput
                    id="state"
                    name="state"
                    label="State"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.state}
                    required
                    placeholder="e.g., Haryana"
                  />
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  Application Details
                </h3>

                <FormSelect
                  id="role"
                  name="role"
                  label="Position Applied For"
                  value={values.role}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.role}
                  required
                  options={roleOptions}
                  placeholder="Select a role"
                />

                {values.role === "other" && (
                  <FormInput
                    id="customRole"
                    name="customRole"
                    label="Please specify the position"
                    value={values.customRole}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.customRole}
                    required
                    placeholder="Enter position title"
                  />
                )}

                <FormTextarea
                  id="about"
                  name="about"
                  label="About You"
                  value={values.about}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.about}
                  required
                  rows={6}
                  placeholder="Tell us about your background, skills, experience, and why you're interested in this position..."
                />
              </div>

              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-800 border-b pb-2">
                  Documents
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput
                    id="photoUrl"
                    name="photoUrl"
                    type="url"
                    label="Photo URL"
                    value={values.photoUrl}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.photoUrl}
                    required
                    placeholder="https://example.com/your-photo.jpg"
                  />

                  <FormInput
                    id="resumeUrl"
                    name="resumeUrl"
                    type="url"
                    label="Resume/CV URL"
                    value={values.resumeUrl}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.resumeUrl}
                    required
                    placeholder="https://example.com/your-resume.pdf"
                  />
                </div>

                <FormInput
                  id="identityProofUrl"
                  name="identityProofUrl"
                  type="url"
                  label="Identity Proof URL (Aadhaar/Any Government ID)"
                  value={values.identityProofUrl}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.identityProofUrl}
                  placeholder="https://example.com/your-id.pdf (Optional)"
                />
                <p className="text-sm text-gray-500 -mt-4">
                  Optional: Upload your Aadhaar card or any government-issued
                  identity proof
                </p>
              </div>

              <FormButton
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
                fullWidth
              >
                {isSubmitting
                  ? "Submitting Application..."
                  : "Submit Application"}
              </FormButton>
            </form>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default CareersForm;
