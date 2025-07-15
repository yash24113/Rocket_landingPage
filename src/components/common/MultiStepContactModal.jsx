import React, { useState, useEffect, useRef } from 'react';

const steps = [
  { label: 'Name', name: 'name', type: 'text', placeholder: 'Enter your Name' },
  { label: 'Email', name: 'email', type: 'email', placeholder: 'Enter your email' },
  { label: 'Phone', name: 'phone', type: 'tel', placeholder: 'Enter your phone number' },
  { label: 'Message', name: 'message', type: 'textarea', placeholder: 'Enter your message' },
];

export default function MultiStepContactModal({ open, onClose, initialEmail }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [abVariant, setAbVariant] = useState('A'); // A/B variant state
  const modalRef = useRef(null);

  // Assign A/B variant on modal open
  useEffect(() => {
    if (open) {
      const variant = Math.random() < 0.5 ? 'A' : 'B';
      setAbVariant(variant);
    }
  }, [open]);

  // Focus trap for accessibility
  useEffect(() => {
    if (open && modalRef.current) {
      modalRef.current.focus();
    }
  }, [open]);

  // Pre-fill email if initialEmail is provided and modal is opened
  useEffect(() => {
    if (open && initialEmail) {
      setForm((prev) => ({ ...prev, email: initialEmail }));
    }
  }, [open, initialEmail]);

  // Google Analytics event sender
  const sendGAEvent = (action) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'modal_button_click', {
        event_category: 'BusinessIQ_Modal',
        event_label: `${action}_variant_${abVariant}`,
        step: step + 1,
      });
    }
  };

  if (!open) return null;

  const handleChange = (e) => {
    setForm({ ...form, [steps[step].name]: e.target.value });
  };

  const handleNext = () => {
    sendGAEvent('Next');
    if (step < steps.length - 1) setStep(step + 1);
  };
  const handlePrev = () => {
    sendGAEvent('Prev');
    if (step > 0) setStep(step - 1);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    sendGAEvent('Submit');
    setSubmitting(true);
    try {
      const response = await fetch('https://age-landing-backend.egport.com/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          step: 3, // Always submit with step 3 as per final step
        }),
      });
      if (!response.ok) throw new Error('Failed to submit');
      setSubmitted(true);
      setTimeout(() => {
        window.location.href = 'https://fabric-shop-frontend-production.up.railway.app/';
      }, 1500);
    } catch (error) {
      alert('There was an error submitting your inquiry. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // Animation classes
  const modalAnim = 'transition-all duration-400 ease-in-out transform';
  // A/B background color
  const modalBg = abVariant === 'A' ? 'bg-white' : 'bg-lime-400'; // B is lime

  return (
    <div className="fixed inset-0 z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
        aria-hidden="true"
        onClick={onClose}
      />
      {/* Modal Card */}
      <div
        ref={modalRef}
        tabIndex={-1}
        aria-modal="true"
        role="dialog"
        className={`fixed w-full max-w-sm sm:max-w-md ${modalBg} rounded-2xl shadow-2xl p-6 sm:p-8 flex flex-col animate-slideUp ${modalAnim} right-0 bottom-0 z-50
          sm:right-6 sm:bottom-6
          min-h-[320px]
          sm:w-[380px]
        `}
        style={{ minHeight: 320 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 text-gray-400 hover:text-[#0a6563] text-2xl sm:text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-[#0a6563]/50 transition-all duration-200"
        >
          &times;
        </button>
        {/* Step Indicators */}
        <div className="flex justify-center items-center mb-6 mt-2 gap-2">
          {steps.map((_, idx) => (
            <span
              key={idx}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === step ? 'bg-[#0a6563] scale-125 shadow' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        {submitted ? (
          <div className="flex flex-col items-center justify-center py-12 animate-fadeIn">
            <div className="text-green-600 text-4xl mb-2">✓</div>
            <div className="font-semibold mb-1 text-lg">Thank you!</div>
            <div className="text-gray-600 text-sm text-center">Your message has been sent.</div>
            <button
              className="mt-6 px-5 py-2 rounded bg-[#0a6563] text-white font-medium hover:bg-[#0a6563]/90 focus:bg-[#0a6563]/80 transition shadow"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 animate-fadeIn">
            <div className="mb-4">
              <label className="block text-sm font-semibold text-[#0a6563] mb-1 animate-fadeInUp">{steps[step].label}</label>
              {steps[step].type === 'textarea' ? (
                <textarea
                  name={steps[step].name}
                  value={form[steps[step].name]}
                  onChange={handleChange}
                  placeholder={steps[step].placeholder}
                  className="w-full border border-[#0a6563] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a6563]/50 focus:border-[#0a6563] transition-all duration-200 shadow-sm hover:border-[#0a6563]/80 placeholder:text-[#757575] min-h-[80px]"
                  rows={3}
                />
              ) : (
                <input
                  type={steps[step].type}
                  name={steps[step].name}
                  value={form[steps[step].name]}
                  onChange={handleChange}
                  placeholder={steps[step].placeholder}
                  className="w-full border border-[#0a6563] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#0a6563]/50 focus:border-[#0a6563] transition-all duration-200 shadow-sm hover:border-[#0a6563]/80 placeholder:text-[#757575]"
                />
              )}
            </div>
            <div className="flex justify-between items-center mt-6 gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className={`px-4 py-2 rounded-lg bg-[#0a6563] text-white font-semibold shadow hover:bg-[#0a6563]/90 focus:bg-[#0a6563]/80 transition-all duration-150 active:scale-95 ${step === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={step === 0}
              >
                Prev
              </button>
              {step < steps.length - 1 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="px-4 py-2 rounded-lg bg-[#0a6563] text-white font-semibold shadow hover:bg-[#0a6563]/90 focus:bg-[#0a6563]/80 transition-all duration-150 active:scale-95"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-[#0a6563] text-white font-semibold shadow hover:bg-[#0a6563]/90 focus:bg-[#0a6563]/80 transition-all duration-150 active:scale-95 disabled:opacity-50"
                  disabled={submitting}
                >
                  {submitting ? 'Submitting...' : 'Submit'}
                </button>
              )}
            </div>
          </form>
        )}
        <style jsx global>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease;
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInUp {
            animation: fadeInUp 0.4s cubic-bezier(0.4,0,0.2,1);
          }
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(60px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-slideUp {
            animation: slideUp 0.4s cubic-bezier(0.4,0,0.2,1);
          }
        `}</style>
      </div>
    </div>
  );
}