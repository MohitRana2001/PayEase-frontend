import { useState } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import { Button } from '@/components/ui/button'
import { CreditCard, Power } from 'lucide-react'

export default function ServerActivationPage() {
  const [isActivating, setIsActivating] = useState(false)
  const apiUrl = import.meta.env.VITE_BACKEND_URL;  
  const activateServer = async () => {
    setIsActivating(true)
    try {
      await axios.get(apiUrl)
      // Redirect to landing page after successful activation
      window.location.href = '/'
    } catch (error) {
      console.error('Failed to activate server:', error)
      setIsActivating(false)
    }
  }

  const circleVariants = {
    start: { scale: 0.8, opacity: 0.2 },
    end: { scale: 1.2, opacity: 0.8 },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-100 flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white shadow-sm">
        <a className="flex items-center justify-center" href="/">
          <CreditCard className="h-6 w-6 text-emerald-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">PayEase</span>
        </a>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Activating PayEase Server</h1>
          <p className="text-xl text-gray-600">
            Our server is warming up to provide you with lightning-fast transactions!
          </p>
        </div>
        <div className="relative w-64 h-64 mb-8">
          <motion.div
            className="absolute inset-0 rounded-full bg-emerald-200"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-emerald-300"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-emerald-400"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Power className="h-24 w-24 text-emerald-600" />
          </div>
        </div>
        <Button
          className="bg-emerald-600 text-white hover:bg-emerald-700 text-lg px-8 py-3"
          onClick={activateServer}
          disabled={isActivating}
        >
          {isActivating ? 'Activating...' : 'Activate Server'}
        </Button>
      </main>
      <footer className="py-6 px-4 bg-white border-t">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2023 PayEase Inc. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 sm:mt-0">
            <a className="text-sm text-gray-500 hover:text-emerald-600 hover:underline" href="#">
              Terms of Service
            </a>
            <a className="text-sm text-gray-500 hover:text-emerald-600 hover:underline" href="#">
              Privacy Policy
            </a>
            <a className="text-sm text-gray-500 hover:text-emerald-600 hover:underline" href="#">
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}