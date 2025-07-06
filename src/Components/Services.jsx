import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const headlineProblems = [
  "Lack of Transparency",
  "Phantom Debt",
  "High Transaction Costs",
  "Slow settlement times of 1-3 days, creating \"cash drag\"",
  "High merchant fees & low profit margins at the same time"
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const services = [
    {
      id: 1,
      title: "On-Chain Buy Now, Pay Later (BNPL)",
      icon: "🪙",
      description: "Fully on-chain BNPL products moving away from traditional rails",
      problems: [
        "Lack of transparency",
        "Phantom debt",
        "High transaction costs",
        "Slow settlement times (1–3 days)",
        "High merchant fees & low profit margins"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Pay With Yield",
      tagline: "BNPL that pays you back",
      icon: "🌿",
      description: "Revolutionary BNPL system where yield offsets your payments",
      howItWorks: [
        "User deposits into Yumi Yield SDK (yield vault)",
        "Pays $250 upfront for $1000 purchase",
        "Yumi pays merchant $1000 instantly",
        "$ysUSD and $yrUSD issued",
        "User pays $250 x 2 (20 & 40 days later)",
        "Final $250 offset by yield (pay $0 or reduced amount)"
      ],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "3-Step User Flow",
      icon: "📱",
      description: "Simple and seamless user experience",
      steps: [
        {
          step: 1,
          title: "Select Yumi at checkout",
          detail: "Pay in 4 with crypto (interest-free installments)"
        },
        {
          step: 2,
          title: "Soft credit check",
          detail: "Uses Plaid to connect account"
        },
        {
          step: 3,
          title: "Pay with installments + yield",
          detail: "$250 every 2 weeks with yield offset option"
        }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      id: 4,
      title: "Yield Infrastructure & SDK",
      icon: "⚙️",
      description: "Advanced yield vault technology",
      features: [
        "Yumi Yield SDK deposits money into yield vault",
        "Used to offset the last installment",
        "Partners: Sprout, Superform, CapMoney"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Underwriting & Servicing",
      icon: "💼",
      description: "AI-powered credit assessment",
      features: [
        "KYC & AI underwriting for credit checks",
        "Plaid integration for account connection",
        "Future: zkTLS integration (Q4 2025)",
        "Partners: 3Jane, credifi"
      ],
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Strategic Integrations",
      icon: "🤝",
      description: "Comprehensive ecosystem partnerships",
      integrations: {
        "Crypto Cards": ["ether.fi", "holyheld", "Holders", "COCA"],
        "Payment Solutions": ["Gnosis Pay"],
        "Target Merchants": ["Crypto-accepting merchants", "AI/SaaS subscription merchants"]
      },
      gradient: "from-teal-500 to-blue-500"
    },
    {
      id: 7,
      title: "Viral Acquisition: Klarna Vampire Attack",
      icon: "🎯",
      description: "Innovative referral program",
      program: {
        "Users": "Invite 5 Klarna users → Yumi pays your final installment (up to $25)",
        "Merchants": "Each referred merchant gives referrer 0.1% fee rebate for 6 months"
      },
      gradient: "from-pink-500 to-rose-500"
    }
  ]

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-700 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute right-10 top-1/2 w-96 h-96 bg-green-700 rounded-full blur-3xl opacity-30 transform -translate-y-1/2"></div>
      <div className="absolute left-1/4 top-1/4 w-64 h-64 bg-blue-600 rounded-full blur-3xl opacity-20"></div>

      <Navbar />
      
      {/* BNPL Problems Section */}
      <section className="relative z-10 flex flex-col items-center justify-center py-24 px-4">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight text-center mb-12" style={{ color: '#B6FF7A' }}>
          Buy Now, Pay Later(BNPL) products are<br className="hidden md:block" /> still using traditional payment rails
        </h2>
        <div className="flex flex-col items-center w-full max-w-4xl">
          <div className="flex items-center mb-6 w-full">
            <span className="text-gray-500 text-xl font-extralight mr-4">Problems:</span>
            <div className="flex flex-wrap gap-4">
              <span className="bg-[#18191A] text-white rounded-2xl px-5 py-2 text-base font-normal shadow-inner border border-[#222]">Lack of Transparency</span>
              <span className="bg-[#18191A] text-white rounded-2xl px-5 py-2 text-base font-normal shadow-inner border border-[#222]">Slow settlement times of 1-3 days, creating "cash drag"</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 w-full justify-center mb-4">
            <span className="bg-[#18191A] text-white rounded-2xl px-5 py-2 text-base font-normal shadow-inner border border-[#222]">Phantom Debt</span>
            <span className="bg-[#18191A] text-white rounded-2xl px-5 py-2 text-base font-normal shadow-inner border border-[#222]">High Transaction Costs</span>
          </div>
          <div className="flex flex-wrap gap-4 w-full justify-center">
            <span className="bg-[#18191A] text-white rounded-2xl px-5 py-2 text-base font-normal shadow-inner border border-[#222]">High merchant fees & low profit margins at the same time</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 py-16"
      >
      <div className="text-center mb-16">
        <h1 className="text-6xl font-bold font-extralight text-white mb-6">
          Yumi Finance Services
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl  font-extralight mx-auto">
          Revolutionizing DeFi with innovative BNPL solutions, yield optimization, and seamless user experiences
        </p>
      </div>

      {/* Services Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
            className={`bg-gradient-to-br ${service.gradient} p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/10`}
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
            
            {service.tagline && (
              <p className="text-lg font-semibold text-white/90 mb-3 italic">
                "{service.tagline}"
              </p>
            )}
            
            <p className="text-white/80 mb-4">{service.description}</p>

            {/* Problems Solved */}
            {service.problems && (
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Problems Solved:</h4>
                <ul className="space-y-1">
                  {service.problems.map((problem, index) => (
                    <li key={index} className="text-white/70 text-sm flex items-center">
                      <span className="w-2 h-2 bg-white/50 rounded-full mr-2"></span>
                      {problem}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* How It Works */}
            {service.howItWorks && (
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">How it works:</h4>
                <ul className="space-y-1">
                  {service.howItWorks.map((step, index) => (
                    <li key={index} className="text-white/70 text-sm flex items-start">
                      <span className="w-2 h-2 bg-white/50 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Steps */}
            {service.steps && (
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2 font-extralight">Process:</h4>
                <div className="space-y-3">
                  {service.steps.map((step) => (
                    <div key={step.step} className="bg-white/10 rounded-lg p-3">
                      <div className="flex items-center mb-1">
                        <span className="bg-white/20 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mr-2">
                          {step.step}
                        </span>
                        <span className="text-white font-semibold">{step.title}</span>
                      </div>
                      <p className="text-white/70 text-sm ml-8">{step.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Features */}
            {service.features && (
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2 font-extralight">Features:</h4>
                <ul className="space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="text-white/70 text-sm flex items-center">
                      <span className="w-2 h-2 bg-white/50 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Integrations */}
            {service.integrations && (
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Integrations:</h4>
                {Object.entries(service.integrations).map(([category, items]) => (
                  <div key={category} className="mb-2">
                    <h5 className="text-white/90 font-medium text-sm">{category}:</h5>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {items.map((item, index) => (
                        <span key={index} className="bg-white/20 text-white/90 text-xs px-2 py-1 rounded-full">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Program */}
            {service.program && (
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2">Program Details:</h4>
                {Object.entries(service.program).map(([category, detail]) => (
                  <div key={category} className="mb-2">
                    <h5 className="text-white/90 font-medium text-sm">{category}:</h5>
                    <p className="text-white/70 text-sm">{detail}</p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-center mt-16"
      >
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-8 rounded-2xl shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Future of BNPL?
          </h2>
          <p className="text-white/90 mb-6">
            Join thousands of users already benefiting from Yumi's innovative DeFi solutions
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </motion.div>
    </motion.div>
  </div>
)
}

export default Services
