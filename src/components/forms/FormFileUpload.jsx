import { useState } from 'react';

const FormFileUpload = ({
  id,
  name,
  label,
  onChange,
  error,
  required = false,
  disabled = false,
  accept,
  helpText,
  className = ''
}) => {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName('');
    }
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          type="file"
          id={id}
          name={name}
          onChange={handleFileChange}
          disabled={disabled}
          accept={accept}
          className="hidden"
          aria-required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : helpText ? `${id}-help` : undefined}
        />
        <label
          htmlFor={id}
          className={`flex items-center justify-center w-full px-4 py-3 border-2 border-dashed rounded-lg cursor-pointer transition-colors ${
            error 
              ? 'border-red-500 hover:border-red-600' 
              : 'border-gray-300 hover:border-primary'
          } ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'hover:bg-gray-50'}`}
        >
          <div className="text-center">
            {fileName ? (
              <div className="flex items-center space-x-2">
                <span className="text-2xl">📄</span>
                <span className="text-sm text-gray-700">{fileName}</span>
              </div>
            ) : (
              <div className="space-y-1">
                <span className="text-2xl">📁</span>
                <p className="text-sm text-gray-600">
                  Click to upload or drag and drop
                </p>
              </div>
            )}
          </div>
        </label>
      </div>
      {helpText && !error && (
        <p id={`${id}-help`} className="mt-1 text-sm text-gray-500">
          {helpText}
        </p>
      )}
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

export default FormFileUpload;