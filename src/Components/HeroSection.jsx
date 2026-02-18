import { useEffect,useState } from "react";
import {ArrowDown} from  "lucide-react"
export const HeroSection =() =>{
    return (
    <section  
    // id="hero" 
    // "className = relative min-h-screen flex-col items-center justify-center px-15"
    // >

    id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20"
    >
    <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                <span className="opacity-0 animate-fade-in-delay-1 ">Hello,  </span>
                 <span className="opacity-0 animate-fade-in-delay-2"> Welcome to my Portfolio I'm  </span>
                <span className=" text-primary opacity-0 animate-fade-in-delay-4"> 
                    {" "}
                      Snehal </span>
                <span className=" text-primary ml-2 opacity-0 animate-fade-in-delay-4"> 
                    {" "}Farkade</span>
            </h1>

            <br/>
            <p className="text-lg  text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4 ">
                I create steallar web experience with modern technologies.
                <span className="text-primary">I am a Microsoft Certified Candidate in Azure Fundamentals </span>
                Specializing in front-end development, I build interfaces that are both beautiful and functional.
                I also have an experience of using tools like Power Bi, figma & canva. Have a knowledge of different Ai tools.
            </p>

        </div >
        <div className="pt-8 opacity-0 animate-fade-in-delay-4 "> 
        <a href="#projects" className="cosmic-button">
            View My Work
        </a>
        </div>
         
    </div>
    <div className="absolute  bottom-8 left-1/2 transform-translate-x-1/2 flex  flex-col items-center animate-bounce">
    <span className="text-sm text-muted-foreground mb-2">
        Scroll
    </span>
    <ArrowDown className="h-6 w-6 text-primary"/>
    </div>
    </section>
    );
};