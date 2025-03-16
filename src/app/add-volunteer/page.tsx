"use client"
import Navbar from "../../components/Navbar";

export default function AddVolunteerPage() {

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        const formValues = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("api/volunteers/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formValues)
            });

            // const result = await response.json();

            if(response.ok) {
                window.location.href = "/";
            }
        } catch (error) {
            console.error(error);
        }
    }
    return(
        <div>
            <Navbar></Navbar>
            <div>
                <h1 className="text-lg mb-5 mt-5 font-semibold">Register as a volunteer</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        required
                        name="first_name" 
                        placeholder="first name"
                        className="input input-bordered mb-3 w-1/2">
                    </input>
                    <br/>
                    <input 
                        required
                        name="last_name" 
                        placeholder="last name"
                        className="input input-bordered mb-3 w-1/2">
                    </input>
                    <br/>
                    <input 
                        required
                        name="first_language" 
                        placeholder="first language"
                        className="input input-bordered mb-3 w-1/2">
                    </input>
                    <br/>
                    <input 
                        required
                        name="home_country" 
                        placeholder="home country"
                        className="input input-bordered mb-3 w-1/2">
                    </input>
                    <br/>
                    <input 
                        required
                        name="country_residence" 
                        placeholder="country of residence"
                        className="input input-bordered mb-3 w-1/2">
                    </input>
                    <br/>
                    <input 
                        required
                        name="place_employment" 
                        placeholder="place of employment"
                        className="input input-bordered mb-3 w-1/2">
                    </input>
                    <br/>
                    <input 
                        required
                        name="medical_speciality" 
                        placeholder="medical speciality"
                        className="input input-bordered mb-3 w-1/2">
                    </input>
                    <br/>
                    <button
                    type="submit"
                    className="btn">
                    </button>
                </form>
            </div>
        </div>
    )
}