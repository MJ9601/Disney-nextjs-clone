import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { db } from "../../../firebaseConfig/firebaseConfig";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  runTransaction,
  updateDoc,
  where,
} from "firebase/firestore";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_ID),
      clientSecret: String(process.env.GOOGLE_SECRECT),
      authorization: {
        params: {
          prompt: "consent",
          response_type: "code",
          access_type: "offline",
        },
      },
    }),
  ],
  adapter: FirebaseAdapter({
    db: db,
    collection: collection,
    query: query,
    getDocs: getDocs,
    where: where,
    limit: limit,
    doc: doc,
    getDoc: getDoc,
    addDoc: addDoc,
    updateDoc: updateDoc,
    deleteDoc: deleteDoc,
    runTransaction: runTransaction,
  }),
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
});
