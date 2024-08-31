import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { CreditCard, Smartphone, Lock, DollarSign } from 'lucide-react'
import { useNavigate } from 'react-router-dom'


export function LandingPage() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-100">
      <header className="px-4 lg:px-6 w-full h-14 flex items-center bg-white shadow-sm fixed">
        <a className="flex items-center justify-center" href="#">
          <CreditCard className="h-6 w-6 text-emerald-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">PayEase</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" className="text-gray-700 hover:text-emerald-700">Features</Button>
          <Button variant="ghost" className="text-gray-700 hover:text-emerald-700">About</Button>
          <Button variant="ghost" className="text-gray-700 hover:text-emerald-700">Contact</Button>
          <Button variant="outline" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50" onClick={() => {navigate("/signin")}}>Login</Button>
          <Button className="bg-emerald-600 text-white hover:bg-emerald-700" onClick={() => {navigate("/signup")}}>Sign Up</Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900">
                    Simplify Your Payments with PayEase
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Secure, fast, and easy payments for individuals and businesses. Join thousands of satisfied users today.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-emerald-600 text-white hover:bg-emerald-700" onClick={() => {navigate("/signup")}}>Get Started</Button>
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50" onClick={() => {navigate("/merchant")}}>
                    For Merchants
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-sm">
                  <CardContent className="p-6">
                    <img src="/src/assets/hero.svg" alt="Payment App Interface" className="w-full h-2/3 rounded-lg shadow-lg" />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-900">Why Choose PayEase?</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Smartphone className="h-12 w-12 text-emerald-600" />
                  <h3 className="text-xl font-bold text-gray-900">Mobile-First Design</h3>
                  <p className="text-gray-600">Seamless experience across all devices, optimized for mobile.</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Lock className="h-12 w-12 text-emerald-600" />
                  <h3 className="text-xl font-bold text-gray-900">Bank-Level Security</h3>
                  <p className="text-gray-600">Your transactions are protected with state-of-the-art encryption.</p>
                </CardContent>
              </Card>
              <Card className="bg-white">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <DollarSign className="h-12 w-12 text-emerald-600" />
                  <h3 className="text-xl font-bold text-gray-900">Competitive Rates</h3>
                  <p className="text-gray-600">Enjoy low transaction fees and great currency exchange rates.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">© 2023 PayEase Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-emerald-600" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4 text-gray-500 hover:text-emerald-600" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}