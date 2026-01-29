import { authOptions } from "@/lib/auth/auth-options";
import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

//! короткий варіант запису
// const handler = NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
// });

//! Розширений варінат запису
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
