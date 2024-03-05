"use server";

import { auth } from "@/lib/auth";
import { ResponseMessage } from "@/model/interface-server";

export default async function getAllEmployeesAction(id:string) {
    const session = await auth();
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/user/${id}`;
        const res = await fetch(url,{
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${session?.accessToken}`
            }
        });
        const resMsg: ResponseMessage = await res.json().then((value)=> {return value;});

        if (res.status === 200) {
            return {
                status: res.status,
                message: resMsg.message
            };
        } else {
            return {
                status: res.status,
                detail: resMsg.detail
            };
        }
    } catch (e) {
        return e;
    }
}