"use client"

import { redirect } from "next/navigation";
// import { useSession } from "next-auth/react";

export default function SignUp() {

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        // transfer a list of key-value pairs into an object
        const formValues = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formValues)
            });

            // const result = await response.json();

            if(response.ok) {
                redirect("/");
            }
        }  
            catch (error) {
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