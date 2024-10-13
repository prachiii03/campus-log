'use client';
// import Image from 'next/image';
// import { useState } from 'react';
// import campuslogo from '../Logos/campusLog-logo.png';

// export default function LoginPage() {
//     const [isLoginPanelActive, setIsLoginPanelActive] = useState(true);

//     const togglePanel = () => {
//         setIsLoginPanelActive(!isLoginPanelActive);
//     };

//     return (
//         <div className="container mx-auto p-5 mt-8">
//         <div className="flex justify-center">
//             <div className="bg-white p-5 shadow-md w-full max-w-lg">
//             <div className="flex justify-center">
//                 <div className="w-24 h-24">
//                 <Image
//                     src={campuslogo}
//                     alt="Company Logo"
//                     width={110}
//                     height={110}
//                     className="mx-auto"
//                 />
//                 </div>
//             </div>

//             <div className={isLoginPanelActive ? 'block' : 'hidden'}>
//                 <h3 className="text-center text-xl font-bold mb-4 text-black">Login to your account</h3>
//                 <form id="login" method="POST" action="/api/authCheck">
//                 <input type="hidden" name="gps_location" />
//                 <div className="mb-4">
//                     <input
//                     type="text"
//                     name="mobile"
//                     placeholder="Username"
//                     className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                     />
//                 </div>
//                 <div className="mb-4 relative">
//                     <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                     />
//                     <span className="fa fa-eye-slash absolute right-3 top-3 cursor-pointer"></span>
//                 </div>
                // <div className="flex justify-between items-center mb-4">
                //     <label className="flex items-center text-sm text-slate-600">
                //     <input type="checkbox" className="mr-2" />
                //     Remember me
                //     </label>
                //     <a onClick={togglePanel} className="text-blue-500 cursor-pointer text-sm">Forgot password?</a>
                // </div>
//                 <button
//                     type="submit"
//                     className="btn btn-primary w-full py-2 text-sm font-bold bg-blue-500 text-white rounded"
//                 >
//                     Login
//                 </button>
//                 </form>
//             </div>

//             <div className={isLoginPanelActive ? 'hidden' : 'block'}>
//                 <h3 className="text-center text-xl font-bold mb-4 text-black">Recover your password</h3>
//                 <p className="text-center text-sm mb-4 text-slate-900">
//                 Fill in your e-mail address below and we will send you an email with further instructions.
//                 </p>
//                 <form name="forgetForm" className="forgetForm" action="#" method="POST">
//                 <div className="mb-4">
//                     <input
//                     type="email"
//                     name="username"
//                     placeholder="Username"
//                     className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     className="btn btn-primary w-full py-2 text-sm font-bold bg-blue-500 text-white rounded"
//                 >
//                     Recover your password
//                 </button>
//                 <div className="text-center mt-4">
//                     <a onClick={togglePanel} className="text-blue-500 cursor-pointer text-sm">Already have an account?</a>
//                 </div>
//                 </form>
//             </div>
//             </div>
//         </div>
//         </div>
//     );
// }



//alll good
// import Image from 'next/image';
// import { useState } from 'react';
// import campuslogo from '../Logos/campusLog-logo.png';

// export default function SignInPage() {
//     const [activePanel, setActivePanel] = useState<'login' | 'signup' | 'forgot'>('login');

//     const togglePanel = (panel: 'login' | 'signup' | 'forgot') => {
//         setActivePanel(panel);
//     };

//     return (
//         <div className="container mx-auto p-5 mt-12">
//             <div className="flex justify-center">
//                 <div className="bg-white pl-12 pr-12 p-5 shadow-md w-full max-w-lg">
//                     <div className="flex justify-center">
//                         <div className="w-24 h-24">
//                             <Image
//                                 src={campuslogo}
//                                 alt="Company Logo"
//                                 width={110}
//                                 height={110}
//                                 className="mx-auto"
//                             />
//                         </div>
//                     </div>

