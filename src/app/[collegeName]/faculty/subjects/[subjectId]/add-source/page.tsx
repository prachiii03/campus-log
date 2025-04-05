"use client";

import React, { useState, useEffect } from "react";
import FileUploadForm from "@/app/(components)/FileUploadForm";
import Modal from "./Modal";
import { useParams, usePathname } from "next/navigation";
import { getAllTestlinkForSUbjectAction } from "@/actions/stude-materials/test";
import { getAllSyllabusBySubjectIdAction } from "@/actions/stude-materials/syllabus";
import { getSubjectNameBySubjectIsAction } from "@/actions/subjects";
import { getAllNotesOfSubjectAction } from "@/actions/stude-materials/notes";
import { Download, FileText, Link } from "lucide-react";




type Faculty = {
    faculty_id: string;
    first_name: string;
    middle_name?: string;
    last_name: string;
    gender: string;
    highest_education: string;
    address: string;
    email: string;
    contact_no?: string;
    username: string;
    department_id: string;
    subjects: string[]; // Consider whether you need this field.
    subject: Array<{
        subject_id: string;
        subject_name: string;
    }>; // Change from [ ... ] to Array<...> for flexibility.
};
const SkeletonLoader = () => (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md animate-pulse">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="space-y-2">
            <div className="h-4 bg-gray-300 rounded w-full"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
        </div>
        <div className="mt-4 h-10 bg-gray-400 rounded"></div>
    </div>
);

const AddSourcePage = () => {
    const [syllabusFiles, setSyllabusFiles] = useState<{ title: string | null, url: string | null }[]>();
    const [notesFiles, setNotesFiles] = useState<{ title: string | null, url: string | null }[]>();
    const [testLinks, setTestLinks] = useState<{
        test_link: string;
        start_ts: Date;
        duration: number;
        title: string;
    }[]>();

    const pathname = usePathname();
    const pathSegments = pathname.split('/');
    const subjectId = pathSegments[pathSegments.length - 2];
    const [showModal, setShowModal] = useState<boolean>(false);
    const [uploadType, setUploadType] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [subjectName, setSubjectName] = useState("")

    // const [syllabusFiles, setSyllabusFiles] = useState<string[]>([]);
    // const [notesFiles, setNotesFiles] = useState<string[]>([]);
    // const [testLinks, setTestLinks] = useState<string[]>([]);
    const [faculty, setFaculty] = useState<Faculty>({
        faculty_id: "",
        first_name: "",
        middle_name: "",
        last_name: "",
        gender: "",
        highest_education: "",
        address: "",
        email: "",
        contact_no: "",
        username: "",
        department_id: "",
        subjects: [""],
        subject: [
            {
                subject_id: "",
                subject_name: "",
            },
        ],
    });

    useEffect(() => {
        getAllNotes()
        getSubjectName()
        getAllSyllabus()
        getAllTestLink()


    }, []);


    const getAllNotes = async () => {
        const data = await getAllNotesOfSubjectAction(subjectId);
        console.log(data.data)
        if (!data.success) {
            return;
        }
        if (data.data && data.data.length > 0)
            setNotesFiles(data.data.map((note: { title: string | null; doc_url: string | null }) => ({
                title: note.title,
                url: note.doc_url
            })))

    }

    const getSubjectName = async () => {
        const data = await getSubjectNameBySubjectIsAction(subjectId);
        console.log(data.data)
        if (!data.success) {
            return;
        }
        if (data.data)
            setSubjectName(data.data)
        setLoading(false)
    }

    const getAllSyllabus = async () => {
        const data = await getAllSyllabusBySubjectIdAction(subjectId);
        console.log(data.data)
        if (data.data && data.data.length > 0) {
            setSyllabusFiles(data.data.map((syllabus: { title: string | null; doc_link: string | null }) => ({
                title: syllabus.title,
                url: syllabus.doc_link
            })))
            setLoading(false)
        }
    }

    const getAllTestLink = async () => {
        const data = await getAllTestlinkForSUbjectAction(subjectId);
        if (data.data && data.data.length > 0) {
            setTestLinks(data.data.filter((link: { title: string | null }) => link.title !== null) as { test_link: string; start_ts: Date; duration: number; title: string; }[])
            setLoading
                (false)
        }

    }

    useEffect(() => {
        const storedFaculty = sessionStorage.getItem("facultySession");
        if (storedFaculty) {
            const parsedFaculty = JSON.parse(storedFaculty);
            setFaculty(parsedFaculty);
        }
    }, []);

    const handleOpenModal = (type: string) => {
        setUploadType(type);
        setShowModal(true);
    };

    return (
        <div className="min-h-screen max-w-6xl mx-auto p-8 mt-16 bg-gradient-to-br from-blue-50 to-purple-100 rounded-xl shadow-lg">
            <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
                📂 Resources
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Syllabus Section */}
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                        <h2 className="text-xl font-semibold mb-4 text-indigo-700 flex items-center gap-2">
                            📘 Syllabus
                        </h2>
                        <ul className="text-gray-700 text-sm space-y-2">
                            {syllabusFiles &&
                                <>
                                    {syllabusFiles.map((file, index) => (
                                        <li key={index} className="flex justify-between items-center bg-blue-50 p-2 rounded-md">
                                            {file.url &&

                                                <a href={file.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2">
                                                    <FileText size={18} className="text-gray-600" />
                                                    {file.title}
                                                </a>
                                            }
                                            <Download className="hover:cursor-pointer" size={18} />
                                        </li>
                                    ))}
                                </>
                            }
                        </ul>
                        <button
                            className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition"
                            onClick={() => handleOpenModal("Syllabus")}
                        >
                            Upload Syllabus
                        </button>
                    </div>
                )}

                {/* Notes Section */}
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                        <h2 className="text-xl font-semibold mb-4 text-green-700 flex items-center gap-2">
                            📝 Notes
                        </h2>
                        <ul className="text-gray-700 text-sm space-y-2">
                            {notesFiles &&
                                <>
                                    {notesFiles.map((file, index) => (
                                        <li key={index} className="flex justify-between items-center bg-green-50 p-2 rounded-md">
                                            {file.url &&
                                                <a href={file?.url} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline flex items-center gap-2">
                                                    <FileText size={18} className="text-gray-600" />
                                                    {file.title}
                                                </a>
                                            }
                                            <Download className="hover:cursor-pointer" size={18} />

                                        </li>
                                    ))}
                                </>
                            }
                        </ul>
                        <button
                            className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
                            onClick={() => handleOpenModal("Notes")}
                        >
                            Upload Notes
                        </button>
                    </div>
                )}

                {/* Test Links Section */}
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                        <h2 className="text-xl font-semibold mb-4 text-red-700 flex items-center gap-2">
                            🔗 Test Links
                        </h2>
                        <ul className="text-gray-700 text-sm space-y-2">
                            {testLinks && <>
                                {testLinks.map((link, index) => (
                                    <li key={index} className="bg-red-50 p-2 rounded-md flex items-center gap-2">


                                        <a href={link.test_link} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                                            {link.title}
                                        </a>

                                        duration : {link.duration}
                                    </li>
                                ))}
                            </>}
                        </ul>
                        <button
                            className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
                            onClick={() => handleOpenModal("Test")}
                        >
                            Upload Test Link
                        </button>
                    </div>
                )}
            </div>

            {/* Modal Component */}
            {showModal && (
                <>
                    {subjectId && <FileUploadForm setShowModal={setShowModal} faculty_id={faculty.faculty_id} subject_id={subjectId} uploadType={uploadType} />
                    }
                </>
            )}
        </div>
    );
};

export default AddSourcePage;
