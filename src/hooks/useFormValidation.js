import { useState } from 'react';

const useFormValidation = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    
    if (type === 'file') {
      setValues((prev) => ({
        ...prev,
        [name]: files[0] || null,
      }));
    } else {
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    
    const validationErrors = validate(values);
    if (validationErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validationErrors[name] }));
    }
  };

  const handleSubmit = async (onSubmit) => {
    setIsSubmitting(true);
    const validationErrors = validate(values);
    
    const allTouched = Object.keys(values).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);
    
    if (Object.keys(validationErrors).length === 0) {
      try {
        await onSubmit(values);
        setValues(initialState);
        setErrors({});
        setTouched({});
      } catch (error) {
        console.error("Submission error:", error);
        setErrors({ submit: error.message || 'An error occurred. Please try again.' });
      }
    } else {
      setErrors(validationErrors);
    }
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setValues(initialState);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm
  };
};

export default useFormValidation;