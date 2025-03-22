"use client"

import Navbar from "../../components/Navbar";

export default function SignIn() {

    // const handleSubmit = async (event: React.FormEvent) => {
    //     event.preventDefault();

    //     const formData = new FormData(event.target as HTMLFormElement);
    //     // transfer a list of key-value pairs into an object
    //     const formValues = Object.fromEntries(formData.entries());

    //     try {
    //         const response = await fetch("api/volunteers/register", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify(formValues)
    //         });

    //         // const result = await response.json();

    //         if(response.ok) {
    //             window.location.href = "/";
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }
    return(
        <div>
            <Navbar />
            <div>
                <h1 className="text-lg mb-5 mt-5 font-semibold">Register as a volunteer</h1>
                <form>
                    <input 
                        required
                        name="user-name" 
                        placeholder="user-name"
                        className="input input-bordered mb-3 w-1/2">
                    </input>
                    <br/>
                    <input 
                        required
                        name="email" 
                        placeholder="emailaddress"
                        className="input input-bordered mb-3 w-1/2">
                    </input>
                    <br/>
                    <input 
                        required
                        name="password" 
                        placeholder="user-name"
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