//                     {/* Sign Up Panel */}
//                     <div className={activePanel === 'signup' ? 'block' : 'hidden'}>
//                         <h3 className="text-center text-xl font-bold mb-4 text-black">Create a new account</h3>
//                         <form id="signUp" method="POST" action="/api/signUp">
//                             <div className="mb-4">
//                                 <input
//                                     type="text"
//                                     name="fullName"
//                                     placeholder="Full Name"
//                                     className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     placeholder="Email Address"
//                                     className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <input
//                                     type="text"
//                                     name="username"
//                                     placeholder="Username"
//                                     className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     placeholder="Password"
//                                     className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <select
//                                     name="userType"
//                                     className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                 >
//                                     <option>Choose...</option>
//                                     <option value="student">Student</option>
//                                     <option value="teacher">Teacher</option>
//                                     <option value="parent">Parent</option>
//                                 </select>
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="btn btn-primary w-full py-2 text-sm font-bold bg-blue-500 text-white rounded"
//                             >
//                                 Sign Up
//                             </button>
//                         </form>
//                         <div className="text-center mt-4">
//                             <a onClick={() => togglePanel('login')} className="text-blue-500 cursor-pointer text-sm">Already have an account? Login here</a>
//                         </div>
//                     </div>

//                     {/* Login Panel */}
//                     <div className={activePanel === 'login' ? 'block' : 'hidden'}>
//                         <h3 className="text-center text-xl font-bold mb-4 text-black">Login to your account</h3>
//                         <form id="login" method="POST" action="/api/authCheck">
//                             <div className="mb-4">
//                                 <input
//                                     type="text"
//                                     name="username"
//                                     placeholder="Username"
//                                     className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                 />
//                             </div>
//                             <div className="mb-4 relative">
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     placeholder="Password"
//                                     className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                 />
//                                 <span className="fa fa-eye-slash absolute right-3 top-3 cursor-pointer"></span>
//                             </div>
//                             <div className="flex justify-between items-center mb-4">
//                                 <label className="flex items-center text-sm text-slate-600">
//                                 <input type="checkbox" className="mr-2" />
//                                 Remember me
//                                 </label>
//                                 <a onClick={() => togglePanel('forgot')} className="text-blue-500 cursor-pointer text-sm">Forgot password?</a>
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="btn btn-primary w-full py-2 text-sm font-bold bg-blue-500 text-white rounded"
//                             >
//                                 Login
//                             </button>
//                             <div className="text-center mt-4">
//                                 <a onClick={() => togglePanel('signup')} className="text-blue-500 cursor-pointer text-sm">Don't have an account? Sign up</a>
//                             </div>
//                         </form>
//                     </div>

//                     {/* Forgot Password Panel */}
//                     <div className={activePanel === 'forgot' ? 'block' : 'hidden'}>
//                         <h3 className="text-center text-xl font-bold mb-4 text-black">Recover your password</h3>
//                         <p className="text-center text-sm mb-4 text-slate-900">
//                             Fill in your e-mail address below and we will send you an email with further instructions.
//                         </p>
//                         <form name="forgetForm" className="forgetForm" action="#" method="POST">
//                             <div className="mb-4">
//                                 <input
//                                     type="email"
//                                     name="username"
//                                     placeholder="Username"
//                                     className="form-control text-sm p-3 w-full border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
//                                 />
//                             </div>
//                             <button
//                                 type="submit"
//                                 className="btn btn-primary w-full py-3 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
//                             >
//                                 Recover your password
//                             </button>
//                             <div className="text-center mt-4">
//                                 <a onClick={() => togglePanel('login')} className="text-blue-500 text-sm cursor-pointer">
//                                     Already have an account?
//                                 </a>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }




// all ok only left image not there
// import Image from 'next/image';
// import { useEffect, useState } from 'react';
// import campuslogo from '../Logos/campusLog-logo.png';
// import Loader from './Loader';

// export default function SignInPage() {
//     const [activePanel, setActivePanel] = useState<'login' | 'signup' | 'forgot'>('login');
//     const [loading, setLoading] = useState(true);

//     const togglePanel = (panel: 'login' | 'signup' | 'forgot') => {
//         setActivePanel(panel);
//     };

//     useEffect(() => {
//         // Simulate a delay for the loader
//         const timer = setTimeout(() => {
//             setLoading(false);
//         }, 3000); // Loader delay time

//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <>
//         {loading && <Loader />}
//         {!loading && (
//             <div className="container mx-auto p-5 mt-12">
//                 <div className="flex justify-center">
//                     <div className="bg-white pl-12 pr-12 p-5 shadow-md w-full max-w-lg">
//                         <div className="flex justify-center">
//                             <div className="w-24 h-24">
//                                 <Image
//                                     src={campuslogo}
//                                     alt="Company Logo"
//                                     width={110}
//                                     height={110}
//                                     className="mx-auto"
//                                 />
//                             </div>
//                         </div>

