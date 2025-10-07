# PUNKU.AI Website Implementation - AI Worker Instructions

## CONTEXT FOR AI WORKER
You are implementing a complete website repositioning for PUNKU.AI, an AI automation platform. The new positioning focuses on "AI workers that actually work" with special emphasis on the tours, activities & attractions vertical. The website needs to be updated to reflect this new messaging and structure.

---

## PHASE 1: HOMEPAGE UPDATES (PRIORITY: CRITICAL)

### Task 1.1: Update Hero Section
**File:** `index.html` or `pages/index.js` (depending on framework)

**REPLACE** existing hero with:
```html
<section class="hero">
  <h1>AI Workers That Actually Work.<br>Pick One or Let Our Meta-Agent Build One for You.</h1>
  <p class="subheadline">Choose from 50+ ready-to-go AI workers designed for tour operators and attractions. Or describe your workflow, and our meta-agent builds a custom worker in minutes.</p>
  <div class="cta-buttons">
    <button class="primary">Browse AI Workers</button>
    <button class="secondary">Build Your Own →</button>
  </div>
  <p class="trust-bar">Trusted by 200+ tour operators • 1M+ bookings automated • 24/7 support</p>
</section>
```

### Task 1.2: Update Meta Tags
**File:** `index.html` or `_document.js`

**UPDATE** meta tags:
```html
<title>PUNKU.AI - AI Workers for Tours, Activities & Attractions</title>
<meta name="description" content="AI workers that actually work. Automate bookings, customer service, and operations for your tour business. Pick pre-built workers or describe what you want.">
<meta property="og:title" content="PUNKU.AI - AI Workers That Actually Work">
<meta property="og:description" content="Automate your tour business with AI workers. Handle bookings, reviews, and operations automatically.">
```

### Task 1.3: Add "How It Works" Section
**Location:** After hero section

**ADD** this new section:
```html
<section class="how-it-works">
  <h2>The Simplest Way to Automate Your Tour Business</h2>
  <div class="steps">
    <div class="step">
      <span class="step-number">1</span>
      <h3>Pick an AI Worker</h3>
      <p>Choose from our library of pre-built workers</p>
      <p class="examples">"Booking Confirmer" • "Review Responder" • "Availability Checker"</p>
      <p>Deploy in one click</p>
    </div>
    <div class="step">
      <span class="step-number">2</span>
      <h3>Or Describe What You Want</h3>
      <p>"When someone books a tour, send confirmation, add to calendar, and text reminder day before"</p>
      <p>Meta-agent builds it in minutes</p>
    </div>
    <div class="step">
      <span class="step-number">3</span>
      <h3>It Runs 24/7</h3>
      <p>Workers handle repetitive tasks automatically</p>
      <p>You focus on delivering amazing experiences</p>
      <p>No maintenance, no complexity</p>
    </div>
  </div>
</section>
```

---

## PHASE 2: PRICING PAGE UPDATE

### Task 2.1: Replace Pricing Structure
**File:** `pricing.html` or `pages/pricing.js`

**REPLACE** entire pricing section with:
```html
<section class="pricing">
  <h2>Simple, Transparent Pricing for Tour Operators</h2>
  
  <div class="pricing-cards">
    <div class="card">
      <h3>Starter</h3>
      <p class="price">€99<span>/month</span></p>
      <ul>
        <li>10,000 credits/month</li>
        <li>5 AI workers</li>
        <li>Email & calendar integration</li>
        <li>Perfect for: Small operators (&lt;50 tours/month)</li>
      </ul>
      <button>Start Free Trial</button>
    </div>
    
    <div class="card featured">
      <span class="badge">Most Popular</span>
      <h3>Growth</h3>
      <p class="price">$299<span>/month</span></p>
      <ul>
        <li>50,000 credits/month</li>
        <li>15 AI workers</li>
        <li>All integrations</li>
        <li>Meta-agent access</li>
        <li>Perfect for: Growing operators (50-200 tours/month)</li>
      </ul>
      <button>Start Free Trial</button>
    </div>
    
    <div class="card">
      <h3>Scale</h3>
      <p class="price">$799<span>/month</span></p>
      <ul>
        <li>200,000 credits/month</li>
        <li>Unlimited AI workers</li>
        <li>Priority meta-agent</li>
        <li>Dedicated support</li>
        <li>Perfect for: High-volume operators (200+ tours/month)</li>
      </ul>
      <button>Start Free Trial</button>
    </div>
  </div>
  
  <p class="pricing-note">All plans include 14-day free trial • No setup fees • Cancel anytime</p>
</section>
```

