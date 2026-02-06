export const APP_URL = "https://app.fampal.co.za";

export const PRICING_TIERS = [
  {
    name: "Free",
    price: "R0",
    description: "Perfect for getting started",
    features: [
      "Discover local family-friendly spots",
      "Secure Child Profiles for tailored results",
      "Save favorites & build itineraries",
      "Create 1 circle"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "R75",
    period: "/year",
    description: "For active families",
    features: [
      "Everything in Free",
      "Unlimited Friend Circles",
      "Secure Partner Linking",
      "AI Summaries by Gemini",
      "Exclusive deals"
    ],
    cta: "Coming Soon",
    popular: true
  },
  {
    name: "Lifetime",
    price: "R399",
    period: "once off",
    description: "Pay once, enjoy forever",
    features: [
      "All Pro features forever",
      "Early access to new AI features",
      "Founder's badge",
      "No recurring fees"
    ],
    cta: "Early Access",
    popular: false
  }
];

export const FAQS = [
  {
    question: "What makes FamPal different?",
    answer: "FamPal is built specifically to remove the stress of family outings. We focus on showing you facilities upfront (like toilets, parking, and play areas) and summarizing real reviews so you don't have to guess if a place is truly kid-friendly."
  },
  {
    question: "Is my data private?",
    answer: "Absolutely. Your Memories are private by default and only shared if you explicitly choose to share them with your Partner or Circle. Your child's profile data is encrypted and used solely to improve your recommendations."
  },
  {
    question: "What is Partner Linking?",
    answer: "Partner Linking allows you to connect your account with a spouse or partner. This creates a shared space for itineraries, saved places, and memories, making co-parenting and planning seamless."
  },
  {
    question: "How do AI Summaries work?",
    answer: "We use Google Gemini to analyze thousands of reviews for places and give you a concise summary focusing on family-friendly aspects like safety, facilities, and kid-friendliness."
  },
  {
    question: "How do Circles work?",
    answer: "Circles are private groups (like 'Grandparents' or 'School Friends'). You can share specific plans or memories with a Circle without making them public to the whole world."
  }
];
