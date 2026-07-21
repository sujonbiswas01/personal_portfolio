"use client"
import { useRouter } from 'next/navigation';
import { useState, useRef } from 'react';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const router = useRouter();
  const [result, setResult] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const toastId = toast.loading("Sending...");
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "c6a4ac3a-c30b-477a-b0f6-17e6a438aaf1");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });
    if (!response.ok) {
      toast.error("Failed to send. Please try again.", { autoClose: 2000 });
      toast.dismiss(toastId);
      return;
    }

    const data = await response.json();
    if (data.success) {
      toast.success("Message sent successfully!", { autoClose: 2000 });
      setResult("Success!");
      if (formRef.current) {
        formRef.current.reset(); // Clear the form fields if success
      }
      router.refresh();
    } else {
      toast.error(data.message || "Error sending message.");
      setResult("Error");
    }
    toast.dismiss(toastId);
  };

  return (
    <section id="contact" className="section-space bg-background">
      <div className="app-shell">
        <form
          ref={formRef}
          onSubmit={onSubmit}
          className="w-full max-w-2xl mx-auto p-5 sm:p-6 md:p-8 rounded-xl bg-card shadow-md border border-border space-y-4 animate-fadeIn"
          style={{ animation: "fadeIn 0.9s cubic-bezier(.42,0,1,1)" }}
          autoComplete="off"
        >
          {/* Title and Description */}
          <div className="text-center mb-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2 tracking-tight">
              Contact Me
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
              Please fill out the form below and I will respond promptly.
            </p>
            <div className="w-12 h-1 mt-4 mx-auto rounded-full bg-gradient-to-r from-primary via-violet-500 to-sky-400" />
          </div>


          {/* Email (required) */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          {/* Purpose Selection (required) */}
          <div className="space-y-6">
            {/* Purpose */}
            <div>
              <label
                htmlFor="purpose"
                className="mb-2 block text-sm font-semibold text-zinc-900 dark:text-zinc-100"
              >
                Purpose of Inquiry
                <span className="ml-1 text-red-500">*</span>
              </label>

              <select
                id="purpose"
                name="purpose"
                required
                defaultValue=""
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white"
              >
                <option value="" disabled>
                  Select a purpose
                </option>

                <option value="hire_fullstack_developer">
                  Hire a Full Stack Developer
                </option>

                <option value="website_development">
                  Website Development
                </option>

                <option value="web_application">
                  Custom Web Application
                </option>

                <option value="ecommerce_solution">
                  E-Commerce Solution
                </option>

                <option value="saas_platform">
                  SaaS Platform Development
                </option>

                <option value="startup_mvp">
                  Startup MVP Development
                </option>

                <option value="website_redesign">
                  Website Redesign & Modernization
                </option>

                <option value="maintenance_support">
                  Maintenance & Support
                </option>

                <option value="performance_optimization">
                  Performance Optimization
                </option>

                <option value="technical_consultation">
                  Technical Consultation
                </option>

                <option value="remote_contract">
                  Remote Contract Opportunity
                </option>

                <option value="fulltime_opportunity">
                  Full-Time Job Opportunity
                </option>

                <option value="agency_partnership">
                  Agency Partnership
                </option>

                <option value="long_term_collaboration">
                  Long-Term Collaboration
                </option>

                <option value="other">
                  Other Business Inquiry
                </option>
              </select>
            </div>
          </div>


          {/* WhatsApp (optional) */}
          <div>
            <label htmlFor="whatsapp" className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              WhatsApp number <span className="text-xs font-normal text-muted-foreground">(optional)</span>
            </label>
            <input
              type="tel"
              name="whatsapp"
              id="whatsapp"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          {/* Message (required) */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full px-3 py-2 border rounded-md resize-none"
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-primary text-primary-foreground font-semibold text-base shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/70 transition-all duration-200"
          >
            <svg
              className="w-5 h-5 text-white opacity-80"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.5 12.5l7 7 12-12"
              />
            </svg>
            Send Message
          </button>

          <p className={`text-center text-sm mt-1 ${result === "Success!" ? "text-green-600" : result ? "text-rose-500" : ""}`}>
            {result}
          </p>

          <div className="text-xs text-muted-foreground mt-2 text-center">
            <span className="text-red-500">*</span> indicates required field.
          </div>

          {/* Animate form fadeIn */}
          <style>
            {`@keyframes fadeIn {
            0%{transform: translateY(25px); opacity:0;}
            100%{transform: none; opacity:1;}
        }`}
          </style>
        </form>
      </div>
    </section>
  );
}