import { useState } from "react";
import { Container, AnimatedSection } from "../../layout";
import { FormInput, FormTextarea, FormButton } from "../../forms";
import { SectionHeading } from "../../element";
import { useFormValidation } from "../../../hooks";
import { sendContactEmail } from "../../../services/";

const ContactForm = () => {
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

  const validate = (values) => {
    const errors = {};

    if (!values.name.trim()) {
      errors.name = "Name is required";
    } else if (values.name.trim().length < 2) {
      errors.name = "Name must be at least 2 characters";
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

    if (!values.subject.trim()) {
      errors.subject = "Subject is required";
    } else if (values.subject.trim().length < 3) {
      errors.subject = "Subject must be at least 3 characters";
    }

    if (!values.message.trim()) {
      errors.message = "Message is required";
    } else if (values.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters";
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
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validate
  );

  const onSubmit = async (data) => {
    try {
      const result = await sendContactEmail(data);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Thank you for contacting us! We'll get back to you within 24 hours.",
        });
        resetForm();
      } else {
        setSubmitStatus({
          type: "error",
          message:
            result.message || "Failed to send message. Please try again.",
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
    <section className="py-20 bg-ivory">
      <Container>
        <AnimatedSection>
          <SectionHeading
            backgroundText="MESSAGE"
            title="Share your thoughts with us."
          />
        </AnimatedSection>

        <AnimatedSection className="max-w-3xl mx-auto mt-12">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {submitStatus.message && (
              <div
                className={`mb-6 p-4 rounded-lg border ${
                  submitStatus.type === "success"
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormInput
                  id="phone"
                  name="phone"
                  type="tel"
                  label="Phone Number"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.phone}
                  required
                  placeholder="+91 98765 43210"
                  autoComplete="tel"
                />

                <FormInput
                  id="subject"
                  name="subject"
                  label="Subject"
                  value={values.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.subject}
                  required
                  placeholder="How can we help?"
                />
              </div>

              <FormTextarea
                id="message"
                name="message"
                label="Message"
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.message}
                required
                rows={6}
                placeholder="Tell us about your project or inquiry..."
              />

              <FormButton
                type="submit"
                loading={isSubmitting}
                disabled={isSubmitting}
                fullWidth
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </FormButton>
            </form>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
};

export default ContactForm;
