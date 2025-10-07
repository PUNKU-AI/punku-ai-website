"use client";
import React, { useState, useEffect } from 'react';
import BomberIntro from '../components/BomberIntro';

// Main Application Component
export default function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isAnnualPricing, setIsAnnualPricing] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showModernPage, setShowModernPage] = useState(false);
  const [isIntroMounted, setIntroMounted] = useState(true);

  // Effect to handle bomber intro timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModernPage(true);
    }, 4000); // Show main page after 4s
    return () => clearTimeout(timer);
  }, []);

  // Effect to handle scroll-triggered navigation bar visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsNavVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Effect to initialize Typed.js for dynamic headline
  useEffect(() => {
    // Load Typed.js dynamically
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js';
    script.onload = () => {
      // @ts-expect-error - Typed.js is loaded dynamically
      if (window.Typed) {
        // @ts-expect-error - Typed.js is loaded dynamically
        const typed = new window.Typed('#typing-element', {
          strings: [
            'your weekly reports in Sheets.',
            'data entry from Gmail to Sheets.',
            'sorting client emails in Gmail.',
            'organizing contracts in Drive.',
            'any repetitive task in Google Workspace.'
          ],
          typeSpeed: 50,
          backSpeed: 25,
          backDelay: 2500,
          startDelay: 500,
          loop: true,
          smartBackspace: true
        });

        // Cleanup function
        return () => {
          typed.destroy();
        };
      }
    };
    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  // Function to toggle FAQ items
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqItems = [
    { q: "How long does it take for AUTOLEARN to start suggesting automations?", a: "AUTOLEARN typically begins making intelligent suggestions within 24-48 hours of installation. The AI observes your work patterns and identifies the most repetitive tasks first, with more sophisticated automations becoming available as it learns more about your workflow." },
    { q: "What specific applications within Google Workspace does it support?", a: "AUTOLEARN currently supports Gmail, Google Sheets, Google Docs, Google Drive, Google Calendar, and Google Forms. We're continuously expanding support to include more Google Workspace applications and third-party integrations." },
    { q: "How do you ensure the privacy and security of my work data?", a: "Your data never leaves your browser. All AI processing happens locally on your device with bank-level encryption. We're SOC 2 and GDPR compliant, and we never store, transmit, or access your sensitive work information." },
    { q: "What is your cancellation and refund policy?", a: "You can cancel anytime with no long-term commitments. We offer a 30-day money-back guarantee for all paid plans. If you're not completely satisfied, we'll provide a full refund, no questions asked." },
    { q: "What kind of customer support is available?", a: "Free users receive email support with 48-hour response times. Professional users get priority support with 24-hour response times. Team users receive dedicated support with same-day response and optional phone support." }
  ];

  return (
    <>
      {/* Bomber Intro Animation */}
      {isIntroMounted && (
        <BomberIntro onAnimationEnd={() => setIntroMounted(false)} />
      )}

      {/* Modern AUTOLEARN Page - Fades in after intro */}
      <div className={`transition-opacity duration-2000 ${showModernPage ? 'opacity-100' : 'opacity-0'}`}>
      {/* Custom Styles */}
      <style>{`
        :root {
          --navy: #001f3f;
          --liberty-red: #BA0C2F;
          --sky-blue: #39A7FF;
          --gray-700: #4a5568;
          --white: #ffffff;
        }
        body {
          font-family: 'Inter', sans-serif;
          color: var(--gray-700);
        }
        .text-navy { color: var(--navy); }
        .text-liberty-red { color: var(--liberty-red); }
        .text-sky-blue { color: var(--sky-blue); }
        .border-liberty-red { border-color: var(--liberty-red); }
        .bg-liberty-red { background-color: var(--liberty-red); }
        h1, h2, h3 {
          color: var(--navy);
          font-weight: 700;
        }
        h1 { font-size: 2.75rem; line-height: 1.2; }
        h2 { font-size: 2.25rem; line-height: 1.2; }
        h3 { font-size: 1.5rem; line-height: 1.3; }
        .container-custom {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
        }
        @media (min-width: 1024px) {
          .container-custom {
            max-width: 1140px;
          }
        }
        .section-padding {
          padding-top: 6rem;
          padding-bottom: 6rem;
        }
        .btn-primary {
          background-color: var(--liberty-red);
          color: var(--white);
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        .btn-secondary {
          background-color: transparent;
          color: var(--navy);
          border: 2px solid #e2e8f0;
          padding: 0.75rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          transition: all 0.2s;
        }
        .btn-secondary:hover {
          background-color: #f7fafc;
          border-color: var(--navy);
        }
        .card {
          background-color: var(--white);
          border-radius: 0.75rem;
          padding: 2rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          border: 1px solid #e2e8f0;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .card.hover-grow:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .gradient-cta {
          background: linear-gradient(45deg, var(--navy), #003366);
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes pulse-subtle {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(255, 255, 255, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
        .animate-pulse-subtle {
          animation: pulse-subtle 2s infinite;
        }
        /* Typed.js cursor styling */
        .typed-cursor {
          color: var(--liberty-red);
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .timeline-step {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .timeline-step:nth-child(1) {
          animation-delay: 0.2s;
        }
        .timeline-step:nth-child(2) {
          animation-delay: 0.4s;
        }
        .timeline-step:nth-child(3) {
          animation-delay: 0.6s;
        }
        .text-liberty-red { color: #BA0C2F; }
        .bg-liberty-red { background-color: #BA0C2F; }
        .border-liberty-red { border-color: #BA0C2F; }
      `}</style>
      <div className="min-h-screen bg-white">
        {/* --- Navigation Bar --- */}
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md transition-transform duration-300 ${isNavVisible ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="container-custom">
            <div className="flex items-center justify-between py-4">
              <div className="text-xl font-bold text-navy">
                <span className="text-liberty-red">A</span>UTOLEARN
              </div>
              <div className="hidden md:flex items-center gap-6">
                <a href="#features" className="text-gray-600 hover:text-navy font-medium">Features</a>
                <a href="#pricing" className="text-gray-600 hover:text-navy font-medium">Pricing</a>
                <a href="#faq" className="text-gray-600 hover:text-navy font-medium">FAQ</a>
                <a href="https://github.com/PUNKU-AI/ychack" target="_blank" rel="noopener noreferrer" className="btn-primary" style={{padding: '0.5rem 1.5rem'}}>Get Started</a>
              </div>
              <button className="p-2 md:hidden hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                 <i className="fas fa-bars h-6 w-6 text-navy"></i>
              </button>
            </div>
          </div>
           {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
              <a href="#features" className="block py-3 px-6 text-gray-700 hover:bg-gray-50">Features</a>
              <a href="#pricing" className="block py-3 px-6 text-gray-700 hover:bg-gray-50">Pricing</a>
              <a href="#faq" className="block py-3 px-6 text-gray-700 hover:bg-gray-50">FAQ</a>
              <div className="p-4">
                <a href="https://github.com/PUNKU-AI/ychack" target="_blank" rel="noopener noreferrer" className="btn-primary w-full block text-center">Get Started</a>
              </div>
            </div>
          )}
        </nav>

        {/* --- 1. Hero Section --- */}
        <section className="bg-white min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h1 className="text-navy mb-6">
                  Automate <span id="typing-element" className="text-liberty-red"></span>
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Install our Chrome extension and watch as AI learns your Google Workspace patterns,
                  automatically handling your repetitive tasks so you can focus on what matters most.
                  No setup. No coding. Just pure productivity.
                </p>
                <a href="https://github.com/PUNKU-AI/ychack" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block mb-6">
                  Start automating now
                </a>
              </div>
              <div className="relative">
                <div className="bg-gray-50 rounded-2xl p-4 sm:p-8 shadow-2xl">
                  <div className="bg-white rounded-lg p-6 shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 ml-2">Google Sheets - <span className="text-liberty-red">A</span>UTOLEARN Active</span>
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 bg-gray-200 rounded"></div>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-2">
                           <i className="fas fa-wand-magic-sparkles h-4 w-4 text-blue-600"></i>
                          <span className="text-sm font-semibold text-blue-800"><span className="text-liberty-red">A</span>UTOLEARN Suggestion</span>
                        </div>
                        <p className="text-xs text-blue-700">I've noticed you format this data the same way every day. Want me to automate this?</p>
                        <div className="flex gap-2 mt-2">
                          <button className="bg-blue-600 text-white px-3 py-1 rounded text-xs">Yes, automate</button>
                          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs">Not now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-16 w-full">
              <p className="text-gray-700 text-lg font-medium mb-8">
                <strong>Join 4,000+</strong> companies saving thousands of hours with <span className="text-liberty-red">A</span>UTOLEARN
              </p>
              <div className="flex justify-center items-center gap-6 sm:gap-12 flex-wrap opacity-70 hover:opacity-90 transition-opacity">
                <img src="/Airbnb_bw.png" alt="Airbnb" className="h-8 sm:h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                <img src="/Brex_logo.png" alt="Brex" className="h-8 sm:h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                <img src="/Slack_logo.png" alt="Slack" className="h-8 sm:h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                <img src="/Stripe.png" alt="Stripe" className="h-8 sm:h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
                <img src="/Figma-Logo.png" alt="Figma" className="h-8 sm:h-10 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" />
              </div>
            </div>
          </div>
        </section>

        {/* --- 2. Problem/Solution Section --- */}
        <section id="features" className="section-padding">
            <div className="container-custom">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="text-center">
                        <div className="w-40 h-40 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"><i className="fas fa-bullseye text-liberty-red" style={{fontSize: '5rem'}}></i></div>
                        <h3 className="text-liberty-red mb-4">The Problem</h3>
                        <p className="text-gray-600">Knowledge workers spend 40% of their time on repetitive, automatable tasks, but existing automation tools require extensive technical setup.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-40 h-40 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6"><i className="fas fa-clock text-orange-600" style={{fontSize: '5rem'}}></i></div>
                        <h3 className="text-orange-600 mb-4">Why It Matters</h3>
                        <p className="text-gray-600">This 'busywork' leads to lost productivity, decreased job satisfaction, and significant operational costs, measured in thousands of hours lost per year.</p>
                    </div>
                    <div className="text-center">
                        <div className="w-40 h-40 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6"><i className="fas fa-bolt text-sky-blue" style={{fontSize: '5rem'}}></i></div>
                        <h3 className="text-navy mb-4">Our Solution</h3>
                        <p className="text-gray-600">Our Chrome extension uses AI to observe user workflows, automatically creating personalized automation agents by watching you work.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* --- 3. Features Timeline --- */}
        <section id="features" className="section-padding bg-gray-50">
            <div className="container-custom">
                <h2 className="text-center mb-4">Our Autonomous Reactive Agents automatically create AI automations for you</h2>
                <p className="text-center text-2xl font-bold text-navy mb-16">No endless prompting!</p>

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline Line - Hidden on mobile */}
                    <div className="hidden md:block absolute left-20 top-0 bottom-0 w-1 bg-gradient-to-b from-liberty-red via-sky-500 to-blue-600 rounded-full"></div>

                    {/* Step 1 */}
                    <div className="relative flex items-start mb-16 timeline-step">
                        <div className="flex-shrink-0 z-10">
                            <div className="w-40 h-40 bg-liberty-red rounded-full flex items-center justify-center shadow-lg">
                                <i className="fas fa-brain text-white" style={{fontSize: '5rem'}}></i>
                            </div>
                        </div>
                        <div className="ml-8 flex-grow">
                            <div className="bg-red-100 text-liberty-red px-4 py-1 rounded-full inline-block font-bold text-sm mb-3">
                                STEP 1
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-3">AI Learns Your Patterns</h3>
                            <p className="text-gray-600 mb-4">
                                Our AI observes your work across Google Workspace, identifying repetitive tasks and workflow patterns you didn't even know you had.
                            </p>
                            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-liberty-red">
                                <p className="text-sm font-semibold text-liberty-red mb-1">Example:</p>
                                <p className="text-sm text-gray-700">
                                    <span className="text-liberty-red">A</span>UTOLEARN notices you format sales reports the same way every Monday morning at 9 AM
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative flex items-start mb-16 timeline-step">
                        <div className="flex-shrink-0 z-10">
                            <div className="w-40 h-40 bg-sky-500 rounded-full flex items-center justify-center shadow-lg">
                                <i className="fas fa-bolt text-white" style={{fontSize: '5rem'}}></i>
                            </div>
                        </div>
                        <div className="ml-8 flex-grow">
                            <div className="bg-sky-100 text-sky-blue px-4 py-1 rounded-full inline-block font-bold text-sm mb-3">
                                STEP 2
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-3">Suggests Automations</h3>
                            <p className="text-gray-600 mb-4">
                                No complicated configurations required. Just install, work normally, and watch your personal AI agent come to life with smart suggestions.
                            </p>
                            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-sky-500">
                                <p className="text-sm font-semibold text-sky-blue mb-1">Example:</p>
                                <p className="text-sm text-gray-700">
                                    "Would you like me to automatically format your weekly reports and send them to your team?"
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative flex items-start timeline-step">
                        <div className="flex-shrink-0 z-10">
                            <div className="w-40 h-40 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                                <i className="fas fa-shield-halved text-white" style={{fontSize: '5rem'}}></i>
                            </div>
                        </div>
                        <div className="ml-8 flex-grow">
                            <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full inline-block font-bold text-sm mb-3">
                                STEP 3
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-3">Securely Automates Tasks</h3>
                            <p className="text-gray-600 mb-4">
                                Your data never leaves your browser. All learning happens locally with bank-level encryption protecting your sensitive work information.
                            </p>
                            <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600">
                                <p className="text-sm font-semibold text-blue-800 mb-1">Result:</p>
                                <p className="text-sm text-gray-700">
                                    <strong>Save 3+ hours per week</strong> on repetitive tasks while maintaining complete data privacy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* --- 4. Testimonials Section --- */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="text-center mb-16">Join 4,000+ companies generating up to 20x more output</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {name: "Sarah Chen", title: "VP Operations, Figma", quote: "increased our team's reporting efficiency by 47%. What used to take our analysts 3 hours now happens automatically every morning.", imgSrc: "/Sarah_Chen.jpeg"},
                {name: "Marcus Rodriguez", title: "Sales Director, Growth Labs", quote: "Saves me 90 minutes every day on email management. The AI learned my patterns in just 2 days and now handles all my routine correspondence.", imgSrc: "/Marcus_Rodriguez.jpeg"},
                {name: "Amanda Foster", title: "Operations Manager, DataSync", quote: "Our data entry team's productivity jumped 65% in the first month. It eliminated the most tedious parts of our workflow completely.", imgSrc: "/Amanda_Foster.jpeg"}
              ].map((testimonial, i) => (
                <div key={i} className="bg-navy rounded-lg p-6 shadow-lg flex flex-col">
                  <p className="mb-6 text-white flex-grow">
                    "<span className="text-liberty-red">A</span>UTOLEARN {testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <img src={testimonial.imgSrc} className="w-12 h-12 rounded-full object-cover" alt={testimonial.name} />
                      <div>
                        <div className="font-semibold text-white">{testimonial.name}</div>
                        <div className="text-sm text-gray-300">{testimonial.title}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 5. Interactive Demo --- */}
        <section className="section-padding">
          <div className="container-custom text-center">
            <h2 className="mb-8">See <span className="text-liberty-red">A</span>UTOLEARN In Action</h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                <div className="bg-gray-800 px-6 py-3 flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 text-sm ml-2"><span className="text-liberty-red">A</span>UTOLEARN Demo</span>
                </div>
                <div className="aspect-video bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center relative">
                  {!isVideoPlaying ? (
                    <button onClick={() => setIsVideoPlaying(true)} className="bg-white/20 backdrop-blur-sm rounded-full p-6 hover:bg-white/30 transition-all animate-pulse-subtle">
                      <i className="fas fa-play h-12 w-12 text-white ml-1"></i>
                    </button>
                  ) : (
                    <div className="text-white text-center">
                      <i className="fas fa-desktop h-16 w-16 mx-auto mb-4"></i>
                      <p>Demo video would play here</p>
                      <p className="text-sm opacity-75">60-second product walkthrough</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 6. Pricing Section --- */}
        <section id="pricing" className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="text-center mb-8">Choose Your Plan</h2>
            <div className="flex justify-center mb-12">
              <div className="bg-white rounded-full p-1 shadow-md flex">
                <button onClick={() => setIsAnnualPricing(false)} className={`px-6 py-2 rounded-full transition-all text-sm sm:text-base ${!isAnnualPricing ? 'bg-navy text-white' : 'text-gray-600'}`}>Monthly</button>
                <button onClick={() => setIsAnnualPricing(true)} className={`px-6 py-2 rounded-full transition-all text-sm sm:text-base ${isAnnualPricing ? 'bg-navy text-white' : 'text-gray-600'}`}>Annual (Save 20%)</button>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter */}
              <div className="card flex flex-col">
                <h3 className="mb-4">Starter</h3>
                <div className="mb-6"><span className="text-4xl font-bold text-navy">Free</span></div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {["Basic pattern recognition", "5 automations/month", "Email support", "Chrome extension", "Basic tutorials"].map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://github.com/PUNKU-AI/ychack" target="_blank" rel="noopener noreferrer" className="w-full btn-secondary text-center">Get Started Free</a>
              </div>
              {/* Professional */}
              <div className="card border-4 border-liberty-red relative flex flex-col">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-liberty-red text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</div>
                <h3 className="mb-4">Professional</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-navy">€{isAnnualPricing ? '15' : '19'}</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {["Unlimited automations", "Advanced patterns", "Cross-app intelligence", "Priority support", "Advanced analytics"].map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://github.com/PUNKU-AI/ychack" target="_blank" rel="noopener noreferrer" className="w-full btn-primary text-center">Start Professional</a>
              </div>
              {/* Team */}
              <div className="card flex flex-col">
                <h3 className="mb-4">Team</h3>
                <div className="mb-6">
                  <span class="text-4xl font-bold text-navy">€{isAnnualPricing ? '39' : '49'}</span>
                  <span className="text-gray-600">/user/month</span>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  {["Shared workflows", "Team analytics", "Admin controls", "Dedicated support", "SSO integration"].map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#22C55E"/>
                        <path d="M7 12.5L10.5 16L17 8.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://github.com/PUNKU-AI/ychack" target="_blank" rel="noopener noreferrer" className="w-full btn-secondary text-center">Book a Demo</a>
              </div>
            </div>
          </div>
        </section>

        {/* --- 7. FAQ Section --- */}
        <section id="faq" className="section-padding">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-center mb-16">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-lg">
                  <button onClick={() => toggleFaq(index)} className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                    <span className="font-semibold text-navy">{faq.q}</span>
                    <i className={`fas fa-chevron-down h-5 w-5 text-gray-500 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}></i>
                  </button>
                  {expandedFaq === index && <div className="px-6 pb-4 text-gray-600">{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 8. Final CTA Section --- */}
        <section className="gradient-cta section-padding text-center">
          <div className="container-custom">
            <h2 className="text-white mb-6">Ready to Unlock Your True Productivity?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">Join 10,000+ users. No credit card required. 30-day money-back guarantee.</p>
            <a href="https://github.com/PUNKU-AI/ychack" target="_blank" rel="noopener noreferrer" className="btn-primary bg-white text-navy hover:bg-gray-100 inline-block">Start automating now</a>
            <div className="flex items-center justify-center gap-2 mt-4">
              <i className="fas fa-shield-halved h-5 w-5 text-white/70"></i>
              <span className="text-white/70 text-sm">30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </section>

        {/* --- 9. Footer --- */}
        <footer className="bg-gray-50 py-12 border-t border-gray-200">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="mb-6 md:mb-0">
                <div className="text-2xl font-bold text-navy mb-2"><span className="text-liberty-red">A</span>UTOLEARN</div>
                <div className="flex gap-6 text-sm justify-center">
                  <a href="#" className="text-gray-600 hover:text-navy transition-colors">Privacy</a>
                  <a href="#" className="text-gray-600 hover:text-navy transition-colors">Terms</a>
                  <a href="#" className="text-gray-600 hover:text-navy transition-colors">Contact</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/soc2-badge.svg" alt="SOC 2 Type II Compliant" className="h-10 object-contain" />
                <img src="/gdpr-badge.svg" alt="GDPR Compliant" className="h-10 object-contain" />
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-6 text-center">
              <p className="text-gray-600 text-sm">© 2025 <span className="text-liberty-red">A</span>UTOLEARN. All Rights Reserved. 🇺🇸 The American-Built Productivity Revolution.</p>
            </div>
          </div>
        </footer>
      </div>
      </div>{/* End of Modern AUTOLEARN Page wrapper */}
    </>
  );
}





import type { Metadata } from "next";
import { Inter, Source_Code_Pro } from "next/font/google";
import "./globals.css";

// FontAwesome configuration
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  variable: "--font-source-code-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AUTOLEARN - Your AI Assistant Learns by Watching You Work",
  description: "Transform repetitive tasks into automated workflows. No setup. No coding. Just pure productivity.",
  keywords: "AI automation, productivity, workflow automation, Chrome extension, Google Workspace",
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: "AUTOLEARN - Work Once. Automate Forever.",
    description: "Install our Chrome extension and watch as AI learns your Google Workspace patterns, automatically handling your repetitive tasks.",
    type: "website",
    url: "https://autolearn.ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceCodePro.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}

