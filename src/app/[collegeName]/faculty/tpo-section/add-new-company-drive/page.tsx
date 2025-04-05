'use client';
import { useEffect, useState } from 'react';
import RecruitmentFormSkeleton from './Form-Skeleton';
import facultyProtectRoute from '@/app/(components)/utils/protect-route/FacultyProtectRoute';
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from "next/navigation";
import { useCollege } from '@/context/college-name-provider/CollegeNameProvider';
const RecruitmentForm = () => {
  const router = useRouter();
  const { collegeName } = useCollege();

  const [loading, setLoading] = useState(true);
  const [companyName, setCompanyName] = useState('');
  const [jobPosition, setJobPosition] = useState('');
  const [eligibilityCriteria, setEligibilityCriteria] = useState('');
  const [packageOffered, setPackageOffered] = useState('');
  const [applicationDeadline, setApplicationDeadline] = useState('');
  const [minGPA, setMinGPA] = useState('');
  const [ktAllowed, setKtAllowed] = useState(false);
  const [registrationLink, setRegistrationLink] = useState('');

  useEffect(() => {
    // Simulate loading process
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) {
    return <RecruitmentFormSkeleton />; // Render skeleton while loading
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Format the applicationDeadline to ISO 8601 format
    const formattedDeadline = new Date(applicationDeadline).toISOString();

    // Create the request body object with correct field names
    const requestBody = {
      company_name: companyName,
      job_description: eligibilityCriteria,
      job_roll: jobPosition,
      minimu_gpa: parseFloat(minGPA),
      offering_ctc: parseFloat(packageOffered), // Convert Lakh to actual value
      kt_allow: ktAllowed,
      application_deadline: formattedDeadline,
      registration_link: registrationLink,
    };

    // Send the POST request
    const toastId = toast.loading("Adding new recruitment drive...")
    try {
      console.log(requestBody)
      const response = await fetch('/api/faculty/tpo/add-new-company', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        toast.dismiss(toastId);
        toast.error(" OOPS..!  problem while adding new drive \n Please try again")
        throw new Error('Error adding company');
      }

      const data = await response.json();
      console.log('Company added successfully:', data);

      // Reset form fields after submission
      setCompanyName('');
      setJobPosition('');
      setEligibilityCriteria('');
      setPackageOffered('');
      setApplicationDeadline('');
      setMinGPA('');
      setKtAllowed(false);
      setRegistrationLink('');
      toast.success("New drive added successfully...")
      router.push(`/${collegeName}/faculty`);
      router.refresh();
    } catch (error) {
      toast.dismiss(toastId);
      toast.error("Internal server error..")
      console.error('Failed to add company:', error);
    }
  };

  return (
    <div className="space-y-6 py-11 px-10 md:px-28 md:py-16 lg:px-28 lg:py-20 mt-6 bg-white text-black">
      <h2 className="text-2xl text-black font-semibold mb-4">Add New Company Recruitment</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Company Name */}
        <div>
          <label className="block mb-2 text-xl text-slate-950" htmlFor="companyName">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            className="w-full p-2 border rounded-md bg-slate-300"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
        </div>

        {/* Job Position */}
        <div>
          <label className="block mb-2 text-xl text-slate-950" htmlFor="jobPosition">
            Job Position
          </label>
          <input
            type="text"
            id="jobPosition"
            className="w-full p-2 border rounded-md bg-slate-300"
            value={jobPosition}
            onChange={(e) => setJobPosition(e.target.value)}
            required
          />
        </div>

        {/* Eligibility Criteria (Job Description) */}
        <div className="md:col-span-2">
          <label className="block mb-2 text-xl text-slate-950" htmlFor="eligibilityCriteria">
            Job Description
          </label>
          <textarea
            id="eligibilityCriteria"
            className="w-full p-2 border rounded-md bg-slate-300"
            value={eligibilityCriteria}
            onChange={(e) => setEligibilityCriteria(e.target.value)}
            rows={4}
            required
          ></textarea>
        </div>

        {/* Package Offered */}
        <div>
          <label className="block mb-2 text-xl text-slate-950" htmlFor="packageOffered">
            Package Offered
          </label>
          <input
            type="text"
            id="packageOffered"
            className="w-full p-2 border rounded-md bg-slate-300"
            value={packageOffered}
            onChange={(e) => setPackageOffered(e.target.value)}
            required
          />
        </div>

        {/* Application Deadline */}
        <div>
          <label className="block mb-2 text-xl text-slate-950" htmlFor="applicationDeadline">
            Application Deadline
          </label>
          <input
            type="date"
            id="applicationDeadline"
            className="w-full p-2 border rounded-md bg-slate-300"
            value={applicationDeadline}
            onChange={(e) => setApplicationDeadline(e.target.value)}
            required
          />
        </div>

        {/* Minimum GPA */}
        <div>
          <label className="block mb-2 text-xl text-slate-950" htmlFor="minGPA">
            Minimum GPA Required
          </label>
          <input
            type="text"
            id="minGPA"
            className="w-full p-2 border rounded-md bg-slate-300"
            value={minGPA}
            onChange={(e) => setMinGPA(e.target.value)}
            required
          />
        </div>

        {/* Registration Link */}
        <div>
          <label className="block mb-2 text-xl text-slate-950" htmlFor="registrationLink">
            Registration Link
          </label>
          <input
            type="text"
            id="registrationLink"
            className="w-full p-2 border rounded-md bg-slate-300"
            value={registrationLink}
            onChange={(e) => setRegistrationLink(e.target.value)}
            required
          />
        </div>

        {/* KT Allowed */}
        <div>
          <label className="block mb-2 text-xl text-slate-950">KT Allowed?</label>
          <div className="flex items-center text-black">
            <input
              type="checkbox"
              id="ktAllowed"
              className="mr-2 w-8 h-8"
              checked={ktAllowed}
              onChange={(e) => setKtAllowed(e.target.checked)}
            />
            <label htmlFor="ktAllowed">Yes, KT is allowed</label>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md md:col-span-2">
          Add Recruitment
        </button>
      </form>
    </div>
  );
};

export default facultyProtectRoute(RecruitmentForm);
