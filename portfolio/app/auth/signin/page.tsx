"use client";
import { getCsrfToken, signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import { cn } from "@/lib/utils";
import {Label} from "../../admin/ui/Label";
import {Input} from "@/app/blog/ui/Input";

export default function SignInPage() {
    const [csrfToken, setCsrfToken] = useState("");
    const [userInfo, setUserInfo] = useState({ username: "", password: "" });
    const { data: session } = useSession();
    const router = useRouter();

    useEffect(() => {
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
    <div className="shadow-input mx-auto mt-28 w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
            Connexion administrateur
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
            Entrez les informations pour vous connecter
        </p>
        <form className="my-8" onSubmit={handleSubmit}>
            <input name="csrfToken" type="hidden" value={csrfToken} />
            <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Nom d&apos;utilisateur</Label>
                <Input id="email" name="username" placeholder="Nom d'utilisateur" type="text" required value={userInfo.username}
                       onChange={(e) =>
                           setUserInfo((prev) => ({ ...prev, username: e.target.value }))
                       }/>
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" name="password" placeholder="••••••••" type="password" required value={userInfo.password}
                       onChange={(e) =>
                           setUserInfo((prev) => ({ ...prev, password: e.target.value }))
                       } />
            </LabelInputContainer>

            <button
                className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
                type="submit"
            >
                Se connecter &rarr;
                <BottomGradient />
            </button>
            <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent dark:via-neutral-700" />
        </form>
    </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
            <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
        </>
    );
};

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};
