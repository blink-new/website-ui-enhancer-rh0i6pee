import { useState } from 'react'
import { Search, Star, Users, Building, Zap, Shield, TrendingUp, Filter, X, GitCompare, Phone, Mail, Building2, Check, MapPin, Award, Globe } from 'lucide-react'
import { Button } from './components/ui/button'
import { Input } from './components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Badge } from './components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './components/ui/select'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './components/ui/dialog'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './components/ui/sheet'
import { Label } from './components/ui/label'
import { Checkbox } from './components/ui/checkbox'
import { Textarea } from './components/ui/textarea'
import { WebsiteAnalyzer } from './components/WebsiteAnalyzer'

// Mock Partners data with more cities per country
const partnersData = [
  // United States
  {
    id: 1,
    name: "TechSolutions Inc",
    country: "United States",
    city: "New York",
    partnerType: "Platinum",
    expertise: ["Implementation", "Training", "Support"],
    rating: 4.9,
    projects: 150,
    contact: {
      email: "contact@techsolutions.com",
      phone: "+1-555-0123"
    }
  },
  {
    id: 7,
    name: "Silicon Valley CRM",
    country: "United States",
    city: "San Francisco",
    partnerType: "Diamond",
    expertise: ["Custom Development", "Integration", "AI Solutions"],
    rating: 4.9,
    projects: 220,
    contact: {
      email: "hello@svcrm.com",
      phone: "+1-415-555-0199"
    }
  },
  {
    id: 8,
    name: "Windy City Solutions",
    country: "United States",
    city: "Chicago",
    partnerType: "Gold",
    expertise: ["Training", "Support", "Migration"],
    rating: 4.6,
    projects: 95,
    contact: {
      email: "info@windycitycrm.com",
      phone: "+1-312-555-0145"
    }
  },
  {
    id: 9,
    name: "Lone Star CRM",
    country: "United States",
    city: "Austin",
    partnerType: "Platinum",
    expertise: ["Implementation", "Consulting", "Support"],
    rating: 4.8,
    projects: 130,
    contact: {
      email: "contact@lonestarcrm.com",
      phone: "+1-512-555-0167"
    }
  },
  // United Kingdom
  {
    id: 2,
    name: "Global CRM Partners",
    country: "United Kingdom",
    city: "London",
    partnerType: "Diamond",
    expertise: ["Custom Development", "Integration", "Migration"],
    rating: 4.8,
    projects: 200,
    contact: {
      email: "info@globalcrm.co.uk",
      phone: "+44-20-7946-0958"
    }
  },
  {
    id: 10,
    name: "Manchester CRM Hub",
    country: "United Kingdom",
    city: "Manchester",
    partnerType: "Gold",
    expertise: ["Training", "Implementation", "Support"],
    rating: 4.5,
    projects: 85,
    contact: {
      email: "hello@manchestercrm.co.uk",
      phone: "+44-161-555-0123"
    }
  },
  {
    id: 11,
    name: "Edinburgh Tech Solutions",
    country: "United Kingdom",
    city: "Edinburgh",
    partnerType: "Platinum",
    expertise: ["Custom Development", "Integration", "Consulting"],
    rating: 4.7,
    projects: 110,
    contact: {
      email: "contact@edinburghtech.co.uk",
      phone: "+44-131-555-0189"
    }
  },
  // Canada
  {
    id: 3,
    name: "Digital Transformation Co",
    country: "Canada",
    city: "Toronto",
    partnerType: "Gold",
    expertise: ["Training", "Support", "Consulting"],
    rating: 4.7,
    projects: 85,
    contact: {
      email: "hello@digitaltrans.ca",
      phone: "+1-416-555-0199"
    }
  },
  {
    id: 12,
    name: "Vancouver CRM Solutions",
    country: "Canada",
    city: "Vancouver",
    partnerType: "Platinum",
    expertise: ["Implementation", "Migration", "Support"],
    rating: 4.8,
    projects: 125,
    contact: {
      email: "info@vancouvercrm.ca",
      phone: "+1-604-555-0156"
    }
  },
  {
    id: 13,
    name: "Montreal Business Systems",
    country: "Canada",
    city: "Montreal",
    partnerType: "Diamond",
    expertise: ["Custom Development", "Integration", "Training"],
    rating: 4.9,
    projects: 165,
    contact: {
      email: "contact@montrealbiz.ca",
      phone: "+1-514-555-0178"
    }
  },
  // Australia
  {
    id: 4,
    name: "CRM Experts Australia",
    country: "Australia",
    city: "Sydney",
    partnerType: "Platinum",
    expertise: ["Implementation", "Custom Development", "Support"],
    rating: 4.9,
    projects: 120,
    contact: {
      email: "contact@crmexperts.com.au",
      phone: "+61-2-9876-5432"
    }
  },
  {
    id: 14,
    name: "Melbourne CRM Partners",
    country: "Australia",
    city: "Melbourne",
    partnerType: "Gold",
    expertise: ["Training", "Consulting", "Migration"],
    rating: 4.6,
    projects: 90,
    contact: {
      email: "hello@melbournecrm.com.au",
      phone: "+61-3-9876-5432"
    }
  },
  {
    id: 15,
    name: "Brisbane Tech Solutions",
    country: "Australia",
    city: "Brisbane",
    partnerType: "Diamond",
    expertise: ["Custom Development", "Integration", "Support"],
    rating: 4.8,
    projects: 140,
    contact: {
      email: "info@brisbanetech.com.au",
      phone: "+61-7-3456-7890"
    }
  },
  // Germany
  {
    id: 5,
    name: "Innovation Systems",
    country: "Germany",
    city: "Berlin",
    partnerType: "Gold",
    expertise: ["Integration", "Training", "Consulting"],
    rating: 4.6,
    projects: 95,
    contact: {
      email: "info@innovationsys.de",
      phone: "+49-30-12345678"
    }
  },
  {
    id: 16,
    name: "Munich CRM Solutions",
    country: "Germany",
    city: "Munich",
    partnerType: "Platinum",
    expertise: ["Implementation", "Custom Development", "Support"],
    rating: 4.7,
    projects: 115,
    contact: {
      email: "contact@munichcrm.de",
      phone: "+49-89-12345678"
    }
  },
  {
    id: 17,
    name: "Hamburg Business Systems",
    country: "Germany",
    city: "Hamburg",
    partnerType: "Diamond",
    expertise: ["Integration", "Migration", "Training"],
    rating: 4.8,
    projects: 155,
    contact: {
      email: "hello@hamburgbiz.de",
      phone: "+49-40-12345678"
    }
  },
  // India
  {
    id: 6,
    name: "Business Solutions Pro",
    country: "India",
    city: "Mumbai",
    partnerType: "Diamond",
    expertise: ["Custom Development", "Migration", "Support"],
    rating: 4.8,
    projects: 180,
    contact: {
      email: "contact@bizsolpro.in",
      phone: "+91-22-1234-5678"
    }
  },
  {
    id: 18,
    name: "Bangalore Tech Hub",
    country: "India",
    city: "Bangalore",
    partnerType: "Platinum",
    expertise: ["Implementation", "Custom Development", "Integration"],
    rating: 4.9,
    projects: 200,
    contact: {
      email: "info@bangaloretech.in",
      phone: "+91-80-1234-5678"
    }
  },
  {
    id: 19,
    name: "Delhi CRM Solutions",
    country: "India",
    city: "Delhi",
    partnerType: "Gold",
    expertise: ["Training", "Support", "Consulting"],
    rating: 4.5,
    projects: 75,
    contact: {
      email: "contact@delhicrm.in",
      phone: "+91-11-1234-5678"
    }
  },
  {
    id: 20,
    name: "Chennai Business Systems",
    country: "India",
    city: "Chennai",
    partnerType: "Diamond",
    expertise: ["Custom Development", "Integration", "Migration"],
    rating: 4.8,
    projects: 160,
    contact: {
      email: "hello@chennaibiz.in",
      phone: "+91-44-1234-5678"
    }
  }
]

const countries = ["All", "United States", "United Kingdom", "Canada", "Australia", "Germany", "India"]

// Dynamic cities based on country selection
const getCitiesForCountry = (country: string) => {
  if (country === "All") {
    return ["All", ...new Set(partnersData.map(p => p.city))]
  }
  return ["All", ...new Set(partnersData.filter(p => p.country === country).map(p => p.city))]
}
const partnerTypes = ["All", "Diamond", "Platinum", "Gold"]
const expertiseAreas = ["All", "Implementation", "Training", "Support", "Custom Development", "Integration", "Migration", "Consulting"]

