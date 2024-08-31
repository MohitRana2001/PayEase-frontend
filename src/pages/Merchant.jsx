import { Button } from '@/components/ui/button'
import { CreditCard } from 'lucide-react'

export function Merchant() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-100 flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white shadow-sm">
        <a className="flex items-center justify-center" href="/">
          <CreditCard className="h-6 w-6 text-emerald-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">PayEase</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" className="text-gray-700 hover:text-emerald-700" onClick={() => window.history.back()}>
            Back to Home
          </Button>
        </nav>
      </header>
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="text-center space-y-8">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Merchant Portal
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Coming Soon
          </p>
          <div className="h-1 w-20 bg-emerald-600 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're working hard to bring you the best payment solutions for your business. 
            Stay tuned for our powerful merchant tools and competitive rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-emerald-600 text-white hover:bg-emerald-700">
              Join the Waitlist
            </Button>
            <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
              Learn More
            </Button>
          </div>
        </div>
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