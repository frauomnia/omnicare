"use client"

import * as React from "react";
import Image from "next/image";

export default function Footer() {

    return(
        // source: https://daisyui.com/components/footer/
        <footer className="footer mt-20 sm:footer bg-[#F1E6D0] font-bold rounded-lg text-[#48752C] p-10">
            <aside>
            <Image
                src="/images/logo.png"
                alt="logo"
                width={50}
                height={50}
                className="ml-4"
            />
            <p className="text-xl">
            OmniCare
            <br />
            Healthcare for all
            </p>
        </aside>
        <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Volunteering</a>
            <a className="link link-hover">Medical Advice</a>
            <a className="link link-hover">Healthcare systems</a>
        </nav>
        <nav>
            <h6 className="footer-title">Program</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </nav>
        </footer>
    )
}