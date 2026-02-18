
// import { useToast } from "@/hooks/use-toast";
// import {
//   Toast,
//   // ToastClose,
//   ToastDescription,
//   ToastProvider,
//   ToastTitle,
//   ToastViewport,
// } from "@/components/ui/toast";

// export function Toaster() {
//   const { toasts } = useToast();

//   return (
//     <ToastProvider>
//       {toasts.map(function ({ id, title, description, action, ...props }) {
//         return (
//           <Toast key={id} {...props}>
//             <div className="grid gap-1">
//               {title && <ToastTitle>{title}</ToastTitle>}
//               {description && (
//                 <ToastDescription>{description}</ToastDescription>
//               )}
//             </div>
//             {action}
//             <ToastClose />
//           </Toast>
//         );
//       })}
//       <ToastViewport />
//     </ToastProvider>
//   );
// }

// import React, { useEffect, useState } from "react";
// import {
//   ToastProvider,
//   Toast,
//   ToastTitle,
//   ToastDescription,
//   ToastViewport,
// } from "@/components/ui/toast"; // your toast file

// function App() {
//   const [toastData, setToastData] = useState(null);

//   useEffect(() => {
//     const handler = (e) => {
//       setToastData(e.detail);
//       setTimeout(() => setToastData(null), 3000); // hide toast after 3s
//     };

//     window.addEventListener("custom-toast", handler);
//     return () => window.removeEventListener("custom-toast", handler);
//   }, []);

//   return (
//     <ToastProvider>
//       {/* your other components */}
//       {toastData && (
//         <Toast>
//           <ToastTitle>{toastData.title}</ToastTitle>
//           {toastData.description && <ToastDescription>{toastData.description}</ToastDescription>}
//         </Toast>
//       )}
//       <ToastViewport />
//     </ToastProvider>
//   );
// }
