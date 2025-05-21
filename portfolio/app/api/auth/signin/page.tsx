"use client";
import { getCsrfToken, signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";

export default function SignInPage() {
    const [csrfToken, setCsrfToken] = useState("");
    const [userInfo, setUserInfo] = useState({ username: "", password: "" });
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
        // Si déjà connecté, redirige vers admin
        if (session) router.push("/admin");
    }, [session, router]);

    useEffect(() => {
        async function fetchCsrf() {
            const res = await fetch("/api/auth/csrf");
            const data = await res.json();
            setCsrfToken(data.csrfToken);
        }
        fetchCsrf();
    }, []);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const res = await signIn("credentials", {
            redirect: false,
            username: userInfo.username,
            password: userInfo.password
        });
        if (res?.error) {
            alert("Nom d’utilisateur ou mot de passe incorrect");
        } else {
            router.push("/admin");
        }
    }

    return (
        <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
            <h1>Connexion Admin</h1>
            <form onSubmit={handleSubmit}>
                <input name="csrfToken" type="hidden" value={csrfToken} />
                <label>
                    Nom d’utilisateur
                    <input
                        type="text"
                        value={userInfo.username}
                        onChange={(e) =>
                            setUserInfo((prev) => ({ ...prev, username: e.target.value }))
                        }
                        required
                    />
                </label>
                <br />
                <label>
                    Mot de passe
                    <input
                        type="password"
                        value={userInfo.password}
                        onChange={(e) =>
                            setUserInfo((prev) => ({ ...prev, password: e.target.value }))
                        }
                        required
                    />
                </label>
                <br />
                <button type="submit">Se connecter</button>
            </form>
        </div>
    );
}