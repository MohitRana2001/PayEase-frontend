import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useState , useEffect } from "react";
import GreetingUser from "../components/GreetingUser";
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { CreditCard, Search, LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

export const Dashboard = () => {

    const navigate = useNavigate();
    const [ balance , setBalance ] = useState(null);
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('')
    const [ loading , setLoading ] = useState(true);
    const token = localStorage.getItem("token");

    useEffect(() => {
        axios.get("https://payease-backend-1.onrender.com/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user);
            });
    }, [filter]);

    useEffect(() => {
        async function fetchBalance() {
            try {
                const response = await fetch("https://payease-backend-1.onrender.com/api/v1/account/balance", {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                });
    
                if(!response.ok) {
                    throw new Error(response.statusText);
                }
    
                const data = await response.json();
                setBalance(data.balance);
            } catch (e) {
                console.error(e);
            } finally {
                setLoading(false);
            }
        }

        fetchBalance();
    }, []);

    if(loading) {
        return <div>Loading...</div>
    }
    const filteredUsers = users.filter(user =>
        user.name && user.name.toLowerCase().includes(filter.toLowerCase())
    )


    return (
        <div>
            {/* <Appbar />
            <div className="m-8">
                <GreetingUser />
                <Balance value={balance} />
                <Users />
            </div> */}
            <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <CreditCard className="h-6 w-6 text-emerald-600 mr-2" />
            <span className="text-2xl font-bold text-gray-900 cursor-pointer">PayEase</span>
          </a>
          <nav className="flex items-center space-x-4">
            <a href="/features" className="text-gray-600 hover:text-emerald-600">Features</a>
            <a href="/about" className="text-gray-600 hover:text-emerald-600">About</a>
            <a href="/contact" className="text-gray-600 hover:text-emerald-600">Contact</a>
            <Button variant="outline" className="text-emerald-600 border-emerald-600">
              <LogOut className="h-4 w-4 mr-2" />
              Logout
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Hello, <span className="text-emerald-600">GUEST</span></h1>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Your Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-emerald-600">Rs {balance.toFixed(2)}</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="flex space-x-4">
              <Button className="bg-emerald-600 text-white hover:bg-emerald-700" onClick={() => navigate("/send")}>Send Money</Button>
              <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                Request Money
              </Button>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-white mt-8">
          <CardHeader>
            <CardTitle>Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-4">
              <Search className="text-gray-400" />
              <Input
                type="text"
                placeholder="Search Users..."
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="flex-grow"
              />
            </div>
            <ul className="space-y-4">
              {filteredUsers.map(user => (
                <li key={user.id} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Avatar className="bg-emerald-100 text-emerald-600">
                      <AvatarFallback>{user.firstName[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <span className="text-gray-900">{user.name}</span>
                  </div>
                  <Button variant="secondary" onClick={() => {
                        navigate(`/send?id=${user._id}&name=${user.firstName}`);
                    }}>Send Money</Button>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
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

        </div>
    )
}