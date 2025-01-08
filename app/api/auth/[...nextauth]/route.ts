import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            credentials:{
                username: {label:"username", type:"text", placeholder:"username"},
                password: {label:"password", type:"password", placeholder:"password"}
            },
            async authorize(credentials, req){

                return{
                    username: "alxn787",
                    id : "1",
                    email : "alxn787@gmail.com"
                }
            }
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
});

export const GET = handler;
export const POST = handler;