// Mock CRM data with enhanced features and integrations
const crmData = [
  {
    id: 1,
    name: "Salesforce",
    logo: "🔵",
    rating: 4.8,
    reviews: 15420,
    category: "Enterprise",
    keyFeatures: ["AI-Powered Analytics", "Advanced Automation", "Custom Dashboards", "Mobile App", "Lead Management", "Sales Forecasting", "Workflow Automation", "Email Integration"],
    integrations: [
      { name: "Slack", logo: "💬" },
      { name: "Microsoft", logo: "🪟" },
      { name: "Google", logo: "🔍" },
      { name: "Mailchimp", logo: "📧" },
      { name: "Zoom", logo: "📹" },
      { name: "Zapier", logo: "⚡" },
      { name: "DocuSign", logo: "✍️" },
      { name: "LinkedIn", logo: "💼" }
    ],
    pricing: "From $25/user/month",
    features: ["AI-Powered Analytics", "Advanced Automation", "Custom Dashboards", "Mobile App"],
    description: "World's #1 CRM platform for enterprise businesses",
    freeTrialDays: 30,
    hasDemo: true,
    hasFreeTrial: true,
    hasCustomQuote: true,
    hasCallBack: true,
    hasBuyNow: true,
    couponCode: "SAVE20NOW",
    couponDiscount: "20% OFF",
    discountPercentage: 20,
    offerText: "Free Implementation Support Worth $2,500",
    startupOffer: "90% OFF for Startups + Free Setup",
    hasStartupOffer: true,
    plans: [
      { name: "Starter", price: "$25", discountedPrice: "$20", features: ["5 Users", "Basic CRM", "Email Support"] },
      { name: "Professional", price: "$75", discountedPrice: "$60", features: ["25 Users", "Advanced Analytics", "Phone Support"] },
      { name: "Enterprise", price: "$150", discountedPrice: "$120", features: ["Unlimited Users", "Custom Integration", "Dedicated Manager"] }
    ],
    website: "https://salesforce.com"
  },
  {
    id: 2,
    name: "HubSpot",
    logo: "🟠",
    rating: 4.6,
    reviews: 8930,
    category: "Small Business",
    keyFeatures: ["Free Forever Plan", "Marketing Hub", "Sales Hub", "Service Hub", "Contact Management", "Email Marketing", "Social Media Tools", "Analytics Dashboard"],
    integrations: [
      { name: "Gmail", logo: "📬" },
      { name: "Outlook", logo: "📮" },
      { name: "WordPress", logo: "📝" },
      { name: "Shopify", logo: "🛍️" },
      { name: "Facebook", logo: "📘" },
      { name: "Slack", logo: "💬" },
      { name: "Zapier", logo: "⚡" },
      { name: "Stripe", logo: "💳" }
    ],
    pricing: "Free - $1,200/month",
    features: ["Free Forever Plan", "Marketing Hub", "Sales Hub", "Service Hub"],
    description: "All-in-one inbound marketing, sales, and service platform",
    freeTrialDays: 14,
    hasDemo: true,
    hasFreeTrial: true,
    hasCustomQuote: true,
    hasCallBack: true,
    hasBuyNow: true,
    couponCode: "HUBSPOT50",
    couponDiscount: "50% OFF",
    discountPercentage: 50,
    offerText: "3 Months Free + Premium Onboarding",
    startupOffer: "6 Months Free for Startups",
    hasStartupOffer: true,
    plans: [
      { name: "Free", price: "$0", discountedPrice: "$0", features: ["5 Users", "Basic Features", "Community Support"] },
      { name: "Starter", price: "$45", discountedPrice: "$22.50", features: ["10 Users", "Marketing Hub", "Email Support"] },
      { name: "Professional", price: "$800", discountedPrice: "$400", features: ["50 Users", "Sales Hub", "Phone Support"] }
    ],
    website: "https://hubspot.com"
  },
  {
    id: 3,
    name: "Pipedrive",
    logo: "🟢",
    rating: 4.5,
    reviews: 6750,
    category: "Small Business",
    keyFeatures: ["Visual Pipeline", "Activity Reminders", "Email Integration", "Mobile CRM", "Deal Management", "Sales Reporting", "Contact Management", "Task Management"],
    integrations: [
      { name: "Zapier", logo: "⚡" },
      { name: "Trello", logo: "📋" },
      { name: "DocuSign", logo: "✍️" },
      { name: "QuickBooks", logo: "💰" },
      { name: "LinkedIn", logo: "💼" },
      { name: "Mailchimp", logo: "📧" },
      { name: "Google", logo: "🔍" },
      { name: "Slack", logo: "💬" }
    ],
    pricing: "From $14.90/user/month",
    features: ["Visual Pipeline", "Activity Reminders", "Email Integration", "Mobile CRM"],
    description: "Simple and effective sales CRM for small teams",
    freeTrialDays: 14,
    hasDemo: true,
    hasFreeTrial: true,
    hasCustomQuote: false,
    hasCallBack: true,
    hasBuyNow: true,
    couponCode: "PIPE30",
    couponDiscount: "30% OFF",
    discountPercentage: 30,
    offerText: "Free Data Migration + Setup",
    startupOffer: "50% OFF for 6 Months",
    hasStartupOffer: true,
    plans: [
      { name: "Essential", price: "$14.90", discountedPrice: "$10.43", features: ["5 Users", "Pipeline Management", "Email Support"] },
      { name: "Advanced", price: "$24.90", discountedPrice: "$17.43", features: ["20 Users", "Automation", "Phone Support"] },
      { name: "Professional", price: "$49.90", discountedPrice: "$34.93", features: ["Unlimited Users", "Advanced Reports", "Priority Support"] }
    ],
    website: "https://pipedrive.com"
  },
  {
    id: 4,
    name: "Zoho CRM",
    logo: "🔵",
    rating: 4.3,
    reviews: 4520,
    category: "Mid-Market",
    keyFeatures: ["AI Assistant", "Workflow Automation", "Social CRM", "Inventory Management", "Lead Scoring", "Territory Management", "Custom Fields", "Multi-Currency"],
    integrations: [
      { name: "G Suite", logo: "🔍" },
      { name: "Office 365", logo: "🪟" },
      { name: "Stripe", logo: "💳" },
      { name: "PayPal", logo: "💸" },
      { name: "Twilio", logo: "📱" },
      { name: "Zapier", logo: "⚡" },
      { name: "Mailchimp", logo: "📧" },
      { name: "QuickBooks", logo: "💰" }
    ],
    pricing: "From $12/user/month",
    features: ["AI Assistant", "Workflow Automation", "Social CRM", "Inventory Management"],
    description: "Comprehensive CRM solution with extensive customization",
    freeTrialDays: 15,
    hasDemo: true,
    hasFreeTrial: true,
    hasCustomQuote: true,
    hasCallBack: true,
    hasBuyNow: true,
    couponCode: "ZOHO25",
    couponDiscount: "25% OFF",
    discountPercentage: 25,
    offerText: "Free Training Sessions + Custom Setup",
    startupOffer: "75% OFF First Year",
    hasStartupOffer: true,
    plans: [
      { name: "Standard", price: "$12", discountedPrice: "$9", features: ["10 Users", "Basic CRM", "Email Support"] },
      { name: "Professional", price: "$20", discountedPrice: "$15", features: ["25 Users", "Workflow Automation", "Phone Support"] },
      { name: "Enterprise", price: "$35", discountedPrice: "$26.25", features: ["Unlimited Users", "Advanced Analytics", "Dedicated Support"] }
    ],
    website: "https://zoho.com/crm"
  },
  {
    id: 5,
    name: "Monday.com",
    logo: "🟣",
    rating: 4.7,
    reviews: 3890,
    category: "Project Management",
    keyFeatures: ["Visual Project Boards", "Time Tracking", "Team Collaboration", "Custom Workflows", "Gantt Charts", "Resource Management", "File Sharing", "Automation"],
    integrations: [
      { name: "Slack", logo: "💬" },
      { name: "Jira", logo: "🔧" },
      { name: "GitHub", logo: "🐙" },
      { name: "Dropbox", logo: "📦" },
      { name: "Adobe", logo: "🎨" },
      { name: "Google", logo: "🔍" },
      { name: "Microsoft", logo: "🪟" },
      { name: "Zapier", logo: "⚡" }
    ],
    pricing: "From $8/user/month",
    features: ["Visual Project Boards", "Time Tracking", "Team Collaboration", "Custom Workflows"],
    description: "Work management platform with CRM capabilities",
    freeTrialDays: 14,
    hasDemo: true,
    hasFreeTrial: true,
    hasCustomQuote: true,
    hasCallBack: true,
    hasBuyNow: true,
    couponCode: "MONDAY2FREE",
    couponDiscount: "2 MONTHS FREE",
    discountPercentage: 0,
    offerText: "Premium Setup Consultation Included",
    startupOffer: "3 Months Free + Setup",
    hasStartupOffer: true,
    plans: [
      { name: "Basic", price: "$8", discountedPrice: "$8", features: ["5 Users", "Basic Boards", "Email Support"] },
      { name: "Standard", price: "$10", discountedPrice: "$10", features: ["15 Users", "Timeline View", "Phone Support"] },
      { name: "Pro", price: "$16", discountedPrice: "$16", features: ["Unlimited Users", "Advanced Features", "Priority Support"] }
    ],
    website: "https://monday.com"
  },
  {
    id: 6,
    name: "Freshsales",
    logo: "🟢",
    rating: 4.4,
    reviews: 2340,
    category: "Small Business",
    keyFeatures: ["Built-in Phone", "Email Tracking", "Lead Scoring", "Territory Management", "Contact Management", "Deal Management", "Reporting", "Mobile App"],
    integrations: [
      { name: "WhatsApp", logo: "💚" },
      { name: "Telegram", logo: "✈️" },
      { name: "Asana", logo: "🔺" },
      { name: "Calendly", logo: "📅" },
      { name: "Intercom", logo: "💬" },
      { name: "Zapier", logo: "⚡" },
      { name: "Mailchimp", logo: "📧" },
      { name: "Slack", logo: "💬" }
    ],
    pricing: "From $15/user/month",
    features: ["Built-in Phone", "Email Tracking", "Lead Scoring", "Territory Management"],
    description: "Modern CRM with built-in phone and email",
    freeTrialDays: 21,
    hasDemo: true,
    hasFreeTrial: true,
    hasCustomQuote: true,
    hasCallBack: true,
    hasBuyNow: true,
    couponCode: "FRESH20",
    couponDiscount: "20% OFF",
    discountPercentage: 20,
    offerText: "$100 Free Phone Credits Included",
    startupOffer: "60% OFF + Free Credits",
    hasStartupOffer: true,
    plans: [
      { name: "Growth", price: "$15", discountedPrice: "$12", features: ["10 Users", "Built-in Phone", "Email Support"] },
      { name: "Pro", price: "$39", discountedPrice: "$31.20", features: ["25 Users", "Advanced Reports", "Phone Support"] },
      { name: "Enterprise", price: "$69", discountedPrice: "$55.20", features: ["Unlimited Users", "Custom Fields", "Priority Support"] }
    ],
    website: "https://freshsales.io"
  }
]

