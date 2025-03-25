import { auth } from "@/lib/auth";
import  { signIn }  from "@/lib/auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const SignInPage = async () => {
    
    const session = await auth();
    if(session) redirect('/');

    return(
        <div>
            <Navbar />
            <div className="flex flex-col w-[50%] items-center text-[#48752C] mt-5 ml-auto mr-auto bg-[#F1E6D0] rounded-xl">
                <p className="text-lg mb-5 mt-5 font-semibold">Sign in</p>
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
                    className="btn bg-[#48752C] mb-5 ml-auto mr-auto text-[#F1E6D0]">Sign in
                    </button>
                </form>
                <div className="mb-4 mr-14">
                    <p> 
                    New here? 
                    <Link className="underline ml-2 text-base font-bold text-[#48752C]" href="/sign-up/">Sign up</Link>
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SignInPage;