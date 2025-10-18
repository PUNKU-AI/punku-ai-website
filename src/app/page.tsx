"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Globe, MessageSquare, Phone, Target, Video, Linkedin, Bot, Mic } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentInput, setCurrentInput] = useState('Ask PUNKU to create a ');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [mentionedTools, setMentionedTools] = useState<Array<{name: string, logo: string}>>([]);

  const prefix = 'Ask PUNKU to create a ';
  const placeholders = [
    { text: 'customer service chatbot that connects with @Bookingkit and manages my @Gmail inbox', tools: [{name: 'Bookingkit', logo: '/brand-logos/bookingkit.jpeg'}, {name: 'Gmail', logo: '/brand-logos/gmail.svg'}] },
  ];

  React.useEffect(() => {
    let currentText = '';
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const currentPlaceholder = placeholders[placeholderIndex];
      const fullText = currentPlaceholder.text;

      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }

      // Always include the prefix
      const displayText = prefix + currentText;
      setCurrentInput(displayText);

      // Extract mentioned tools from current text
      const toolMatches = currentText.match(/@\w+/g) || [];
      const activeMentions = toolMatches.map(match => {
        const toolName = match.substring(1); // Remove @
        const tool = currentPlaceholder.tools.find(t => t.name === toolName);
        return tool || null;
      }).filter(Boolean) as Array<{name: string, logo: string}>;

      setMentionedTools(activeMentions);

      let typeSpeed = isDeleting ? 22 : 60; // 25% faster (30 -> 22, 80 -> 60)

      if (!isDeleting && currentText === fullText) {
        typeSpeed = 2000; // 2 second pause before deleting
        isDeleting = true;
      } else if (isDeleting && currentText === '') {
        isDeleting = false;
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        setMentionedTools([]);
        typeSpeed = 500; // Wait before typing next
      }

      timeout = setTimeout(type, typeSpeed);
    };

    timeout = setTimeout(type, 100);

    return () => clearTimeout(timeout);
  }, [placeholderIndex]);

  // Quick action pills data
  const quickActions = [
    { icon: Globe, label: 'Personal website', color: 'bg-blue-50' },
    { icon: MessageSquare, label: 'Customer Support', color: 'bg-purple-50' },
    { icon: Phone, label: 'Outbound Sales Calls', color: 'bg-pink-50' },
    { icon: Target, label: 'Lead gen', color: 'bg-yellow-50' },
    { icon: Video, label: 'Meeting Recorder', color: 'bg-green-50' },
    { icon: Linkedin, label: 'LinkedIn outreach', color: 'bg-blue-50' },
    { icon: Bot, label: 'Support Chatbot', color: 'bg-purple-50' },
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
              <div className="relative group">
                <button className="text-sm font-medium text-primary-900 hover:text-primary-600 transition-colors">
                  Resources
                </button>
              </div>
              <a href="https://app.punku.ai" className="px-4 py-2 text-sm font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-all">
                Get Started
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
      <section className="relative pt-32 pb-20 overflow-hidden bg-white">
        {/* Dot Pattern Background */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        <div className="container-custom relative z-10">
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
                  {/* Textarea with animated placeholder */}
                  <div className="relative w-full">
                    <Textarea
                      className="min-h-20 resize-none border-0 px-4 py-4 text-lg shadow-none focus-visible:ring-0"
                    />
                    {currentInput && (
                      <div className="pointer-events-none absolute left-0 top-0 flex items-start gap-2 px-4 py-4 text-lg text-muted-foreground text-left w-full">
                        <span className="text-left">
                          {currentInput.split(/(@\w+)/g).map((part, i) => {
                            if (part.startsWith('@')) {
                              const toolName = part.substring(1);
                              const tool = mentionedTools.find(t => t.name === toolName);
                              return (
                                <span
                                  key={i}
                                  className="inline-flex items-center gap-1.5 rounded-md bg-blue-100 px-2 py-1 text-primary-600 font-medium"
                                >
                                  {tool?.logo && (
                                    <Image
                                      src={tool.logo}
                                      alt={tool.name}
                                      width={18}
                                      height={18}
                                      className="rounded-sm"
                                    />
                                  )}
                                  {part}
                                </span>
                              );
                            }
                            return <span key={i}>{part}</span>;
                          })}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Bottom toolbar */}
                  <div className="flex w-full items-center justify-between gap-2 border-t border-transparent px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="h-9 gap-2 rounded-full hover:bg-gray-100 text-base"
                          >
                            <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                            </svg>
                            Attach
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-gray-900 text-white">
                          <p>Attach file</p>
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-9 rounded-full hover:bg-gray-100"
                            aria-label="Voice input"
                          >
                            <Mic className="size-5" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-gray-900 text-white">
                          <p>Voice input</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                    <Button
                      className="h-9 gap-2 rounded-full bg-primary-600 px-5 hover:bg-primary-700 text-base"
                    >
                      Create Agent
                      <svg className="size-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Button>
                  </div>
                </div>
              </TooltipProvider>
            </div>

            {/* Quick Action Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {quickActions.slice(0, 4).map((action, idx) => {
                const IconComponent = action.icon;
                return (
                  <button key={idx} className="pill-button">
                    <IconComponent className="w-4 h-4" />
                    <span>{action.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {quickActions.slice(4).map((action, idx) => {
                const IconComponent = action.icon;
                return (
                  <button key={idx} className="pill-button">
                    <IconComponent className="w-4 h-4" />
                    <span>{action.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="mb-4">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary-600">
              Easy as one, two, three.
            </span>
          </div>
          <h2 className="mb-16 text-4xl font-bold text-primary-900">
            How it works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-3 shadow-sm">
              <div className="w-full h-48 bg-white rounded-xl mb-4 overflow-hidden flex flex-col border border-gray-200">
                {/* Chat messages */}
                <div className="flex-1 p-3 pt-16 pb-1 flex flex-col justify-end gap-1.5 overflow-hidden">
                  {/* User message */}
                  <div className="flex justify-end items-start gap-1.5">
                    <div className="border border-gray-300 bg-white text-gray-800 text-[10px] leading-tight px-2.5 py-1.5 rounded-lg rounded-tr-none max-w-[85%]">
                      <span>Create a customer service chatbot that connects with </span>
                      <span className="inline-flex items-center gap-0.5 rounded bg-blue-100 px-1 py-0.5 font-medium text-primary-600">
                        <Image
                          src="/brand-logos/bookingkit.jpeg"
                          alt="Bookingkit"
                          width={10}
                          height={10}
                          className="rounded-sm inline"
                        />
                        @Bookingkit
                      </span>
                      <span> and manages my </span>
                      <span className="inline-flex items-center gap-0.5 rounded bg-blue-100 px-1 py-0.5 font-medium text-primary-600">
                        <Image
                          src="/brand-logos/gmail.svg"
                          alt="Gmail"
                          width={10}
                          height={10}
                          className="rounded-sm inline"
                        />
                        @Gmail
                      </span>
                      <span> inbox</span>
                    </div>
                    <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                  </div>
                  {/* AI response 1 */}
                  <div className="flex justify-start items-start gap-1.5">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 overflow-hidden bg-white">
                      <Image
                        src="/favicon.png"
                        alt="PUNKU"
                        width={20}
                        height={20}
                        className="object-cover"
                      />
                    </div>
                    <div className="border-2 border-primary-600 bg-white text-gray-800 text-[10px] leading-tight px-2.5 py-1.5 rounded-lg rounded-tl-none max-w-[85%]">
                      Perfect! I'll connect to Bookingkit and Gmail.
                    </div>
                  </div>
                  {/* AI question */}
                  <div className="flex justify-start items-start gap-1.5">
                    <div className="w-5 h-5 rounded-full flex-shrink-0 overflow-hidden bg-white">
                      <Image
                        src="/favicon.png"
                        alt="PUNKU"
                        width={20}
                        height={20}
                        className="object-cover"
                      />
                    </div>
                    <div className="border-2 border-primary-600 bg-white text-gray-800 text-[10px] leading-tight px-2.5 py-1.5 rounded-lg rounded-tl-none max-w-[85%]">
                      Should the agent send emails automatically or just draft replies for you to review?
                    </div>
                  </div>
                </div>
                {/* Chat input at bottom */}
                <div className="border-t border-white/30 bg-white/50 backdrop-blur-sm p-2 flex items-center gap-1.5">
                  <input
                    type="text"
                    placeholder="Type your response..."
                    className="flex-1 bg-white border border-gray-200 rounded-md px-2 py-1 text-[9px] placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-600"
                    disabled
                  />
                  <button className="bg-primary-600 text-white rounded-md px-2 py-1 text-[9px] font-medium hover:bg-primary-700 transition-colors">
                    Send
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold bg-primary-600 flex-shrink-0">
                  1
                </div>
                <h3 className="text-lg font-bold text-primary-900">
                  Describe your agent
                </h3>
              </div>
              <p className="text-dark-600">
                Tell PUNKU.AI what you want to automate in plain English. Or choose from 50+ pre-built templates.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-3 shadow-sm">
              <div className="w-full h-48 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl mb-4 p-6 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-3">
                  {['📧', '📅', '💬', '📊', '🎥', '📝'].map((icon, idx) => (
                    <div key={idx} className="w-14 h-14 bg-white rounded-lg flex items-center justify-center text-2xl shadow-sm">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold bg-primary-600 flex-shrink-0">
                  2
                </div>
                <h3 className="text-lg font-bold text-primary-900">
                  Connect your apps
                </h3>
              </div>
              <p className="text-dark-600">
                Hundreds of integrations available.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-3 shadow-sm">
              <div className="w-full h-48 bg-gradient-to-br from-green-50 to-green-100 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-24 h-24 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold bg-primary-600 flex-shrink-0">
                  3
                </div>
                <h3 className="text-lg font-bold text-primary-900">
                  Let AI do the work
                </h3>
              </div>
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
