"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function MetaAgentPage() {
  useEffect(() => {
    let typedInstance: any = null;

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js';
    script.onload = () => {
      // @ts-expect-error - Typed.js is loaded dynamically
      if (window.Typed) {
        const inputElement = document.querySelector('#meta-agent-input');
        if (inputElement) {
          // @ts-expect-error - Typed.js is loaded dynamically
          typedInstance = new window.Typed('#meta-agent-input', {
            strings: [
              'Send confirmation emails when someone books a tour',
              'Check weather and notify customers if rain is forecast',
              'Respond to common questions about tour availability',
              'Send review requests 2 days after tour completion',
              'Create a report of all bookings every Monday morning',
              'Alert me when a tour is almost full'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 500,
            loop: true,
            attr: 'placeholder',
            bindInputFocusEvents: true,
            showCursor: false
          });
        }
      }
    };
    document.head.appendChild(script);

    return () => {
      if (typedInstance) {
        typedInstance.destroy();
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);


  const examples = [
    {
      description: "When it's going to rain during a scheduled outdoor tour, automatically email all participants with our rain policy and option to reschedule",
      buildTime: "3 minutes"
    },
    {
      description: "If someone books within 2 hours of tour time, immediately text our on-call guide and send customer express check-in instructions",
      buildTime: "4 minutes"
    },
    {
      description: "When a tour ends, wait 3 hours, then text participants asking for photos, then post the best ones on Instagram the next day",
      buildTime: "5 minutes"
    },
    {
      description: "Monitor competitor tour prices daily and alert me if they change by more than 10%",
      buildTime: "2 minutes"
    },
    {
      description: "When someone leaves a negative review, alert me immediately, draft a response, and create a follow-up task",
      buildTime: "3 minutes"
    },
    {
      description: "Every Monday morning, send me a summary of the week ahead: bookings, guide schedules, and any tours at capacity",
      buildTime: "4 minutes"
    },
    {
      description: "When a customer books multiple tours, automatically offer them a 10% package discount and track redemption",
      buildTime: "3 minutes"
    },
    {
      description: "If a tour gets more than 3 cancellations in one day, alert me and suggest promotional pricing to fill spots",
      buildTime: "4 minutes"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              <Image src="/logo.png" alt="PUNKU.AI Logo" width={120} height={32} />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link href="/tour-workers" className="text-dark-400 hover:text-primary-700 font-medium">AI Workers</Link>
              <Link href="/meta-agent" className="text-primary-700 hover:text-primary-900 font-bold">Meta-Agent</Link>
              <Link href="/#pricing" className="text-dark-400 hover:text-primary-700 font-medium">Pricing</Link>
              <Link href="/use-cases" className="text-dark-400 hover:text-primary-700 font-medium">Use Cases</Link>
              <Link href="/#trial" className="btn-primary">Try Now</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white pt-32 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-900 mb-6">
            Describe Your Workflow in Plain English.<br />
            <span className="text-primary-500">Your AI Worker is Ready in Minutes.</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-400 mb-8 max-w-4xl mx-auto">
            No coding. No complex setup. Just describe what you want, and our meta-agent builds a custom AI worker that runs 24/7.
          </p>
          <Link href="/#trial" className="btn-primary inline-block px-10 py-4 text-xl font-bold">
            Try Meta-Agent Free
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-dark-25">
        <div className="container-custom">
          <h2 className="text-center mb-4 text-4xl md:text-5xl font-bold text-primary-900">
            How the Meta-Agent Works
          </h2>
          <p className="text-center text-xl text-dark-400 mb-16 max-w-3xl mx-auto">
            Think of it as your personal automation engineer that never sleeps
          </p>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-xl">
                1
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4 text-center">It Asks Questions</h3>
              <p className="text-dark-600 mb-4">
                Start with a simple description. The meta-agent <strong>proactively asks clarifying questions</strong> to understand exactly what you need.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <p className="text-sm text-dark-600 italic">
                  &quot;Do you use bookingKit? What should the email include? Should I send reminders?&quot;
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-xl">
                2
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4 text-center">It Builds</h3>
              <p className="text-dark-600 mb-4">
                Like a personal engineer, it <strong>selects the right tools, connects your systems</strong>, and assembles a custom automation tailored to your business.
              </p>
              <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
                <p className="text-sm text-dark-600 font-semibold">
                  ✓ Connects APIs<br/>
                  ✓ Sets up triggers<br/>
                  ✓ Configures workflows
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-xl">
                3
              </div>
              <h3 className="text-2xl font-bold text-primary-900 mb-4 text-center">It Monitors & Improves</h3>
              <p className="text-dark-600 mb-4">
                Your worker goes live 24/7. The meta-agent <strong>continuously monitors performance and suggests improvements</strong> to make it even better.
              </p>
              <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                <p className="text-sm text-dark-600 font-semibold">
                  📊 Tracks success rates<br/>
                  🔧 Auto-fixes errors<br/>
                  💡 Suggests optimizations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Examples */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-4 text-4xl md:text-5xl font-bold text-primary-900">
            Real Examples Built by Tour Operators
          </h2>
          <p className="text-center text-xl text-dark-400 mb-16 max-w-3xl mx-auto">
            These are actual workflows built by our meta-agent. Each one took just minutes to create.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {examples.map((example, index) => (
              <div key={index} className="bg-dark-25 rounded-lg p-8 border-l-4 border-primary-600">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <p className="text-dark-600 italic flex-grow">
                    &quot;{example.description}&quot;
                  </p>
                </div>
                <div className="ml-14">
                  <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                    ✓ Built in {example.buildTime}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Input Section */}
      <section className="section-padding bg-dark-25">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6 text-center">
            Try It Yourself
          </h2>
          <p className="text-xl text-dark-400 mb-8 text-center">
            See how the meta-agent converses with you:
          </p>

          {/* Chat Interface Style */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-dark-200">
            {/* Meta-Agent Initial Message */}
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 p-6 border-b-2 border-dark-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white text-xl font-bold">M</span>
                </div>
                <div className="flex-grow">
                  <p className="font-bold text-primary-900 mb-2">Meta-Agent</p>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-dark-700 leading-relaxed">
                      👋 Hi! I just scraped all your company info and added it to my memory.
                      <strong className="text-primary-700"> What should we automate first?</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Input Area */}
            <div className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-dark-300 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xl font-bold">You</span>
                </div>
                <div className="flex-grow">
                  <textarea
                    id="meta-agent-input"
                    className="w-full h-32 p-4 border-2 border-dark-200 rounded-lg resize-none focus:border-primary-600 focus:outline-none text-dark-600 text-lg"
                    placeholder="Send confirmation emails when someone books a tour"
                  />
                </div>
              </div>

              <div className="text-center mt-6">
                <a href="https://app.punku.ai" className="btn-primary inline-block px-10 py-4 text-lg font-bold">
                  Start Building with Meta-Agent
                </a>
                <p className="text-sm text-dark-400 mt-4">
                  Free 14-day trial • No credit card required
                </p>
              </div>
            </div>
          </div>

          {/* Quick Examples */}
          <div className="mt-8 text-center">
            <p className="text-dark-400 text-sm mb-3">💡 Popular automations:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white px-4 py-2 rounded-full text-sm text-dark-600 shadow-sm">Booking confirmations</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm text-dark-600 shadow-sm">Weather alerts</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm text-dark-600 shadow-sm">Review requests</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm text-dark-600 shadow-sm">Weekly reports</span>
              <span className="bg-white px-4 py-2 rounded-full text-sm text-dark-600 shadow-sm">Capacity alerts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-16 text-4xl md:text-5xl font-bold text-primary-900">
            What Makes Our Meta-Agent Special
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-brain text-primary-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Understands Context</h3>
              <p className="text-dark-400">
                Knows tour industry workflows and common automation needs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-puzzle-piece text-primary-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Picks Right Tools</h3>
              <p className="text-dark-400">
                Automatically selects and connects the integrations you need
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-bolt text-primary-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Deploys Instantly</h3>
              <p className="text-dark-400">
                Your worker is ready to use within minutes, not days
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-edit text-primary-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Easy to Modify</h3>
              <p className="text-dark-400">
                Refine and adjust your worker anytime with plain language
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-sync text-primary-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Learns & Improves</h3>
              <p className="text-dark-400">
                Gets smarter over time based on how you use it
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-shield-alt text-primary-600 text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Safe & Reliable</h3>
              <p className="text-dark-400">
                Built-in safeguards and error handling for peace of mind
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-cta section-padding text-center">
        <div className="container-custom">
          <h2 className="!text-white mb-6 text-4xl md:text-5xl font-bold">
            Ready to Build Your Custom AI Worker?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Start your free trial and describe your first workflow. Your AI worker will be ready in minutes.
          </p>
          <Link href="/#trial" className="btn-primary bg-white text-primary-900 hover:bg-dark-25 inline-block px-10 py-4 text-xl font-bold">
            Start 14-Day Free Trial
          </Link>
          <p className="text-white/80 text-sm mt-4">No credit card required • Cancel anytime</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-25 py-12 border-t border-dark-200">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            {/* Logo Section */}
            <div>
              <div className="mb-4">
                <Image src="/logo.png" alt="PUNKU.AI Logo" width={120} height={32} />
              </div>
              <div className="mt-6">
                <Image src="/gdpr_compliant-1024x429.png" alt="GDPR Compliant" width={100} height={42} className="object-contain" />
              </div>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="text-sm font-bold text-primary-900 mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">Home</Link>
                </li>
                <li>
                  <Link href="#" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">About</Link>
                </li>
                <li>
                  <Link href="#" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="text-sm font-bold text-primary-900 mb-4">Follow Us</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">LinkedIn</Link>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-sm font-bold text-primary-900 mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">T&C</Link>
                </li>
                <li>
                  <Link href="#" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">Privacy</Link>
                </li>
                <li>
                  <Link href="#" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">Imprint</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-dark-200 pt-6 text-center">
            <p className="text-dark-400 text-sm">© 2025 PUNKU.AI. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
