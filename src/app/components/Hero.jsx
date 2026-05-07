import React from "react";
import heroBanner from "@/assets/hero-banner.jpg";
import Link from "next/link";
import 'animate.css';

const Hero = () => {
  return (
    <div className="container mx-auto p-4">
      <div
        className="hero min-h-[300px] md:min-h-[500px] lg:min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${heroBanner.src})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <div className="badge badge-warning text-black font-extrabold p-4 rounded-2xl mb-3">🔥 Hot Deals</div>
            <h1 className="mb-5 font-extrabold text-5xl animate__animated animate__zoomIn	animate__slower">
              Summer Sale 50% OFF
            </h1>
            <p className="font-semibold mb-3">Discover the hottest summer essentials at unbeatable prices</p>
            <button>
                <Link href="/products" className="btn btn-xl rounded-xl bg-gradient-to-br from-orange-500 to-yellow-400 text-white font-extrabold border-none outline-none">Shop Now</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
