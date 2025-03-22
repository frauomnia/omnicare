"use client"

import { auth } from "@/lib/auth";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function SignIn() {
    // const { data: session } = useSession();
    
    // if (session) {
    //     redirect("/")
    // }

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        // transfer a list of key-value pairs into an object
        const formValues = Object.fromEntries(formData.entries());

        try {
            await signIn("credentials", formValues);
            await redirect("/");
            } catch (error) {
            console.error(error);
        }
    }
    return(
        <div>
            <div>
                <h1 className="text-lg mb-5 mt-5 font-semibold">Register as a volunteer</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        required
                        name="name" 
                        placeholder="name"
                        className="input input-bordered mb-3 w-1/2">
                    </input>
                    <br/>
                    <input 
                        required
                        name="email" 
                        placeholder="email"
                        className="input input-bordered mb-3 w-1/2">
                    </input>
                    <br/>
                    <input 
                        required
                        name="password" 
                        placeholder="password"
                        className="input input-bordered mb-3 w-1/2">
                    </input>
                    <br/>
                    <button
                    type="submit"
                    className="btn">Submit
                    </button>
                </form>
            </div>
        </div>
    )
}