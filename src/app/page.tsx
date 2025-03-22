"use client"

import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  
  return (
   <div>
      <Navbar />
      <div className="flex flex-col">
      <div className="btn w-[30%] ml-auto mr-auto">
        <Link className="ml-5 mt-5" href="/volunteers/">Find your doctor</Link>
      </div>
      <div className="carousel carousel-center bg-[#F1E6D0] rounded-box w-[70%] space-x-4 p-4 mt-8 ml-auto mr-auto">
        <div className="carousel-item w-[100%] relative">
          <div className="absolute">
            <p>Our mission</p>
            <p>Our goal is to help refugees find medical volunteers.</p>
          </div>
          <img
            src="/images/avocado.jpg"
            className="rounded-box" />
        </div>
        <div className="carousel-item w-[100%] relative">
        <div className="absolute">
        <p>Our mission</p>
            <p>Our goal is to help break language barrier between patient and medical care provider.</p>
          </div>
          <img
            src="/images/one-finger.jpg"
            className="rounded-box" />
        </div>
        <div className="carousel-item w-[100%] relative">
        <div className="absolute">
        <p>Our mission</p>
            <p>Our goal is to help break cultural barrier between patient and medical care provider.</p>
          </div>
          <img
            src="/images/two-thumbs.jpg"
            className="rounded-box" />
        </div>
        <div className="carousel-item w-[100%] relative">
        <div className="absolute">
        <p>Our mission</p>
            <p>Our goal is to help refugees regain power with medical care.</p>
          </div>
          <img
            src="/images/power.jpg "
            className="rounded-box" />
        </div>
        <div className="carousel-item w-[100%] relative">
        <div className="absolute">
            <p>Our mission</p>
            <p>Our goal is to help spread peace and love.</p>

          </div>
          <img
            src="/images/peace.jpg"
            className="rounded-box" />
        </div>
      </div>
      </div>
     
   </div>
  );
}
