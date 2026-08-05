import React, { useState } from 'react';

const STEPS = [
  { id: 1, label: 'Personal Info', icon: 'fa-user' },
  { id: 2, label: 'Academic Info', icon: 'fa-graduation-cap' },
  { id: 3, label: 'Social Links', icon: 'fa-link' },
  { id: 4, label: 'Review', icon: 'fa-check-to-slot' },
];

const ACADEMIC_DATA = {
  'College of Information Technology': [
    'Bachelors of Science in Information Technology',
  ],
  'College of Teachers Education': [
    'Bachelors of Science in Elementary Education',
    'Bachelors of Science in Secondary Education - Major in Math',
    'Bachelors of Science in Secondary Education - Major in English',
  ],
  'College of Hotel and Tourism Management': [
    'Bachelors of Science in Hotel Management',
    'Bachelors of Science in Tourism Management',
  ],
};

const InputField = ({ label, name, type = 'text', value, onChange, required, placeholder }) => (
  <div className="flex flex-col gap-1.5 mb-4">
    <label className="text-[0.85rem] font-bold text-text-main uppercase tracking-wider pl-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
      className="w-full bg-[rgba(255,255,255,0.6)] border border-[rgba(37,119,212,0.2)] rounded-xl px-4 py-3 text-[0.95rem] text-text-main outline-none transition-all duration-200 focus:bg-white focus:border-[#1a60b8] focus:shadow-[0_4px_12px_rgba(37,119,212,0.1)] placeholder:text-text-muted"
    />
  </div>
);

