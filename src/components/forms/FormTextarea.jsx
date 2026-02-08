const FormTextarea = ({
  id,
  name,
  label,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  disabled = false,
  rows = 4,
  className = ''
}) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        placeholder={placeholder}
        rows={rows}
        className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-colors resize-none ${
          error 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-gray-300'
        } ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
        aria-required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {error && (
        <p 
          id={`${id}-error`}
          className="mt-1 text-sm text-red-600" 
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FormTextarea;