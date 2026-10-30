// ============================================================================
//  NICKI NICHOLE — ALL SITE COPY LIVES HERE
//  Edit any text, link, stat or card below. Do NOT touch the layout files.
//  Links written as "[SOMETHING]" are placeholders: the site hides them
//  automatically until you paste in the real value.
// ============================================================================

const content = {
  // ---- Site-wide ----------------------------------------------------------
  site: {
    name: "Nicki Nichole",
    legalName: "Nichole Paul",
    url: "https://nickinichole.com",
    metaTitle: "Nicki Nichole | Lead Generation for Tax & Real Estate Pros | Seattle",
    metaDescription:
      "Over a decade generating leads in tax and real estate. Nicki Nichole helps pros attract more leads, convert them faster and keep clients coming back.",
    ogImage: "/images/og-image.jpg",
  },

  nav: {
    home: "Home",
    about: "About",
    score: "Lead Leak Score",
    calculator: "Lead Calculator",
    contact: "Contact",
    cta: "Book a free scan",
  },

  // ---- Homepage band: lead tools ------------------------------------------
  leadTools: {
    heading: "Not sure where your leads are going?",
    quizCta: "Take the 2-minute Lead Leak Score",
    calculatorCta: "Calculate what lost leads cost you",
  },

  // ---- Lead Leak Score quiz (/lead-leak-score) -----------------------------
  quiz: {
    metaTitle: "Lead Leak Score | Nicki Nichole",
    metaDescription:
      "An 8-question score that shows tax pros and real estate agents exactly where they're losing leads, and how to plug the leaks.",
    eyebrow: "Free 2-minute score",
    heading: "Where are your leads leaking?",
    intro: "Eight quick questions. Tap the answer that sounds most like you.",
    progressLabel: "Question {current} of {total}",
    backLabel: "Back",
    questions: [
      {
        area: "Your Google presence",
        question: "When someone Googles your business name, what do they see?",
        answers: [
          "Nothing or an old listing",
          "A basic listing",
          "A full Google profile with photos",
          "A full profile with recent reviews and posts",
        ],
        tip: "Claim your Google Business Profile and add photos, services and a fresh post this week.",
      },
      {
        area: "Your reviews",
        question: "How many Google reviews do you have?",
        answers: ["Under 10", "10–25", "26–50", "50+"],
        tip: "Ask every happy client for a Google review right after a win, with a short direct link.",
      },
      {
        area: "Your response speed",
        question: "How fast do you usually reply to a new inquiry?",
        answers: ["Next day or later", "Within a few hours", "Within an hour", "Within 5 minutes"],
        tip: "Set up an instant auto-reply so every new inquiry hears from you within minutes.",
      },
      {
        area: "Your follow-up",
        question: "How many times do you follow up with a lead who goes quiet?",
        answers: ["Never", "Once", "2–3 times", "4+ times with a set plan"],
        tip: "Give every lead a simple 4-touch follow-up plan; most people say yes after the second or third contact.",
      },
      {
        area: "Your lead tracking",
        question: "Where do you track your leads?",
        answers: ["Nowhere", "My head, texts or email", "A spreadsheet", "A CRM"],
        tip: "Move every lead into one list or simple CRM so nobody gets forgotten.",
      },
      {
        area: "Your past-client contact",
        question: "How often do you contact past clients?",
        answers: ["Never", "Only at renewal or tax time", "A few times a year", "Monthly"],
        tip: "Put past clients on a simple monthly touch, even a short email, so you stay first in mind.",
      },
      {
        area: "Your website",
        question: "Does your website tell visitors exactly what to do next?",
        answers: [
          "No website",
          "Yes, but it's outdated",
          "Mostly",
          "Yes, one clear button to book or call",
        ],
        tip: "Give visitors one clear next step: a single book-or-call button near the top of the page.",
      },
      {
        area: "Your lead sources",
        question: "How do most new clients find you right now?",
        answers: [
          "I'm not sure",
          "Mostly word of mouth",
          "A mix of word of mouth and online",
          "Mostly online and campaigns",
        ],
        tip: "Track where each new client comes from for one month, so you know what to do more of.",
      },
    ],
    resultHeading: "Your Lead Leak Score",
    scoreOutOf: "out of 100",
    labels: [
      { max: 39, label: "Major leaks" },
      { max: 69, label: "Leaking leads" },
      { max: 100, label: "Mostly sealed" },
    ],
    leaksHeading: "Your top leaks",
    cta: "Book my free Lead Leak Scan",
    emailHeading: "Email me my results",
    emailPlaceholder: "you@example.com",
    emailCta: "Send my results",
    emailSuccess: "Done — your results are on their way to your inbox.",
    emailError: "Something went wrong. Please try again.",
    retake: "Retake the quiz",
  },

  // ---- Lost-lead calculator (/lead-calculator) ------------------------------
  calculator: {
    metaTitle: "Lost Lead Calculator | Nicki Nichole",
    metaDescription:
      "See what your lost leads are worth each month and each year, in dollars, with three quick numbers.",
    eyebrow: "Free calculator",
    heading: "What are your lost leads worth?",
    intro: "Three numbers. That's all it takes.",
    inputs: {
      leads: { label: "Leads per month", help: "Calls, DMs, form fills" },
      clients: { label: "New clients per month", help: "From those leads" },
      value: { label: "Average value of one client", help: "In dollars" },
    },
    validation: "Clients can't be more than leads — check those two numbers.",
    lostLine: "You're losing about {count} leads a month.",
    toggleLabel: "If you won back…",
    toggleOptions: [10, 20, 30],
    results: {
      clients: "extra clients a month",
      monthly: "extra revenue a month",
      yearly: "extra revenue a year",
    },
    note: "Based on your numbers. Nothing here is a guarantee.",
    cta: "Find out where my leads are going",
  },

  // ---- Links (swap placeholders when ready) -------------------------------
  links: {
    booking: "https://getacceleratemarketing.com/freescan",
    accelerate: "https://acceleratetaxandcredit.com",
    instagram: "https://instagram.com/wholesalingwithnicki",
    tiktok: "https://tiktok.com/@wholesalingwithnicki",
    linkedin: "https://www.linkedin.com/in/nicholepaul",
    email: "support@iconicho.com",
  },

  // ---- Hero ---------------------------------------------------------------
  hero: {
    // Rendered as one large headline, line by line. "accent" gets a gold underline.
    lines: [
      [{ text: "Leads on demand.", accent: true }],
      [{ text: "Clients on", accent: false }, { text: "repeat.", accent: false }],
    ],
    subhead:
      "Over a decade generating leads in tax and real estate. I build the systems that bring new clients in, turn more of them into paying clients, and keep them coming back.",
    primaryCta: "Book my free Lead Leak Scan",
    secondaryCta: "Hiring? See what I bring to your team",
    headshot: {
      src: "/images/headshot-main.jpg",
      alt: "Nicki Nichole smiling with arms crossed, wearing a white blazer.",
      width: 355,
      height: 427,
    },
    badges: ["Lead Generation", "Real Estate", "Tax", "Seattle, WA"],
  },

  // ---- Proof strip --------------------------------------------------------
  proofStrip: [
    "Over a decade generating leads in real estate + tax",
    "Millions in real estate sold",
    "Rookie of the Year + top sales awards",
    "11% conversion vs. a 3% team average",
  ],

  // ---- Who I help ----------------------------------------------------------
  whoIHelp: {
    eyebrow: "Who I help",
    heading: "Stop waiting for the phone to ring. Let's build a pipeline.",
    intro:
      "Tax professionals and real estate agents who are ready for a steady, predictable flow of new clients, not a calendar that depends on luck.",
    subheading: "The problems I solve",
    problems: [
      "Your calendar depends on who happens to call.",
      "People find you online, then pick someone else.",
      "Leads come in, and follow-up falls through the cracks.",
      "You're posting or paying for ads, and none of it turns into clients.",
    ],
  },

  // ---- Marketing services ---------------------------------------------------
  services: {
    eyebrow: "Marketing services",
    heading: "Lead generation that turns into paying clients.",
    items: [
      {
        title: "Lead Leak Scan (free)",
        text: "I find exactly where you're losing leads: your Google profile, your website, your ads and your follow-up.",
      },
      {
        title: "Lead generation campaigns",
        text: "Targeted outreach, ads and offers that bring in qualified leads, not tire-kickers.",
      },
      {
        title: "Local visibility",
        text: "Google Business Profile, local SEO and reviews, so people searching for what you do find you first, and trust you in seconds.",
      },
      {
        title: "Follow-up and conversion",
        text: "Fast-response systems that turn more inquiries into booked clients.",
      },
      {
        title: "Retention and reactivation",
        text: "Bring past clients back every season, so every lead you win keeps paying off.",
      },
      {
        title: "Full-scale marketing",
        text: "Campaigns, email, social, events and promotions, planned and run for you.",
      },
    ],
    cta: "Find my leaks",
  },

  // ---- Why it's faster ------------------------------------------------------
  faster: {
    eyebrow: "Why it's faster with me",
    heading: "You won't have to teach me your business.",
    text: "Most marketers spend your first month learning your industry. I've sold new homes, wholesaled real estate, worked tax season on the ground, and built and hired teams for tax offices. We skip the learning curve, start with what's already working, and fix what isn't.",
  },

  // ---- Proof / results -------------------------------------------------------
  proof: {
    eyebrow: "Proof",
    heading: "Numbers, not promises.",
    stats: [
      {
        value: "11%",
        label: "vs. 3%",
        description:
          "my conversion rate vs. the team average in a seasonal role with a major tax and accounting firm",
      },
      {
        value: "+40%",
        label: "",
        description: "more qualified leads from SEO for a real estate investment company",
      },
      {
        value: "+25%",
        label: "",
        description:
          "higher lead-to-client conversion from email campaigns for a real estate investment company",
      },
      {
        value: "$8M+",
        label: "",
        description: "in real estate assets secured with my marketing and presentations",
      },
      {
        value: "+20%",
        label: "",
        description: "more new clients year over year for a tax and credit firm",
      },
      {
        value: "+50%",
        label: "",
        description: "growth in online following for a tax and credit firm",
      },
    ],
    awards: "Rookie of the Year · Top monthly and quarterly sales awards",
    testimonialsNote: "[ADD TESTIMONIALS ONCE APPROVED]", // stays hidden while it's a placeholder
  },

  // ---- More ways I can help ---------------------------------------------------
  moreWays: {
    eyebrow: "More ways I can help",
    heading: "Lead generation is how I win, in every business I run.",
    intro: "I don't just market businesses. I build and run them. Here's what else I do:",
    cards: [
      {
        title: "We buy properties.",
        text: "Any condition. If a property has become a problem, I'll make you a fair, as-is offer and take it off your hands.",
        linkText: "Sell my property as-is",
        topic: "selling",
      },
      {
        title: "We fund deals.",
        text: "Real estate funding for new and experienced investors.",
        linkText: "Fund my deal",
        topic: "funding",
      },
      {
        title: "We handle taxes.",
        text: "Personal and business tax preparation, with same-day cash advances available.",
        linkText: "Get my taxes done",
        external: "accelerate", // opens links.accelerate in a new tab
      },
      {
        title: "We build businesses.",
        text: "From LLC formation and business plans to full-scale marketing.",
        linkText: "Start my business",
        topic: "business",
      },
    ],
    note: "Wholesaling real estate is lead generation with a deadline. You find motivated sellers first, say the right thing, and follow up until it closes. That's the same targeting and follow-up I build for my clients.",
  },

  // ---- Two ways to work with me -------------------------------------------------
  workWithMe: {
    eyebrow: "Two ways to work with me",
    heading: "Pick your lane.",
    owners: {
      heading: "For business owners",
      text: "Consulting, retainer or a focused project. I find where leads are slipping, fix it, and set up systems your team can keep running.",
      cta: "Book my free Lead Leak Scan",
    },
    hiring: {
      heading: "For hiring teams",
      // {roles} is replaced with the roles string below
      text: "Over a decade of hands-on lead generation, sales, conversion and team building in tax and real estate, plus the drive of someone who runs her own businesses. Open to {roles}.",
      roles: "marketing consultant roles",
      cta: "Let's talk",
      topic: "hiring",
    },
  },

  // ---- Monroe (AI) ---------------------------------------------------------------
  monroe: {
    eyebrow: "AI, the smart way",
    heading: "Meet Monroe, my AI twin.",
    text: "Monroe is an AI-generated version of me. I created her to see what AI can really do for a personal brand, and now I help business owners do the same: AI images and content that save time, with a real person and a real strategy behind every post.",
    imageLabel: "AI-generated",
    image: {
      src: "/images/monroe.jpg",
      alt: "Monroe, an AI-generated portrait of Nicki Nichole.",
    },
  },

  // ---- About page -------------------------------------------------------------------
  about: {
    heading: "Hi, I'm Nichole. Most people call me Nicki.",
    paragraphs: [
      "I started in new-home sales with one of the largest homebuilders in the Southeast. I sold millions in homes there, earned Rookie of the Year, and kept stacking top monthly and quarterly sales awards. Then I took everything I'd learned and built my own businesses.",
      "Since then I've wholesaled millions more in real estate, helped secure more than $8M in real estate assets, run lead generation for a tax and credit firm, and built and hired teams for tax offices. I've mentored new investors, funded deals and helped people start businesses from scratch. Every one of those businesses grew the same way: with a steady flow of new leads and relentless follow-up.",
      "Each tax season I take one seasonal role with a major tax and accounting firm, working on the ground with local businesses. I choose it on purpose. It keeps me close to the people I help grow all year, and my business keeps running the whole time.",
    ],
    closer: "What I bring: the wisdom of someone who's seen what works, and the energy to go after what's next.",
    credentials: "B.S. in Marketing, Western Governors University",
    cta: "Let's work together",
  },

  // ---- Contact -----------------------------------------------------------------------
  contact: {
    eyebrow: "Contact",
    heading: "Let's find your leaks, and plug them.",
    intro: "Tell me about your business and what you want more of. I read every message myself.",
    location: "Seattle, WA",
    topics: [
      { value: "tax", label: "Tax business" },
      { value: "real-estate", label: "Real estate" },
      { value: "hiring", label: "Hiring or role" },
      { value: "selling", label: "Selling a property" },
      { value: "funding", label: "Funding a deal" },
      { value: "business", label: "Starting a business" },
      { value: "other", label: "Other" },
    ],
    successHeading: "Message sent.",
    successText: "Thanks for reaching out — I read every message myself and I'll get back to you soon.",
    successCta: "Back to the site",
    privacy: "This form is handled by Netlify and is used only to reply to you.",
  },

  // ---- Footer ---------------------------------------------------------------------------
  footer: {
    copyright: "© 2026 Nichole Paul · Nicki Nichole",
    accelerateLabel: "Accelerate Tax & Credit",
    privacy: "Privacy",
  },
};

export default content;