const MembershipForm = ({ onSubmitComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isNextLoading, setIsNextLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    // Step 1: Personal Info
    firstName: '',
    lastName: '',
    middleName: '',
    nickname: '',
    email: '',
    studentId: '',
    birthdate: '',
    // Step 2: Academics
    college: '',
    program: '',
    yearLevel: '',
    // Step 3: Social Links
    facebook: '',
    linkedin: '',
    github: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // If college changes, reset the program
    if (name === 'college') {
      setFormData((prev) => ({ ...prev, college: value, program: '' }));
    } else {
      // Auto-capitalize personal info text fields for uniformity (names and student ID)
      const uppercaseFields = ['firstName', 'lastName', 'middleName', 'nickname', 'studentId'];
      const processedValue = uppercaseFields.includes(name) ? value.toUpperCase() : value;
      
      setFormData((prev) => ({ ...prev, [name]: processedValue }));
    }
  };

  const handleNext = () => {
    const form = document.getElementById('membership-form');
    if (form.checkValidity()) {
      setIsNextLoading(true);

      // Simulated frontend validation/loading delay
      setTimeout(() => {
        if (currentStep < 4) {
          setCurrentStep((prev) => prev + 1);
          // Scroll back to top of form area
          const scrollArea = document.getElementById('form-scroll-area');
          if (scrollArea) scrollArea.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsNextLoading(false);
      }, 800);
    } else {
      form.reportValidity();
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
      const scrollArea = document.getElementById('form-scroll-area');
      if (scrollArea) scrollArea.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsNextLoading(true);
    setError(null);

    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

    try {
      const response = await fetch(`${apiUrl}/memberships`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Something went wrong. Please try again.');
      }

      console.log('Form Submitted Successfully', result);
      setIsNextLoading(false);
      setIsSuccess(true);
    } catch (err) {
      console.error('Submission Error:', err);
      setError(err.message);
      setIsNextLoading(false);
      
      // Scroll back to top of form area to show the error message
      const scrollArea = document.getElementById('form-scroll-area');
      if (scrollArea) scrollArea.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Prevent form submission on enter key during steps 1-3
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (currentStep === 4) {
      handleSubmit(e);
    } else {
      handleNext();
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full flex flex-col items-center justify-center p-8 sm:p-12 text-center h-full animate-fadeIn max-w-[500px] mx-auto">
        <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-6 shadow-[0_8px_24px_rgba(16,185,129,0.15)] border border-emerald-100">
          <i className="fa-solid fa-circle-check text-4xl animate-bounce"></i>
        </div>
        <h3 className="text-2xl font-extrabold text-text-main mb-3">Application Submitted!</h3>
        <p className="text-sm text-text-muted leading-relaxed mb-8">
          Thank you for applying to the <strong>AWS Cloud Club - Flurry</strong>! Your application has been registered successfully. Our team will verify your details and notify you via email shortly.
        </p>
        <button
          type="button"
          onClick={onSubmitComplete}
          className="btn-glow bg-[#1a60b8] text-white px-8 py-3 rounded-xl font-bold text-[0.95rem] transition-all hover:bg-[#2577d4] shadow-[0_4px_14px_rgba(26,96,184,0.3)] hover:shadow-[0_6px_20px_rgba(26,96,184,0.4)] w-full"
        >
          Awesome, Close
        </button>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col h-full overflow-hidden">
      {/* Stepper */}
      <div className="px-6 sm:px-8 py-6 border-b border-[rgba(0,0,0,0.05)] bg-[rgba(240,249,255,0.3)] flex-shrink-0">
        <div className="flex justify-between items-center relative max-w-[500px] mx-auto">
          {/* Connecting line */}
          <div className="absolute top-[18px] left-[10%] right-[10%] h-[2px] bg-[rgba(37,119,212,0.15)] z-[0]" />
          <div
            className="absolute top-[18px] left-[10%] h-[2px] bg-[#1a60b8] z-[1] transition-all duration-300 ease-out"
            style={{ width: `${((currentStep - 1) / 3) * 80}%` }}
          />

          {STEPS.map((step) => {
            const isActive = currentStep === step.id;
            const isCompleted = currentStep > step.id;

            return (
              <div key={step.id} className="relative z-[2] flex flex-col items-center gap-2">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-[0.9rem] font-bold transition-all duration-300 ${isActive || isCompleted
                      ? 'bg-[#1a60b8] text-white shadow-[0_4px_12px_rgba(26,96,184,0.3)]'
                      : 'bg-white border-2 border-[rgba(37,119,212,0.2)] text-[#1a60b8]'
                    }`}
                >
                  {isCompleted ? <i className="fa-solid fa-check"></i> : <i className={`fa-solid ${step.icon}`}></i>}
                </div>
                <span
                  className={`text-[0.7rem] sm:text-[0.75rem] font-bold uppercase tracking-wider absolute top-10 w-24 text-center ${isActive ? 'text-[#1a60b8]' : 'text-text-muted'
                    }`}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Form Content - Scrollable area */}
      <div
        id="form-scroll-area"
        className="flex-1 overflow-y-auto px-6 sm:px-10 py-10 scroll-smooth"
        style={{ scrollbarWidth: 'thin', scrollbarColor: '#bfdbfe transparent' }}
      >
        <form id="membership-form" onSubmit={handleFormSubmit} className="max-w-[600px] mx-auto pb-10">
          {error && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm flex items-start gap-2.5 animate-fadeIn">
              <i className="fa-solid fa-triangle-exclamation mt-0.5"></i>
              <div>
                <p className="font-bold">Submission Failed</p>
                <p className="opacity-90">{error}</p>
              </div>
            </div>
          )}
          {currentStep === 1 && (
            <div className="animate-fadeIn">
              <h3 className="text-xl font-extrabold text-text-main mb-6">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <InputField label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required placeholder="Juan" />
                <InputField label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required placeholder="Dela Cruz" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <InputField label="Middle Name" name="middleName" value={formData.middleName} onChange={handleChange} placeholder="Santos (Optional)" />
                <InputField label="Nickname" name="nickname" value={formData.nickname} onChange={handleChange} placeholder="Enting" />
              </div>
              <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="enting@example.com" />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                <InputField label="Student ID" name="studentId" value={formData.studentId} onChange={handleChange} required placeholder="23XXXXX" />
                <InputField label="Birthdate" name="birthdate" type="date" value={formData.birthdate} onChange={handleChange} required />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="animate-fadeIn">
              <h3 className="text-xl font-extrabold text-text-main mb-6">Academic Background</h3>
              
              <div className="flex flex-col gap-1.5 mb-4">
                <label className="text-[0.85rem] font-bold text-text-main uppercase tracking-wider pl-1">
                  College / Department <span className="text-red-500">*</span>
                </label>
                <select
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  required
                  className="w-full bg-[rgba(255,255,255,0.6)] border border-[rgba(37,119,212,0.2)] rounded-xl px-4 py-3 text-[0.95rem] text-text-main outline-none transition-all duration-200 focus:bg-white focus:border-[#1a60b8] focus:shadow-[0_4px_12px_rgba(37,119,212,0.1)]"
                >
                  <option value="" disabled>Select College</option>
                  {Object.keys(ACADEMIC_DATA).map((college) => (
                    <option key={college} value={college}>{college}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5 mb-4">
                <label className="text-[0.85rem] font-bold text-text-main uppercase tracking-wider pl-1">
                  Program / Course <span className="text-red-500">*</span>
                </label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  disabled={!formData.college}
                  className="w-full bg-[rgba(255,255,255,0.6)] border border-[rgba(37,119,212,0.2)] rounded-xl px-4 py-3 text-[0.95rem] text-text-main outline-none transition-all duration-200 focus:bg-white focus:border-[#1a60b8] focus:shadow-[0_4px_12px_rgba(37,119,212,0.1)] disabled:opacity-50"
                >
                  <option value="" disabled>Select Program</option>
                  {formData.college && ACADEMIC_DATA[formData.college].map((program) => (
                    <option key={program} value={program}>{program}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5 mb-4">
                <label className="text-[0.85rem] font-bold text-text-main uppercase tracking-wider pl-1">
                  Year Level <span className="text-red-500">*</span>
                </label>
                <select
                  name="yearLevel"
                  value={formData.yearLevel}
                  onChange={handleChange}
                  required
                  className="w-full bg-[rgba(255,255,255,0.6)] border border-[rgba(37,119,212,0.2)] rounded-xl px-4 py-3 text-[0.95rem] text-text-main outline-none transition-all duration-200 focus:bg-white focus:border-[#1a60b8] focus:shadow-[0_4px_12px_rgba(37,119,212,0.1)]"
                >
                  <option value="" disabled>Select Year Level</option>
                  <option value="1st Year">1st Year</option>
                  <option value="2nd Year">2nd Year</option>
                  <option value="3rd Year">3rd Year</option>
                  <option value="4th Year">4th Year</option>
                  <option value="5th Year">5th Year</option>
                  <option value="Alumni">Alumni</option>
                </select>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="animate-fadeIn">
              <h3 className="text-xl font-extrabold text-text-main mb-6">Social Links</h3>
              <p className="text-sm text-text-muted mb-6">Connect with us! Please provide your social profile links.</p>
              <InputField label="Facebook Profile" name="facebook" type="url" value={formData.facebook} onChange={handleChange} placeholder="https://facebook.com/yourprofile" />
              <InputField label="LinkedIn Profile" name="linkedin" type="url" value={formData.linkedin} onChange={handleChange} placeholder="https://linkedin.com/in/yourprofile" />
              <InputField label="GitHub Profile" name="github" type="url" value={formData.github} onChange={handleChange} placeholder="https://github.com/yourusername" />
            </div>
          )}

          {currentStep === 4 && (
            <div className="animate-fadeIn">
              <h3 className="text-xl font-extrabold text-text-main mb-6">Review Application</h3>
              <p className="text-sm text-text-muted mb-6">Please review your information before submitting. The club will use this to validate your application.</p>

              <div className="bg-white/50 border border-[rgba(37,119,212,0.15)] rounded-2xl p-5 mb-6 space-y-4 text-[0.95rem]">
                <div>
                  <h4 className="font-bold text-[#1a60b8] text-[0.8rem] uppercase tracking-wider mb-2">Personal Info</h4>
                  <div className="grid grid-cols-2 gap-2 text-text-main">
                    <span className="text-text-muted">Name:</span> <span>{formData.firstName} {formData.middleName} {formData.lastName}</span>
                    <span className="text-text-muted">Nickname:</span> <span>{formData.nickname || '-'}</span>
                    <span className="text-text-muted">Email:</span> <span>{formData.email}</span>
                    <span className="text-text-muted">Student ID:</span> <span>{formData.studentId}</span>
                    <span className="text-text-muted">Birthdate:</span> <span>{formData.birthdate}</span>
                  </div>
                </div>
                <div className="h-[1px] bg-[rgba(37,119,212,0.1)] w-full my-2"></div>
                <div>
                  <h4 className="font-bold text-[#1a60b8] text-[0.8rem] uppercase tracking-wider mb-2">Academics</h4>
                  <div className="grid grid-cols-2 gap-2 text-text-main">
                    <span className="text-text-muted">College:</span> <span>{formData.college}</span>
                    <span className="text-text-muted">Program:</span> <span>{formData.program}</span>
                    <span className="text-text-muted">Year Level:</span> <span>{formData.yearLevel}</span>
                  </div>
                </div>
                <div className="h-[1px] bg-[rgba(37,119,212,0.1)] w-full my-2"></div>
                <div>
                  <h4 className="font-bold text-[#1a60b8] text-[0.8rem] uppercase tracking-wider mb-2">Socials</h4>
                  <div className="grid grid-cols-2 gap-2 text-text-main">
                    <span className="text-text-muted">Facebook:</span> <span className="truncate">{formData.facebook || '-'}</span>
                    <span className="text-text-muted">LinkedIn:</span> <span className="truncate">{formData.linkedin || '-'}</span>
                    <span className="text-text-muted">GitHub:</span> <span className="truncate">{formData.github || '-'}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </form>
      </div>

      {/* Footer Navigation */}
      <div className="px-4 sm:px-10 py-5 border-t border-[rgba(0,0,0,0.05)] bg-[rgba(240,249,255,0.4)] flex justify-between items-center flex-shrink-0 gap-3">
        <button
          type="button"
          onClick={handlePrev}
          disabled={isNextLoading}
          className={`px-4 sm:px-6 py-2.5 rounded-xl font-semibold text-[0.9rem] sm:text-[0.95rem] transition-all duration-200 ${currentStep === 1
              ? 'opacity-0 pointer-events-none'
              : 'text-[#1a60b8] bg-white border border-[rgba(37,119,212,0.2)] hover:bg-[rgba(37,119,212,0.05)] hover:-translate-y-[1px]'
            } ${isNextLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          Back
        </button>

        {currentStep < 4 ? (
          <button
            type="button"
            onClick={handleNext}
            disabled={isNextLoading}
            className="btn-glow bg-[#1a60b8] text-white px-5 sm:px-8 py-2.5 rounded-xl font-semibold text-[0.9rem] sm:text-[0.95rem] transition-all hover:bg-[#2577d4] shadow-[0_4px_14px_rgba(26,96,184,0.3)] hover:shadow-[0_6px_20px_rgba(26,96,184,0.4)] flex items-center gap-2 min-w-[110px] sm:min-w-[140px] justify-center"
          >
            {isNextLoading ? (
              <>
                <i className="fa-solid fa-circle-notch animate-spin"></i>
                <span className="hidden xs:inline">Validating...</span>
                <span className="xs:hidden">Wait...</span>
              </>
            ) : (
              'Next Step'
            )}
          </button>
        ) : (
          <button
            type="submit"
            form="membership-form"
            disabled={isNextLoading}
            className="btn-glow bg-[#10b981] text-white px-5 sm:px-8 py-2.5 rounded-xl font-semibold text-[0.9rem] sm:text-[0.95rem] transition-all hover:bg-[#059669] shadow-[0_4px_14px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.4)] flex items-center gap-2 min-w-[120px] sm:min-w-[140px] justify-center"
          >
            {isNextLoading ? (
              <>
                <i className="fa-solid fa-circle-notch animate-spin"></i>
                <span className="hidden xs:inline">Submitting...</span>
                <span className="xs:hidden">Wait...</span>
              </>
            ) : (
              <>
                <i className="fa-solid fa-paper-plane"></i> Submit
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default MembershipForm;