//                         {/* Sign Up Panel */}
//                         <div className={activePanel === 'signup' ? 'block' : 'hidden'}>
//                             <h3 className="text-center text-xl font-bold mb-4 text-black">Create a new account</h3>
//                             <form id="signUp" method="POST" action="/api/signUp">
//                                 <div className="mb-4">
//                                     <input
//                                         type="text"
//                                         name="fullName"
//                                         placeholder="Full Name"
//                                         className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         placeholder="Email Address"
//                                         className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <input
//                                         type="text"
//                                         name="username"
//                                         placeholder="Username"
//                                         className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <input
//                                         type="password"
//                                         name="password"
//                                         placeholder="Password"
//                                         className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <select
//                                         name="userType"
//                                         className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                     >
//                                         <option>Choose...</option>
//                                         <option value="student">Student</option>
//                                         <option value="teacher">Teacher</option>
//                                         <option value="parent">Parent</option>
//                                     </select>
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="btn btn-primary w-full py-2 text-sm font-bold bg-blue-500 text-white rounded"
//                                 >
//                                     Sign Up
//                                 </button>
//                             </form>
//                             <div className="text-center mt-4">
//                                 <a onClick={() => togglePanel('login')} className="text-blue-500 cursor-pointer text-sm">Already have an account? Login here</a>
//                             </div>
//                         </div>

//                         {/* Login Panel */}
//                         <div className={activePanel === 'login' ? 'block' : 'hidden'}>
//                             <h3 className="text-center text-xl font-bold mb-4 text-black">Login to your account</h3>
//                             <form id="login" method="POST" action="/api/authCheck">
//                                 <div className="mb-4">
//                                     <input
//                                         type="text"
//                                         name="username"
//                                         placeholder="Username"
//                                         className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                     />
//                                 </div>
//                                 <div className="mb-4 relative">
//                                     <input
//                                         type="password"
//                                         name="password"
//                                         placeholder="Password"
//                                         className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                     />
//                                     <span className="fa fa-eye-slash absolute right-3 top-3 cursor-pointer"></span>
//                                 </div>
//                                 <div className="flex justify-between items-center mb-4">
//                                     <label className="flex items-center text-sm text-slate-600">
//                                     <input type="checkbox" className="mr-2" />
//                                     Remember me
//                                     </label>
//                                     <a onClick={() => togglePanel('forgot')} className="text-blue-500 cursor-pointer text-sm">Forgot password?</a>
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="btn btn-primary w-full py-2 text-sm font-bold bg-blue-500 text-white rounded"
//                                 >
//                                     Login
//                                 </button>
//                                 <div className="text-center mt-4">
//                                     <a onClick={() => togglePanel('signup')} className="text-blue-500 cursor-pointer text-sm">Don't have an account? Sign up</a>
//                                 </div>
//                             </form>
//                         </div>

//                         {/* Forgot Password Panel */}
//                         <div className={activePanel === 'forgot' ? 'block' : 'hidden'}>
//                             <h3 className="text-center text-xl font-bold mb-4 text-black">Recover your password</h3>
//                             <p className="text-center text-sm mb-4 text-slate-900">
//                                 Fill in your e-mail address below and we will send you an email with further instructions.
//                             </p>
//                             <form name="forgetForm" className="forgetForm" action="#" method="POST">
//                                 <div className="mb-4">
//                                     <input
//                                         type="email"
//                                         name="username"
//                                         placeholder="Username"
//                                         className="form-control text-sm p-3 w-full border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
//                                     />
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="btn btn-primary w-full py-3 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
//                                 >
//                                     Recover your password
//                                 </button>
//                                 <div className="text-center mt-4">
//                                     <a onClick={() => togglePanel('login')} className="text-blue-500 text-sm cursor-pointer">
//                                         Already have an account?
//                                     </a>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )}
//         </>
//     );
// }



// all ok with loader gif
// import Image from 'next/image';
// import { useEffect, useState } from 'react';
// import campuslogo from '../Logos/campusLog-logo.png';
// import college from '../Logos/collegeImage.png'; // Add your left-side image here
// import Loader from './Loader';

// export default function SignInPage() {
//     const [activePanel, setActivePanel] = useState<'login' | 'signup' | 'forgot'>('login');
//     const [loading, setLoading] = useState(true);

//     const togglePanel = (panel: 'login' | 'signup' | 'forgot') => {
//         setActivePanel(panel);
//     };

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLoading(false);
//         }, 3000);