---

## PHASE 3: CREATE TOUR WORKERS PAGE

### Task 3.1: Create New Page
**Create File:** `pages/tour-workers.html` or `pages/tour-workers.js`

**CONTENT Structure:**
```markdown
# Page Title: AI Workers for Tours & Attractions

## Section 1: Hero
Headline: Pre-Built AI Workers for Every Part of Your Tour Business
Subhead: Deploy in minutes. Each worker is pre-trained for tour operations.

## Section 2: Worker Categories

### Booking & Reservations
- Booking Confirmer
- Availability Checker
- Booking Modifier
- Group Quote Builder

### Customer Communication
- Pre-Tour Messenger
- Review Request Sender
- FAQ Responder
- Multilingual Communicator

### Operations Management
- Guide Scheduler
- Capacity Optimizer
- Waiver Collector
- Weather Monitor

### Marketing & Sales
- Social Proof Publisher
- Abandoned Cart Recovery
- Upsell Suggester
- Partnership Coordinator

[Include descriptions from positioning document for each worker]
```

---

## PHASE 4: CREATE META-AGENT PAGE

### Task 4.1: Create Meta-Agent Examples Page
**Create File:** `pages/meta-agent.html` or `pages/meta-agent.js`

**INCLUDE these real examples:**
```javascript
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
  }
];
```

---

## PHASE 5: UPDATE COMPARISONS

### Task 5.1: Update Comparison Section
**File:** `index.html` or component file

**REPLACE** comparison section with:
```html
<section class="comparisons">
  <h2>Why Tour Operators Choose PUNKU.AI</h2>
  
  <div class="comparison-grid">
    <div class="comparison">
      <h3>vs. Zapier/Make/n8n</h3>
      <ul class="cons">
        <li>✗ Steep learning curve - takes weeks to master</li>
        <li>✗ Build and maintain complex flows</li>
        <li>✗ Breaks when APIs change</li>
      </ul>
      <p class="pro">✓ PUNKU.AI: Describe in English, deploy in minutes</p>
    </div>
    
    <div class="comparison">
      <h3>vs. Automation Agencies</h3>
      <ul class="cons">
        <li>✗ $10,000+ for basic automation</li>
        <li>✗ Endless discovery meetings</li>
        <li>✗ You're locked into their system</li>
      </ul>
      <p class="pro">✓ PUNKU.AI: $99/month and our meta-agent is ready 24/7</p>
    </div>
    
    <div class="comparison">
      <h3>vs. ChatGPT/Claude</h3>
      <ul class="cons">
        <li>✗ Copy-paste everything manually</li>
        <li>✗ No memory between conversations</li>
        <li>✗ Can't check bookings or send emails</li>
      </ul>
      <p class="pro">✓ PUNKU.AI: Workers run 24/7 and take real actions</p>
    </div>
  </div>
</section>
```

---

## PHASE 6: ADD USE CASES

### Task 6.1: Create Use Cases Section
**Location:** Homepage or dedicated page

**ADD** tour-specific use cases:
```javascript
const useCases = [
  {
    company: "Walking Tour Company - Barcelona",
    challenge: "200+ inquiries daily in 5 languages",
    solution: "FAQ Responder + Multilingual Communicator",
    result: "90% inquiries handled automatically"
  },
  {
    company: "Adventure Tours - Colorado",
    challenge: "Weather-dependent cancellations causing chaos",
    solution: "Weather Monitor + automated rebooking system",
    result: "60% less customer complaints, 4 hours/day saved"
  },
  {
    company: "Food Tours - New York",
    challenge: "Managing dietary restrictions and allergies",
    solution: "Custom meta-agent built intake and routing system",
    result: "Zero dietary incidents, 100% accurate tour assignments"
  },
  {
    company: "Boat Tours - Miami",
    challenge: "No-shows costing $50K/month",
    solution: "Pre-Tour Messenger with smart reminders",
    result: "No-show rate dropped from 15% to 3%"
  }
];
```

