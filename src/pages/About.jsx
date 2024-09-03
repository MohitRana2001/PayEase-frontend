import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CreditCard, Shield, Zap, Globe } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function AboutPage() {

    const navigate = useNavigate();

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
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About PayEase</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            PayEase is a cutting-edge payment solution designed to simplify transactions for individuals and businesses alike. 
            Founded in 2024, our mission is to make digital payments accessible, secure, and effortless for everyone.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <Card className="bg-white">
            <CardContent className="p-6">
              <p className="text-gray-600">
                At PayEase, we're committed to revolutionizing the way people handle money in the digital age. 
                Our goal is to create a seamless, secure, and user-friendly platform that empowers individuals 
                and businesses to manage their finances with ease and confidence.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose PayEase?</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Shield className="h-12 w-12 text-emerald-600" />
                <h3 className="text-xl font-bold text-gray-900">Uncompromising Security</h3>
                <p className="text-gray-600">
                  Your financial safety is our top priority. We employ state-of-the-art encryption and security measures to protect your data and transactions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Zap className="h-12 w-12 text-emerald-600" />
                <h3 className="text-xl font-bold text-gray-900">Lightning-Fast Transactions</h3>
                <p className="text-gray-600">
                  Experience the speed of modern finance. Our platform ensures quick and efficient transactions, saving you time and hassle.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white">
              <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                <Globe className="h-12 w-12 text-emerald-600" />
                <h3 className="text-xl font-bold text-gray-900">Global Accessibility</h3>
                <p className="text-gray-600">
                  PayEase is designed for a global audience. Send and receive money across borders with ease and at competitive rates.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Us in Shaping the Future of Payments</h2>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're an individual looking for a better way to manage your money or a business seeking to streamline your payment processes, 
            PayEase is here to support you. Join us on our journey to make digital payments accessible and effortless for everyone.
          </p>
          <Button className="bg-emerald-600 text-white hover:bg-emerald-700" onClick={() => {navigate("/")}}>
            Get Started with PayEase
          </Button>
        </section>
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
            <a className="text-sm text-gray-500 hover:text-emerald-600 hover:underline" href="#">
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}