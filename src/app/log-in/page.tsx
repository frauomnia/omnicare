"use client"
import Navbar from "../../components/Navbar";

export default function LoginPage() {

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const formData = new FormData(event.target as HTMLFormElement);
        // transfer a list of key-value pairs into an object
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
                <h1 className="text-lg mb-5 mt-5 font-semibold">Log in</h1>
                <form onSubmit={handleSubmit}>
                    <input 
                        required
                        name="userName" 
                        placeholder="user name or email"
                        className="input input-bordered mb-3 w-1/2">
                    </input>
                    <br/>
                    <input 
                        required
                        name="password" 
                        placeholder="password"
                        className="input input-bordered mb-3 w-1/2">
                    </input>
                    <br />
                    <button
                    type="submit"
                    className="btn">Submit
                    </button>
                </form>
            </div>
        </div>
    )
}