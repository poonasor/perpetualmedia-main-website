/* eslint-disable */
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, ChevronRight, Sparkles, Send, ArrowRight, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function AppCompanyPortfolio_2024() {
  const [darkMode, setDarkMode] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const portfolioItems = [
    { name: 'Dividables', image: '/assets/images/iphone-dividables.png', description: 'Split bills fairly with Dividables. Perfect for roommates, friends, and groups. Calculate shared expenses instantly.', features: ['No sign-up required - start splitting bills immediately', 'Easy to use on any device - mobile, tablet, or desktop', 'Instantly shareable - quickly send results to your group'], url: '', web: 'https://www.dividables.com/', appstore: '', playstore: '' },
    { name: 'Private Hangout', image: '/assets/images/iphone-private-hangout.png', description: 'Connect one-on-one with influencers and creators you admire through private, paid video calls. Enjoy personalized interactions, get advice, or simply chat.', features: ['Direct Access: Connect one-on-one with influencers and creators.', 'Flexible Pricing: Pay only for the time you use.', 'Privacy-Focused: Strong emphasis on secure, confidential interactions.'], url: 'https://privatehangout.com/', web: 'https://app.privatehangout.com/', appstore: 'https://apps.apple.com/ca/app/private-hangout/id6572324418', playstore: 'https://play.google.com/store/apps/details?id=com.privatehangout.app' },
    { name: 'Symbolique', image: '/assets/images/iphone-symbolique.png', description: 'Boost your productivity and organize your life with our powerful task management app. Stay on top of your goals and never miss a deadline again.', features: ['Art-Based Therapy: Uses digital art and storytelling for emotional growth.', 'Focus on Resilience: Aims to boost adaptability and reduce resistance to change.', 'Emphasis on Well-Being: Designed for both personal and professional development.'], url: 'https://www.symbolique.ca/', web: 'https://app.symbolique.ca/', appstore: '', playstore: '' },
  ]

  const features = ['Innovative Design', 'Seamless Integration', 'Exceptional Support']

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-purple-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
      <motion.header 
        className="sticky top-0 z-30 backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-sm"
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
            <div className="flex items-center gap-2">
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
        <section className="py-20 text-center relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2
              {...fadeInUp}
              className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            >
              Crafting Digital Experiences
            </motion.h2>
            <motion.p
              {...fadeInUp}
              transition={{ delay: 0.2, ...fadeInUp.transition }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              We build innovative apps that transform ideas into reality
            </motion.p>
            <motion.div
              {...fadeInUp}
              transition={{ delay: 0.4, ...fadeInUp.transition }}
            >
              <Button size="lg" className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                View Our Work <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-900 dark:to-pink-900 opacity-20 animate-pulse"></div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              {...fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            >
              Our Portfolio
            </motion.h2>
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
                className={`mb-20 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
              >
                <div className="w-full md:w-1/2">
                  <motion.div 
                    className="relative rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  >
                    <img src={item.image} alt={item.name} className="w-full h-auto" />

                  </motion.div>
                </div>
                <div className="w-full md:w-1/2">
                  <motion.h3 
                    className="text-4xl tracking-tight font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
                    initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {item.name}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 dark:text-gray-300 mb-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {item.description}
                  </motion.p>
                  <ul className="mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex} 
                        className="flex items-center mb-2"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <ArrowRight className="h-4 w-4 mr-2 text-purple-600" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4">
                    {item.url != "" && (
                      <motion.div
                whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-block"
                  >
                    <a href={item.url} target="_blank" className="py-2 px-4 text-sm font-medium leading-4 inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <span className="relative z-10 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 fill-current">
  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd" />
                        </svg>
                          Website
                        </span>
                    </a>
                      </motion.div>
                    )}
                    {item.web != "" && (
                      <motion.div
                whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-block"
                  >
                    <a href={item.url} target="_blank" className="py-2 px-4 text-sm font-medium leading-4 inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <span className="relative z-10 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 fill-current">
  <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd" />
                        </svg>
                          Web App
                        </span>
                    </a>
                      </motion.div>
                    )}
                    {item.appstore != "" && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative inline-block"
                    >
                        <a href={item.appstore} target="_blank" className="py-2 px-4 text-sm font-medium leading-4 inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        <span className="relative z-10 flex items-center">
                          <svg viewBox="0 0 384 512" className="w-5 h-5 mr-2 fill-current">
                            <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                          </svg>
                          App Store
                        </span>
                      </a>
                    </motion.div>
                    )}
                    {item.playstore != "" && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative inline-block"
                    >
                    <a href={item.playstore} target="_blank" className="py-2 px-4 text-sm font-medium leading-4 inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        <span className="relative z-10 flex items-center">
                          <svg viewBox="0 0 512 512" className="w-5 h-5 mr-2 fill-current">
                            <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                          </svg>
                          Play Store
                        </span>
                      </a>
                    </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-gray-800 dark:to-purple-800">
          <div className="container mx-auto px-4">
            <motion.h2 
              {...fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            >
              Why Choose Us
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="text-center backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-lg p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-4 inline-block mb-4"
                    animate={{ scale: activeFeature === index ? 1.1 : 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  >
                    <Sparkles className="h-8 w-8 text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                  <p className="text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2 
              {...fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
            >
              Get In Touch
            </motion.h2>
            <motion.form 
              className="max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <Input type="text" placeholder="Your Name" className="rounded-full" />
              </div>
              <div className="mb-4">
                <Input type="email" placeholder="Your Email" className="rounded-full" />
              </div>
              <div className="mb-4">
                <Textarea placeholder="Your Message" rows={4} className="rounded-2xl" />
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button type="submit" className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.form>
          </div>
        </section>
      </main>

      <motion.footer 
        className="bg-gradient-to-br from-purple-900 to-pink-900 text-white py-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">AppCraft</h3>
              <p className="mb-4">Crafting innovative digital experiences that transform ideas into reality.</p>
              <div className="flex space-x-4">
                <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Facebook className="h-6 w-6" />
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Twitter className="h-6 w-6" />
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Instagram className="h-6 w-6" />
                </motion.a>
                <motion.a  href="#" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Linkedin className="h-6 w-6" />
                </motion.a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Portfolio</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-400 transition-colors">App Development</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Web Design</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">UI/UX Design</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Consulting</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors">Maintenance</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-pink-400" />
                  <a href="mailto:info@appcraft.com" className="hover:text-pink-400 transition-colors">info@appcraft.com</a>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-pink-400" />
                  <a href="tel:+1234567890" className="hover:text-pink-400 transition-colors">+1 (234) 567-890</a>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-pink-400" />
                  <span>123 Tech Street, San Francisco, CA 94107</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-700 text-center">
            <p>&copy; 2024 AppCraft. All rights reserved.</p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}