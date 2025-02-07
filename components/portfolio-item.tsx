import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface PortfolioItemProps {
  item: {
    name: string
    image: string
    description: string
    features: string[]
    url?: string
    web?: string
    appstore?: string
    playstore?: string
  }
  index: number
}

export function PortfolioItem({ item, index }: PortfolioItemProps) {
  return (
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
          {item.features.map((feature: string, featureIndex: number) => (
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
          {item.url && typeof item.url === 'string' && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block"
            >
              <a href={item.url} target="_blank" className="py-2 px-4 text-sm font-medium leading-4 inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <span className="relative z-10 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 fill-current"><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd"></path><path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd"></path></svg>
                  Website
                </span>
              </a>
            </motion.div>
          )}
          {item.web && typeof item.web === 'string' && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block"
            >
              <a href={item.web} target="_blank" className="py-2 px-4 text-sm font-medium leading-4 inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <span className="relative z-10 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 fill-current"><path fillRule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clipRule="evenodd"></path><path fillRule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clipRule="evenodd"></path></svg>
                  Web App
                </span>
              </a>
            </motion.div>
          )}
          {item.appstore && typeof item.appstore === 'string' && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block"
            >
              <a href={item.appstore} target="_blank" className="py-2 px-4 text-sm font-medium leading-4 inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <span className="relative z-10 flex items-center">
                  <svg viewBox="0 0 384 512" className="w-5 h-5 mr-2 fill-current"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                  App Store
                </span>
              </a>
            </motion.div>
          )}
          {item.playstore && typeof item.playstore === 'string' && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block"
            >
              <a href={item.playstore} target="_blank" className="py-2 px-4 text-sm font-medium leading-4 inline-flex items-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <span className="relative z-10 flex items-center">
                  <svg viewBox="0 0 512 512" className="w-5 h-5 mr-2 fill-current"><path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                  Play Store
                </span>
              </a>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
} 