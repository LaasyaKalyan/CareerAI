"use client";
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from "next/image";
import { Button } from "./ui/button";
import { use } from 'react';

const HeroSection = () => {

const imageRef = useRef(null);

useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollThreshold = 100;

        if (scrollPosition > scrollThreshold){
            imageElement.classList.add("scrolled")
        }
        else {
            imageElement.classList.remove("scrolled");
        }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };

}, []);

    return  (
    <section className="w-full pt-36 md:pt-48 pb-10">
        <div className="space-y-6 text-center">
            <div className="space-y-6 mx-auto">
                <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
                    Your <span style={{ color: "#6FAFAF" }}> Career Coach </span>for
                    <br />
                    Professional Success
                </h1>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                    We help you to build a successful career by providing you with the best tools and resources to help you succeed.
                    <br />
                    With Personalized Guidance, Interview Prep, and AI-Powered Tools for job search, we will help you land your dream job.
                </p>
            </div>
            <div className="flex justify-center space-x-4">
                <Link href="/dashboard">
                    <Button size="lg" className="px-8 justify-center items-center">
                        Get Started
                    </Button>
                </Link>
            </div>
            <div className="hero-image-wrapper mt-5 md:mt-0">
                <div ref={imageRef} className="hero-image">
                    <Image
                        src={"/banner1.png"}
                        width={1280}
                        height={720}
                        alt="Banner ElevateU"
                        className="rounded-lg shadow-2xl border mx-auto"
                        priority
                    />
                </div>
            </div>
        </div>
    </section>
    );
};

export default HeroSection;
