"use client"

import * as React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function AddVolunteerPage() {

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        // transfer a list of key-value pairs into an object
        const formValues = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("/api/volunteers/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formValues)
            });

            if(response.ok) {
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
                <h1 className="text-lg mb-5 mt-5 font-semibold">Register as a volunteer</h1>
                <form onSubmit={handleSubmit} 
                className="">
                    <input 
                        required
                        name="first_name" 
                        placeholder="first name"
                        className="input input-bordered mb-3">
                    </input>
                    <br/>
                    <input 
                        required
                        name="last_name" 
                        placeholder="last name"
                        className="input input-bordered mb-3">
                    </input>
                    <br/>
                    <input 
                        required
                        name="first_language" 
                        placeholder="first language"
                        className="input input-bordered mb-3">
                    </input>
                    <br/>
                    <input 
                        required
                        name="home_country" 
                        placeholder="home country"
                        className="input input-bordered mb-3">
                    </input>
                    <br/>
                    <input 
                        required
                        name="country_residence" 
                        placeholder="country of residence"
                        className="input input-bordered mb-3">
                    </input>
                    <br/>
                    <input 
                        required
                        name="place_employment" 
                        placeholder="place of employment"
                        className="input input-bordered mb-3">
                    </input>
                    <br/>
                    <input 
                        required
                        name="medical_speciality" 
                        placeholder="medical speciality"
                        className="input input-bordered mb-3">
                    </input>
                    <br/>
                    <input 
                        required
                        name="clinic_address" 
                        placeholder="clinic address"
                        className="input input-bordered mb-3">
                    </input>
                    <br/>
                    <button
                    type="submit"
                    className="btn bg-[#48752C] mb-5 ml-auto mr-auto text-[#F1E6D0]">Submit
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    )
}