"use client"



export function Buttoncomponent(){

    function handler(){
        console.log("button has been clicked");
    }

    return <button
    onClick={handler}
  type="submit"
  className="w-full rounded-md bg-indigo-600 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300"
>
  Sign In
</button>
}