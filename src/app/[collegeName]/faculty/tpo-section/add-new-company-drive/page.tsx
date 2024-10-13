'use client'
import { useEffect, useState } from 'react';
import RecruitmentFormSkeleton from './Form-Skeleton';
import facultyProtectRoute from '@/app/(components)/utils/protect-route/FacultyProtectRoute';

const RecruitmentForm = ()=> {
    const [loading, setLoading] = useState(true);
    const [companyName, setCompanyName] = useState('');
    const [jobPosition, setJobPosition] = useState('');
    const [dateOfRecruitment, setDateOfRecruitment] = useState('');
    const [eligibilityCriteria, setEligibilityCriteria] = useState('');
    const [packageOffered, setPackageOffered] = useState('');
    const [applicationDeadline, setApplicationDeadline] = useState('');
    const [aggregateGPA, setAggregateGPA] = useState('');
    const [liveBacklogs, setLiveBacklogs] = useState('');
    const [minGPA, setMinGPA] = useState('');
    const [ktAllowed, setKtAllowed] = useState(false);
    const [selectedStudents, setSelectedStudents] = useState('');
    const [ktCount, setKtCount] = useState('');

    useEffect(() => {
        // Simulating an API call or loading process
        setTimeout(() => {
            setLoading(false);
        }, 2000); // Set to 2 seconds for the skeleton to show
    }, []);

    if (loading) {
        return <RecruitmentFormSkeleton />; // Render skeleton while loading
    }

    const handleSubmit = (e:any) => {
        e.preventDefault();
        // Handle form submission logic
        console.log({
        companyName,
        jobPosition,
        dateOfRecruitment,
        eligibilityCriteria,
        packageOffered,
        applicationDeadline,
        aggregateGPA,
        liveBacklogs,
        minGPA,
        ktAllowed,
        ktCount,
        selectedStudents,
        });
        // Reset form fields after submission
        setCompanyName('');
        setJobPosition('');
        setDateOfRecruitment('');
        setEligibilityCriteria('');
        setPackageOffered('');
        setApplicationDeadline('');
        setAggregateGPA('');
        setLiveBacklogs('');
        setMinGPA('');
        setKtAllowed(false);
        setSelectedStudents('');
        setKtCount('');
    };

    return (
        <div className="space-y-6 py-11 px-10 md:px-28 md:py-16 lg:px-28 lg:py-20 mt-6 bg-white">
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
                    className="w-full p-2 border rounded-md bg-slate-600"
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
                    className="w-full p-2 border rounded-md bg-slate-600"
                    value={jobPosition}
                    onChange={(e) => setJobPosition(e.target.value)}
                    required
                />
            </div>

            {/* Date of Recruitment */}
            <div>
                <label className="block mb-2 text-xl text-slate-950" htmlFor="dateOfRecruitment">
                    Date of Recruitment
                </label>
                <input
                    type="date"
                    id="dateOfRecruitment"
                    className="w-full p-2 border rounded-md bg-slate-600"
                    value={dateOfRecruitment}
                    onChange={(e) => setDateOfRecruitment(e.target.value)}
                    required
                />
            </div>

            {/* Eligibility Criteria */}
            <div className="md:col-span-2">
                <label className="block mb-2 text-xl text-slate-950" htmlFor="eligibilityCriteria">
                    Eligibility Criteria
                </label>
                <textarea
                    id="eligibilityCriteria"
                    className="w-full p-2 border rounded-md bg-slate-600"
                    value={eligibilityCriteria}
                    onChange={(e) => setEligibilityCriteria(e.target.value)}
                    rows={4}
                    required
                ></textarea>
            </div>

            {/* Package Offered */}
            <div>
                <label className="block mb-2 text-xl text-slate-950" htmlFor="packageOffered">
                    Package Offered (Lakh/Year)
                </label>
                <input
                    type="text"
                    id="packageOffered"
                    className="w-full p-2 border rounded-md bg-slate-600"
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
                    className="w-full p-2 border rounded-md bg-slate-600"
                    value={applicationDeadline}
                    onChange={(e) => setApplicationDeadline(e.target.value)}
                    required
                />
            </div>

            {/* Aggregate GPA */}
            <div>
                <label className="block mb-2 text-xl text-slate-950" htmlFor="aggregateGPA">
                    Aggregate GPA
                </label>
                <input
                    type="text"
                    id="aggregateGPA"
                    className="w-full p-2 border rounded-md bg-slate-600"
                    value={aggregateGPA}
                    onChange={(e) => setAggregateGPA(e.target.value)}
                    required
                />
            </div>

            {/* Live Backlogs */}
            <div>
                <label className="block mb-2 text-xl text-slate-950" htmlFor="liveBacklogs">
                    Live Backlogs
                </label>
                <select
                    id="liveBacklogs"
                    className="w-full p-2 border rounded-md bg-slate-600"
                    value={liveBacklogs}
                    onChange={(e) => setLiveBacklogs(e.target.value)}
                >
                    <option value="" disabled>
                        Select Number of Backlogs
                    </option>
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            {/* Minimum GPA */}
            <div>
                <label className="block mb-2 text-xl text-slate-950" htmlFor="minGPA">
                    Minimum GPA Required
                </label>
                <input
                    type="text"
                    id="minGPA"
                    className="w-full p-2 border rounded-md bg-slate-600"
                    value={minGPA}
                    onChange={(e) => setMinGPA(e.target.value)}
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
            <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md md:col-span-2"
            >
                Add Recruitment
            </button>
        </form>
        </div>
    );
}

export default facultyProtectRoute(RecruitmentForm);