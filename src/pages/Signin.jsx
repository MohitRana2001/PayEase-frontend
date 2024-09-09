import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { CreditCard } from "lucide-react";
import { Button as Butt} from '@/components/ui/button'

export const Signin = () => {
  const apiUrl = import.meta.env.VITE_BACKEND_URL;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignInClick = async () => {
    try {
      const response = await axios.post(
        apiUrl +  "/api/v1/user/signin",
        {
          username: email,
          password: password,
        }
      );
      console.log(response.data);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      } else {
        setError("Invalid Credentials");
      }
    } catch (e) {
      setError("Invalid Credentials");
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-gray-100">
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
        <div className="h-screen flex justify-center">
          <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
              <Heading label={"Sign in"} />
              <SubHeading
                label={"Enter your credentials to access your account"}
              />
              <InputBox
                placeholder="test@gmail.com"
                label={"Email"}
                onChange={(e) => setEmail(e.target.value)}
              />
              <InputBox
                placeholder="123456"
                label={"Password"}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <div className="text-red-500">{error}</div>}
              <div className="pt-4">
                <Button label={"Sign in"} onClick={handleSignInClick} />
              </div>
              <BottomWarning
                label={"Don't have an account?"}
                buttonText={"Sign up"}
                to={"/signup"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
