import { login, loginWithGoogle } from "@/lib/firebase/service";
import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

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
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async jwt({token, account, profile, user}: any){
      //if user login with credentials provider
      if (account?.provider === 'credentials'){
        token.email = user.email;
        token.username = user.username;
        token.role = user.role;
      }
      //if user login with google provider
      if(account?.provider === 'google'){
        const data = {
          username: user.name,
          email: user.email,
          type: 'google',
        }

        const result = await loginWithGoogle(data, (result: {status: boolean, data: any}) => {
          if(result.status){
            token.email = result.data.email;
            token.username = result.data.username;
            token.role = result.data.role;
          }
        });
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