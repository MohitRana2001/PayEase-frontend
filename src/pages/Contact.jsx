import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { CreditCard, Mail, Phone, MapPin } from 'lucide-react'

export  function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
  }

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
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
                <p className="text-gray-600 mb-6">
                  We're here to help and answer any question you might have. We look forward to hearing from you!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-emerald-600 mr-2" />
                    <span className="text-gray-600">support@payease.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-emerald-600 mr-2" />
                    <span className="text-gray-600">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-emerald-600 mr-2" />
                    <span className="text-gray-600">123 Payment Street, Finance City, 12345</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div>
            <Card className="bg-white">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your message"
                      required
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-emerald-600 text-white hover:bg-emerald-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <footer className="py-6 px-4 bg-white border-t">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2024 PayEase Inc. All rights reserved.</p>
          <nav className="flex gap-4 mt-4 sm:mt-0">
            <a className="text-sm text-gray-500 hover:text-emerald-600 hover:underline" href="#">
              Terms of Service
            </a>
            <a className="text-sm text-gray-500 hover:text-emerald-600 hover:underline" href="#">
              Privacy Policy
            </a>
            <a className="text-sm text-gray-500 hover:text-emerald-600 hover:underline" href="/about">
              About Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}