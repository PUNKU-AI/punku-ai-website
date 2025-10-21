"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Globe, MessageSquare, Phone, Target, Video, Linkedin, Bot, Mic, Check } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import IntegrationTicker from '@/components/IntegrationTicker';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

// Animated task check component
function TaskCheckAnimation({ delay, text }: { delay: number; text: string }) {
  const [isChecked, setIsChecked] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    // Fade in the task
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    // Check the task after user has time to read it (1.5 seconds)
    const checkTimer = setTimeout(() => {
      setIsChecked(true);
    }, delay + 1500);

    return () => {
      clearTimeout(visibilityTimer);
      clearTimeout(checkTimer);
    };
  }, [delay]);

  return (
    <div
      className={`flex items-center gap-3 bg-white rounded-lg px-4 py-3 shadow-sm transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
    >
      <div
        className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-all duration-300 flex-shrink-0 ${
          isChecked
            ? 'bg-green-500 border-green-500 scale-110'
            : 'border-gray-300'
        }`}
      >
        {isChecked && (
          <Check className="w-3 h-3 text-white animate-in zoom-in duration-200" />
        )}
      </div>
      <span
        className={`text-sm font-medium transition-all duration-500 ${
          isChecked ? 'text-gray-400 line-through' : 'text-gray-700'
        }`}
      >
        {text}
      </span>
    </div>
  );
}

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [currentInput, setCurrentInput] = useState('Ask PUNKU to create a ');
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [mentionedTools, setMentionedTools] = useState<Array<{name: string, logo: string}>>([]);

  // Templates data
  const templates = [
    {
      name: 'Market Research Assistant',
      category: 'Research',
      description: 'Analyze competitor data and market trends',
      integrations: ['/brand-logos/Google/google.svg', '/brand-logos/Notion/notion.svg']
    },
    {
      name: 'Customer Feedback Analyzer',
      category: 'Research',
      description: 'Extract insights from customer reviews',
      integrations: ['/brand-logos/gmail.svg', '/brand-logos/Slack/slack.svg']
    },
    {
      name: 'Tour Availability Checker',
      category: 'Research',
      description: 'Monitor and report tour availability',
      integrations: ['/brand-logos/bookingkit.jpeg', '/brand-logos/Slack/slack.svg']
    },
    {
      name: 'Email Campaign Manager',
      category: 'Marketing',
      description: 'Automate email marketing campaigns',
      integrations: ['/brand-logos/gmail.svg', '/brand-logos/Google/google.svg']
    },
    {
      name: 'Social Media Scheduler',
      category: 'Marketing',
      description: 'Schedule and post social content',
      integrations: ['/brand-logos/Notion/notion.svg', '/brand-logos/Slack/slack.svg']
    },
    {
      name: 'Lead Generation Bot',
      category: 'Marketing',
      description: 'Capture and qualify leads automatically',
      integrations: ['/brand-logos/gmail.svg', '/brand-logos/Twilio/twilio.svg']
    },
    {
      name: 'Customer Service Chatbot',
      category: 'Support',
      description: 'Handle common customer inquiries 24/7',
      integrations: ['/brand-logos/Slack/slack.svg', '/brand-logos/gmail.svg']
    },
    {
      name: 'Booking Support Agent',
      category: 'Support',
      description: 'Assist customers with bookings',
      integrations: ['/brand-logos/bookingkit.jpeg', '/brand-logos/gmail.svg']
    },
    {
      name: 'Refund Request Handler',
      category: 'Support',
      description: 'Process refund requests automatically',
      integrations: ['/brand-logos/gmail.svg', '/brand-logos/Notion/notion.svg']
    },
    {
      name: 'Sales Follow-up Agent',
      category: 'Sales',
      description: 'Nurture leads with personalized follow-ups',
      integrations: ['/brand-logos/gmail.svg', '/brand-logos/Twilio/twilio.svg']
    },
    {
      name: 'Quote Generator',
      category: 'Sales',
      description: 'Create custom quotes for tour packages',
      integrations: ['/brand-logos/bookingkit.jpeg', '/brand-logos/gmail.svg']
    },
    {
      name: 'Booking Confirmation Agent',
      category: 'Sales',
      description: 'Send confirmations and payment reminders',
      integrations: ['/brand-logos/gmail.svg', '/brand-logos/Slack/slack.svg']
    },
    {
      name: 'Calendar Sync Manager',
      category: 'Operations',
      description: 'Keep all calendars synchronized',
      integrations: ['/brand-logos/Google/google.svg', '/brand-logos/zoom.png']
    },
    {
      name: 'Team Task Coordinator',
      category: 'Operations',
      description: 'Assign and track team tasks',
      integrations: ['/brand-logos/Slack/slack.svg', '/brand-logos/Notion/notion.svg']
    },
    {
      name: 'Document Processor',
      category: 'Operations',
      description: 'Extract data from documents automatically',
      integrations: ['/brand-logos/Google/google.svg', '/brand-logos/Notion/notion.svg']
    },
  ];

  const filteredTemplates = activeFilter === 'All'
    ? templates
    : templates.filter(t => t.category === activeFilter);

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
      <Navbar />

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
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-6">
              Easy as one, two, three.
            </Badge>
            <h2 className="mb-4 text-4xl font-bold text-primary-900 lg:text-5xl">
              How it works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Create powerful AI agents in minutes with our simple three-step process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Step 1 */}
            <Card className="grid grid-rows-[auto_auto_1fr] overflow-hidden">
              <div className="aspect-[4/3] w-full bg-white border-b border-gray-200">
                <div className="w-full h-full flex flex-col">
                  {/* Chat messages */}
                  <div className="flex-1 p-4 pt-20 pb-2 flex flex-col justify-end gap-2 overflow-hidden">
                    {/* User message */}
                    <div className="flex justify-end items-start gap-2 chat-message chat-message-user">
                      <div className="border border-gray-300 bg-white text-gray-800 text-xs leading-tight px-3 py-2 rounded-lg rounded-tr-none max-w-[85%]">
                        <span>Create a customer service chatbot that connects with </span>
                        <span className="inline-flex items-center gap-1 rounded bg-blue-100 px-1.5 py-0.5 font-medium text-primary-600">
                          <Image
                            src="/brand-logos/bookingkit.jpeg"
                            alt="Bookingkit"
                            width={12}
                            height={12}
                            className="rounded-sm inline"
                          />
                          @Bookingkit
                        </span>
                        <span> and manages my </span>
                        <span className="inline-flex items-center gap-1 rounded bg-blue-100 px-1.5 py-0.5 font-medium text-primary-600">
                          <Image
                            src="/brand-logos/gmail.svg"
                            alt="Gmail"
                            width={12}
                            height={12}
                            className="rounded-sm inline"
                          />
                          @Gmail
                        </span>
                        <span> inbox</span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                        </svg>
                      </div>
                    </div>
                    {/* AI response 1 */}
                    <div className="flex justify-start items-start gap-2 chat-message chat-message-ai">
                      <div className="w-6 h-6 rounded-full flex-shrink-0 overflow-hidden bg-white">
                        <Image
                          src="/favicon.png"
                          alt="PUNKU"
                          width={24}
                          height={24}
                          className="object-cover"
                        />
                      </div>
                      <div className="border-2 border-primary-600 bg-white text-gray-800 text-xs leading-tight px-3 py-2 rounded-lg rounded-tl-none max-w-[85%]">
                        Perfect! I'll connect to Bookingkit and Gmail.
                      </div>
                    </div>
                    {/* AI question */}
                    <div className="flex justify-start items-start gap-2 chat-message chat-message-ai">
                      <div className="w-6 h-6 rounded-full flex-shrink-0 overflow-hidden bg-white">
                        <Image
                          src="/favicon.png"
                          alt="PUNKU"
                          width={24}
                          height={24}
                          className="object-cover"
                        />
                      </div>
                      <div className="border-2 border-primary-600 bg-white text-gray-800 text-xs leading-tight px-3 py-2 rounded-lg rounded-tl-none max-w-[85%]">
                        Should the agent send emails automatically or just draft replies?
                      </div>
                    </div>
                  </div>
                  {/* Chat input at bottom */}
                  <div className="border-t border-gray-200 bg-white/50 backdrop-blur-sm p-2.5 flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Type your response..."
                      className="flex-1 bg-white border border-gray-200 rounded-md px-3 py-1.5 text-xs placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-primary-600"
                      disabled
                    />
                    <button className="bg-primary-600 text-white rounded-md px-3 py-1.5 text-xs font-medium hover:bg-primary-700 transition-colors">
                      Send
                    </button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold bg-primary-600 flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-primary-900">
                    Describe your agent
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tell PUNKU.AI what you want to automate in plain English. Or choose from 50+ pre-built templates.
                </p>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="grid grid-rows-[auto_auto_1fr] overflow-hidden">
              <div className="aspect-[4/3] w-full border-b border-gray-200 overflow-hidden">
                <div className="w-full h-full">
                  <IntegrationTicker />
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold bg-primary-600 flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-primary-900">
                    Connect your apps
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hundreds of integrations available. Connect to your existing tools and workflows seamlessly.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="grid grid-rows-[auto_auto_1fr] overflow-hidden">
              <div className="aspect-[4/3] w-full bg-gradient-to-br from-green-50 to-green-100 border-b border-gray-200 flex items-center justify-center p-6">
                <div className="w-full max-w-xs space-y-3">
                  <TaskCheckAnimation delay={0} text="Send booking confirmation" />
                  <TaskCheckAnimation delay={1000} text="Update calendar" />
                  <TaskCheckAnimation delay={2000} text="Notify team on Slack" />
                  <TaskCheckAnimation delay={3000} text="Send follow-up email" />
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-bold bg-primary-600 flex-shrink-0">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-primary-900">
                    Let AI do the work
                  </h3>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Give custom instructions to your agent, all in natural language. Your AI worker handles tasks automatically 24/7.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Get started right now with our expert-designed templates
            </h2>
            <p className="text-xl text-dark-400 max-w-3xl mx-auto mb-8">
              No need to start from scratch. Get inspired by 100+ templates and customize them to match the way you work.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['All', 'Research', 'Marketing', 'Support', 'Sales', 'Operations'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all ${
                    activeFilter === filter
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-dark-600 border border-gray-300 hover:border-primary-600 hover:text-primary-600'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredTemplates.map((template, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border hover:border-primary-600 flex flex-col"
              >
                <CardHeader>
                  <h3 className="font-bold text-primary-900 text-lg mb-2 group-hover:text-primary-600 transition-colors">
                    {template.name}
                  </h3>
                  <Badge variant="secondary" className="w-fit">
                    {template.category}
                  </Badge>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-sm text-dark-400 mb-4">{template.description}</p>

                  {/* Integration logos and CTA */}
                  <div className="mt-auto flex items-center justify-between gap-4">
                    {/* Integration logos */}
                    <div className="flex items-center gap-2">
                      {template.integrations.map((logo, logoIndex) => (
                        <div
                          key={logoIndex}
                          className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center p-1"
                        >
                          <Image
                            src={logo}
                            alt="Integration"
                            width={24}
                            height={24}
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Try now button */}
                    <Button
                      asChild
                      size="sm"
                      className="bg-primary-600 hover:bg-primary-700 text-white font-semibold"
                    >
                      <a href="https://app.punku.ai">Try now</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://app.punku.ai"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl"
            >
              Browse All Templates
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-center mb-16">Frequently Asked Questions</h2>

          <Accordion type="single" collapsible className="w-full space-y-4" defaultValue="item-1">
            <AccordionItem value="item-0" className="border border-dark-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-primary-900 hover:no-underline">
                What makes PUNKU.AI different from other AI platforms?
              </AccordionTrigger>
              <AccordionContent className="text-dark-400">
                PUNKU.AI is specifically designed for tour operators. Instead of generic AI tools, we provide pre-built agents for booking management, customer communication, and tour coordination. Our meta-agent understands your business and automates tasks in plain English—no technical setup required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-1" className="border border-dark-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-primary-900 hover:no-underline">
                Do I need technical knowledge to use PUNKU.AI?
              </AccordionTrigger>
              <AccordionContent className="text-dark-400">
                No! That&apos;s the point. Simply describe what you want in plain English. For example: &apos;When someone books a tour, send confirmation and add to calendar.&apos; Our meta-agent handles the technical setup. No coding, no complex workflows to build.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-dark-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-primary-900 hover:no-underline">
                How long does it take to get started?
              </AccordionTrigger>
              <AccordionContent className="text-dark-400">
                Most tour operators have their first AI agent running within 15 minutes. Connect your tools (like Bookingkit, Gmail, or Slack), describe what you want automated, and PUNKU does the rest. Start with simple tasks and scale up as you see results.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-dark-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-primary-900 hover:no-underline">
                How secure is my data on PUNKU.AI?
              </AccordionTrigger>
              <AccordionContent className="text-dark-400">
                Security is our top priority. We use enterprise-grade encryption, secure data centers, and follow industry best practices. Your data is never used to train AI models, you maintain full ownership, and we&apos;re compliant with GDPR and other data protection regulations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-dark-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-primary-900 hover:no-underline">
                What happens if something goes wrong?
              </AccordionTrigger>
              <AccordionContent className="text-dark-400">
                Every AI agent has built-in monitoring and error handling. If something unexpected happens, you&apos;ll get notified immediately. Plus, you can review all agent actions in your dashboard. Our support team is available to help troubleshoot any issues.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-dark-200 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold text-primary-900 hover:no-underline">
                Can I try it before committing?
              </AccordionTrigger>
              <AccordionContent className="text-dark-400">
                Absolutely! Start with our 14-day free trial—no credit card required. You&apos;ll get full access to create AI agents, connect your tools, and see real results. Most tour operators know within the first week if PUNKU.AI is right for them.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section id="trial" className="section-padding text-center relative overflow-hidden bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900">
        <div className="container-custom relative z-10">
          <h2 className="!text-white mb-6 text-4xl md:text-5xl font-black">
            Join 200+ Tour Operators Automating with PUNKU.AI
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto font-bold">
            Stop drowning in repetitive tasks. Let AI workers handle the boring stuff while you create amazing experiences.
          </p>
          <a
            href="https://app.punku.ai"
            className="btn-primary bg-white text-primary-900 hover:bg-gray-100 inline-block px-10 py-4 text-xl font-bold shadow-2xl"
          >
            Start 14-Day Free Trial
          </a>
          <p className="text-white text-sm mt-4 font-bold">
            No credit card required • Set up in minutes • Cancel anytime
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
