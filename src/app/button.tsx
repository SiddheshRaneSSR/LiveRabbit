"use client"

import Signup from "./(auth)/signup/page";

import { useRouter } from "next/navigation";

  

export function Buttoncomponent(){


    const router = useRouter(); // Hook for navigation

    const handleGetStarted = () => {
        router.push("/signup"); // Redirect to the signup page
    };


    function handler(){
        <Signup />
        console.log("button has been clicked");
    }

    return <button
    onClick={handleGetStarted}
  type="submit"
  className="w-full rounded-md bg-indigo-600 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
>
  Get Started
</button>
}