---

## PHASE 7: UPDATE NAVIGATION

### Task 7.1: Update Main Navigation
**File:** Header component or navigation file

**UPDATE** navigation to:
```html
<nav>
  <a href="/">Home</a>
  <a href="/tour-workers">AI Workers</a>
  <a href="/meta-agent">Meta-Agent</a>
  <a href="/pricing">Pricing</a>
  <a href="/use-cases">Use Cases</a>
  <a href="/demo" class="cta">Book Demo</a>
</nav>
```

---

## PHASE 8: ADD INTEGRATIONS SECTION

### Task 8.1: Create Integrations Grid
**Location:** Homepage or dedicated page

**ADD** integration logos:
```javascript
const integrations = {
  booking: ["FareHarbor", "Viator", "Bookeo", "Peek Pro", "GetYourGuide", "Klook"],
  payments: ["Stripe", "Square", "PayPal"],
  communication: ["Gmail", "WhatsApp", "SMS", "Slack"],
  calendar: ["Google Calendar", "Calendly", "Outlook"],
  reviews: ["TripAdvisor", "Google Reviews", "Yelp"],
  social: ["Instagram", "Facebook", "Twitter"]
};
```

---

## PHASE 9: UPDATE FOOTER

### Task 9.1: Update Footer CTA
**File:** Footer component

**UPDATE** footer CTA to:
```html
<div class="footer-cta">
  <h2>Join 200+ Tour Operators Automating with PUNKU.AI</h2>
  <p>Stop drowning in repetitive tasks. Let AI workers handle the boring stuff while you create amazing experiences.</p>
  <button class="primary">Start 14-Day Free Trial</button>
  <p class="note">No credit card required • Set up in minutes • Cancel anytime</p>
</div>
```

---

## PHASE 10: TESTING CHECKLIST

### Task 10.1: Test All Changes
**Run through this checklist:**

- [ ] Homepage loads with new hero text
- [ ] "Browse AI Workers" button links to /tour-workers
- [ ] "Build Your Own" button links to /meta-agent
- [ ] Pricing page shows three tiers with credits
- [ ] All instances of "Punku" replaced with "PUNKU.AI"
- [ ] Meta tags updated for SEO
- [ ] Navigation menu updated
- [ ] Comparison section displays correctly
- [ ] Use cases section shows tour examples
- [ ] Footer CTA updated
- [ ] Mobile responsive check
- [ ] Forms still work (if any)
- [ ] Analytics tracking still active
- [ ] 14-day trial flow works
- [ ] Links to demo booking work

---

## IMPLEMENTATION NOTES

1. **Brand Consistency:** Always use "PUNKU.AI" (all caps with .AI)
2. **Color Scheme:** Use blue/teal for tour industry trust
3. **Images:** Add tour/activity photos where possible
4. **Testimonials:** Add tour operator quotes throughout
5. **CTAs:** Primary CTA should always be "Start Free Trial"
6. **Mobile:** Ensure all sections are mobile-responsive
7. **Speed:** Optimize images and scripts for fast loading
8. **Tracking:** Add event tracking for all CTAs

---

## DEPLOYMENT SEQUENCE

1. **Backup current website**
2. **Create staging environment**
3. **Implement Phase 1-3 (Core pages)**
4. **Test thoroughly**
5. **Implement Phase 4-6 (Additional content)**
6. **Test again**
7. **Implement Phase 7-9 (Polish)**
8. **Final testing**
9. **Deploy to production**
10. **Monitor for 24 hours**

---

## SUCCESS METRICS TO TRACK

- Homepage → Trial conversion rate (target: 10%)
- Time on site (target: 3+ minutes)
- Tour Workers page views (target: 50% of visitors)
- Trial signups per day
- "Book Demo" clicks for enterprise

---

## QUESTIONS TO RESOLVE

1. Do we have actual tour operator testimonials to use?
2. What's the actual credit consumption for common actions?
3. Do we have integration APIs ready for tour platforms?
4. Is the meta-agent actually functional?
5. What's the trial-to-paid conversion funnel?

END OF INSTRUCTIONS FOR AI WORKER