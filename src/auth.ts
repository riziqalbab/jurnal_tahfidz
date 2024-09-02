import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import db from "./db/db";
import {
  accounts,
  sessions,
  users,
  verificationTokens,
} from "@/db/schema/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  session: {
    strategy: "jwt",
  },
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
  }),
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        (token.nis = user.nis), (token.kelas = user.kelas);
      }
      return token;
    },
    session({ session, token }) {
      (session.user.id = token.id as string),
        (session.user.nis = token.nis as string);
      session.user.kelas = token.kelas as string;
      return session;
    },
  },
});
