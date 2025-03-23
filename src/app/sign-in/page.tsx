import { auth } from "@/lib/auth";
import  { signIn }  from "@/lib/auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";

export default async function SignIn() {
    const session = await auth();
    if(session) redirect('/');

    return(
        <div>
            <Navbar />
            <div>
                <h1 className="text-lg mb-5 mt-5 font-semibold">Sign in</h1>
                {/* <form onSubmit={handleSubmit}> */}
               <form action={
                async(formData: FormData) => {
                    "use server"
                await signIn('credentials', formData)
               }}
               >
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