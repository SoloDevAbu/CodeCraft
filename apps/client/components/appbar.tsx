"use client"
import { useSession, signIn, signOut } from "next-auth/react";

export default function Appbar() {
    const { data: session } = useSession();
    return (
        <div>
            {session ? (
                <div>
                    <p>Signed in as {session.user?.name}</p>
                    <button onClick={() => signOut()}>Sign out</button>
                </div>
            ) : (
                <div>
                    <p>Not signed in</p>
                    <button onClick={() => signIn()}>Sign in</button>
                </div>
            )}
        </div>
    )
}