//         return () => clearTimeout(timer);
//     }, []);

//     return (
//         <>
//         {loading && <Loader />}
//         {!loading && (
//             <div className="container mx-auto p-5 mt-12 flex justify-center items-center">
//                 <div className="bg-white shadow-md flex w-full max-w-4xl">
//                     {/* Left Image Column */}
//                     <div className="hidden md:block w-1/2 p-10 bg-cover bg-center mt-16">
//                         <Image
//                                     src={college}
//                                     alt="Company Logo"
//                                     width={300}
//                                     height={300}
//                                     className="mx-auto"
//                                 />
//                     </div>

//                     {/* Right Form Column */}
//                     <div className="w-full md:w-1/2 p-8">
//                         <div className="flex justify-center">
//                             <div className="w-24 h-24">
//                                 <Image
//                                     src={campuslogo}
//                                     alt="Company Logo"
//                                     width={110}
//                                     height={110}
//                                     className="mx-auto"
//                                 />
//                             </div>
//                         </div>

//                         {/* Sign Up Panel */}
//                         <div className={activePanel === 'signup' ? 'block' : 'hidden'}>
//                             <h3 className="text-center text-xl font-bold mb-4 text-black">Create a new account</h3>
//                             <form id="signUp" method="POST" action="/api/signUp">
//                                 <div className="mb-4">
//                                     <input
//                                         type="text"
//                                         name="fullName"
//                                         placeholder="Full Name"
//                                         className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         placeholder="Email Address"
//                                         className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <input
//                                         type="text"
//                                         name="username"
//                                         placeholder="Username"
//                                         className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <input
//                                         type="password"
//                                         name="password"
//                                         placeholder="Password"
//                                         className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                     />
//                                 </div>
//                                 <div className="mb-4">
//                                     <select
//                                         name="userType"
//                                         className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                     >
//                                         <option>Choose...</option>
//                                         <option value="student">Student</option>
//                                         <option value="teacher">Teacher</option>
//                                         <option value="parent">Parent</option>
//                                     </select>
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="btn btn-primary w-full py-2 text-sm font-bold bg-blue-500 text-white rounded"
//                                 >
//                                     Sign Up
//                                 </button>
//                             </form>
//                             <div className="text-center mt-4">
//                                 <a onClick={() => togglePanel('login')} className="text-blue-500 cursor-pointer text-sm">Already have an account? Login here</a>
//                             </div>
//                         </div>

//                         {/* Login Panel */}
//                         <div className={activePanel === 'login' ? 'block' : 'hidden'}>
//                             <h3 className="text-center text-xl font-bold mb-4 text-black">Login to your account</h3>
//                             <form id="login" method="POST" action="/api/authCheck">
//                                 <div className="mb-4">
//                                     <input
//                                         type="text"
//                                         name="username"
//                                         placeholder="Username"
//                                         className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                     />
//                                 </div>
//                                 <div className="mb-4 relative">
//                                     <input
//                                         type="password"
//                                         name="password"
//                                         placeholder="Password"
//                                         className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                     />
//                                     <span className="fa fa-eye-slash absolute right-3 top-3 cursor-pointer"></span>
//                                 </div>
//                                 <div className="flex justify-between items-center mb-4">
//                                     <label className="flex items-center text-sm text-slate-600">
//                                     <input type="checkbox" className="mr-2" />
//                                     Remember me
//                                     </label>
//                                     <a onClick={() => togglePanel('forgot')} className="text-blue-500 cursor-pointer text-sm">Forgot password?</a>
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="btn btn-primary w-full py-2 text-sm font-bold bg-blue-500 text-white rounded"
//                                 >
//                                     Login
//                                 </button>
//                                 <div className="text-center mt-4">
//                                     <a onClick={() => togglePanel('signup')} className="text-blue-500 cursor-pointer text-sm">Don't have an account? Sign up</a>
//                                 </div>
//                             </form>
//                         </div>

