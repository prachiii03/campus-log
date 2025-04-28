

"use client";
import { useEffect, useState } from 'react';
import { useCollege } from '@/context/college-name-provider/CollegeNameProvider';
import { toast } from 'react-toastify';
import { IconUpload, IconCamera, IconUser, IconUserPlus, IconSchool, IconCheck } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { getAllDepartmentsAction, getAllSubjects } from '@/actions/departments';
import { onboardNewFacultyAction } from '@/actions/faculties';
import { onBoardNewStudentAction } from '@/actions/students';

export interface FacultyData {
    facultyId: string;
    firstName: string;
    middleName: string;
    lastName: string;
    gender: string;
    highestEducation: string;
    address: string;
    email: string;
    contactNo: string;
    username: string;
    departmentId: string;
    subjects: string[];
    profileImage: string | null;
    password: string
}

export interface StudentData {
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    prnNo: string,
    program: string,
    course: string,
    class: string,
    motherName: string,
    dob: string,
    gender: string,
    bloodGroup: string,
    religion: string,
    category: string,
    contactNo: string,
    address: string,
    city: string,
    state: string,
    district: string,
    motherTongue: string,
    familyIncome: string,

    departmentId: string,
    currentStudingYear: string,
    password: string,
    currentGPA: number,
    activeBacklog: number,
    currentSemister: string;
    adharNO: string;
    subjects: string[];
}
interface Department {
    department_id: string;
    department_name: string;
}

