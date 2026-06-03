import React, { useState } from "react";

export default function ContactForm() {
  // Central state matrix to keep track of user input data variables
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Track submission success feedback
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle live input state modifications dynamically
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Process core form submission actions
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting secure contact transaction payload:", formData);
    
    // Simulate API success lifecycle callback trigger
    setIsSubmitted(true);
    
    // Wipe form variables clean post-submission
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });

    // Automatically fade out the success confirmation banner after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="w-full bg-white py-16 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Form Outer Card Content Box Base */}
        <div className="bg-[#FFFBF7] border border-[#F1E7DE] rounded-3xl p-8 md:p-12 shadow-xs relative">
          
          {/* Section Callout Heading Stack */}
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <h2 className="font-serif text-[#4A3B32] font-bold text-2xl sm:text-3xl tracking-tight">
              Send Us A Message
            </h2>
            <p className="text-[#705A4F] text-xs sm:text-sm font-medium leading-relaxed">
              Have a question or feedback? Fill out the short container form below, and our premium beauty care team will get back to you shortly.
            </p>
          </div>

          {/* 🟢 Interactive Status Success Banner */}
          {isSubmitted && (
            <div className="mb-6 w-full p-4 rounded-xl bg-green-50 border border-green-200 text-green-800 text-sm font-semibold flex items-center gap-3 animate-fade-in select-none">
              <i className="fa-solid fa-circle-check text-base text-green-600"></i>
              Thank you! Your message has been sent successfully. We will reach out to you soon.
            </div>
          )}

          {/* Core HTML Interactivity Form */}
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            
            {/* Top Row: Two-Column Flex Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Field 1: Full Name */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="fullName" className="text-xs font-bold text-[#4A3B32] uppercase tracking-wider">
                  Full Name <span className="text-[#E07A5F]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g., Almaz Abebe"
                  className="w-full bg-white border border-[#F2E3D5] rounded-xl px-4 py-3 text-sm text-[#4A3B32] placeholder-[#A47E6C]/50 focus:outline-hidden focus:border-[#E07A5F] transition duration-200"
                />
              </div>

              {/* Field 2: Email Address */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-xs font-bold text-[#4A3B32] uppercase tracking-wider">
                  Email Address <span className="text-[#E07A5F]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full bg-white border border-[#F2E3D5] rounded-xl px-4 py-3 text-sm text-[#4A3B32] placeholder-[#A47E6C]/50 focus:outline-hidden focus:border-[#E07A5F] transition duration-200"
                />
              </div>

            </div>

            {/* Middle Row: Two-Column Flex Inputs Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Field 3: Phone Number */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="phone" className="text-xs font-bold text-[#4A3B32] uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g., +251 911 00 00 00"
                  className="w-full bg-white border border-[#F2E3D5] rounded-xl px-4 py-3 text-sm text-[#4A3B32] placeholder-[#A47E6C]/50 focus:outline-hidden focus:border-[#E07A5F] transition duration-200"
                />
              </div>

              {/* Field 4: Subject */}
              <div className="flex flex-col space-y-2">
                <label htmlFor="subject" className="text-xs font-bold text-[#4A3B32] uppercase tracking-wider">
                  Subject <span className="text-[#E07A5F]">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="How can we assist you?"
                  className="w-full bg-white border border-[#F2E3D5] rounded-xl px-4 py-3 text-sm text-[#4A3B32] placeholder-[#A47E6C]/50 focus:outline-hidden focus:border-[#E07A5F] transition duration-200"
                />
              </div>

            </div>

            {/* Bottom Row: Full-Width Multiline Custom Message Box */}
            <div className="flex flex-col space-y-2">
              <label htmlFor="message" className="text-xs font-bold text-[#4A3B32] uppercase tracking-wider">
                Message <span className="text-[#E07A5F]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your beautiful notes or transaction feedback queries here..."
                className="w-full bg-white border border-[#F2E3D5] rounded-xl px-4 py-3 text-sm text-[#4A3B32] placeholder-[#A47E6C]/50 focus:outline-hidden focus:border-[#E07A5F] transition duration-200 resize-none"
              ></textarea>
            </div>

            {/* Submission Interactive Button Trigger Area */}
            <div className="pt-2 flex justify-center sm:justify-start">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#E07A5F] text-white px-10 py-4 rounded-xl font-serif font-bold text-sm tracking-wide shadow-xs hover:bg-[#d0694e] hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer text-center"
              >
                Send Message
              </button>
            </div>

          </form>

        </div>
      </div>
    </section>
  );
}