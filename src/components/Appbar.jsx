import { useNavigate } from "react-router-dom";
import { CreditCard } from 'lucide-react'
import { Button as Butt} from '@/components/ui/button'


export const Appbar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };

  return (
    <div className="bg-gradient-to-b from-emerald-50 to-gray-100">
      <header className=" px-4 lg:px-6 w-full h-14 flex items-center bg-white shadow-sm">
      <a
            className="flex items-center justify-center"
            onClick={() => {
              navigate("/");
            }}
          >
            <CreditCard className="h-6 w-6 text-emerald-600 cursor-pointer" />
            <span className="ml-2 text-2xl font-bold text-gray-900 cursor-pointer">
              PayEase
            </span>
          </a>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Butt variant="ghost" className="text-gray-700 hover:text-emerald-700" onClick={() => {navigate("/")}} >Features</Butt>
            <Butt variant="ghost" className="text-gray-700 hover:text-emerald-700" onClick={() => {navigate("/")}}>About</Butt>
            <Butt variant="ghost" className="text-gray-700 hover:text-emerald-700" onClick={() => {navigate("/")}}>Contact</Butt>
            <Butt variant="outline" className="text-emerald-600 border-emerald-600 hover:bg-emerald-50" onClick={handleLogout}>Logout</Butt>
          </nav>
        </header>
    </div>
  );
};
