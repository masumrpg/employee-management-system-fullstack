"use server";

import { auth } from "@/lib/auth";
import { ResponseMessage } from "@/model/interface-server";

export default async function editEmployeeDetailsAction(id:string, formData:any) {
    const session = await auth();
    const jsonData = JSON.stringify(formData);
    const url = `${process.env.NEXT_PUBLIC_API_URL}/user/detail/${id}`;

    try {
        const res = await fetch(url,{
            method: "PATCH",
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${session?.accessToken}`,
                "Content-Type": "application/json"
            },
            body: jsonData
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