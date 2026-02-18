import { useEffect,useState } from "react";
import {Code,User,Briefcase} from "lucide-react";

export const AboutSection = () =>{
    return (
    <section 
    id="about" 
    className ="py-24 px-24 relative">

{" "}
<div className="container mx-auto max-w-5xl">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        About <span className="text-primary"> Me  </span>
    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <div className="sapce-y-6">
<h3 className ="text-2xl font-bold mb-4 text-purple-900">

    Passionate Web Developer, UI/UX Designer & Data Analyst</h3>
   
<p className="text-muted-foreground">
    With experience of 3 Internships,1 in Pugarch as a trainee intern on Web Development ,other-one at Kasnet Technologies on Data Analyst,
    and 1 at HUBAHU diy where i got knowledge about digital marketing . 
</p>
<br></br>
<p className="text-muted-foreground">
     Here i worked on SEO optimization,Canva,Figma,Prompt generation,also worked with various AI tools like runwayMl,
    Leonardo,Urbansuggest,etc...  I am specialize in creating responsive,accessible, and performant web applications using modern technologies.
     </p>

  
   

    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
        <a href="#contact" className="cosmic-button"> 
           {" "}
            Get In Touch
            </a>
             <a href="https://drive.google.com/file/d/1ND_1xDrAj5lJR_gxeW1P2mw-oNO8p2XP/view?usp=drivesdk" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 "> 
           {" "}
           Download CV
            </a>
            </div>
</div>

<div className="grid grid-cols-1 gap-6">

       <div className="gradient-border p-6 card-hover">
           <div className="flex items-start gap-4">
             <div className="p-3 rounded-full bg-primary/10">
        < Code className="h-6 w-6 text-primary"/>
        </div>
        <div className="text-left ">
            <h4 className="font-semibold text-lg">Web Development</h4>
            <p className="text-muted-foreground">
                Creating responsive websites and web applications with modern frameworks.
            </p>
        </div>
    </div>
</div>


<div className="gradient-border p-6 card-hover">
     <div className="gradient-border p-6 card-hover">
           <div className="flex items-start gap-4">
             <div className="p-3 rounded-full bg-primary/10">
        < User className="h-6 w-6 text-primary"/>
        </div>
         <div className="text-left ">
            <h4 className="font-semibold text-lg">UI/UX Designs & Data Analysis</h4>
            <p className="text-muted-foreground">
               Designing intuitive user interfaces and seamless user experiences.
               Also create a Analytics  POWER BI Dashboard from data for users.
            </p>
        </div>
        
    </div>
</div>
</div> 
   
     
<div className="gradient-border p-6 card-hover">
     <div className="gradient-border p-6 card-hover">
           <div className="flex items-start gap-4">
             <div className="p-3 rounded-full bg-primary/10">
        < Briefcase className="h-6 w-6 text-primary"/>
        </div>
         <div className="text-left ">
            <h4 className="font-semibold text-lg">Education</h4>
            <p className="text-muted-foreground">
              A 3rd year b.tech student Pursuing B.tech degree from priyadarshini Bhagwati College Of Engineering.
             Completed HSC from Vidarbha Bunyadi Junior College.
             Completed SSC from St.Vincent High School.
            </p>
        
        </div>
    </div>
</div>
</div> 
    
  

</div>



</div>
 </div>
 
   
    </section>
    );
};