//                         {/* Forgot Password Panel */}
//                         <div className={activePanel === 'forgot' ? 'block' : 'hidden'}>
//                             <h3 className="text-center text-xl font-bold mb-4 text-black">Recover your password</h3>
//                             <p className="text-center text-sm mb-4 text-slate-900">
//                                 Fill in your e-mail address below and we will send you an email with further instructions.
//                             </p>
//                             <form name="forgetForm" className="forgetForm" action="#" method="POST">
//                                 <div className="mb-4">
//                                     <input
//                                         type="email"
//                                         name="username"
//                                         placeholder="Username"
//                                         className="form-control text-sm p-3 w-full border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
//                                     />
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="btn btn-primary w-full py-3 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
//                                 >
//                                     Recover your password
//                                 </button>
//                                 <div className="text-center mt-4">
//                                     <a onClick={() => togglePanel('login')} className="text-blue-500 text-sm cursor-pointer">
//                                         Already have an account?
//                                     </a>
//                                 </div>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         )}
//         </>
//     );
// }



//skeleton loader
// import campuslogo from '../../../../public/images/campusLog-logo.png';
// import college from '../../../../public/images/collegeImage.png';
// import Image from 'next/image';
// import { FormEvent, useEffect, useState } from 'react';
// import SkeletonLoader from './LoginSkeleton';
// import { signIn } from 'next-auth/react';

// import { useRouter } from "next/navigation";
// import { toast } from 'react-toastify';

// export default function SignInPage() {
//     const router = useRouter();
    
//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget);
        
//         const response = await signIn('credentials', {
//             prn: formData.get("prn") as string,
//             password: formData.get("password") as string,
//             redirect: false
//         });

//         console.log(response)
        
//         if(response?.status == 401) {
//             console.log(response.error)
//             toast.error("Password did not matched")
//         }
//         if (!response?.error) {
//             toast.success("Login Successful..!")
//             router.push('/sgmcoe/dashboard');
//             router.refresh();
//         } else {
//             toast.error(response.error);
//         }
//     };
//     const [activePanel, setActivePanel] = useState<'login' | 'signup' | 'forgot'>('login');
//     const [loading, setLoading] = useState(true);

//     const togglePanel = (panel: 'login' | 'signup' | 'forgot') => {
//         setActivePanel(panel);
//     };

//     useEffect(() => {
//         setTimeout(() => {
//             setLoading(false);
//         }, 1500);
//     }, []);

//     return (
//         <>
//             <div className="container mx-auto p-5 mt-12 flex justify-center items-center">
//                 <div className="bg-white shadow-md flex w-full max-w-4xl">
//                     {loading ? (
//                         <SkeletonLoader />
//                     ) : (
//                         <>
//                             {/* Left Image Column */}
//                             <div className="hidden md:block w-1/2 p-10 bg-cover bg-center mt-16">
//                                 <Image
//                                     src={college}
//                                     alt="Company Logo"
//                                     width={300}
//                                     height={300}
//                                     className="mx-auto"
//                                 />
//                             </div>

//                             {/* Right Form Column */}
//                             <div className="w-full md:w-1/2 p-8">
//                                 <div className="flex justify-center">
//                                     <div className="w-24 h-24">
//                                         <Image
//                                             src={campuslogo}
//                                             alt="Company Logo"
//                                             width={110}
//                                             height={110}
//                                             className="mx-auto"
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* Sign Up Panel */}
//                                 <div className={activePanel === 'signup' ? 'block' : 'hidden'}>
//                                     <h3 className="text-center text-xl font-bold mb-4 text-black">Create a new account</h3>
//                                     <form id="signUp" method="POST" action="/api/signUp">
//                                         <div className="mb-4">
//                                             <input
//                                                 type="text"
//                                                 name="fullName"
//                                                 placeholder="Full Name"
//                                                 className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <input
//                                                 type="email"
//                                                 name="email"
//                                                 placeholder="Email Address"
//                                                 className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <input
//                                                 type="text"
//                                                 name="username"
//                                                 placeholder="Username"
//                                                 className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <input
//                                                 type="password"
//                                                 name="password"
//                                                 placeholder="Password"
//                                                 className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                             />
//                                         </div>
//                                         <div className="mb-4">
//                                             <select
//                                                 name="userType"
//                                                 className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                             >
//                                                 <option>Choose...</option>
//                                                 <option value="student">Student</option>
//                                                 <option value="teacher">Teacher</option>
//                                                 <option value="parent">Parent</option>
//                                             </select>
//                                         </div>
//                                         <button
//                                             type="submit"
//                                             className="btn btn-primary w-full py-2 text-sm font-bold bg-blue-500 text-white rounded"
//                                         >
//                                             Sign Up
//                                         </button>
//                                     </form>
//                                     <div className="text-center mt-4">
//                                         <a onClick={() => togglePanel('login')} className="text-blue-500 cursor-pointer text-sm">Already have an account? Login here</a>
//                                     </div>
//                                 </div>

