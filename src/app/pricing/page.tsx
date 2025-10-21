"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Sparkles } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function PricingPage() {
  const faqs = [
    {
      question: "What's included in the free trial?",
      answer: "The 14-day free trial includes full access to all features of your chosen plan. You can create AI agents, connect integrations, and explore the platform without any limitations. No credit card required to start."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the charges accordingly. Your AI agents and configurations remain intact during plan changes."
    },
    {
      question: "What happens when I run out of credits?",
      answer: "When you reach your monthly credit limit, your AI agents will pause until the next billing cycle or you can purchase additional credits. We'll send you notifications before you hit the limit so you're never caught by surprise."
    },
    {
      question: "Do you offer custom enterprise plans?",
      answer: "Absolutely! For larger teams with specific needs, we offer custom enterprise solutions with dedicated support, custom integrations, and flexible pricing. Contact our sales team to discuss your requirements."
    },
    {
      question: "Is my data secure?",
      answer: "Security is our top priority. We use enterprise-grade encryption, secure data centers, and follow industry best practices. Your data is never used to train AI models, and you maintain full ownership of all your information."
    }
  ];

  const pricingTiers = [
    {
      name: "Solo",
      price: "39",
      description: "Perfect for individuals starting their AI journey",
      features: [
        "2,000 credits per month",
        "5 AI Agents",
        "20 AI Models",
        "1GB Custom memory"
      ],
      highlighted: false,
      buttonText: "Get Started"
    },
    {
      name: "Pro",
      price: "99",
      badge: "Most Popular",
      description: "Ideal for professionals and growing teams",
      features: [
        "5,000 credits per month",
        "Build your AI Workforce",
        "12+ AI Agents",
        "100+ AI Models",
        "5GB Custom memory"
      ],
      highlighted: true,
      buttonText: "Start Free Trial"
    },
    {
      name: "Growth",
      price: "199",
      description: "For teams that need advanced capabilities",
      features: [
        "10,000 credits per month",
        "Build your AI Workforce",
        "200+ AI Models",
        "1:1 support via Slack/email",
        "20GB Custom memory"
      ],
      highlighted: false,
      buttonText: "Start Free Trial"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-24 pb-20 px-6">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'radial-gradient(circle, #2563eb 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-200 mb-6">
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-semibold text-primary-600">Pricing Plans</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-primary-900 mb-6 tracking-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-dark-400 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. All plans include a 14-day free trial.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 relative">
            {pricingTiers.map((tier) => (
              <Card
                key={tier.name}
                className={`relative flex flex-col transition-all duration-300 hover:shadow-2xl ${
                  tier.highlighted
                    ? "border-2 border-primary-600 shadow-2xl md:scale-105 bg-gradient-to-b from-white to-primary-50/30"
                    : "border border-gray-200 shadow-lg hover:border-primary-300 bg-white"
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-primary-600 text-white px-6 py-1.5 text-sm font-bold shadow-lg border-0">
                      {tier.badge}
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-8 pt-8">
                  <CardTitle className="text-2xl font-bold text-primary-900 mb-2">
                    {tier.name}
                  </CardTitle>
                  <p className="text-sm text-dark-400 mb-6 min-h-[40px]">
                    {tier.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-primary-600">
                      €{tier.price}
                    </span>
                    <span className="text-dark-400 text-lg font-medium">/month</span>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow space-y-4 pb-8">
                  <div className="space-y-3">
                    {tier.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="rounded-full bg-primary-100 p-1 mt-0.5 flex-shrink-0">
                          <Check className="h-4 w-4 text-primary-600 stroke-[3]" />
                        </div>
                        <span className="text-sm text-dark-500 leading-relaxed">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0 pb-8">
                  <Button
                    asChild
                    className={`w-full h-12 font-semibold text-base transition-all duration-300 ${
                      tier.highlighted
                        ? "bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl"
                        : "bg-white border-2 border-gray-300 hover:border-primary-600 text-primary-900 hover:text-primary-600 shadow-sm hover:shadow-md"
                    }`}
                  >
                    <a href="https://app.punku.ai">{tier.buttonText}</a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Footer message */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center gap-6 px-8 py-4">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-900">14-day free trial</span>
              </div>
              <div className="w-1 h-4 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-900">No setup fees</span>
              </div>
              <div className="w-1 h-4 bg-gray-300 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-primary-600" />
                <span className="text-sm font-semibold text-primary-900">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FAQ Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-dark-400">
              Everything you need to know about our pricing and plans
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full" defaultValue="item-0">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-primary-900 hover:text-primary-600">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-dark-500 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center">
            <p className="text-dark-500 mb-4">
              Still have questions?
            </p>
            <a
              href="mailto:support@punku.ai"
              className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Contact our team →
            </a>
          </div>
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
  )
}
