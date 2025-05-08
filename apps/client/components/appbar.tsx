"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Appbar() {
  const { data: session } = useSession();
  return (
    <div className="bg-transparent fixed flex justify-between items-center p-4 z-50 w-full">
        <div>
            <Image
                src="/image.png"
                alt="Logo"
                width={60}
                height={60}
                className="rounded-full"
            />    
        </div>

        <div className="flex items-center justify-between gap-4 bg-gray-200 p-3 rounded-full px-5 shadow-sm shadow-blue-950">
            <p className="text- font-semibold hover:text-blue-800 cursor-pointer">About Us</p>
            <p className="text- font-semibold hover:text-blue-800 cursor-pointer">Contact Us</p>

            {session ? (
                <div>
                <Button onClick={() => signOut()}>Sign out</Button>
                </div>
            ) : (
                <div>
                <Button onClick={() => signIn()}>Sign in</Button>
                </div>
            )}
        </div>
    </div>
  );
}
