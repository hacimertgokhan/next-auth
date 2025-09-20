"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
    const { data: session, status } = useSession();

    return (
        <nav className="flex justify-between items-center p-4 text-white">
            <h1 className="text-xl font-bold">1# Task</h1>

            {status === "loading" ? (
                <p>Loading...</p>
            ) : session ? (
                <div className="flex items-center gap-4">
                    <span>👋 {session.user?.name}</span>
                    <button
                        onClick={() => signOut()}
                        className="bg-red-500/40 px-2 text-xs py-1 rounded"
                    >
                        Çıkış Yap
                    </button>
                </div>
            ) : (
                <button
                    onClick={() => signIn("auth0")}
                    className="bg-blue-500/40 px-2 text-xs py-1 rounded"
                >
                    Giriş Yap
                </button>
            )}
        </nav>
    );
}