//                                 {/* Login Panel */}
//                                 <div className={activePanel === 'login' ? 'block' : 'hidden'}>
//                                     <h3 className="text-center text-xl font-bold mb-4 text-black">Login to your account</h3>
//                                     <form id="login" onSubmit={handleSubmit}>
//                                         <div className="mb-4">
//                                             <input
//                                                 type="number"
//                                                 name="prn"
//                                                 placeholder="Username"
//                                                 className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                             />
//                                         </div>
//                                         <div className="mb-4 relative">
//                                             <input
//                                                 type="password"
//                                                 name="password"
//                                                 placeholder="Password"
//                                                 className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                             />
//                                             <span className="fa fa-eye-slash absolute right-3 top-3 cursor-pointer"></span>
//                                         </div>
//                                         <div className="flex justify-between items-center mb-4">
//                                             <label className="flex items-center text-sm text-slate-600">
//                                                 <input type="checkbox" className="mr-2" />
//                                                 Remember me
//                                             </label>
//                                             <a onClick={() => togglePanel('forgot')} className="text-blue-500 cursor-pointer text-sm">Forgot password?</a>
//                                         </div>
//                                         <button
//                                             type="submit"
//                                             className="btn btn-primary w-full py-2 text-sm font-bold bg-blue-500 text-white rounded"
//                                         >
//                                             Login
//                                         </button>
//                                         <div className="text-center mt-4">
//                                             <a onClick={() => togglePanel('signup')} className="text-blue-500 cursor-pointer text-sm">Dont have an account? Sign up</a>
//                                         </div>
//                                     </form>
//                                 </div>

//                                 {/* Forgot Password Panel */}
//                                 <div className={activePanel === 'forgot' ? 'block' : 'hidden'}>
//                                     <h3 className="text-center text-xl font-bold mb-4 text-black">Recover your password</h3>
//                                     <p className="text-center text-sm mb-4 text-slate-900">
//                                         Fill in your e-mail address below and we will send you an email with further instructions.
//                                     </p>
//                                     <form name="forgetForm" className="forgetForm" action="#" method="POST">
//                                         <div className="mb-4">
//                                             <input
//                                                 type="email"
//                                                 name="username"
//                                                 placeholder="Username"
//                                                 className="form-control text-sm p-3 w-full border border-gray-300 rounded focus:border-blue-500 focus:outline-none"
//                                             />
//                                         </div>
//                                         <button
//                                             type="submit"
//                                             className="btn btn-primary w-full py-3 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
//                                         >
//                                             Recover your password
//                                         </button>
//                                         <div className="text-center mt-4">
//                                             <a onClick={() => togglePanel('login')} className="text-blue-500 text-sm cursor-pointer">
//                                                 Already have an account?
//                                             </a>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }



// import campuslogo from '../../../../public/images/campusLog-logo.png';
// import college from '../../../../public/images/collegeImage.png';
// import Image from 'next/image';
// import { FormEvent, useEffect, useState } from 'react';
// import SkeletonLoader from './LoginSkeleton';
// import { signIn } from 'next-auth/react';
// import { useRouter } from "next/navigation";
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling
// import { useCollege } from '@/context/college-name-provider/CollegeNameProvider';

// export default function SignInPage() {
//     const { collegeName } = useCollege();
//     const router = useRouter();
    
//     const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget);
        
//         const response = await signIn('credentials', {
//             prn: formData.get("prn") as string,
//             password: formData.get("password") as string,
//             redirect: false
//         });

//         console.log(response)
        
//         if(response?.status == 401) {
//             console.log(response.error)
//             toast.error("Username or Password is wrong...");
//         }
//         if (!response?.error) {
//             toast.success("Login Successful!");
//             router.push(`/${collegeName}/dashboard`);
//             router.refresh();
//         } else {
//             console.log(response.error)
//         }
//     };


//     const facultyLogin = async (formData: any) => {
//         try {
//             const id = formData.get("prn") as string;
//             const password = formData.get("password") as string;
    
//             const response = await fetch(`/api/auth/faculty/login`, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ id,password }) // Send the password in the body
//             });
    
//             const result = await response.json();
//             console.log(result);
//         } catch (error) {
//             console.error("Login failed:", error);
//         }
//     };
    
