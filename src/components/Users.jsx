import { useEffect, useState } from "react";
import { Button } from "./Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("https://payease-backend-1.onrender.com/api/v1/user/bulk?filter=" + filter)
            .then(response => {
                setUsers(response.data.user);
            });
    }, [filter]);

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <div className="font-bold text-2xl mb-4">
                Users
            </div>
            <div className="mb-4">
                <input 
                    onChange={(e) => setFilter(e.target.value)}
                    type="text" 
                    placeholder="Search Users..." 
                    className="w-full px-4 py-2 border rounded-lg border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 transition"
                />
            </div>
            <div className="space-y-4">
                {users.map(user => (
                    <User key={user._id} user={user} />
                ))}
            </div>
        </div>
    );
};

function User({ user }) {
    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
                <div className="rounded-full h-12 w-12 bg-green-500 flex items-center justify-center text-white font-semibold text-xl mr-4">
                    {user.firstName[0]}
                </div>
                <div className="flex flex-col">
                    <div className="text-lg font-semibold text-gray-800">
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>
            <div>
                <Button 
                    onClick={() => {
                        navigate(`/send?id=${user._id}&name=${user.firstName}`);
                    }} 
                    label="Send Money" 
                />
            </div>
        </div>
    );
}
