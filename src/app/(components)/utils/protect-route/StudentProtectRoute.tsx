'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Don't forget to import the toastify CSS

const studentProtectRoute = (WrappedComponent: React.FC) => {
  return function AuthenticatedComponent() {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false); // To check if the component is mounted

    useEffect(() => {
      setIsMounted(true);
    }, []);

    useEffect(() => {
      if (isMounted) {
        const userSession = sessionStorage.getItem('userSession');
        
        if (!userSession) {
          toast.success("Please login to access the previous page.");

          // Delay the redirection to allow the toast message to show
       
            router.push('/login');
            router.refresh();
        }
      }
    }, [isMounted, router]);

    if (!isMounted) {
      return null; // Render null or a loading spinner while waiting for the component to mount
    }

    return (
      <>
        <ToastContainer />
        <WrappedComponent />
      </>
    );
  };
};

export default studentProtectRoute;
