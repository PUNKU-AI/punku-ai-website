"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function TourWorkersPage() {
  const workerCategories = [
    {
      title: "Booking & Reservations",
      workers: [
        { name: "Booking Confirmer", description: "Automatically sends confirmation emails with all tour details immediately after booking" },
        { name: "Availability Checker", description: "Real-time availability updates across all booking platforms" },
        { name: "Booking Modifier", description: "Handles date changes, cancellations, and rebooking requests automatically" },
        { name: "Group Quote Builder", description: "Generates custom quotes for group bookings with dynamic pricing" }
      ]
    },
    {
      title: "Customer Communication",
      workers: [
        { name: "Pre-Tour Messenger", description: "Sends timely reminders, directions, and what-to-bring info before tours" },
        { name: "Review Request Sender", description: "Automatically requests reviews at the optimal time after tour completion" },
        { name: "FAQ Responder", description: "Answers common questions instantly using your knowledge base" },
        { name: "Multilingual Communicator", description: "Responds to inquiries in 50+ languages automatically" }
      ]
    },
    {
      title: "Operations Management",
      workers: [
        { name: "Guide Scheduler", description: "Optimizes guide assignments based on availability and expertise" },
        { name: "Capacity Optimizer", description: "Manages tour capacity and suggests optimal group sizes" },
        { name: "Revenue Tracker", description: "Monitors daily revenue and sends automated reports with insights" },
        { name: "Performance Analyzer", description: "Tracks key metrics and identifies optimization opportunities" }
      ]
    },
    {
      title: "Marketing & Sales",
      workers: [
        { name: "Social Proof Publisher", description: "Automatically shares positive reviews and photos to social media" },
        { name: "Abandoned Cart Recovery", description: "Reaches out to customers who started but didn't complete bookings" },
        { name: "Upsell Suggester", description: "Recommends add-ons and upgrades based on booking history" },
        { name: "Partnership Coordinator", description: "Manages referrals and commissions with hotel partners" }
      ]
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
              <Link href="/tour-workers" className="text-primary-700 hover:text-primary-900 font-bold">AI Workers</Link>
              <Link href="/meta-agent" className="text-dark-400 hover:text-primary-700 font-medium">Meta-Agent</Link>
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
            Pre-Built AI Workers for Every Part of Your Tour Business
          </h1>
          <p className="text-xl md:text-2xl text-dark-400 mb-8 max-w-3xl mx-auto">
            Deploy in minutes. Each worker is pre-trained for tour operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#trial" className="btn-primary inline-block px-8 py-4 text-lg">
              Start Free Trial
            </Link>
            <Link href="/meta-agent" className="btn-secondary inline-block px-8 py-4 text-lg">
              Build Custom Worker →
            </Link>
          </div>
        </div>
      </section>

      {/* Worker Categories */}
      <section className="section-padding bg-dark-25">
        <div className="container-custom">
          {workerCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20 last:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8 text-center">
                {category.title}
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {category.workers.map((worker, workerIndex) => (
                  <div key={workerIndex} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-2xl font-bold text-primary-900 mb-4">{worker.name}</h3>
                    <p className="text-dark-400 mb-6">{worker.description}</p>
                    <div className="flex gap-3">
                      <button className="btn-primary text-sm px-6 py-2">Deploy Now</button>
                      <button className="btn-secondary text-sm px-6 py-2">Learn More</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-cta section-padding text-center">
        <div className="container-custom">
          <h2 className="!text-white mb-6 text-4xl md:text-5xl font-bold">
            Don&apos;t See What You Need?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Our meta-agent can build a custom AI worker for any workflow in minutes.
          </p>
          <Link href="/meta-agent" className="btn-primary bg-white text-primary-900 hover:bg-dark-25 inline-block px-10 py-4 text-xl font-bold">
            Build Custom Worker
          </Link>
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
                  <Link href="/contact" className="text-dark-400 hover:text-primary-900 transition-colors text-sm">Contact</Link>
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
