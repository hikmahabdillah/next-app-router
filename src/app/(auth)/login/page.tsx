"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import {useState} from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const {push} = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async(e: any) => {
    setError("");
    setIsLoading(true);
    e.preventDefault();
    try{
      const res = await signIn("credentials", {
        redirect: false,
        email: e.target.email.value,
        password: e.target.password.value,
        callbackUrl: '/dashboard'
      })
      if(!res?.error){
        e.target.reset();
        setIsLoading(false);
        push("/dashboard");
      } else{
        setIsLoading(false);
        if(res.status === 401){
          setError("Username or Password is incorrect");
        }
      }
    }catch(e){  
      console.log(e)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full h-full justify-center px-6 my-12">
        {/* <!-- Row --> */}
        <div className="w-full h-auto lg:h-[33rem] max-w-lg xl:w-3/4 lg:w-11/12 lg:max-w-4xl flex">
          {/* <!-- Col --> */}
          <div
            className="w-full bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-xl"
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/aa/d3/d6/aad3d691d8d8592bb8dd240de636f6a9.jpg')" }}
          ></div>
          {/* <!-- Col --> */}
          <div className="w-full h-full flex flex-col justify-center items-center lg:w-1/2 bg-white p-5 rounded-xl lg:rounded-l-none">
            <h3 className="pt-4 font-bold text-2xl text-center text-neutral-800">Welcome Back!</h3>
            {error !== '' && <p className="text-red-600">{error}</p>}
            <form className="w-full px-8 pt-6 mb-4 bg-white rounded" onSubmit={(e) => handleLogin(e)}>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="email"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700  border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
                {/* <p className="text-xs italic text-red-500">Please choose a password.</p> */}
              </div>
              <div className="mb-4">
                <input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
                <label className="text-sm text-neutral-800" htmlFor="checkbox_id">
                  Remember Me
                </label>
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit" disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Sign In"}
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-sm text-center text-neutral-800">
                Don{"'"}t have an account ? {" "}
                <Link
                  className="inline-block font-semibold underline-offset-1 text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="/register"
                >
                  Sign Up
                </Link>
              </div>
              {/* <div className="text-center">
                <Link
                  className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  href="#"
                >
                  Forgot Password?
                </Link>
              </div> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
