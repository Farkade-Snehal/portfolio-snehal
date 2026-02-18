import { Mail,MapPin,Phone,Instagram,Linkedin, Send} from "lucide-react";
import { cn } from "@/lib/utils";


// import { useToast } from "@/hooks/use-toast";

export const ContactSection =() =>{
    // const { toast}=useToast();

    const handleSubmit = (e) =>{
        e.preventDefault()
        setTimeout(()=>{
            //    toast({
            //     title:"Message sent !",
            //     description:"Thankyou for your message. I'll get back to you soon.",
            //    });                
        },1500)
    }
    return (
        <section
        id="contact"
         className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">

            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In <span className="text-primary">Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Have a project in mind or want to collaborate and want  beautiful UI/UX or data Analysis ? 
                Feel free to reach out.
                I'm always open to discussing new opportunities.

            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
<div className="space-y-8">
    <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
<div className="space-y-6 justify-center">
    <div  className="flex items-start space-x-4">
        <div className="p-3 rounded-full bg-primary/10">
        <Mail className="h-6 w-6 text-primary"/> {" "}
        </div>
<div >
<h4 className="font-medium "> Email</h4>
<a href="mailto:snehalfarkade23@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"
>
     snehalfarkade23@gmail.com
</a>
</div>
    </div>
    <div  className="flex items-start space-x-4">
        <div className="p-3 rounded-full bg-primary/10">
        <Phone className="h-6 w-6 text-primary"/> {" "}
        </div>
<div >
<h4 className="font-medium"> Phone</h4>
<a href="tel:+91 9518375931" className="text-muted-foreground hover:text-primary transition-colors"
>
    +91 9518375931
</a>
</div>
    </div>
    <div  className="flex items-start space-x-4">
        <div className="p-3 rounded-full bg-primary/10">
        <MapPin className="h-6 w-6 text-primary"/> {" "}
        </div>
<div >
<h4 className="font-medium">    Location</h4>
<a href="mailto:snehalfarkade23@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"
>
    <span>  Nagpur,Maharashtra </span>     
</a>
</div>
    </div>

</div>
<div className="pt-8">
<h4 className="font-medium mb-4"> Contact With Me</h4>

<div className="flex space-x-4 justify-center">
    <a href="https://www.linkedin.com/in/snehal-farkade-b02482313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
        <Linkedin/>
    </a>
     <a href="https://www.instagram.com/snehal_86_farkade?igsh=MWUxM2FqcDltbWQ3cA==" target="_blank">
        <Instagram/>
    </a>
    
</div>

</div>
</div>

<div className="bg-card p-8 rounded-lg shadow-xs" 
>
    <h3 className="text-2xl font-semibold mb-6">Send  a Message</h3>
    <form className="space-y-6"
    // onSubmit={handleSubmit}
    >
<div>
    <label htmlFor="name" className="black text-sm font-medium mb-2">
        {" "}
         Your Name</label>
    <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
   placeholder="Snehal Farkade....."
   />

</div>

<div>
    <label htmlFor="email" className="black text-sm font-medium mb-2">
        {" "}
         Your Email</label>
    <input type="email" 
    id="email" name="email" 
    required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
   placeholder="join@gmail.com"
   />

</div>

<div>
    <label htmlFor="message" className="black text-sm font-medium mb-2">
        {" "}
         Your Name</label>
    <textarea  id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
   placeholder="Hello, i'd like to talk about..."
   />

</div>
<button 

type="submit" 
className={cn("cosmic-button w-full flex items-center  justify-center gap-2",

)}
    >
        Send Message
<Send size={16}/>
</button>
    </form>
</div>
            </div>
            </div>
        </section>
    )
}




// import { Mail, MapPin, Phone, Instagram, Linkedin, Send } from "lucide-react";
// import { cn } from "@/lib/utils"; // make sure this path is valid
// // import { useToast } from "@/hooks/use-toast"; // custom hook

// export const ContactSection = () => {
//   const { toast } = useToast(); // ensure this returns a toast function

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setTimeout(() => {
//       toast({
//         title: "Message sent!",
//         description: "Thank you for your message. I'll get back to you soon.",
//       });
//     }, 1500);
//   };

//   return (
//     <section id="contact" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Get In <span className="text-primary">Touch</span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Have a project in mind or want to collaborate and want beautiful UI/UX
//           or data Analysis? Feel free to reach out. I'm always open to discussing
//           new opportunities.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           {/* Left Side - Contact Info */}
//           <div className="space-y-8">
//             <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
//             <div className="space-y-6">
//               {/* Email */}
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Mail className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Email</h4>
//                   <a
//                     href="mailto:snehalfarkade23@gmail.com"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     snehalfarkade23@gmail.com
//                   </a>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Phone className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Phone</h4>
//                   <a
//                     href="tel:+919518375931"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                   >
//                     +91 9518375931
//                   </a>
//                 </div>
//               </div>

//               {/* Location */}
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <MapPin className="h-6 w-6 text-primary" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium">Location</h4>
//                   <span className="text-muted-foreground hover:text-primary transition-colors">
//                     Nagpur, Maharashtra
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="pt-8">
//               <h4 className="font-medium mb-4">Contact With Me</h4>
//               <div className="flex space-x-4 justify-center">
//                 <a
//                   href="https://in.linkedin.com/in/snehal-farkade-b02482313"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Linkedin />
//                 </a>
//                 <a
//                   href="https://www.instagram.com/snehal_86_farkade"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <Instagram />
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right Side - Contact Form */}
//           <div className="bg-card p-8 rounded-lg shadow-xs">
//             <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

//             <form className="space-y-6" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium mb-2">
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
//                   placeholder="Snehal Farkade"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium mb-2">
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
//                   placeholder="you@example.com"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium mb-2">
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
//                   placeholder="Hello, I'd like to talk about..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className={cn("cosmic-button w-full flex items-center justify-center gap-2")}
//               >
//                 Send Message
//                 <Send size={16} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };