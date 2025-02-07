/* eslint-disable */
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, ArrowRight, Mail, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { PortfolioItem } from './portfolio-item'

export function AppCompanyPortfolio_2024() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: "", proName: "FX_IDC:CADUSD" },
        { description: "", proName: "KRAKEN:BTCCAD" },
        { description: "", proName: "KRAKEN:ETHCAD" },
        { description: "", proName: "KRAKEN:USDCCAD" },
        { description: "", proName: "KRAKEN:USDTCAD" }
      ],
      showSymbolLogo: true,
      colorTheme: "dark",
      isTransparent: true,
      displayMode: "adaptive",
      locale: "en"
    });

    const container = document.querySelector('.tradingview-widget-container__widget');
    if (container) {
      container.appendChild(script);
    }

    return () => {
      if (container) {
        container.removeChild(script);
      }
    };
  }, []);

  const appItems: any[] = [
    {
      name: 'WayPoint X',
      image: '/assets/images/iphone-waypoint-x.png',
      description: 'From planning the perfect sightseeing itinerary to optimizing your daily service calls, Waypoint X is the essential tool for anyone who needs to visit multiple destinations in a single trip. Delivery and rideshare drivers can minimize their time on the road, while traveling sales reps can maximize their face time with clients and prospects.',
      features: [
        'Waypoint X intelligently plans the most efficient route between all your stops',
        'Minimize driving time and fuel costs with optimized routing',
        'The essential trip planning and optimization tool for driving professionals'
      ],
      url: 'https://waypoint-x.com/',
      web: '',
      appstore: '',
      playstore: ''
    },
    { name: 'Dividables', image: '/assets/images/iphone-dividables.png', description: 'Split bills fairly with Dividables. Perfect for roommates, friends, and groups. Calculate shared expenses instantly.', features: ['No sign-up required - start splitting bills immediately', 'Easy to use on any device - mobile, tablet, or desktop', 'Instantly shareable - quickly send results to your group'], url: '', web: 'https://www.dividables.com/', appstore: '', playstore: '' },
  ]

  const portfolioItems: any[] = [
    { name: 'Private Hangout', image: '/assets/images/iphone-private-hangout.png', description: 'Connect one-on-one with influencers and creators you admire through private, paid video calls. Enjoy personalized interactions, get advice, or simply chat.', features: ['Direct Access: Connect one-on-one with influencers and creators.', 'Flexible Pricing: Pay only for the time you use.', 'Privacy-Focused: Strong emphasis on secure, confidential interactions.'], url: '', web: '', appstore: 'https://apps.apple.com/ca/app/private-hangout/id6572324418', playstore: 'https://play.google.com/store/apps/details?id=com.privatehangout.app' },
    { name: 'Symbolique', image: '/assets/images/iphone-symbolique.png', description: 'Boost your productivity and organize your life with our powerful task management app. Stay on top of your goals and never miss a deadline again.', features: ['Art-Based Therapy: Uses digital art and storytelling for emotional growth.', 'Focus on Resilience: Aims to boost adaptability and reduce resistance to change.', 'Emphasis on Well-Being: Designed for both personal and professional development.'], url: 'https://www.symbolique.ca/', web: 'https://app.symbolique.ca/', appstore: '', playstore: '' },
  ]

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <>
      <div className={`min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-purple-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <motion.header
          className="sticky top-0 z-50 backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-sm"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        >
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <motion.h1
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center gap-3">
                <img src="/assets/images/logo.png" alt="perpetualmedia ltd." className="h-10 w-auto" />
                <span className="">perpetualmedia ltd.</span>
              </div>
            </motion.h1>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDarkMode(!darkMode)}
                className="rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </motion.div>
          </div>
        </motion.header>

        <main>
          {/* Hero Section */}
          <section className="pb-20 text-center relative overflow-hidden">
            <div className="w-full relative z-40">
              <div className="tradingview-widget-container">
                <div className="tradingview-widget-container__widget"></div>
              </div>
            </div>
            <div className="container mx-auto pt-20 pb-8 px-4 relative z-10">
              <motion.h2
                {...fadeInUp}
                className="py-5 text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#4895ef] to-[#ffffff] dark:from-purple-600 dark:to-pink-600"
              >
                We build innovative apps that transform ideas into reality
              </motion.h2>
            </div>
            <div className="absolute inset-0 opacity-70"
              style={{
                backgroundImage: "url('/assets/images/pattern-tesseract.png')",
                backgroundSize: "50px",
              }}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#7209B7] to-[#4361EE] dark:from-purple-900 dark:to-pink-900 opacity-90"></div>
          </section>

          {/* Portfolio Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.h2
                {...fadeInUp}
                className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
              >
                Our Apps
              </motion.h2>
              {appItems.map((item, index) => (
                <PortfolioItem key={index} item={item} index={index} />
              ))}
              <motion.h2
                {...fadeInUp}
                className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
              >
                Client Portfolio
              </motion.h2>
              {portfolioItems.map((item, index) => (
                <PortfolioItem key={index} item={item} index={index} />
              ))}
            </div>
          </section>
        </main>

        <motion.footer
          className="bg-gradient-to-br from-[#7209B7] to-[#4361EE] dark:from-purple-900 dark:to-pink-900 text-white pt-16 pb-4 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className='z-10'>
                <div className="flex items-center gap-3 mb-4">
                  <img src="/assets/images/logo.png" alt="perpetualmedia ltd." className="h-10 w-auto" />
                  <h3 className="text-2xl font-bold text-white">perpetualmedia ltd.</h3>
                </div>
                <p className="mb-4">Crafting innovative digital experiences that transform ideas into reality.</p>
              </div>
              <div className='z-10'>
                <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4895ef] to-[#ffffff] dark:from-purple-600 dark:to-pink-600">Services</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-pink-400 transition-colors">App Development</a></li>
                  <li><a href="#" className="hover:text-pink-400 transition-colors">Web Development</a></li>
                  <li><a href="#" className="hover:text-pink-400 transition-colors">Web<sup>3</sup> / Blockchain</a></li>
                </ul>
              </div>
              <div className='z-10'>
                <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#4895ef] to-[#ffffff] dark:from-purple-600 dark:to-pink-600">Contact Us</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-pink-400" />
                    <a href="mailto:contact@perpetualmedia.ca" className="hover:text-pink-400 transition-colors">contact@perpetualmedia.ca</a>
                  </li>
                  <li className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-pink-400" />
                    <span>Toronto, Canada</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-purple-700 text-center text-sm z-10">
              <p>&copy; {new Date().getFullYear()} perpetualmedia ltd. All rights reserved.</p>
            </div>
          </div>
          <div className="absolute inset-0 opacity-10 z-0"
            style={{
              backgroundImage: "url('/assets/images/pattern-tesseract.png')",
              backgroundSize: "50px",
            }}></div>
        </motion.footer>
      </div>
    </>
  )
}