import {Moon, Sun} from "lucide-react";
import{ useState , useEffect } from "react";
import {cn} from '@/lib/utils';



export const ThemeToggle = () => {
    const[isDarkMode,setIsDarkMode] = useState(false);
    useEffect(() =>{
const storedTheme = localStorage.getItem("theme")
if(storedTheme=== "dark") {
    setIsDarkMode(true);
    document.documentElement.classList.add("dark");
    }else{
          localStorage.setItem("theme","light")
    setIsDarkMode(false);
    }
    }, [])

    const toggleTheme = () => {
   if(isDarkMode){
     document.documentElement.classList.remove("dark");
      localStorage.setItem("theme","light")
    setIsDarkMode(false);
   }else{
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme","dark")
    setIsDarkMode(true);
   }
    };
    return (
        <button onClick={toggleTheme} 
        // className ="fixed max-sn:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        //     "focus:outlin-hidden"
       
      className={cn("fixed top-8 right-15 z-50 px-1.5  rounded-full  focus:outlin-hidden  dark:bg-black transition-colors duration-300",
         
      )}
            
    >
        
        {" "}
        {isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300"/> )
            :(
                 <Moon className="h-6 w-6 text-blue-900"/>
                )}
                </button>
    );
};