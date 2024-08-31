import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { useState , useEffect } from "react";
import GreetingUser from "../components/GreetingUser";


export const Dashboard = () => {

    const [ balance , setBalance ] = useState(null);
    const [ loading , setLoading ] = useState(true);
    const token = localStorage.getItem("token");

    useEffect(() => {
        async function fetchBalance() {
            try {
                const response = await fetch("http://localhost:3000/api/v1/account/balance", {
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

    return (
        <div>
            <Appbar />
            <div className="m-8">
                <GreetingUser />
                <Balance value={balance} />
                <Users />
            </div>
        </div>
    )
}