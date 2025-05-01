import SignIn from "./sign-in";
import SignOut from "./sign-out";
import { useSession } from "next-auth/react";

export default function AppBar() {
    const { data: session } = useSession();
    
    return (
        <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <h1 className="text-2xl">My App</h1>
        <div>
            {session ? (
            <>
                <span className="mr-4">Welcome, {session.user?.name}</span>
                <SignOut />
            </>
            ) : (
            <SignIn />
            )}
        </div>
        </div>
    );
}