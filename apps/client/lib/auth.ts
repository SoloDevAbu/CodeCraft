import { prisma as db } from "@repo/db";
import { Account, Profile, User } from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string
        }),
    ],
    session: {
        strategy: 'jwt',
        encryption: false
    },

    callbacks: {

        async jwt({ token, account, profile }: { token: any; account: Account; profile: Profile }) {
            try {
                if (account?.provider && profile) {
                    // For new sign-ins, check if user exists in database
                    const user = await db.user.findFirst({
                        where: {
                            email: profile.email ?? undefined
                        },
                        select: {
                            id: true,
                            email: true
                        }
                    });

                    if (user) {
                        // Return token with database user information
                        return {
                            ...token,
                            id: user.id.toString(),
                        };
                    }
                }
                
                return token;
            } catch (error) {
                console.error("JWT callback error:", error);
                return token;
            }
        },

        async session({ session, token }: { session: any; token: any }) {
            try {
                return {
                    ...session,
                    user: {
                        ...session.user,
                        id: token.id,
                    }
                };
            } catch (error) {
                console.error("Session callback error:", error);
                return session;
            }
        },
        async signIn({ account, profile }:
            {
                user?: User | null, account: Account | null, profile?: Profile | null

            }) {
            try {
                if (!account || !profile) return false;
                if (account.provider === 'github') {
                    const githubProfile = profile as { id?: number; email?: string; name?: string };

                    if (!githubProfile.id) return false;
                    const existingUser = await db.user.findUnique({
                        where: {
                            email: githubProfile.email as string
                        },
                        select: {
                            id: true,
                            email: true
                        }
                    });

                    if (!existingUser) {
                        await db.user.create({
                            data: {
                                name: githubProfile.name,
                                email: githubProfile.email as string,
                                createdAt: new Date(),
                                updatedAt: new Date(),
                            }
                        });
                    }
                }
                return true;

            } catch (error) {
                console.error("Authentication error:", error);
                return false;
            }
        },
    },
    secret: process.env.NEXTAUTH_SECRET || "ns4yyeTQHzH5lB7wlBdoKP7wnqdxyuoz"
};