import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import axios from "axios";
import { useNavigate } from "react-router-dom"
import { Button as Butt} from '@/components/ui/button'
import { CreditCard } from "lucide-react";


export const Signup = () => {
    const apiUrl = import.meta.env.VITE_BACKEND_URL;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
    <>
    <div className="bg-gradient-to-b from-emerald-50 to-gray-100 h-screen flex justify-center">
    <header className="px-4 lg:px-6 w-full h-14 flex items-center bg-white shadow-sm fixed">
          <a
            className="flex items-center justify-center"
            onClick={() => {
              navigate("/");
            }}
          >
            <CreditCard className="h-6 w-6 text-emerald-600 cursor-pointer" />
            <span className="ml-2 text-2xl font-bold text-gray-900">
              PayEase
            </span>
          </a>
          <nav className="ml-auto flex gap-4 sm:gap-6">
          <Butt variant="ghost" className="text-gray-700 hover:text-emerald-700" onClick={() => {navigate("/")}} >Features</Butt>
            <Butt variant="ghost" className="text-gray-700 hover:text-emerald-700" onClick={() => {navigate("/")}}>About</Butt>
            <Butt variant="ghost" className="text-gray-700 hover:text-emerald-700" onClick={() => {navigate("/")}}>Contact</Butt>
            <Butt
              variant="outline"
              className="text-emerald-600 border-emerald-600 hover:bg-emerald-50"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Login
            </Butt>
            <Butt
              className="bg-emerald-600 text-white hover:bg-emerald-700"
              onClick={() => {
                navigate("/signup");
              }}
            >
              Sign Up
            </Butt>
          </nav>
        </header>
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your infromation to create an account"} />
        <InputBox onChange={e => {
          setFirstName(e.target.value);
        }} placeholder="John" label={"First Name"} />
        <InputBox onChange={(e) => {
          setLastName(e.target.value);
        }} placeholder="Doe" label={"Last Name"} />
        <InputBox onChange={e => {
          setUsername(e.target.value);
        }} placeholder="test@gmail.com" label={"Email"} />
        <InputBox onChange={(e) => {
          setPassword(e.target.value)
        }} placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button onClick={async () => {
            const response = await axios.post(apiUrl +  "/api/v1/user/signup", {
              username,
              firstName,
              lastName,
              password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }} label={"Sign up"} />
        </div>
        <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
      </div>
    </div>
  </div>
    </>
    )
}