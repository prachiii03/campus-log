"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CollegeContextType {
  collegeName: string | null;
  setCollegeName: (name: string) => void;
}

const CollegeContext = createContext<CollegeContextType | undefined>(undefined);

export const useCollege = () => {
  const context = useContext(CollegeContext);
  if (!context) {
    throw new Error('useCollege must be used within a CollegeProvider');
  }
  return context;
};

export const CollegeProvider = ({ children }: { children: ReactNode }) => {
  const [collegeName, setCollegeName] = useState<string | null>(null);

  useEffect(() => {
    // Fetch the college name from the API when the component is mounted
    const fetchCollegeName = async () => {
      try {
        // const response = await fetch('/api/college/get-college-code');
        // const data = await response.json();
        // console.log({data})
        setCollegeName("sgmcoe"); // Assuming API returns { collegeName: "some-name" }
      } catch (error) {
        console.error("Error fetching college name:", error);
      }
    };

    fetchCollegeName();
  }, []); // This will run only once when the component is mounted

  return (
    <CollegeContext.Provider value={{ collegeName, setCollegeName }}>
      {children}
    </CollegeContext.Provider>
  );
};