//     const [activePanel, setActivePanel] = useState<'login' | 'signup' | 'forgot'>('login');
//     const [loading, setLoading] = useState(true);

//     const togglePanel = (panel: 'login' | 'signup' | 'forgot') => {
//         setActivePanel(panel);
//     };

//     useEffect(() => {
//         setTimeout(() => {
//             setLoading(false);
//         }, 1500);
//     }, []);

//     return (
//         <>
//             {/* ToastContainer to display the notifications */}
//             <ToastContainer />

//             <div className="container mx-auto p-5 mt-12 flex justify-center items-center">
//                 <div className="bg-white shadow-md flex w-full max-w-4xl">
//                     {loading ? (
//                         <SkeletonLoader />
//                     ) : (
//                         <>
//                             {/* Left Image Column */}
//                             <div className="hidden md:block w-1/2 p-10 bg-cover bg-center mt-16">
//                                 <Image
//                                     src={college}
//                                     alt="Company Logo"
//                                     width={300}
//                                     height={300}
//                                     className="mx-auto"
//                                 />
//                             </div>

//                             {/* Right Form Column */}
//                             <div className="w-full md:w-1/2 p-8">
//                                 <div className="flex justify-center">
//                                     <div className="w-24 h-24">
//                                         <Image
//                                             src={campuslogo}
//                                             alt="Company Logo"
//                                             width={110}
//                                             height={110}
//                                             className="mx-auto"
//                                         />
//                                     </div>
//                                 </div>

//                                 {/* Login Panel */}
//                                 <div className={activePanel === 'login' ? 'block' : 'hidden'}>
//                                     <h3 className="text-center text-xl font-bold mb-4 text-black">Login to your account</h3>
//                                     <form id="login" onSubmit={handleSubmit}>
//                                         <div className="mb-4">
//                                             <input
//                                                 type="number"
//                                                 name="prn"
//                                                 placeholder="Username"
//                                                 className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                             />
//                                         </div>
//                                         <div className="mb-4 relative">
//                                             <input
//                                                 type="password"
//                                                 name="password"
//                                                 placeholder="Password"
//                                                 className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
//                                             />
//                                             <span className="fa fa-eye-slash absolute right-3 top-3 cursor-pointer"></span>
//                                         </div>
//                                         <div className="flex justify-between items-center mb-4">
//                                             <label className="flex items-center text-sm text-slate-600">
//                                                 <input type="checkbox" className="mr-2" />
//                                                 Remember me
//                                             </label>
//                                             <a onClick={() => togglePanel('forgot')} className="text-blue-500 cursor-pointer text-sm">Forgot password?</a>
//                                         </div>
//                                         <button
//                                             type="submit"
//                                             className="btn btn-primary w-full py-2 text-sm font-bold bg-blue-500 text-white rounded"
//                                         >
//                                             Login
//                                         </button>
//                                         <div className="text-center mt-4">
//                                             <a onClick={() => togglePanel('signup')} className="text-blue-500 cursor-pointer text-sm">Dont have an account? Sign up</a>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </>
//                     )}
//                 </div>
//             </div>
//         </>
//     );
// }


















//==============================================================================
'use client';

import campuslogo from '../../../../public/images/campusLog-logo.png';
import college from '../../../../public/images/collegeImage.png';
import Image from 'next/image';
import { FormEvent, useEffect, useState } from 'react';
import SkeletonLoader from './LoginSkeleton';
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCollege } from '@/context/college-name-provider/CollegeNameProvider';

