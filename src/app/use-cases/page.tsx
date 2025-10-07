"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function UseCasesPage() {
  const useCases = [
    {
      company: "Walking Tour Company - Barcelona",
      type: "City Tours",
      challenge: "200+ inquiries daily in 5 languages overwhelming small team",
      solution: "FAQ Responder + Multilingual Communicator",
      implementation: "Deployed both workers in under 30 minutes. Connected to existing email system.",
      result: "90% inquiries handled automatically",
      metrics: [
        "Response time: 24 hours → 2 minutes",
        "Support tickets: -85%",
        "Customer satisfaction: +40%"
      ],
      quote: "We went from drowning in emails to having time to actually improve our tours. The multilingual feature alone saved us from hiring two more people."
    },
    {
      company: "Adventure Tours - Colorado",
      type: "Outdoor Adventures",
      challenge: "Weather-dependent cancellations causing chaos and customer complaints",
      solution: "Weather Monitor + Custom Rebooking System (built with meta-agent)",
      implementation: "Weather Monitor deployed instantly. Meta-agent built rebooking workflow in 6 minutes.",
      result: "60% fewer customer complaints, 4 hours/day saved",
      metrics: [
        "Proactive notifications: 100% of affected tours",
        "Rebooking rate: +45%",
        "Staff time saved: 28 hours/week"
      ],
      quote: "The system now watches the weather better than we ever could. Customers appreciate being notified proactively, and our team isn't scrambling at the last minute."
    },
    {
      company: "Food Tours - New York",
      type: "Culinary Experiences",
      challenge: "Managing dietary restrictions and allergies across 15+ restaurant partners",
      solution: "Custom Worker (meta-agent built intake and routing system)",
      implementation: "Described the workflow to meta-agent, refined twice, deployed in one afternoon.",
      result: "Zero dietary incidents, 100% accurate tour assignments",
      metrics: [
        "Dietary info collected: 100% pre-tour",
        "Restaurant notification: Automatic 24h ahead",
        "Assignment errors: Eliminated"
      ],
      quote: "Before PUNKU.AI, we had a spreadsheet nightmare. Now dietary info flows automatically to the right restaurants, and we've had zero incidents in 6 months."
    },
    {
      company: "Boat Tours - Miami",
      type: "Water Activities",
      challenge: "No-shows costing $50K/month in lost revenue",
      solution: "Pre-Tour Messenger with Smart Reminders",
      implementation: "Deployed Pre-Tour Messenger, customized reminder timing and content.",
      result: "No-show rate dropped from 15% to 3%",
      metrics: [
        "Revenue recovered: ~$40K/month",
        "Customer check-ins: +92% on time",
        "Last-minute cancellations: +35% (giving time to resell)"
      ],
      quote: "The ROI was instant. Within the first month, we recovered enough revenue to pay for PUNKU.AI for a year. Now it just prints money."
    },
    {
      company: "Museum Tours - London",
      type: "Cultural & Historical",
      challenge: "Group bookings required manual coordination across ticketing, guides, and audio equipment",
      solution: "Group Quote Builder + Custom Coordination Worker",
      implementation: "Used Group Quote Builder as base, meta-agent added custom coordination logic.",
      result: "Group booking time reduced from 2 hours to 15 minutes",
      metrics: [
        "Quote generation: Instant",
        "Coordination errors: -95%",
        "Group bookings: +60%"
      ],
      quote: "We can now handle 3x the group bookings with the same staff. The system coordinates everything automatically - tickets, guides, equipment, even catering."
    },
    {
      company: "Winery Tours - Napa Valley",
      type: "Food & Wine",
      challenge: "Post-tour wine sales opportunities missed due to lack of follow-up",
      solution: "Custom Post-Tour Sales Worker (built with meta-agent)",
      implementation: "Described our ideal follow-up sequence, meta-agent built it with payment integration.",
      result: "Post-tour sales increased 180%",
      metrics: [
        "Follow-up emails: 100% sent within 3 hours",
        "Conversion rate: 12% → 34%",
        "Average order value: +$120"
      ],
      quote: "We were leaving money on the table. Now every guest gets personalized follow-up with their tasting notes and purchase links. It's like having a dedicated sales team."
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
              <Link href="/meta-agent" className="text-dark-400 hover:text-primary-700 font-medium">Meta-Agent</Link>
              <Link href="/#pricing" className="text-dark-400 hover:text-primary-700 font-medium">Pricing</Link>
              <Link href="/use-cases" className="text-primary-700 hover:text-primary-900 font-bold">Use Cases</Link>
              <Link href="/#trial" className="btn-primary">Try Now</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-white pt-32 pb-16">
        <div className="container-custom text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-900 mb-6">
            Real Tour Operators.<br />
            Real Results.
          </h1>
          <p className="text-xl md:text-2xl text-dark-400 mb-8 max-w-3xl mx-auto">
            See how tour businesses like yours are using PUNKU.AI to save time, increase revenue, and deliver better experiences.
          </p>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="section-padding bg-dark-25">
        <div className="container-custom">
          {useCases.map((useCase, index) => (
            <div key={index} className="mb-16 last:mb-0 bg-white rounded-lg shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left Column - Company & Challenge */}
                <div className="md:col-span-1">
                  <div className="mb-6">
                    <span className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-3">
                      {useCase.type}
                    </span>
                    <h3 className="text-2xl font-bold text-primary-900 mb-2">{useCase.company}</h3>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-red-600 mb-2">The Challenge</h4>
                    <p className="text-dark-600">{useCase.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary-900 mb-2">The Solution</h4>
                    <p className="text-dark-600 font-semibold">{useCase.solution}</p>
                  </div>
                </div>

                {/* Middle Column - Implementation & Results */}
                <div className="md:col-span-1">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-primary-900 mb-2">Implementation</h4>
                    <p className="text-dark-600">{useCase.implementation}</p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <h4 className="text-lg font-bold text-green-700 mb-2">Result</h4>
                    <p className="text-green-900 font-bold text-xl">{useCase.result}</p>
                  </div>
                </div>

                {/* Right Column - Metrics & Quote */}
                <div className="md:col-span-1">
                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-primary-900 mb-3">Key Metrics</h4>
                    <ul className="space-y-2">
                      {useCase.metrics.map((metric, metricIndex) => (
                        <li key={metricIndex} className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <span className="text-dark-600 text-sm">{metric}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-dark-25 p-4 rounded-lg border-l-4 border-primary-600">
                    <p className="text-dark-600 italic text-sm">&quot;{useCase.quote}&quot;</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-16 text-4xl md:text-5xl font-bold text-primary-900">
            The Numbers Don&apos;t Lie
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">200+</div>
              <p className="text-dark-400">Tour Operators</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">10,000+</div>
              <p className="text-dark-400">Bookings Automated</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">85%</div>
              <p className="text-dark-400">Time Saved</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">4.9/5</div>
              <p className="text-dark-400">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Types */}
      <section className="section-padding bg-dark-25">
        <div className="container-custom">
          <h2 className="text-center mb-12 text-4xl md:text-5xl font-bold text-primary-900">
            Works for Every Type of Tour Business
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Walking & City Tours",
              "Adventure & Outdoor",
              "Food & Wine",
              "Water Activities",
              "Cultural & Museums",
              "Private & Custom Tours",
              "Multi-Day Experiences",
              "Attractions & Theme Parks",
              "Educational Tours"
            ].map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-primary-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-cta section-padding text-center">
        <div className="container-custom">
          <h2 className="!text-white mb-6 text-4xl md:text-5xl font-bold">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-xl md:text-2xl !text-white mb-8 max-w-3xl mx-auto">
            Join 200+ tour operators who are saving time and growing revenue
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
