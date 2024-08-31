import { jwtDecode } from "jwt-decode";
import { useEffect , useState } from "react";



export default function GreetingUser() {

    const [user , setUser] = useState(null);
    const [loading , setLoading] = useState(true);
    const token = localStorage.getItem("token");

    const userId = jwtDecode(token).userId;

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(`http://localhost:3000/api/v1/user/bulk?filter=`);
                const data = await response.json();

                const user = data.user.find(u => u._id === userId);

                if(user) {
                    setUser(user);
                }else{
                    console.warn("User not found in the database")
                }
            } catch(e){
                console.error("failed to fetch user data ", e);
            } finally {
                setLoading(false);
            }
        }

        fetchUser();
    }, [userId])

    // console.log(user);

    if(loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="bg-white p-4 rounded-lg mb-4 inline-block">
            <h1 className="text-3xl font-bold text-gray-800">
                Hello, <span className="text-green-500">{user.firstName.toUpperCase()}</span>
            </h1>
        </div>
    );
}