export default function SignInPage() {
    const { collegeName } = useCollege();
    const router = useRouter();
    const [role, setRole] = useState<'student' | 'faculty'>('student'); // Default to 'student'
    const [isLoggingIn, setIsLoggingIn] = useState(false); // Track login state

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        // Show toast for login progress
        const toastId = toast.loading("Logging into your account...");

        setIsLoggingIn(true); // Indicate login is in progress

        if (role === 'student') {
            // Student login logic
            const response = await signIn('credentials', {
                prn: formData.get("prn") as string,
                password: formData.get("password") as string,
                redirect: false
            });

            setIsLoggingIn(false); // Reset login state

            if (response?.status == 401) {
                toast.dismiss(toastId)
                toast.error("Username or Password is wrong...");
            } else if (!response?.error) {
                toast.dismiss(toastId)
                toast.success("Login Successful!");
                sessionStorage.clear(); // Clear any existing session
                sessionStorage.setItem('userSession', JSON.stringify(response)); // Store student session
                router.push(`/${collegeName}`);
                router.refresh();
            } else {
                toast.dismiss(toastId)
                toast.error(response.error || "Something went wrong");
            }
        } else if (role === 'faculty') {
            // Faculty login logic
            facultyLogin(formData);
        }
    };

    const facultyLogin = async (formData: any) => {
        const toastId = toast.loading("Logging into your account..."); // Show login progress
        try {
            const id = formData.get("prn") as string;
            const password = formData.get("password") as string;


            const response = await fetch(`/api/auth/faculty/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ id, password })
            });

            const result = await response.json();

            if (result.message === "Logged in successfully") {
                toast.dismiss(toastId)
                toast.success("Faculty Login Successful!");
                sessionStorage.clear(); // Clear any existing session
                sessionStorage.setItem('facultySession', JSON.stringify(result.newFaculty)); // Store faculty session
                router.push(`/${collegeName}`);
                router.refresh();
            } else {
                toast.dismiss(toastId)
                toast.error("Faculty Login Failed. Please check your credentials.");
            }
        } catch (error) {
            toast.dismiss(toastId)
            console.error("Login failed:", error);
            toast.error("An error occurred during login.");
        }
    };

    const [activePanel, setActivePanel] = useState<'login' | 'signup' | 'forgot'>('login');
    const [loading, setLoading] = useState(true);

    const togglePanel = (panel: 'login' | 'signup' | 'forgot') => {
        setActivePanel(panel);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);

        // Show a toast message to prompt login on the first render
        toast.info("Please login to access other pages.");
    }, []);

    return (
        <>
            <ToastContainer />
            <div className="container mx-auto p-5 mt-12 flex justify-center items-center">
                <div className="bg-white shadow-md flex w-full max-w-4xl">
                    {loading ? (
                        <SkeletonLoader />
                    ) : (
                        <>
                            {/* Left Image Column */}
                            <div className="hidden md:block w-1/2 p-10 bg-cover bg-center mt-16">
                                <Image
                                    src={college}
                                    alt="Company Logo"
                                    width={300}
                                    height={300}
                                    className="mx-auto"
                                />
                            </div>

                            {/* Right Form Column */}
                            <div className="w-full md:w-1/2 p-8">
                                <div className="flex justify-center">
                                    <div className="w-24 h-24">
                                        <Image
                                            src={campuslogo}
                                            alt="Company Logo"
                                            width={110}
                                            height={110}
                                            className="mx-auto"
                                        />
                                    </div>
                                </div>

                                {/* Role Selection Radio Buttons */}
                                <div className="flex justify-center space-x-4 mb-4">
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="role"
                                            value="student"
                                            checked={role === 'student'}
                                            onChange={() => setRole('student')}
                                            className="mr-2"
                                        />
                                        Student
                                    </label>
                                    <label className="flex items-center">
                                        <input
                                            type="radio"
                                            name="role"
                                            value="faculty"
                                            checked={role === 'faculty'}
                                            onChange={() => setRole('faculty')}
                                            className="mr-2"
                                        />
                                        Faculty
                                    </label>
                                </div>

                                {/* Login Panel */}
                                <div className={activePanel === 'login' ? 'block' : 'hidden'}>
                                    <h3 className="text-center text-xl font-bold mb-4 text-black">Login to your account</h3>
                                    <form id="login" onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <input
                                                type="text"
                                                name="prn"
                                                placeholder="Username"
                                                className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
                                            />
                                        </div>
                                        <div className="mb-4 relative">
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                className="form-control w-full px-4 py-2 text-sm border rounded text-stone-900"
                                            />
                                        </div>
                                        <div className="flex justify-between items-center mb-4">
                                            <label className="flex items-center text-sm text-slate-600">
                                                <input type="checkbox" className="mr-2" />
                                                Remember me
                                            </label>
                                            <a onClick={() => togglePanel('forgot')} className="text-blue-500 cursor-pointer text-sm">Forgot password?</a>
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-full py-2 text-sm font-bold bg-blue-500 text-white rounded"
                                            disabled={isLoggingIn} // Disable button when logging in
                                        >
                                            {isLoggingIn ? "Logging in..." : "Login"}
                                        </button>
                                        <div className="text-center mt-4">
                                            <a onClick={() => togglePanel('signup')} className="text-blue-500 cursor-pointer text-sm">Dont have an account? Sign up</a>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
