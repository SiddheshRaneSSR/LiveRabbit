import { NextRequest } from "next/server";

export async  function post(req:NextRequest){

    const body = await req.json();
    const email = body.email;
    const password = body.password;

    console.log(body);


}