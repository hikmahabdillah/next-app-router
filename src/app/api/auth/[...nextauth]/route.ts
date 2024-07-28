import { login } from "@/lib/firebase/service";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      name: "Credentials",
      credentials: {
        email: {label: "Email", type: "email"},
        password: {label : "Password", type: "password"},
      },
      async authorize(credentials){
        const {email, password} = credentials as {
          email: string,
          password: string,
        };
        const user: any = await login({email});
        if(user){
          // compare password at input field and password at database
          const passwordConfirm = await compare(password, user.password) ;
          if(passwordConfirm){
            return user
          }
          return null;
        }else{
          return null;
        }
      },
    })
  ],
  callbacks: {
    async jwt({token, account, profile, user}: any){
      if (account?.provider === 'credentials'){
        token.email = user.email;
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },

    async session({session, token}: any){
      if("email" in token){
        session.user.email = token.email;
      }
      if("username" in token){
        session.user.username = token.username;
      }
      if("role" in token){
        session.user.role = token.role;
      }
      return session;
    }
  }
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}