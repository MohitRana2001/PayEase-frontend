import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CreditCard, Smartphone, Lock, Globe, Zap, DollarSign, Users, Gift } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function FeaturesPage() {

const navigate = useNavigate();

  const features = [
    {
      icon: <Smartphone className="h-12 w-12 text-emerald-600" />,
      title: "Mobile-First Design",
      description: "Experience seamless transactions on-the-go with our intuitive mobile app."
    },
    {
      icon: <Lock className="h-12 w-12 text-emerald-600" />,
      title: "Bank-Level Security",
      description: "Rest easy knowing your transactions are protected by state-of-the-art encryption."
    },
    {
      icon: <Globe className="h-12 w-12 text-emerald-600" />,
      title: "Global Accessibility",
      description: "Send and receive money across borders with competitive exchange rates."
    },
    {
      icon: <Zap className="h-12 w-12 text-emerald-600" />,
      title: "Instant Transfers",
      description: "Experience lightning-fast transactions between PayEase users."
    },
    {
      icon: <DollarSign className="h-12 w-12 text-emerald-600" />,
      title: "Multiple Currencies",
      description: "Manage and exchange multiple currencies within your PayEase account."
    },
    {
      icon: <Users className="h-12 w-12 text-emerald-600" />,
      title: "Group Payments",
      description: "Split bills and manage shared expenses with ease."
    },
    {
      icon: <Gift className="h-12 w-12 text-emerald-600" />,
      title: "Rewards Program",
      description: "Earn points on transactions and redeem them for exciting rewards."
    },
    {
      icon: <CreditCard className="h-12 w-12 text-emerald-600" />,
      title: "Virtual Cards",
      description: "Create virtual cards for secure online shopping experiences."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-100 flex flex-col">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-white shadow-sm">
        <a className="flex items-center justify-center" href="/">
          <CreditCard className="h-6 w-6 text-emerald-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900 cursor-pointer">PayEase</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Button variant="ghost" className="text-gray-700 hover:text-emerald-700" onClick={() => {navigate("/about")}}>
            About
          </Button>
          <Button variant="ghost" className="text-gray-700 hover:text-emerald-700" onClick={() => {navigate("/contact")}}>
            Contact
          </Button>
          <Button variant="outline" className="text-emerald-600 border-emerald-600" onClick={() => {
              const token = localStorage.getItem("token");
              if (token) {
                navigate("/dashboard");
              } else {
                navigate("/signin");
              }
            }}>
            Login
          </Button>
          <Button className="bg-emerald-600 text-white hover:bg-emerald-700" onClick={() => {
              const token = localStorage.getItem("token");
              if (token) {
                navigate("/dashboard");
              } else {
                navigate("/signup");
              }
            }}>
            Sign Up
          </Button>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 text-center">PayEase Features</h1>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Discover the powerful features that make PayEase the smartest choice for your digital payments and money management.
        </p>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white">
              <CardHeader>
                <CardTitle className="flex flex-col items-center text-center">
                  {feature.icon}
                  <span className="mt-4 text-xl font-semibold">{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to experience the future of payments?</h2>
          <Button className="bg-emerald-600 text-white hover:bg-emerald-700 text-lg px-8 py-3" onClick={() => {
              const token = localStorage.getItem("token");
              if (token) {
                navigate("/dashboard");
              } else {
                navigate("/signup");
              }
            }}>
            Get Started Now
          </Button>
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
            <a className="text-sm text-gray-500 hover:text-emerald-600 hover:underline" href="/contact">
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  )
}