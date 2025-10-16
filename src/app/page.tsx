"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Quick action pills data
  const quickActions = [
    { icon: '🌐', label: 'Personal website', color: 'bg-blue-50' },
    { icon: '💬', label: 'Customer Support', color: 'bg-purple-50' },
    { icon: '📞', label: 'Outbound Sales Calls', color: 'bg-pink-50' },
    { icon: '🎯', label: 'Lead gen', color: 'bg-yellow-50' },
    { icon: '📹', label: 'Meeting Recorder', color: 'bg-green-50' },
    { icon: '🔗', label: 'LinkedIn outreach', color: 'bg-blue-50' },
    { icon: '🤖', label: 'Support Chatbot', color: 'bg-purple-50' },
  ];

  // Company logos for social proof
  const companyLogos = [
    'TourCo', 'AdventureHub', 'TravelTech', 'GuideMaster',
    'TourOps', 'ExploreAI', 'JourneyPro', 'TripBuilder',
    'WanderTech', 'TourFlow', 'GuideSync', 'AdventureOS'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <div>
              <Image src="/logo.png" alt="PUNKU.AI Logo" width={120} height={32} />
            </div>

            <div className="hidden md:flex items-center gap-6">
              <div className="relative group">
                <button className="text-sm font-medium text-primary-900 hover:text-primary-600 transition-colors">
                  Solutions
                </button>
              </div>
              <Link href="#pricing" className="text-sm font-medium text-primary-900 hover:text-primary-600 transition-colors">
                Pricing
              </Link>
              <a href="#integrations" className="text-sm font-medium text-primary-900 hover:text-primary-600 transition-colors">
                Integrations
              </a>
              <div className="relative group">
                <button className="text-sm font-medium text-primary-900 hover:text-primary-600 transition-colors">
                  Resources
                </button>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-4">
              <a href="https://app.punku.ai" className="text-sm font-medium text-primary-900 hover:text-primary-600 transition-colors">
                Log in
              </a>
              <Link href="/contact" className="px-4 py-2 text-sm font-semibold text-primary-900 border-2 border-primary-900 rounded-lg hover:bg-primary-50 transition-all">
                Talk to sales
              </Link>
              <a href="https://app.punku.ai" className="px-4 py-2 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-all">
                Try for free
              </a>
            </div>

            <button className="p-2 md:hidden hover:bg-gray-100 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <a href="#solutions" className="block py-3 px-6 text-primary-900 hover:bg-primary-50">Solutions</a>
            <a href="#pricing" className="block py-3 px-6 text-primary-900 hover:bg-primary-50">Pricing</a>
            <div className="p-4 space-y-2">
              <a href="https://app.punku.ai" className="block text-center py-2 text-primary-900">Log in</a>
              <a href="https://app.punku.ai" className="block text-center py-2 text-white bg-primary-600 rounded-lg hover:bg-primary-700">Try for free</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-primary-900">
              Meet your first AI employee
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-dark-700">
              PUNKU.AI is the simplest way for businesses to create, manage, and share agents. Now with just a prompt.
            </p>

            {/* Interactive Input Box */}
            <div className="max-w-2xl mx-auto mb-8">
              <TooltipProvider>
                <div className="group/input-group relative flex w-full flex-col items-center rounded-xl border border-gray-300 bg-white shadow-xl transition-shadow focus-within:border-primary-600 focus-within:ring-2 focus-within:ring-primary-600/20">
                  {/* Textarea */}
                  <Textarea
                    placeholder="Ask, search, or make anything..."
                    className="min-h-16 resize-none border-0 px-3 py-3 text-base shadow-none focus-visible:ring-0 md:text-sm"
                  />

                  {/* Bottom toolbar */}
                  <div className="flex w-full items-center justify-between gap-2 border-t border-transparent px-3 py-2">
                    <div className="flex items-center gap-1">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 gap-1.5 rounded-full hover:bg-gray-100"
                      >
                        <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                        </svg>
                        Attach
                      </Button>
                    </div>
                    <Button
                      className="h-8 gap-2 rounded-full bg-primary-600 px-4 hover:bg-primary-700"
                    >
                      Create Agent
                      <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </TooltipProvider>
            </div>

            {/* Quick Action Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {quickActions.slice(0, 4).map((action, idx) => (
                <button key={idx} className="pill-button">
                  <span>{action.icon}</span>
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {quickActions.slice(4).map((action, idx) => (
                <button key={idx} className="pill-button">
                  <span>{action.icon}</span>
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h3 className="text-center text-xl font-semibold mb-12 text-primary-900">
            Your next hire isn&apos;t human. These teams know.
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
            {companyLogos.map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <span className="text-lg font-bold text-gray-600">{logo}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="text-center mb-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Easy as one, two, three.
            </span>
          </div>
          <h2 className="text-center mb-16 text-4xl font-bold text-primary-900">
            How it works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white font-bold bg-primary-600">
                1
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary-900">
                Describe your agent
              </h3>
              <p className="text-dark-600">
                Tell PUNKU.AI what you want to automate in plain English. Or choose from 50+ pre-built templates.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white font-bold bg-primary-600">
                2
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary-900">
                Connect your apps
              </h3>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {['📧', '📅', '💬', '📊', '🎥', '📝'].map((icon, idx) => (
                  <div key={idx} className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl">
                    {icon}
                  </div>
                ))}
              </div>
              <p className="text-sm text-primary-600">
                Hundreds of integrations available.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6 text-white font-bold bg-primary-600">
                3
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary-900">
                Let AI do the work
              </h3>
              <p className="text-dark-600">
                Give custom instructions to your agent, all in natural language. Your AI worker handles tasks automatically 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Showcase */}
      <section id="integrations" className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-900">
            Integrates with all your apps.
          </h2>
          <div className="max-w-4xl mx-auto rounded-3xl p-12 mb-8 bg-primary-50">
            <div className="grid grid-cols-4 md:grid-cols-6 gap-6">
              {['📧', '💬', '📊', '📅', '💳', '📝', '🎥', '☁️', '🗂️', '📱', '🔔', '🌐'].map((icon, idx) => (
                <div key={idx} className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer">
                  {icon}
                </div>
              ))}
            </div>
          </div>
          <button className="px-6 py-3 text-sm font-semibold border-2 rounded-lg hover:bg-primary-50 transition-all text-primary-900 border-primary-900">
            Browse all integrations
          </button>
        </div>
      </section>

      {/* Use Case: Sales */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="mb-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Agents for sales
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-4xl font-bold mb-4 md:mb-0 text-primary-900">
              Close more deals than ever with AI.
            </h2>
            <button className="px-6 py-3 text-sm font-semibold rounded-lg text-white hover:opacity-90 transition-all bg-primary-600">
              Sales templates
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-2xl bg-primary-50">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-900">
                Lead Qualifier
              </h3>
              <p className="mb-4 text-dark-600">
                Automatically research and qualify incoming leads before your sales team reaches out.
              </p>
              <a href="#" className="text-sm font-semibold text-primary-600">
                Try it →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-2xl bg-primary-50">
                🔍
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-900">
                Lead Generator
              </h3>
              <p className="mb-4 text-dark-600">
                Find leads across 200+ sources including LinkedIn, Instagram, and more.
              </p>
              <a href="#" className="text-sm font-semibold text-primary-600">
                Try it →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-2xl bg-primary-50">
                ✉️
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-900">
                Lead Outreach
              </h3>
              <p className="mb-4 text-dark-600">
                Write the perfect personalized outreach message based on prospect research.
              </p>
              <a href="#" className="text-sm font-semibold text-primary-600">
                Try it →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Use Case: Meetings */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Agents for your meetings
            </span>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="text-4xl font-bold mb-4 md:mb-0 text-primary-900">
              The ultimate meeting sidekick.
            </h2>
            <button className="px-6 py-3 text-sm font-semibold rounded-lg text-white hover:opacity-90 transition-all bg-primary-600">
              Meeting templates
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-2xl bg-white">
                📹
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-900">
                Your second brain in meetings
              </h3>
              <p className="mb-4 text-dark-600">
                Automatically record, transcribe, and summarize all your meetings. Ask questions about past conversations.
              </p>
              <a href="#" className="text-sm font-semibold text-primary-600">
                Try it →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6">
                <div className="text-2xl mb-3">🗓️</div>
                <h4 className="font-bold mb-2 text-primary-900">Meeting Scheduler</h4>
                <p className="text-sm text-dark-600">No more scheduling back-and-forth</p>
                <a href="#" className="text-xs font-semibold mt-2 inline-block text-primary-600">Try it →</a>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-2xl mb-3">💡</div>
                <h4 className="font-bold mb-2 text-primary-900">Meeting Coach</h4>
                <p className="text-sm text-dark-600">Get real-time suggestions</p>
                <a href="#" className="text-xs font-semibold mt-2 inline-block text-primary-600">Try it →</a>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-2xl mb-3">📊</div>
                <h4 className="font-bold mb-2 text-primary-900">Daily Digests</h4>
                <p className="text-sm text-dark-600">Summary of all meetings</p>
                <a href="#" className="text-xs font-semibold mt-2 inline-block text-primary-600">Try it →</a>
              </div>
              <div className="bg-white rounded-xl p-6">
                <div className="text-2xl mb-3">✉️</div>
                <h4 className="font-bold mb-2 text-primary-900">Follow-up Email</h4>
                <p className="text-sm text-dark-600">Auto-draft follow-ups</p>
                <a href="#" className="text-xs font-semibold mt-2 inline-block text-primary-600">Try it →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phone Agents Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-900">
            Your customer&apos;s superhero. Available 24 hours a day.
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: 'Executive Assistant', emoji: '💼' },
              { title: 'Customer Support', emoji: '💬' },
              { title: 'Receptionist', emoji: '📞' },
              { title: "Int&apos;l Fleet Coordinator", emoji: '🌍', subtitle: 'Expand globally in 50+ languages' }
            ].map((agent, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{agent.emoji}</div>
                <h3 className="font-bold mb-2 text-primary-900">{agent.title}</h3>
                {agent.subtitle && (
                  <p className="text-sm text-dark-600">{agent.subtitle}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center text-4xl font-bold mb-16 text-primary-900">
            Everything you need to automate anything.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: '🔗', title: 'Connect to your systems', desc: 'Integrate with 2,800+ apps and services' },
              { icon: '🧠', title: 'Model agnostic', desc: 'Choose from top AI models or let PUNKU decide' },
              { icon: '👤', title: 'Human-in-the-loop', desc: 'Insert yourself at any point in the workflow' },
              { icon: '🌐', title: 'Embed on your site', desc: 'Add AI agents to your website in minutes' },
              { icon: '📱', title: 'Mobile app', desc: 'Talk to your agents on the go' },
              { icon: '⚡', title: 'Agent builder', desc: 'Create agents with simple prompts' },
              { icon: '🤖', title: 'Autopilot', desc: 'Agents use computers like human employees' },
              { icon: '👥', title: 'Team Accounts', desc: 'Share agents and workflows across teams' },
              { icon: '🔄', title: 'Multi-agent systems', desc: 'Agents that work together like a team' },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-primary-900">
                  {feature.title}
                </h3>
                <p className="text-sm text-dark-600">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-900">
            Enterprise-grade security and compliance.
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-semibold text-primary-900">SOC 2 Compliant</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-semibold text-primary-900">GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-sm">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <span className="font-semibold text-primary-900">AES-256 encryption</span>
            </div>
          </div>
          <p className="text-dark-600">
            Data is encrypted both at rest and in transit.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center text-4xl font-bold mb-4 text-primary-900">
            What teams are saying:
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {[
              {
                quote: "It&apos;s like hiring a 24/7 ops teammate for a fraction of the cost. PUNKU.AI handles all our booking confirmations automatically.",
                author: "Ken Aseme",
                role: "CEO",
                company: "TourFlow"
              },
              {
                quote: "PUNKU.AI allowed us to scale the unscalable. We&apos;re now handling 3x more customers with the same team size.",
                author: "Scot Westwater",
                role: "CEO",
                company: "Adventure Tours"
              },
              {
                quote: "PUNKU.AI felt like hiring a superhuman overnight. Our response time went from hours to seconds.",
                author: "Maddie Weber",
                role: "Business Ops Lead",
                company: "City Explorer"
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow">
                <p className="text-lg mb-6 italic text-primary-900">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div>
                  <p className="font-bold text-primary-900">{testimonial.author}</p>
                  <p className="text-sm text-dark-600">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
                <a href="#" className="text-sm font-semibold mt-4 inline-block text-primary-600">
                  Read full story →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-purple-700 text-center">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="mb-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-white/80">
              Automate anything
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let&apos;s build your AI teammate.
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Whether you&apos;re building solo or looking for full-service, we&apos;re here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://app.punku.ai"
              className="inline-block px-10 py-4 bg-white rounded-xl font-bold text-lg hover:bg-gray-100 transition-all shadow-xl text-primary-900"
            >
              Try it free
            </a>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="container-custom">
          {/* Compliance Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-12 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 text-sm font-semibold text-primary-900">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              GDPR Compliant
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-primary-900">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              SOC 2 Compliant
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-primary-900">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              HIPAA Compliant
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Image src="/logo.png" alt="PUNKU.AI Logo" width={120} height={32} className="mb-4" />
              <p className="text-sm text-dark-600">
                AI workers for tour operators
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-primary-900">Solutions</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline text-dark-600">Sales</a></li>
                <li><a href="#" className="hover:underline text-dark-600">Email</a></li>
                <li><a href="#" className="hover:underline text-dark-600">Customer Support</a></li>
                <li><a href="#" className="hover:underline text-dark-600">Meetings</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-primary-900">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:underline text-dark-600">Blog</a></li>
                <li><a href="#" className="hover:underline text-dark-600">Academy</a></li>
                <li><a href="#" className="hover:underline text-dark-600">Community</a></li>
                <li><a href="#" className="hover:underline text-dark-600">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-primary-900">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="hover:underline text-dark-600">Contact</Link></li>
                <li><a href="#" className="hover:underline text-dark-600">Careers</a></li>
                <li><a href="#" className="hover:underline text-dark-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:underline text-dark-600">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm mb-4 md:mb-0 text-dark-600">
              PUNKU.AI. All rights reserved. © 2025
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <svg className="w-6 h-6 text-primary-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <svg className="w-6 h-6 text-primary-900" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Chat Button */}
      <button className="chat-button" aria-label="Chat with us">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
    </div>
  );
}