interface Subject {
    subject_id: string;
    subject_name: string;
    required_hours: number;
    habe_practicals: boolean;
    faculty_id: string;
    semester: string | null;
}
const OnboardFacultyPage = () => {
    const { collegeName } = useCollege();
    const [activeTab, setActiveTab] = useState<'faculty' | 'student'>('faculty');
    const [facultyData, setFacultyData] = useState<FacultyData>({
        facultyId: '',
        firstName: '',
        middleName: '',
        lastName: '',
        gender: 'Male',
        highestEducation: '',
        address: '',
        email: '',
        contactNo: '',
        username: '',
        departmentId: '',
        subjects: [],
        profileImage: null,
        password: ''
    });
    const [currentSubject, setCurrentSubject] = useState('');
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const [isFacultySubmitted, setIsFacultySubmitted] = useState(false);
    const [isStudentSubmitted, setIsStudentSubmitted] = useState(false);
    const [departments, setDepartments] = useState<Department[] | null>(null);
    const [selectedDepartment, setSelectedDepartment] = useState<Department>();
    const [allSubjects, setallSubjects] = useState<Subject[]>()
    const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>()
    useEffect(() => {
        getAllDepartments();
        getAllSubjectss();
    }, [])
    const getAllDepartments = async () => {
        try {
            const response = await getAllDepartmentsAction();
            console.log("this is responnse getAllDepartmentsAction  : ", response)
            if (response && response.success && response.data && response.data?.length > 0) {
                setDepartments(response.data);
            } else {
                toast.error(response.message);
            }
        } catch (error) {

        }
    }

    const getAllSubjectss = async () => {
        const result = await getAllSubjects();
        if (result && result.success && result.data && result.data?.length > 0) {
            setallSubjects(result.data);
        } else {
            toast.error(result.message);
        }
    }
    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone: string) => {
        return /^[0-9]{10}$/.test(phone);
    };

    const validateFacultyId = (id: string) => {
        return id.length >= 3 && id.length <= 36;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFacultyData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (!file.type.match('image.*')) {
                toast.error('Please upload an image file');
                return;
            }
            if (file.size > 2 * 1024 * 1024) {
                toast.error('Image size should be less than 2MB');
                return;
            }
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
                setFacultyData(prev => ({
                    ...prev,
                    profileImage: reader.result as string
                }));
            };
            reader.readAsDataURL(file);
        }
    };


    const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>, subject: Subject) => {
        if (e.target.checked) {
            setSelectedSubjects((prev) => [...(prev || []), subject]);
            setFacultyData((prev) => (

                {
                    ...prev,
                    subjects: [...(prev.subjects || []), subject.subject_id]
                }
            ))
        } else {
            setSelectedSubjects((prev) => (prev || []).filter((s) => s.subject_id !== subject.subject_id));
        }
    };



    const handleFacultySubmit = async (e: React.FormEvent) => {
        e.preventDefault();


        console.log("this is faculty data after submit button : ", facultyData)
        // Validation
        // if (!validateFacultyId(facultyData.facultyId)) {
        //     toast.error('Please enter a valid Faculty ID (UUID format)');
        //     return;
        // }
        // if (!facultyData.firstName || !facultyData.lastName) {
        //     toast.error('First Name and Last Name are required');
        //     return;
        // }
        // if (!validateEmail(facultyData.email)) {
        //     toast.error('Please enter a valid email address');
        //     return;
        // }
        // if (!validatePhone(facultyData.contactNo)) {
        //     toast.error('Please enter a valid 10-digit phone number');
        //     return;
        // }
        // if (facultyData.subjects.length === 0) {
        //     toast.error('Please add at least one subject');
        //     return;
        // }

        try {
            // Simulate API call
            const res = await onboardNewFacultyAction(facultyData);
            console.log("this is response after onboard faculty : ", res)
            setIsFacultySubmitted(true);
            toast.success('Faculty onboarded successfully!');
        } catch (error) {
            toast.error('Failed to onboard faculty. Please try again.');
            console.error('Error onboarding faculty:', error);
        }
    };

    // Faculty Success Component
    const FacultySuccess = () => (
        <div className="min-h-screen  bg-gray-50 pt-20 pb-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <IconCheck className="text-green-600 dark:text-green-300" size={40} />
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Faculty Onboarded Successfully!</h2>
                <p className="text-lg text-gray-600  mb-8">
                    {facultyData.firstName} {facultyData.lastName} has been successfully added to the system.
                </p>
                <button
                    onClick={() => {
                        setIsFacultySubmitted(false);
                        setFacultyData({
                            facultyId: '',
                            firstName: '',
                            middleName: '',
                            lastName: '',
                            gender: 'Male',
                            highestEducation: '',
                            address: '',
                            email: '',
                            contactNo: '',
                            username: '',
                            departmentId: '',
                            subjects: [],
                            profileImage: null,
                            password: ''
                        });
                        setImagePreview(null);
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300"
                >
                    Onboard Another Faculty
                </button>
            </div>
        </div>
    );

    // Student Success Component
    const StudentSuccess = () => (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl p-8 text-center">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                    className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <IconCheck className="text-green-600 dark:text-green-300" size={40} />
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Student Onboarded Successfully!</h2>
                <p className="text-lg text-gray-600  mb-8">
                    Student has been successfully added to the system.
                </p>
                <button
                    onClick={() => {
                        setIsStudentSubmitted(false);
                        setActiveTab('student');
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300"
                >
                    Onboard Another Student
                </button>
            </div>
        </div>
    );

    // Early returns for success states
    if (isFacultySubmitted) return <FacultySuccess />;
    if (isStudentSubmitted) return <StudentSuccess />;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 pt-20 pb-10 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                {/* Tab selector */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex rounded-md shadow-sm bg-white">
                        <button
                            onClick={() => setActiveTab('faculty')}
                            className={`px-6 py-3 text-sm font-medium rounded-lg transition-all ${activeTab === 'faculty' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md' : 'bg-transparent text-black  hover:bg-gray-100'}`}
                        >
                            <div className="flex items-center">
                                <IconUser className="mr-2" size={18} />
                                Onboard Faculty
                            </div>
                        </button>
                        <button
                            onClick={() => setActiveTab('student')}
                            className={`px-6 py-3 text-sm font-medium rounded-lg transition-all ${activeTab === 'student' ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md' : 'bg-transparent text-black hover:bg-gray-100'}`}
                        >
                            <div className="flex items-center">
                                <IconUserPlus className="mr-2" size={18} />
                                Onboard Student
                            </div>
                        </button>
                    </div>
                </div>

                {activeTab === 'faculty' ? (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700"
                    >
                        <div className="p-6 sm:p-8">
                            <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center justify-center">
                                <IconUser className="mr-2 text-blue-500" size={30} />
                                Faculty Onboarding Form
                            </h2>

                            <form onSubmit={handleFacultySubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-black">
                                    {/* Profile Image Upload */}
                                    {/* <div className="md:col-span-2">
                                        <div className="flex flex-col items-center">
                                            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-gray-200 to-gray-300  mb-4 overflow-hidden border-4 border-white  shadow-lg">
                                                {imagePreview ? (
                                                    <img
                                                        src={imagePreview}
                                                        alt="Profile Preview"
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex items-center justify-center h-full text-gray-400">
                                                        <IconUser size={48} />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex space-x-4">
                                                <label className="cursor-pointer bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg flex items-center shadow-md transition-all">
                                                    <IconUpload size={18} className="mr-2" />
                                                    Upload Image
                                                    <input
                                                        type="file"
                                                        className="hidden"
                                                        accept="image/*"
                                                        onChange={handleImageUpload}
                                                    />
                                                </label>
                                                <button
                                                    type="button"
                                                    className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-600 dark:hover:to-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg flex items-center shadow-md transition-all"
                                                >
                                                    <IconCamera size={18} className="mr-2" />
                                                    Take Photo
                                                </button>
                                            </div>
                                        </div>
                                    </div> */}



                                    {/* Name Fields */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700  mb-1">
                                            First Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            value={facultyData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                            placeholder="e.g. John"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700  mb-1">
                                            Middle Name
                                        </label>
                                        <input
                                            type="text"
                                            name="middleName"
                                            value={facultyData.middleName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white bg-white"
                                            placeholder="e.g. Den"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700  mb-1">
                                            Last Name <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            value={facultyData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                            placeholder="e.g. Smith"
                                            required
                                        />
                                    </div>

                                    {/* Gender */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700  mb-1">
                                            Gender <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="gender"
                                            value={facultyData.gender}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-white bg-gray-200  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all text-black"
                                            required
                                        >
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>

                                    {/* Highest Education */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700  mb-1">
                                            Highest Education <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="highestEducation"
                                            value={facultyData.highestEducation}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                            placeholder="e.g. B Tech"
                                            required
                                        />
                                    </div>

                                    {/* Address */}
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-medium text-gray-700  mb-1">
                                            Address <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            name="address"
                                            value={facultyData.address}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                            rows={3}
                                            placeholder="e.g. Delhi"
                                            required
                                        />
                                    </div>

                                    {/* Contact Information */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700  mb-1">
                                            Email <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={facultyData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                            placeholder="e.g. johnsmith@gmail.com"
                                            required
                                        />
                                        {facultyData.email && !validateEmail(facultyData.email) && (
                                            <p className="mt-1 text-sm text-red-500">Please enter a valid email</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700  mb-1">
                                            Contact No <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            name="contactNo"
                                            value={facultyData.contactNo}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                            placeholder="e.g. 9845673425"
                                            required
                                        />
                                        {facultyData.contactNo && !validatePhone(facultyData.contactNo) && (
                                            <p className="mt-1 text-sm text-red-500">Please enter a valid 10-digit number</p>
                                        )}
                                    </div>

                                    {/* Username */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700  mb-1">
                                            Username <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            name="username"
                                            value={facultyData.username}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                            placeholder="e.g. johnsmith"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700  mb-1">
                                            Password <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            value={facultyData.password}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                            placeholder="e.g. John"
                                            required
                                        />
                                    </div>

                                    {/* Department  */}
                                    <div>
                                        <label htmlFor="department" className="block text-sm font-medium bg-white text-black mb-1">
                                            Department ID <span className="text-red-500">*</span>
                                        </label>
                                        <select
                                            name="department"
                                            id="department"
                                            className="mt-1 block px-4 py-2 w-full rounded-md text-black bg-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            onChange={(e) => {
                                                const selectedDepartmentId = e.target.value;
                                                setFacultyData((prev) => ({
                                                    ...prev,
                                                    departmentId: selectedDepartmentId,
                                                }));
                                            }}
                                        >
                                            <option value="">Select a department</option>
                                            {departments && departments.map((dept) => (
                                                <option key={dept.department_id} value={dept.department_id}>
                                                    {dept.department_name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>


                                    {/* Subjects */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Select Subjects <span className="text-red-500">*</span>
                                        </label>
                                        <div className="border p-3 rounded-md max-h-60 overflow-y-auto">
                                            {allSubjects && allSubjects.map((subject) => (
                                                <div key={subject.subject_id} className="flex items-center mb-2">
                                                    <input
                                                        type="checkbox"
                                                        id={subject.subject_id}
                                                        value={subject.subject_id}
                                                        onChange={(e) => handleSubjectChange(e, subject)}
                                                        className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                                    />
                                                    <label htmlFor={subject.subject_id} className="ml-2 block text-sm text-gray-700">
                                                        {subject.subject_name}
                                                    </label>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Debug: Show selected subjects */}
                                        <div className="mt-4">
                                            <h2 className="text-sm font-semibold mb-1">Selected Subjects:</h2>
                                            <ul className="list-disc list-inside text-sm text-gray-600">
                                                {selectedSubjects && selectedSubjects.map((subj) => (
                                                    <li key={subj.subject_id}>{subj.subject_name}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                                    >
                                        Onboard Faculty
                                    </button>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                ) : (
                    <StudentOnboardForm
                        setActiveTab={setActiveTab}
                        collegeName={"sgmcoe"}
                        setIsStudentSubmitted={setIsStudentSubmitted}
                    />
                )}
            </div>
        </div>
    );
};

const StudentOnboardForm = ({
    setActiveTab,
    collegeName,
    setIsStudentSubmitted
}: {
    setActiveTab: (tab: 'faculty' | 'student') => void,
    collegeName: string,
    setIsStudentSubmitted: (value: boolean) => void
}) => {
    const [studentData, setStudentData] = useState<StudentData>({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        prnNo: '',
        program: '',
        course: '',
        class: '',
        motherName: '',
        dob: '',
        gender: 'Male',
        bloodGroup: '',
        religion: '',
        category: 'General',
        contactNo: '',
        address: '',
        city: '',
        state: '',
        district: '',
        motherTongue: '',
        familyIncome: '',
        departmentId: '',
        currentStudingYear: "Final Year",
        currentGPA: 0,
        password: '',
        activeBacklog: 0,
        currentSemister: '',
        adharNO: '',
        subjects: []

    });
    const [departments, setDepartments] = useState<Department[]>()

    const [allSubjects, setallSubjects] = useState<Subject[]>()
    const [selectedSubjects, setSelectedSubjects] = useState<Subject[]>()
    useEffect(() => {
        getAllDepartments();
        getAllSubjectss();
    }, [])

    const getAllSubjectss = async () => {
        const result = await getAllSubjects();
        if (result && result.success && result.data && result.data?.length > 0) {
            setallSubjects(result.data);
        } else {
            toast.error(result.message);
        }
    }

    const getAllDepartments = async () => {
        try {
            const response = await getAllDepartmentsAction();
            console.log("this is responnse getAllDepartmentsAction  : ", response)
            if (response && response.success && response.data && response.data?.length > 0) {
                setDepartments(response.data);
            } else {
                toast.error(response.message);
            }
        } catch (error) {

        }
    }

    const handleSubjectChange = (e: React.ChangeEvent<HTMLInputElement>, subject: Subject) => {
        if (e.target.checked) {
            setSelectedSubjects((prev) => [...(prev || []), subject]);
            setStudentData((prev) => (

                {
                    ...prev,
                    subjects: [...(prev.subjects || []), subject.subject_id]
                }
            ))
        } else {
            setSelectedSubjects((prev) => (prev || []).filter((s) => s.subject_id !== subject.subject_id));
        }
    };

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validatePhone = (phone: string) => {
        return /^[0-9]{10}$/.test(phone);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setStudentData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleStudentFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("this is student data after onboard : ", studentData)
        // Validation
        if (!studentData.firstName) {
            toast.error('First Name is required');
            return;
        }
        if (!validateEmail(studentData.email)) {
            toast.error('Please enter a valid email address');
            return;
        }
        if (!studentData.prnNo) {
            toast.error('PRN No is required');
            return;
        }
        if (!validatePhone(studentData.contactNo)) {
            toast.error('Please enter a valid 10-digit phone number');
            return;
        }
        if (!studentData.dob) {
            toast.error('Date of Birth is required');
            return;
        }

        try {
            // Simulate API call
            await onBoardNewStudentAction(studentData)
            setIsStudentSubmitted(true);
            toast.success('Student onboarded successfully!');
        } catch (error) {
            toast.error('Failed to onboard student. Please try again.');
            console.error('Error onboarding student:', error);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white shadow-2xl rounded-xl overflow-hidden border border-gray-200 "
        >
            <div className="p-6 sm:p-8">
                <h2 className="text-3xl font-semibold text-black  mb-6 flex items-center justify-center">
                    <IconSchool className="mr-2 text-green-500" size={32} />
                    Student Onboarding Form
                </h2>

                <form onSubmit={handleStudentFormSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-black">
                        {/* Basic Information */}
                        <div className="md:col-span-2">
                            <h3 className="text-lg  font-medium text-gray-800 mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                                Personal Information
                            </h3>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                First Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                value={studentData.firstName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                placeholder="e.g. John Doe"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                Middle Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="middleName"
                                value={studentData.middleName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                placeholder="e.g. John Doe"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                Last Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                value={studentData.lastName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                placeholder="e.g. John Doe"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                Email ID <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={studentData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                placeholder="e.g. john@example.com"
                                required
                            />
                            {studentData.email && !validateEmail(studentData.email) && (
                                <p className="mt-1 text-sm text-red-500">Please enter a valid email</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                ADHAR NO <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="adhar"
                                name="adharNO"
                                value={studentData.adharNO}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                placeholder="e.g. john@example.com"
                                required
                            />

                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                PRN No <span className="text-red-500">*</span>
                                <span className="text-xs text-gray-500 ml-1">(University identification number)</span>
                            </label>
                            <input
                                type="text"
                                name="prnNo"
                                value={studentData.prnNo}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                placeholder="e.g. 2023BCS1234 or STU-001"
                                required
                                pattern=".{4,20}" // Minimum 4 chars, maximum 20
                                title="ID must be between 4 and 20 characters"
                            />
                        </div>
                        <div>
                            <label htmlFor="department" className="block text-sm font-medium bg-white text-black mb-1">
                                Department ID <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="department"
                                id="department"
                                className="mt-1 block px-4 py-2 w-full rounded-md text-black bg-white border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                onChange={(e) => {
                                    const selectedDepartmentId = e.target.value;
                                    setStudentData((prev) => ({
                                        ...prev,
                                        departmentId: selectedDepartmentId,
                                    }));
                                }}
                            >
                                <option value="">Select a department</option>
                                {departments && departments.map((dept) => (
                                    <option key={dept.department_id} value={dept.department_id}>
                                        {dept.department_name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                Contact No <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="contactNo"
                                value={studentData.contactNo}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                placeholder="e.g. 9876543210"
                                required
                            />
                            {studentData.contactNo && !validatePhone(studentData.contactNo) && (
                                <p className="mt-1 text-sm text-red-500">Please enter a valid 10-digit number</p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                Date of Birth <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="date"
                                name="dob"
                                value={studentData.dob}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                Gender <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="gender"
                                value={studentData.gender}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                required
                            >
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                Blood Group
                            </label>
                            <select
                                name="bloodGroup"
                                value={studentData.bloodGroup}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                            >
                                <option value="">Select</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                Category <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="category"
                                value={studentData.category}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                required
                            >
                                <option value="General">General</option>
                                <option value="OBC">OBC</option>
                                <option value="SC">SC</option>
                                <option value="ST">ST</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        {/* Academic Information */}
                        <div className="md:col-span-2 mt-4">
                            <h3 className="text-lg font-bold font-medium text-gray-800 mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                                Academic Information
                            </h3>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                Program <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="program"
                                value={studentData.program}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                required
                            >
                                <option value="">Select Program</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="MCA">MCA</option>
                                <option value="M.Tech">M.Tech</option>
                            </select>
                        </div>

                        {/* <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                Course <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="course"
                                value={studentData.course}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                required
                            >
                                <option value="">Select Course</option>
                                <option value="Computer Science">Computer Science</option>
                                <option value="Electrical Engineering">Electrical Engineering</option>
                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                                <option value="Civil Engineering">Civil Engineering</option>
                                <option value="Electronics & Telecommunication">Electronics & Telecommunication</option>
                            </select>
                        </div> */}

                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                Class <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="class"
                                value={studentData.class}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                required
                            >
                                <option value="">Select Class</option>
                                <option value="FY B.Tech">FY B.Tech</option>
                                <option value="SY B.Tech">SY B.Tech</option>
                                <option value="TY B.Tech">TY B.Tech</option>
                                <option value="Final Year B.Tech">Final Year B.Tech</option>
                                <option value="FY MCA">FY MCA</option>
                                <option value="SY MCA">SY MCA</option>
                                <option value="Final Year MCA">Final Year MCA</option>
                                <option value="FY M.Tech">FY M.Tech</option>
                                <option value="Final Year M.Tech">Final Year M.Tech</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                MCurrent Semester <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="currentSemister"
                                value={studentData.currentSemister}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                placeholder="e.g. Mary Doe"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Select Subjects <span className="text-red-500">*</span>
                            </label>
                            <div className="border p-3 rounded-md max-h-60 overflow-y-auto">
                                {allSubjects && allSubjects.map((subject) => (
                                    <div key={subject.subject_id} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={subject.subject_id}
                                            value={subject.subject_id}
                                            onChange={(e) => handleSubjectChange(e, subject)}
                                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                        />
                                        <label htmlFor={subject.subject_id} className="ml-2 block text-sm text-gray-700">
                                            {subject.subject_name}
                                        </label>
                                    </div>
                                ))}
                            </div>

                            {/* Debug: Show selected subjects */}
                            <div className="mt-4">
                                <h2 className="text-sm font-semibold mb-1">Selected Subjects:</h2>
                                <ul className="list-disc list-inside text-sm text-gray-600">
                                    {selectedSubjects && selectedSubjects.map((subj) => (
                                        <li key={subj.subject_id}>{subj.subject_name}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Family Information */}
                        <div className="md:col-span-2 mt-4">
                            <h3 className="text-lg font-bold font-medium text-gray-800 mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                                Family Information
                            </h3>
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                Mother Full Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="motherName"
                                value={studentData.motherName}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                placeholder="e.g. Mary Doe"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                Mother Tongue
                            </label>
                            <input
                                type="text"
                                name="motherTongue"
                                value={studentData.motherTongue}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                placeholder="e.g. English"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                Password
                            </label>
                            <input
                                type="text"
                                name="password"
                                value={studentData.password}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                placeholder="e.g. English"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                Family Income (₹)
                            </label>
                            <input
                                type="number"
                                name="familyIncome"
                                value={studentData.familyIncome}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                placeholder="e.g. 500000"
                            />
                        </div>

                        {/* Address Information */}
                        <div className="md:col-span-2 mt-4">
                            <h3 className="text-lg font-bold font-medium text-gray-800 mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">
                                Address Information
                            </h3>
                        </div>

                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-black  mb-1">
                                Address <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                name="address"
                                value={studentData.address}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                rows={3}
                                placeholder="Full address"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                City <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="city"
                                value={studentData.city}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                placeholder="e.g. Mumbai"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                State <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="state"
                                value={studentData.state}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                placeholder="e.g. Maharashtra"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-black  mb-1">
                                District
                            </label>
                            <input
                                type="text"
                                name="district"
                                value={studentData.district}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border border-gray-300  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500  transition-all bg-white"
                                placeholder="e.g. Mumbai Suburban"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-8 py-3 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-medium rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                        >
                            Onboard Student
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default OnboardFacultyPage;