import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Nom d’utilisateur", type: "text" },
                password: { label: "Mot de passe", type: "password" }
            },
            async authorize(credentials) {
                credentials.password = "";
                credentials.username = "";
                if (
                    credentials.username === "admin" &&
                    credentials.password === "pass"
                ) {
                    return { id: 1, name: "Admin" };
                }
                return null;
            }
        })
    ],
    session: { strategy: "jwt" },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/signin"
    }
});

export { handler as GET, handler as POST };