const categories = ["All", "Enterprise", "Small Business", "Mid-Market", "Project Management"]
const integrations = ["Slack", "Microsoft", "Google", "Gmail", "Outlook", "Zapier", "Stripe", "PayPal", "WhatsApp", "Zoom", "Facebook", "LinkedIn", "Shopify", "Trello", "QuickBooks", "Adobe", "GitHub", "Dropbox", "Mailchimp", "DocuSign"]
const keyFeatures = ["All", "AI-Powered Analytics", "Advanced Automation", "Custom Dashboards", "Mobile App", "Lead Management", "Sales Forecasting", "Workflow Automation", "Email Integration", "Contact Management", "Email Marketing", "Social Media Tools", "Analytics Dashboard", "Visual Pipeline", "Activity Reminders", "Deal Management", "Sales Reporting", "Task Management", "AI Assistant", "Social CRM", "Inventory Management", "Lead Scoring", "Territory Management", "Custom Fields", "Multi-Currency", "Visual Project Boards", "Time Tracking", "Team Collaboration", "Gantt Charts", "Resource Management", "File Sharing", "Built-in Phone", "Email Tracking", "Reporting"]
const offerTypes = ["All", "20% OFF", "30% OFF", "Startup Offers"]

function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedIntegrations, setSelectedIntegrations] = useState<string[]>([])
  const [selectedKeyFeatures, setSelectedKeyFeatures] = useState<string[]>([])
  const [selectedOfferType, setSelectedOfferType] = useState("All")
  const [showFilters, setShowFilters] = useState(false)
  const [expandedFeatures, setExpandedFeatures] = useState<Set<number>>(new Set())
  const [expandedIntegrations, setExpandedIntegrations] = useState<Set<number>>(new Set())
  const [selectedForComparison, setSelectedForComparison] = useState<Set<number>>(new Set())
  const [showComparison, setShowComparison] = useState(false)
  const [showStartupOffer, setShowStartupOffer] = useState<number | null>(null)
  const [showCouponForm, setShowCouponForm] = useState<number | null>(null)
  const [couponFormData, setCouponFormData] = useState({
    companyName: "",
    mobile: "",
    email: ""
  })
  const [showPlansWithDiscount, setShowPlansWithDiscount] = useState<number | null>(null)
  const [showPartners, setShowPartners] = useState<number | null>(null)
  const [selectedCountry, setSelectedCountry] = useState("All")
  const [selectedCity, setSelectedCity] = useState("All")
  const [selectedPartnerType, setSelectedPartnerType] = useState("All")
  const [selectedExpertise, setSelectedExpertise] = useState("All")
  const [showCallbackForm, setShowCallbackForm] = useState<number | null>(null)
  const [callbackFormData, setCallbackFormData] = useState({
    companyName: "",
    mobile: "",
    businessEmail: "",
    whatsappConsent: false
  })
  const [showOTPVerification, setShowOTPVerification] = useState(false)
  const [otpCode, setOtpCode] = useState("")
  const [showListBrandPage, setShowListBrandPage] = useState(false)
  const [showLoginPage, setShowLoginPage] = useState(false)
  const [loginMobile, setLoginMobile] = useState("")
  const [loginOTP, setLoginOTP] = useState("")
  const [showBrandForm, setShowBrandForm] = useState(false)
  const [showWebsiteAnalyzer, setShowWebsiteAnalyzer] = useState(false)
  const [userCountry, setUserCountry] = useState("United States") // Auto-detected country
  const [brandFormData, setBrandFormData] = useState({
    companyName: "",
    website: "",
    description: "",
    category: "",
    pricing: "",
    keyFeatures: "",
    integrations: "",
    contactEmail: "",
    contactPhone: "",
    logo: "",
    freeTrialDays: "",
    hasDemo: false,
    hasFreeTrial: false,
    hasCustomQuote: false
  })

  const filteredCRMs = crmData.filter(crm => {
    // Search functionality
    const matchesSearch = searchTerm === "" || 
                         crm.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         crm.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         crm.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase())) ||
                         crm.keyFeatures.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()))
    
    const matchesCategory = selectedCategory === "All" || crm.category === selectedCategory
    const matchesIntegration = selectedIntegrations.length === 0 || 
                              selectedIntegrations.every(selectedInt => 
                                crm.integrations.some(integration => integration.name === selectedInt)
                              )
    
    // Key Features filter
    const matchesKeyFeatures = selectedKeyFeatures.length === 0 || 
                              selectedKeyFeatures.every(feature => 
                                crm.keyFeatures.some(crmFeature => crmFeature.includes(feature))
                              )
    
    // Offer Type filter
    const matchesOfferType = selectedOfferType === "All" || 
                           (selectedOfferType === "20% OFF" && crm.discountPercentage === 20) ||
                           (selectedOfferType === "30% OFF" && crm.discountPercentage === 30) ||
                           (selectedOfferType === "Startup Offers" && crm.hasStartupOffer)
    
    return matchesSearch && matchesCategory && matchesIntegration && matchesKeyFeatures && matchesOfferType
  })

  const filteredPartners = partnersData.filter(partner => {
    const matchesCountry = selectedCountry === "All" || partner.country === selectedCountry
    const matchesCity = selectedCity === "All" || partner.city === selectedCity
    const matchesPartnerType = selectedPartnerType === "All" || partner.partnerType === selectedPartnerType
    const matchesExpertise = selectedExpertise === "All" || partner.expertise.includes(selectedExpertise)
    
    return matchesCountry && matchesCity && matchesPartnerType && matchesExpertise
  })

  const handleAction = (action: string, crmName: string) => {
    alert(`${action} requested for ${crmName}. This would redirect to the CRM provider's page.`)
  }

  const toggleComparisonSelection = (crmId: number) => {
    setSelectedForComparison(prev => {
      const newSet = new Set(prev)
      if (newSet.has(crmId)) {
        newSet.delete(crmId)
      } else if (newSet.size < 3) {
        newSet.add(crmId)
      }
      return newSet
    })
  }

  const handleCouponSubmit = (crmId: number) => {
    if (couponFormData.companyName && couponFormData.mobile && couponFormData.email) {
      setShowCouponForm(null)
      setShowPlansWithDiscount(crmId)
      setCouponFormData({ companyName: "", mobile: "", email: "" })
    }
  }

  const handlePurchasePlan = (crm: any, plan: any) => {
    window.open(crm.website, '_blank')
  }

  const handleCRMSelectFromAnalyzer = (crmId: number) => {
    setShowWebsiteAnalyzer(false)
    // Scroll to the CRM card
    const crmElement = document.getElementById(`crm-${crmId}`)
    if (crmElement) {
      crmElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      // Highlight the card briefly
      crmElement.classList.add('ring-4', 'ring-primary', 'ring-opacity-50')
      setTimeout(() => {
        crmElement.classList.remove('ring-4', 'ring-primary', 'ring-opacity-50')
      }, 3000)
    }
  }

  const toggleExpandedFeatures = (crmId: number) => {
    setExpandedFeatures(prev => {
      const newSet = new Set(prev)
      if (newSet.has(crmId)) {
        newSet.delete(crmId)
      } else {
        newSet.add(crmId)
      }
      return newSet
    })
  }

  const toggleExpandedIntegrations = (crmId: number) => {
    setExpandedIntegrations(prev => {
      const newSet = new Set(prev)
      if (newSet.has(crmId)) {
        newSet.delete(crmId)
      } else {
        newSet.add(crmId)
      }
      return newSet
    })
  }

  const handleKeyFeatureToggle = (feature: string) => {
    setSelectedKeyFeatures(prev => {
      if (prev.includes(feature)) {
        return prev.filter(f => f !== feature)
      } else {
        return [...prev, feature]
      }
    })
  }

  const handleIntegrationToggle = (integration: string) => {
    setSelectedIntegrations(prev => {
      if (prev.includes(integration)) {
        return prev.filter(i => i !== integration)
      } else {
        return [...prev, integration]
      }
    })
  }

  const clearAllFilters = () => {
    setSelectedCategory("All")
    setSelectedIntegrations([])
    setSelectedKeyFeatures([])
    setSelectedOfferType("All")
    setSearchTerm("")
  }

  const applyFilters = () => {
    setShowFilters(false)
  }

  const clearPartnersFilters = () => {
    setSelectedCountry("All")
    setSelectedCity("All")
    setSelectedPartnerType("All")
    setSelectedExpertise("All")
  }

  return (
    <div className="min-h-screen gradient-hero">
      {/* Header */}
      <header className="glass-effect backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold gradient-text">CRM</div>
              <div className="text-2xl font-bold text-accent">Discovery</div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary transition-colors">Features</a>
              <button 
                onClick={() => setShowWebsiteAnalyzer(true)}
                className="text-gray-600 hover:text-primary transition-colors flex items-center space-x-1"
              >
                <Globe className="h-4 w-4" />
                <span>Analyze Website</span>
              </button>
              <a href="#pricing" className="text-gray-600 hover:text-primary transition-colors">Pricing</a>
              <button 
                onClick={() => setShowListBrandPage(true)}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                List Brand
              </button>
              <a href="#contact" className="text-gray-600 hover:text-primary transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Find Your Perfect <span className="gradient-text">CRM Solution</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover, compare, and choose from the world's best CRM platforms. 
            No more wasting hours researching - find your ideal solution instantly.
          </p>
          
          {/* Website Analyzer CTA */}
          <div className="mb-12">
            <Button
              size="lg"
              onClick={() => setShowWebsiteAnalyzer(true)}
              className="bg-gradient-to-r from-primary to-accent text-white hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <Globe className="h-5 w-5 mr-2" />
              Get AI-Powered CRM Recommendations
            </Button>
            <p className="text-sm text-gray-500 mt-2">
              Enter your website URL for personalized recommendations
            </p>
          </div>
          


          {/* Quick Stats - Updated with new cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <div className="text-center glass-effect rounded-2xl p-6 hover-lift">
              <div className="text-3xl font-bold gradient-text">50+</div>
              <div className="text-gray-600">CRM Solutions</div>
            </div>
            <div className="text-center glass-effect rounded-2xl p-6 hover-lift">
              <div className="text-3xl font-bold text-accent">24/7</div>
              <div className="text-gray-600">Expert Support</div>
            </div>
            <div className="text-center glass-effect rounded-2xl p-6 hover-lift">
              <div className="text-3xl font-bold gradient-text">🎫</div>
              <div className="text-gray-600">Discount Coupons & Offers</div>
            </div>
            <div className="text-center glass-effect rounded-2xl p-6 hover-lift">
              <div className="text-3xl font-bold text-purple-600">🚀</div>
              <div className="text-gray-600">Exclusive Startup Offers</div>
            </div>
            <div className="text-center glass-effect rounded-2xl p-6 hover-lift">
              <div className="text-3xl font-bold gradient-text">100%</div>
              <div className="text-gray-600">Free to Use</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 glass-effect">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 md:mb-0">
              Browse CRM Solutions ({filteredCRMs.length} found)
            </h2>
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2"
            >
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </Button>
          </div>

          {showFilters && (
            <div className="bg-gray-50 p-6 rounded-lg mb-6 relative">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowFilters(false)}
                className="absolute top-2 right-2 h-8 w-8 p-0 hover:bg-gray-200"
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Search CRMs</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      type="text"
                      placeholder="Search by name, features..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Offers</label>
                  <Select value={selectedOfferType} onValueChange={setSelectedOfferType}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {offerTypes.map(offer => (
                        <SelectItem key={offer} value={offer}>{offer}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Integrations Multi-Select */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Integrations</label>
                <div className="max-h-32 overflow-y-auto border rounded-md p-2 bg-white">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {integrations.map(integration => (
                      <div key={integration} className="flex items-center space-x-2">
                        <Checkbox
                          id={integration}
                          checked={selectedIntegrations.includes(integration)}
                          onCheckedChange={() => handleIntegrationToggle(integration)}
                        />
                        <Label htmlFor={integration} className="text-xs cursor-pointer">
                          {integration}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                {selectedIntegrations.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {selectedIntegrations.map(integration => (
                      <Badge key={integration} variant="secondary" className="text-xs">
                        {integration}
                        <X 
                          className="h-3 w-3 ml-1 cursor-pointer" 
                          onClick={() => handleIntegrationToggle(integration)}
                        />
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Key Features Multi-Select */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Key Features</label>
                <div className="max-h-32 overflow-y-auto border rounded-md p-2 bg-white">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {keyFeatures.filter(f => f !== "All").map(feature => (
                      <div key={feature} className="flex items-center space-x-2">
                        <Checkbox
                          id={feature}
                          checked={selectedKeyFeatures.includes(feature)}
                          onCheckedChange={() => handleKeyFeatureToggle(feature)}
                        />
                        <Label htmlFor={feature} className="text-xs cursor-pointer">
                          {feature}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                {selectedKeyFeatures.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {selectedKeyFeatures.map(feature => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                        <X 
                          className="h-3 w-3 ml-1 cursor-pointer" 
                          onClick={() => handleKeyFeatureToggle(feature)}
                        />
                      </Badge>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearAllFilters}
                >
                  Clear All
                </Button>
                <Button
                  size="sm"
                  onClick={applyFilters}
                  className="bg-primary text-white hover:bg-primary/90"
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CRM Cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredCRMs.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No CRMs Found</h3>
              <p className="text-gray-600 mb-6">
                No CRM solutions match your current filters. Try adjusting your search criteria.
              </p>
              <Button onClick={clearAllFilters} variant="outline">
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCRMs.map((crm) => (
              <Card key={crm.id} id={`crm-${crm.id}`} className="group relative overflow-hidden gradient-card card-enhanced hover:shadow-2xl transition-all duration-500 border-2 border-white/30 hover:border-primary/40 hover-lift backdrop-blur-sm rounded-2xl">
                {/* Subtle gradient overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <div className="text-4xl transform group-hover:scale-110 transition-transform duration-300">{crm.logo}</div>
                        <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">{crm.name}</CardTitle>
                          <Badge variant="secondary" className="text-xs font-medium px-2 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary border-primary/20 badge-animated">{crm.category}</Badge>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
                            <Star className="h-4 w-4 text-yellow-500 fill-current" />
                            <span className="ml-1 text-sm font-bold text-yellow-700">{crm.rating}</span>
                          </div>
                          <span className="text-sm text-gray-500 font-medium">({crm.reviews.toLocaleString()} reviews)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Enhanced pricing section */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-xl p-4 border border-gray-200/50">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-primary">{crm.pricing}</div>
                        {crm.freeTrialDays && (
                          <div className="text-sm text-accent font-medium flex items-center mt-1">
                            <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                            {crm.freeTrialDays}-day free trial
                          </div>
                        )}
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-500 uppercase tracking-wide font-medium">Starting at</div>
                        <div className="text-xs text-gray-600 font-medium">per user/month</div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative space-y-5">
                  {/* Key Features Preview */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-gray-700 flex items-center">
                        <Zap className="h-4 w-4 text-primary mr-2" />
                        Key Features
                      </h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpandedFeatures(crm.id)}
                        className="h-6 w-6 p-0 text-gray-400 hover:text-primary"
                      >
                        <span className="text-sm">{expandedFeatures.has(crm.id) ? '−' : '+'}</span>
                      </Button>
                    </div>
                    
                    {!expandedFeatures.has(crm.id) ? (
                      <div className="flex flex-wrap gap-1">
                        {crm.keyFeatures.slice(0, 3).map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 transition-colors">
                            {feature}
                          </Badge>
                        ))}
                        {crm.keyFeatures.length > 3 && (
                          <Badge variant="outline" className="text-xs bg-gray-50 text-gray-600 border-gray-200">
                            +{crm.keyFeatures.length - 3} more
                          </Badge>
                        )}
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-1 p-3 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                        {crm.keyFeatures.map((feature, index) => (
                          <Badge key={index} variant="outline" className="text-xs bg-white/80 text-primary border-primary/20 hover:bg-primary/10 transition-colors">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Integrations Preview */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-gray-700 flex items-center">
                        <Building className="h-4 w-4 text-accent mr-2" />
                        Integrations
                      </h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExpandedIntegrations(crm.id)}
                        className="h-6 w-6 p-0 text-gray-400 hover:text-accent"
                      >
                        <span className="text-sm">{expandedIntegrations.has(crm.id) ? '−' : '+'}</span>
                      </Button>
                    </div>
                    
                    {!expandedIntegrations.has(crm.id) ? (
                      <div className="flex items-center space-x-1">
                        {crm.integrations.slice(0, 4).map((integration, index) => (
                          <div key={index} className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg border border-gray-200 hover:border-accent/30 transition-colors group">
                            <span className="text-sm group-hover:scale-110 transition-transform">{integration.logo}</span>
                          </div>
                        ))}
                        {crm.integrations.length > 4 && (
                          <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-lg border border-gray-200 text-xs font-medium text-gray-600">
                            +{crm.integrations.length - 4}
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="grid grid-cols-4 gap-2 p-3 bg-gradient-to-r from-accent/5 to-primary/5 rounded-lg border border-accent/10">
                        {crm.integrations.map((integration, index) => (
                          <div key={index} className="flex flex-col items-center space-y-1 p-2 bg-white/80 rounded-lg border border-gray-200/50 hover:border-accent/30 transition-colors group">
                            <span className="text-lg group-hover:scale-110 transition-transform">{integration.logo}</span>
                            <span className="text-xs font-medium text-gray-600 text-center leading-tight">{integration.name}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Enhanced Offers Section */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-700 flex items-center">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                      Special Offers
                    </h4>
                    
                    <div className="space-y-2">
                      {/* Startup Offer - Most Prominent */}
                      {crm.hasStartupOffer && (
                        <div 
                          className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-pink-600 p-4 rounded-xl text-white cursor-pointer hover:from-purple-700 hover:via-purple-800 hover:to-pink-700 transition-all duration-300 border border-purple-400/30 shadow-lg hover:shadow-xl group"
                          onClick={() => setShowStartupOffer(crm.id)}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="relative flex items-center justify-between">
                            <div className="flex-1">
                              <div className="text-sm font-bold flex items-center mb-1">
                                🚀 STARTUP SPECIAL
                                <Badge className="ml-2 bg-yellow-400 text-purple-900 text-xs font-bold pulse-glow">HOT</Badge>
                              </div>
                              <div className="text-xs opacity-90 leading-relaxed">{crm.startupOffer}</div>
                            </div>
                            <div className="text-right ml-3">
                              <div className="text-xs opacity-75">Click to</div>
                              <div className="text-sm font-bold">Apply Now</div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Discount Coupon */}
                      <div 
                        className="relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl text-white cursor-pointer hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-md hover:shadow-lg group"
                        onClick={() => setShowCouponForm(crm.id)}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="relative flex items-center justify-between">
                          <div className="flex-1">
                            <div className="text-sm font-bold flex items-center">
                              🎫 Discount Coupon
                            </div>
                            <div className="text-xs opacity-90">Click to apply & save</div>
                          </div>
                          <div className="text-right ml-3">
                            <div className="text-lg font-bold">{crm.couponDiscount}</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Special Offer */}
                      <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-3 rounded-xl text-white shadow-md">
                        <div className="flex items-start space-x-2">
                          <div className="text-sm">🎁</div>
                          <div className="flex-1">
                            <div className="text-sm font-medium">Special Offer</div>
                            <div className="text-xs opacity-90 leading-relaxed">{crm.offerText}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="space-y-4 pt-2 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-700 flex items-center">
                      <Zap className="h-4 w-4 text-blue-500 mr-2" />
                      Quick Actions
                    </h4>
                    
                    {/* Primary Actions */}
                    <div className="space-y-2">
                      {crm.hasFreeTrial && (
                        <Button
                          size="sm"
                          onClick={() => handleAction("Start Free Trial", crm.name)}
                          className="w-full text-sm font-medium bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white shadow-md hover:shadow-lg transition-all duration-300 group button-enhanced"
                        >
                          <div className="flex items-center justify-center space-x-2">
                            <span className="text-base group-hover:scale-110 transition-transform">🚀</span>
                            <span>Start Free Trial</span>
                            {crm.freeTrialDays && <Badge variant="secondary" className="bg-white/20 text-white text-xs">{crm.freeTrialDays} days</Badge>}
                          </div>
                        </Button>
                      )}
                      
                      {crm.hasDemo && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleAction("Book Demo", crm.name)}
                          className="w-full text-sm font-medium border-primary/30 text-primary hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 group"
                        >
                          <div className="flex items-center justify-center space-x-2">
                            <span className="text-base group-hover:scale-110 transition-transform">📅</span>
                            <span>Book Live Demo</span>
                          </div>
                        </Button>
                      )}
                    </div>

                    {/* Secondary Actions */}
                    <div className="grid grid-cols-2 gap-2">
                      {crm.hasCustomQuote && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleAction("Get Custom Quote", crm.name)}
                          className="text-xs font-medium border-gray-200 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
                        >
                          <div className="flex items-center space-x-1">
                            <span className="group-hover:scale-110 transition-transform">💰</span>
                            <span>Get Quote</span>
                          </div>
                        </Button>
                      )}
                      {crm.hasCallBack && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleAction("Request Callback", crm.name)}
                          className="text-xs font-medium border-gray-200 hover:border-accent/50 hover:bg-accent/5 transition-all duration-300 group"
                        >
                          <div className="flex items-center space-x-1">
                            <span className="group-hover:scale-110 transition-transform">📞</span>
                            <span>Call Back</span>
                          </div>
                        </Button>
                      )}
                    </div>

                    {/* Utility Actions */}
                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-50">
                      <Button
                        size="sm"
                        variant={selectedForComparison.has(crm.id) ? "default" : "outline"}
                        onClick={() => toggleComparisonSelection(crm.id)}
                        className={`text-xs font-medium transition-all duration-300 ${
                          selectedForComparison.has(crm.id) 
                            ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md" 
                            : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                        }`}
                        disabled={!selectedForComparison.has(crm.id) && selectedForComparison.size >= 3}
                      >
                        <div className="flex items-center space-x-1">
                          <GitCompare className="h-3 w-3" />
                          <span>{selectedForComparison.has(crm.id) ? "Remove" : "Compare"}</span>
                        </div>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setShowPartners(crm.id)}
                        className="text-xs font-medium border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 group"
                      >
                        <div className="flex items-center space-x-1">
                          <Users className="h-3 w-3 group-hover:text-purple-600 transition-colors" />
                          <span className="group-hover:text-purple-600 transition-colors">Partners</span>
                        </div>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Floating Compare Button */}
      {selectedForComparison.size > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setShowComparison(true)}
            className="bg-primary hover:bg-primary/90 text-white shadow-lg hover-lift"
            size="lg"
          >
            <GitCompare className="h-4 w-4 mr-2" />
            Compare ({selectedForComparison.size})
          </Button>
        </div>
      )}

      {/* Enhanced Comparison Dialog - Desktop */}
      <div className="hidden md:block">
        <Dialog open={showComparison} onOpenChange={setShowComparison}>
        <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Comprehensive CRM Comparison</DialogTitle>
            <DialogDescription>
              Compare features, pricing, integrations, and more side by side
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* CRM Selection Area */}
            <div className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-3">Selected CRMs for Comparison</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(selectedForComparison).map(crmId => {
                  const crm = crmData.find(c => c.id === crmId)
                  return crm ? (
                    <Badge key={crm.id} variant="secondary" className="flex items-center gap-2">
                      <span>{crm.logo}</span>
                      <span>{crm.name}</span>
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => toggleComparisonSelection(crm.id)}
                      />
                    </Badge>
                  ) : null
                })}
              </div>
              
              {selectedForComparison.size < 3 && (
                <div className="mt-3">
                  <p className="text-sm text-gray-600 mb-2">Add more CRMs to compare (up to 3 total):</p>
                  <div className="flex flex-wrap gap-2">
                    {crmData
                      .filter(crm => !selectedForComparison.has(crm.id))
                      .map(crm => (
                        <Button
                          key={crm.id}
                          variant="outline"
                          size="sm"
                          onClick={() => toggleComparisonSelection(crm.id)}
                          className="text-xs"
                        >
                          <span className="mr-1">{crm.logo}</span>
                          {crm.name}
                        </Button>
                      ))
                    }
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3 font-semibold">Feature</th>
                    {Array.from(selectedForComparison).map(crmId => {
                      const crm = crmData.find(c => c.id === crmId)
                      return crm ? (
                        <th key={crm.id} className="text-center p-3 font-semibold min-w-[200px]">
                          <div className="flex flex-col items-center">
                            <span className="text-2xl mb-1">{crm.logo}</span>
                            <span>{crm.name}</span>
                          </div>
                        </th>
                      ) : null
                    })}
                  </tr>
                </thead>
              <tbody>
                {/* Rating */}
                <tr className="border-b">
                  <td className="p-3 font-medium">Rating</td>
                  {Array.from(selectedForComparison).map(crmId => {
                    const crm = crmData.find(c => c.id === crmId)
                    return crm ? (
                      <td key={crm.id} className="p-3 text-center">
                        <div className="flex items-center justify-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className="font-semibold">{crm.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">({crm.reviews})</span>
                        </div>
                      </td>
                    ) : null
                  })}
                </tr>
                
                {/* Pricing */}
                <tr className="border-b">
                  <td className="p-3 font-medium">Pricing</td>
                  {Array.from(selectedForComparison).map(crmId => {
                    const crm = crmData.find(c => c.id === crmId)
                    return crm ? (
                      <td key={crm.id} className="p-3 text-center">
                        <div className="text-primary font-semibold">{crm.pricing}</div>
                        {crm.freeTrialDays && (
                          <div className="text-sm text-accent">{crm.freeTrialDays}-day trial</div>
                        )}
                      </td>
                    ) : null
                  })}
                </tr>
                
                {/* Category */}
                <tr className="border-b">
                  <td className="p-3 font-medium">Category</td>
                  {Array.from(selectedForComparison).map(crmId => {
                    const crm = crmData.find(c => c.id === crmId)
                    return crm ? (
                      <td key={crm.id} className="p-3 text-center">
                        <Badge variant="secondary">{crm.category}</Badge>
                      </td>
                    ) : null
                  })}
                </tr>
                
                {/* Key Features */}
                <tr className="border-b">
                  <td className="p-3 font-medium">Key Features</td>
                  {Array.from(selectedForComparison).map(crmId => {
                    const crm = crmData.find(c => c.id === crmId)
                    return crm ? (
                      <td key={crm.id} className="p-3">
                        <div className="space-y-1">
                          {crm.keyFeatures.slice(0, 6).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <Check className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                          {crm.keyFeatures.length > 6 && (
                            <div className="text-xs text-gray-500">
                              +{crm.keyFeatures.length - 6} more features
                            </div>
                          )}
                        </div>
                      </td>
                    ) : null
                  })}
                </tr>
                
                {/* Integrations */}
                <tr className="border-b">
                  <td className="p-3 font-medium">Integrations</td>
                  {Array.from(selectedForComparison).map(crmId => {
                    const crm = crmData.find(c => c.id === crmId)
                    return crm ? (
                      <td key={crm.id} className="p-3">
                        <div className="flex flex-wrap gap-1">
                          {crm.integrations.slice(0, 6).map((integration, idx) => (
                            <div key={idx} className="flex items-center space-x-1 bg-gray-100 rounded px-2 py-1">
                              <span className="text-xs">{integration.logo}</span>
                              <span className="text-xs">{integration.name}</span>
                            </div>
                          ))}
                          {crm.integrations.length > 6 && (
                            <span className="text-xs text-gray-500">+{crm.integrations.length - 6} more</span>
                          )}
                        </div>
                      </td>
                    ) : null
                  })}
                </tr>
                
                {/* Offers */}
                <tr className="border-b">
                  <td className="p-3 font-medium">Current Offers</td>
                  {Array.from(selectedForComparison).map(crmId => {
                    const crm = crmData.find(c => c.id === crmId)
                    return crm ? (
                      <td key={crm.id} className="p-3">
                        <div className="space-y-2">
                          <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                            🎫 {crm.couponDiscount}
                          </div>
                          {crm.hasStartupOffer && (
                            <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                              🚀 Startup Offer
                            </div>
                          )}
                        </div>
                      </td>
                    ) : null
                  })}
                </tr>
                
                {/* Actions */}
                <tr>
                  <td className="p-3 font-medium">Actions</td>
                  {Array.from(selectedForComparison).map(crmId => {
                    const crm = crmData.find(c => c.id === crmId)
                    return crm ? (
                      <td key={crm.id} className="p-3">
                        <div className="space-y-2">
                          {crm.hasFreeTrial && (
                            <Button
                              size="sm"
                              onClick={() => handleAction("Start Free Trial", crm.name)}
                              className="w-full text-xs"
                            >
                              🚀 Free Trial
                            </Button>
                          )}
                          {crm.hasDemo && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleAction("Book Demo", crm.name)}
                              className="w-full text-xs"
                            >
                              📅 Demo
                            </Button>
                          )}
                        </div>
                      </td>
                    ) : null
                  })}
                </tr>
              </tbody>
              </table>
            </div>
          </div>
        </DialogContent>
        </Dialog>
      </div>

      {/* Enhanced Comparison Sheet - Mobile */}
      <div className="md:hidden">
      <Sheet open={showComparison} onOpenChange={setShowComparison}>
        <SheetContent side="bottom" className="h-[90vh] overflow-y-auto">
          <SheetHeader>
            <SheetTitle>CRM Comparison</SheetTitle>
            <SheetDescription>
              Compare features, pricing, and more
            </SheetDescription>
          </SheetHeader>
          
          <div className="space-y-6 mt-6">
            {/* CRM Selection Area */}
            <div className="border-b pb-4">
              <h3 className="text-lg font-semibold mb-3">Selected CRMs</h3>
              <div className="flex flex-wrap gap-2">
                {Array.from(selectedForComparison).map(crmId => {
                  const crm = crmData.find(c => c.id === crmId)
                  return crm ? (
                    <Badge key={crm.id} variant="secondary" className="flex items-center gap-2">
                      <span>{crm.logo}</span>
                      <span>{crm.name}</span>
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => toggleComparisonSelection(crm.id)}
                      />
                    </Badge>
                  ) : null
                })}
              </div>
              
              {selectedForComparison.size < 3 && (
                <div className="mt-3">
                  <p className="text-sm text-gray-600 mb-2">Add more CRMs (up to 3):</p>
                  <div className="flex flex-wrap gap-2">
                    {crmData
                      .filter(crm => !selectedForComparison.has(crm.id))
                      .map(crm => (
                        <Button
                          key={crm.id}
                          variant="outline"
                          size="sm"
                          onClick={() => toggleComparisonSelection(crm.id)}
                          className="text-xs"
                        >
                          <span className="mr-1">{crm.logo}</span>
                          {crm.name}
                        </Button>
                      ))
                    }
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Comparison View */}
            <div className="space-y-6 comparison-mobile">
              {Array.from(selectedForComparison).map(crmId => {
                const crm = crmData.find(c => c.id === crmId)
                return crm ? (
                  <Card key={crm.id} className="comparison-card mobile-optimized">
                    <div className="text-center mb-4">
                      <span className="text-3xl mb-2 block">{crm.logo}</span>
                      <h3 className="text-lg font-semibold">{crm.name}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="font-medium">Rating:</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className="font-semibold">{crm.rating}</span>
                          <span className="text-sm text-gray-500 ml-1">({crm.reviews})</span>
                        </div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="font-medium">Pricing:</span>
                        <div className="text-right">
                          <div className="text-primary font-semibold">{crm.pricing}</div>
                          {crm.freeTrialDays && (
                            <div className="text-sm text-accent">{crm.freeTrialDays}-day trial</div>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="font-medium">Category:</span>
                        <Badge variant="secondary">{crm.category}</Badge>
                      </div>
                      
                      <div>
                        <span className="font-medium block mb-2">Key Features:</span>
                        <div className="space-y-1">
                          {crm.keyFeatures.slice(0, 6).map((feature, idx) => (
                            <div key={idx} className="flex items-center text-sm">
                              <Check className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                          {crm.keyFeatures.length > 6 && (
                            <div className="text-xs text-gray-500">
                              +{crm.keyFeatures.length - 6} more features
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <span className="font-medium block mb-2">Integrations:</span>
                        <div className="flex flex-wrap gap-1">
                          {crm.integrations.slice(0, 6).map((integration, idx) => (
                            <div key={idx} className="flex items-center space-x-1 bg-gray-100 rounded px-2 py-1">
                              <span className="text-xs">{integration.logo}</span>
                              <span className="text-xs">{integration.name}</span>
                            </div>
                          ))}
                          {crm.integrations.length > 6 && (
                            <span className="text-xs text-gray-500">+{crm.integrations.length - 6} more</span>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <span className="font-medium block mb-2">Current Offers:</span>
                        <div className="space-y-2">
                          <div className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs">
                            🎫 {crm.couponDiscount}
                          </div>
                          {crm.hasStartupOffer && (
                            <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                              🚀 Startup Offer
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <span className="font-medium block mb-2">Actions:</span>
                        <div className="space-y-2">
                          {crm.hasFreeTrial && (
                            <Button
                              size="sm"
                              onClick={() => handleAction("Start Free Trial", crm.name)}
                              className="w-full text-xs"
                            >
                              🚀 Free Trial
                            </Button>
                          )}
                          {crm.hasDemo && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleAction("Book Demo", crm.name)}
                              className="w-full text-xs"
                            >
                              📅 Demo
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                ) : null
              })}
            </div>
          </div>
        </SheetContent>
      </Sheet>
      </div>

      {/* Partners Sheet */}
      <Sheet open={showPartners !== null} onOpenChange={(open) => {
        if (!open) {
          setShowPartners(null)
          clearPartnersFilters()
        }
      }}>
        <SheetContent side="right" className="w-full sm:max-w-2xl">
          <SheetHeader>
            <SheetTitle>🤝 Find CRM Partners</SheetTitle>
            <SheetDescription>
              Connect with certified implementation partners and experts
            </SheetDescription>
          </SheetHeader>
          
          <div className="space-y-6 mt-6">
            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-medium">Country</Label>
                <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {countries.map(country => (
                      <SelectItem key={country} value={country}>{country}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm font-medium">City</Label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {getCitiesForCountry(selectedCountry).map(city => (
                      <SelectItem key={city} value={city}>{city}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm font-medium">Partner Type</Label>
                <Select value={selectedPartnerType} onValueChange={setSelectedPartnerType}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {partnerTypes.map(type => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="text-sm font-medium">Expertise</Label>
                <Select value={selectedExpertise} onValueChange={setSelectedExpertise}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {expertiseAreas.map(expertise => (
                      <SelectItem key={expertise} value={expertise}>{expertise}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={clearPartnersFilters}>
                Clear All
              </Button>
              <Button size="sm" className="bg-primary text-white">
                Apply Filters ({filteredPartners.length} found)
              </Button>
            </div>

            {/* Partners List */}
            <div className="space-y-4 max-h-[60vh] overflow-y-auto">
              {filteredPartners.length === 0 ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">🔍</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Partners Found</h3>
                  <p className="text-gray-600 text-sm">
                    No partners match your current filters. Try adjusting your criteria.
                  </p>
                </div>
              ) : (
                filteredPartners.map((partner) => (
                  <Card key={partner.id} className="p-4 hover:shadow-md transition-shadow">
                    <div className="space-y-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-lg">{partner.name}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span>{partner.city}, {partner.country}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="font-semibold">{partner.rating}</span>
                          </div>
                          <div className="text-xs text-gray-500">{partner.projects} projects</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Award className="h-4 w-4 text-primary" />
                        <Badge 
                          variant={partner.partnerType === 'Diamond' ? 'default' : 
                                  partner.partnerType === 'Platinum' ? 'secondary' : 'outline'}
                          className="text-xs"
                        >
                          {partner.partnerType} Partner
                        </Badge>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-2">Expertise:</div>
                        <div className="flex flex-wrap gap-1">
                          {partner.expertise.map((skill, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="space-y-2 pt-2">
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            className="flex-1 text-xs bg-primary text-white"
                            onClick={() => alert(`Booking consultation with ${partner.name}...`)}
                          >
                            📅 Book Consultation
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            className="flex-1 text-xs"
                            onClick={() => setShowCallbackForm(partner.id)}
                          >
                            📞 Call Back
                          </Button>
                        </div>
                        <div className="flex space-x-2">
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="flex-1 text-xs"
                            onClick={() => window.open(`mailto:${partner.contact.email}`, '_blank')}
                          >
                            <Mail className="h-3 w-3 mr-1" />
                            Email
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="flex-1 text-xs"
                            onClick={() => window.open(`tel:${partner.contact.phone}`, '_blank')}
                          >
                            <Phone className="h-3 w-3 mr-1" />
                            Call
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Startup Offer Dialog */}
      <Dialog open={showStartupOffer !== null} onOpenChange={() => setShowStartupOffer(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>🚀 Startup Special Offer</DialogTitle>
            <DialogDescription>
              Exclusive offer for qualifying startups
            </DialogDescription>
          </DialogHeader>
          {showStartupOffer && (() => {
            const crm = crmData.find(c => c.id === showStartupOffer)
            return crm ? (
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl mb-2">{crm.logo}</div>
                  <h3 className="text-xl font-semibold">{crm.name}</h3>
                  <div className="text-2xl font-bold text-purple-600 mt-2">
                    {crm.startupOffer}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Startup Criteria:</h4>
                  <ul className="text-sm space-y-1 text-gray-600">
                    <li>• Company founded within the last 2 years</li>
                    <li>• Less than 50 employees</li>
                    <li>• Annual revenue under $1M</li>
                    <li>• Valid business registration</li>
                  </ul>
                </div>
                
                <Button 
                  className="w-full"
                  onClick={() => {
                    setShowStartupOffer(null)
                    window.open(crm.website, '_blank')
                  }}
                >
                  Apply Now
                </Button>
              </div>
            ) : null
          })()}
        </DialogContent>
      </Dialog>

      {/* Coupon Form Dialog */}
      <Dialog open={showCouponForm !== null} onOpenChange={() => setShowCouponForm(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>🎫 Apply Discount Coupon</DialogTitle>
            <DialogDescription>
              Please provide your business details to apply the discount
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="companyName">Company Name</Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="companyName"
                  placeholder="Enter your company name"
                  value={couponFormData.companyName}
                  onChange={(e) => setCouponFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="mobile">Mobile Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="mobile"
                  placeholder="Enter your mobile number"
                  value={couponFormData.mobile}
                  onChange={(e) => setCouponFormData(prev => ({ ...prev, mobile: e.target.value }))}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email">Business Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your business email"
                  value={couponFormData.email}
                  onChange={(e) => setCouponFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Button 
              className="w-full"
              onClick={() => showCouponForm && handleCouponSubmit(showCouponForm)}
              disabled={!couponFormData.companyName || !couponFormData.mobile || !couponFormData.email}
            >
              Apply Coupon
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Plans with Discount Dialog */}
      <Dialog open={showPlansWithDiscount !== null} onOpenChange={() => setShowPlansWithDiscount(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>🎉 Discounted Plans Available</DialogTitle>
            <DialogDescription>
              Your discount has been applied! Choose a plan to continue.
            </DialogDescription>
          </DialogHeader>
          {showPlansWithDiscount && (() => {
            const crm = crmData.find(c => c.id === showPlansWithDiscount)
            return crm ? (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl mb-2">{crm.logo}</div>
                  <h3 className="text-xl font-semibold">{crm.name}</h3>
                  <div className="text-lg text-green-600 font-medium">
                    {crm.couponDiscount} Applied Successfully!
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {crm.plans.map((plan, idx) => (
                    <div key={idx} className="border rounded-lg p-4 hover:border-primary transition-colors">
                      <div className="text-center mb-4">
                        <h4 className="font-semibold text-lg">{plan.name}</h4>
                        <div className="mt-2">
                          <span className="text-gray-400 line-through text-sm">{plan.price}</span>
                          <div className="text-2xl font-bold text-primary">{plan.discountedPrice}</div>
                          <div className="text-sm text-gray-600">per user/month</div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        {plan.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-center text-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      <Button
                        className="w-full"
                        onClick={() => handlePurchasePlan(crm, plan)}
                      >
                        Purchase Now
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ) : null
          })()}
        </DialogContent>
      </Dialog>

      {/* Callback Form Dialog */}
      <Dialog open={showCallbackForm !== null} onOpenChange={() => setShowCallbackForm(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>📞 Request Call Back</DialogTitle>
            <DialogDescription>
              Please provide your details and we'll have our partner call you back
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="callbackCompanyName">Company Name</Label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="callbackCompanyName"
                  placeholder="Enter your company name"
                  value={callbackFormData.companyName}
                  onChange={(e) => setCallbackFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="callbackMobile">Mobile Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="callbackMobile"
                  placeholder="Enter your mobile number"
                  value={callbackFormData.mobile}
                  onChange={(e) => setCallbackFormData(prev => ({ ...prev, mobile: e.target.value }))}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="callbackEmail">Business Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  id="callbackEmail"
                  type="email"
                  placeholder="Enter your business email"
                  value={callbackFormData.businessEmail}
                  onChange={(e) => setCallbackFormData(prev => ({ ...prev, businessEmail: e.target.value }))}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="whatsappConsent"
                checked={callbackFormData.whatsappConsent}
                onCheckedChange={(checked) => setCallbackFormData(prev => ({ ...prev, whatsappConsent: checked as boolean }))}
              />
              <Label htmlFor="whatsappConsent" className="text-sm">
                I consent to receive communication via WhatsApp
              </Label>
            </div>
            
            <Button 
              className="w-full"
              onClick={() => {
                if (callbackFormData.companyName && callbackFormData.mobile && callbackFormData.businessEmail) {
                  setShowOTPVerification(true)
                }
              }}
              disabled={!callbackFormData.companyName || !callbackFormData.mobile || !callbackFormData.businessEmail}
            >
              Send OTP for Verification
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* OTP Verification Dialog */}
      <Dialog open={showOTPVerification} onOpenChange={setShowOTPVerification}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>📱 OTP Verification</DialogTitle>
            <DialogDescription>
              We've sent a 6-digit OTP to {callbackFormData.mobile}. Please enter it below.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="otpCode">Enter OTP</Label>
              <Input
                id="otpCode"
                placeholder="Enter 6-digit OTP"
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                maxLength={6}
                className="text-center text-lg tracking-widest"
              />
            </div>
            
            <div className="flex space-x-2">
              <Button 
                variant="outline"
                className="flex-1"
                onClick={() => alert("OTP resent successfully!")}
              >
                Resend OTP
              </Button>
              <Button 
                className="flex-1"
                onClick={() => {
                  if (otpCode.length === 6) {
                    setShowOTPVerification(false)
                    setShowCallbackForm(null)
                    setCallbackFormData({ companyName: "", mobile: "", businessEmail: "", whatsappConsent: false })
                    setOtpCode("")
                    alert("Verification successful! Our partner will call you back within 24 hours.")
                  }
                }}
                disabled={otpCode.length !== 6}
              >
                Verify & Submit
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* List Brand Page Dialog */}
      <Dialog open={showListBrandPage} onOpenChange={(open) => {
        setShowListBrandPage(open)
        if (!open) {
          // Reset login form when closing
          setLoginMobile("")
          setLoginOTP("")
          setShowLoginPage(false)
          setShowBrandForm(false)
        }
      }}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>🚀 Why Join CRM Discovery?</DialogTitle>
            <DialogDescription>
              Reach thousands of businesses looking for CRM solutions
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            {/* Benefits Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">📈 Grow Your Business</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Reach 10,000+ monthly visitors</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Generate qualified leads</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Increase brand visibility</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Compete with industry leaders</li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">💰 Pricing & Features</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Free basic listing</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Premium placement available</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Lead analytics dashboard</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />24/7 support included</li>
                </ul>
              </div>
            </div>

            {/* Success Stories */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">🌟 Success Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white p-3 rounded">
                  <p className="font-medium">"Increased leads by 300%"</p>
                  <p className="text-gray-600">- TechCRM Solutions</p>
                </div>
                <div className="bg-white p-3 rounded">
                  <p className="font-medium">"Best ROI from any platform"</p>
                  <p className="text-gray-600">- CloudCRM Pro</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button 
                size="lg"
                onClick={() => {
                  setShowListBrandPage(false)
                  setShowLoginPage(true)
                }}
                className="bg-primary text-white hover:bg-primary/90"
              >
                Start Now - List Your CRM
              </Button>
              <p className="text-sm text-gray-600 mt-2">
                Join 500+ CRM providers already listed
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Login Page Dialog */}
      <Dialog open={showLoginPage} onOpenChange={(open) => {
        setShowLoginPage(open)
        if (!open) {
          // Reset to mobile input when closing
          setLoginMobile("")
          setLoginOTP("")
        }
      }}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>🔐 Login to List Your Brand</DialogTitle>
            <DialogDescription>
              Secure login with mobile OTP verification
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="loginMobile">Mobile Number</Label>
              <div className="flex space-x-2">
                <select className="px-3 py-2 border border-input rounded-md bg-background text-sm">
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+1">🇨🇦 +1</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+49">🇩🇪 +49</option>
                  <option value="+91">🇮🇳 +91</option>
                </select>
                <div className="relative flex-1">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="loginMobile"
                    placeholder="Enter your mobile number"
                    value={loginMobile}
                    onChange={(e) => setLoginMobile(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
            
            {loginOTP ? (
              <div>
                <Label htmlFor="loginOTP">Enter OTP</Label>
                <Input
                  id="loginOTP"
                  placeholder="Enter 6-digit OTP"
                  value={loginOTP}
                  onChange={(e) => setLoginOTP(e.target.value)}
                  maxLength={6}
                  className="text-center text-lg tracking-widest"
                />
              </div>
            ) : null}
            
            <Button 
              className="w-full"
              onClick={() => {
                if (!loginOTP && loginMobile) {
                  // Send OTP
                  alert(`OTP sent to ${loginMobile}`)
                  setLoginOTP(" ") // Trigger OTP input
                } else if (loginOTP && loginOTP.trim().length === 6) {
                  // Verify OTP and proceed
                  setShowLoginPage(false)
                  setShowBrandForm(true)
                  setLoginMobile("")
                  setLoginOTP("")
                }
              }}
              disabled={!loginMobile || (loginOTP && loginOTP.trim().length !== 6)}
            >
              {!loginOTP ? "Send OTP" : "Verify & Continue"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Brand Form Dialog */}
      <Dialog open={showBrandForm} onOpenChange={setShowBrandForm}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>📝 List Your CRM Brand</DialogTitle>
            <DialogDescription>
              Complete this form to add your CRM to our marketplace
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="brandCompanyName">Company Name *</Label>
                <Input
                  id="brandCompanyName"
                  placeholder="Your CRM company name"
                  value={brandFormData.companyName}
                  onChange={(e) => setBrandFormData(prev => ({ ...prev, companyName: e.target.value }))}
                />
              </div>
              
              <div>
                <Label htmlFor="brandWebsite">Website URL *</Label>
                <Input
                  id="brandWebsite"
                  placeholder="https://yourcrm.com"
                  value={brandFormData.website}
                  onChange={(e) => setBrandFormData(prev => ({ ...prev, website: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="brandDescription">Description *</Label>
              <Textarea
                id="brandDescription"
                placeholder="Describe your CRM solution and its unique value proposition"
                value={brandFormData.description}
                onChange={(e) => setBrandFormData(prev => ({ ...prev, description: e.target.value }))}
                className="h-24 resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="brandCategory">Category *</Label>
                <Select value={brandFormData.category} onValueChange={(value) => setBrandFormData(prev => ({ ...prev, category: value }))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Enterprise">Enterprise</SelectItem>
                    <SelectItem value="Small Business">Small Business</SelectItem>
                    <SelectItem value="Mid-Market">Mid-Market</SelectItem>
                    <SelectItem value="Project Management">Project Management</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="brandPricing">Pricing *</Label>
                <Input
                  id="brandPricing"
                  placeholder="e.g., From $25/user/month"
                  value={brandFormData.pricing}
                  onChange={(e) => setBrandFormData(prev => ({ ...prev, pricing: e.target.value }))}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="brandKeyFeatures">Key Features *</Label>
              <Textarea
                id="brandKeyFeatures"
                placeholder="List your key features separated by commas (e.g., AI Analytics, Mobile App, Custom Dashboards)"
                value={brandFormData.keyFeatures}
                onChange={(e) => setBrandFormData(prev => ({ ...prev, keyFeatures: e.target.value }))}
                className="h-20 resize-none"
              />
            </div>

            <div>
              <Label htmlFor="brandIntegrations">Integrations</Label>
              <Textarea
                id="brandIntegrations"
                placeholder="List integrations separated by commas (e.g., Slack, Microsoft, Google, Zapier)"
                value={brandFormData.integrations}
                onChange={(e) => setBrandFormData(prev => ({ ...prev, integrations: e.target.value }))}
                className="h-20 resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="brandContactEmail">Contact Email *</Label>
                <Input
                  id="brandContactEmail"
                  type="email"
                  placeholder="contact@yourcrm.com"
                  value={brandFormData.contactEmail}
                  onChange={(e) => setBrandFormData(prev => ({ ...prev, contactEmail: e.target.value }))}
                />
              </div>
              
              <div>
                <Label htmlFor="brandContactPhone">Contact Phone</Label>
                <Input
                  id="brandContactPhone"
                  placeholder="+1-555-0123"
                  value={brandFormData.contactPhone}
                  onChange={(e) => setBrandFormData(prev => ({ ...prev, contactPhone: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="brandLogo">Logo URL</Label>
                <Input
                  id="brandLogo"
                  placeholder="https://yourcrm.com/logo.png"
                  value={brandFormData.logo}
                  onChange={(e) => setBrandFormData(prev => ({ ...prev, logo: e.target.value }))}
                />
              </div>
              
              <div>
                <Label htmlFor="brandFreeTrialDays">Free Trial Days</Label>
                <Input
                  id="brandFreeTrialDays"
                  type="number"
                  placeholder="14"
                  value={brandFormData.freeTrialDays}
                  onChange={(e) => setBrandFormData(prev => ({ ...prev, freeTrialDays: e.target.value }))}
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label>Available Options</Label>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasDemo"
                    checked={brandFormData.hasDemo}
                    onCheckedChange={(checked) => setBrandFormData(prev => ({ ...prev, hasDemo: checked as boolean }))}
                  />
                  <Label htmlFor="hasDemo">Demo Available</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasFreeTrial"
                    checked={brandFormData.hasFreeTrial}
                    onCheckedChange={(checked) => setBrandFormData(prev => ({ ...prev, hasFreeTrial: checked as boolean }))}
                  />
                  <Label htmlFor="hasFreeTrial">Free Trial Available</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="hasCustomQuote"
                    checked={brandFormData.hasCustomQuote}
                    onCheckedChange={(checked) => setBrandFormData(prev => ({ ...prev, hasCustomQuote: checked as boolean }))}
                  />
                  <Label htmlFor="hasCustomQuote">Custom Quote Available</Label>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button 
                variant="outline"
                className="flex-1"
                onClick={() => setShowBrandForm(false)}
              >
                Cancel
              </Button>
              <Button 
                className="flex-1 bg-primary text-white"
                onClick={() => {
                  if (brandFormData.companyName && brandFormData.website && brandFormData.description && 
                      brandFormData.category && brandFormData.pricing && brandFormData.keyFeatures && 
                      brandFormData.contactEmail) {
                    alert("Brand submitted successfully! It will be reviewed and added to the marketplace within 24 hours.")
                    setShowBrandForm(false)
                    setBrandFormData({
                      companyName: "",
                      website: "",
                      description: "",
                      category: "",
                      pricing: "",
                      keyFeatures: "",
                      integrations: "",
                      contactEmail: "",
                      contactPhone: "",
                      logo: "",
                      freeTrialDays: "",
                      hasDemo: false,
                      hasFreeTrial: false,
                      hasCustomQuote: false
                    })
                  }
                }}
                disabled={!brandFormData.companyName || !brandFormData.website || !brandFormData.description || 
                         !brandFormData.category || !brandFormData.pricing || !brandFormData.keyFeatures || 
                         !brandFormData.contactEmail}
              >
                Submit for Review
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Website Analyzer Dialog */}
      <Dialog open={showWebsiteAnalyzer} onOpenChange={setShowWebsiteAnalyzer}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-primary" />
              <span>AI-Powered Website Analysis</span>
            </DialogTitle>
            <DialogDescription>
              Get personalized CRM recommendations based on your website analysis
            </DialogDescription>
          </DialogHeader>
          <WebsiteAnalyzer onCRMSelect={handleCRMSelectFromAnalyzer} />
        </DialogContent>
      </Dialog>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 glass-effect">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-600">Join thousands of businesses who found their perfect CRM</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Sales Director",
                company: "TechCorp",
                content: "Found the perfect CRM for our team in just 10 minutes. The comparison tool saved us weeks of research!",
                rating: 5
              },
              {
                name: "Mike Chen",
                role: "Founder",
                company: "StartupXYZ",
                content: "The industry-specific recommendations were spot on. We're now 3x more efficient with our new CRM.",
                rating: 5
              },
              {
                name: "Emily Davis",
                role: "Operations Manager",
                company: "GrowthCo",
                content: "Love how easy it is to compare features and pricing. The free trial links made testing seamless.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="gradient-card hover-lift border-white/30">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-primary text-white animate-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect CRM?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join over 10,000 businesses who discovered their ideal CRM solution through our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-primary hover-lift shadow-lg">
              Start Your Search Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary hover-lift shadow-lg">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-xl font-bold gradient-text">CRM</div>
                <div className="text-xl font-bold text-accent">Discovery</div>
              </div>
              <p className="text-gray-400">
                The ultimate marketplace for finding and comparing CRM solutions for your business.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Browse CRMs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compare Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Read Reviews</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Get Quotes</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">CRM Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Industry Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Practices</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ROI Calculator</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Live Chat</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Book Consultation</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CRM Discovery. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App