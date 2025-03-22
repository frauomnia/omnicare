import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

    return(
        <>
            <div className="">
                <h1 className="text-center font-bold text-2xl text-[#48752C]">
                    OmniCare
                    <br />
                    <small className="font-normal text-base text-[#48752C]">Healthcare for all</small>
                </h1>
            </div>
            <div className="bg-[#F1E6D0] rounded-lg text-[#48752C] font-bold">
                <div className="navbar max-w-7xl flex-col sm:flex-row m-auto gap-3">
                    <div className="flex-1">
                        <Image
                            src="/images/logo.png"
                            alt="logo"
                            width={50}
                            height={50}
                            className="ml-4"
                        />
                        <Link className="ml-5 mt-5" href='/'>Home</Link>
                        <Link className="ml-5 mt-5" href="/volunteers/register/">Register</Link>
                        <Link className="ml-5 mt-5" href="/admin/">Admin view</Link>
                        <Link className="ml-5 mt-5" href="/sign-in/">Log in</Link>
                    </div>
                </div>
            </div>
        </>
    )
}