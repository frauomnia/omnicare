"use client"

import * as React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function SignUp() {

    const handleSubmit = async (event: React.FormEvent) => {
        // on form submission, prevent default
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

            if (response.ok) {
                window.location.href = "/";
            }
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <div>
            <Navbar />
            <div className="flex flex-col w-[50%] items-center text-[#48752C] mt-5 ml-auto mr-auto bg-[#F1E6D0] rounded-xl">
                <h1 className="text-lg mb-5 mt-5 font-semibold">Sign up</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        required
                        name="name" 
                        placeholder="name"
                        className="input input-bordered mb-3">
                    </input>
                    <br/>
                    <input 
                        required
                        name="email" 
                        placeholder="email"
                        className="input input-bordered mb-3">
                    </input>
                    <br/>
                    <input 
                        required
                        name="password" 
                        placeholder="password"
                        className="input input-bordered mb-3">
                    </input>
                    <br/>
                    <button
                    type="submit"
                    className="btn bg-[#48752C] mb-5 ml-auto mr-auto text-[#F1E6D0]">Sign up
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}