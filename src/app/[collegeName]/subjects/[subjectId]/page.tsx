"use client";
import React, { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import { FileText, File, Link, Book, Download } from "lucide-react"; // Importing icons
import { getAllNotesOfSubjectAction } from "@/actions/stude-materials/notes";
import { getSubjectNameBySubjectIsAction } from "@/actions/subjects";
import { getAllSyllabusBySubjectIdAction } from "@/actions/stude-materials/syllabus";
import { getAllTestlinkForSUbjectAction } from "@/actions/stude-materials/test";

const SubjectSourcePage = () => {
    const pathname = usePathname();
    const pathSegments = pathname.split('/');
    const subjectId = pathSegments[pathSegments.length - 1]; // Get the last segment as subjectId

    console.log(subjectId); // Check if it's correctly extracted
    const [syllabusFiles, setSyllabusFiles] = useState<{ title: string | null, url: string | null }[]>();
    const [notesFiles, setNotesFiles] = useState<{ title: string | null, url: string | null }[]>();
    const [testLinks, setTestLinks] = useState<{
        test_link: string;
        start_ts: Date;
        duration: number;
        title: string;
    }[]>();
    const [isLoading, setIsLoading] = useState(true); // Loading state
    const [subjectName, setSubjectName] = useState("")

    useEffect(() => {
        getAllNotes()
        getSubjectName()
        getAllSyllabus()
        getAllTestLink()
        setTimeout(() => {
            setIsLoading(false); // Simulating a delay before content loads
        }, 5000); // 2 seconds delay
    }, []);

    const getAllNotes = async () => {
        const data = await getAllNotesOfSubjectAction(subjectId);
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
        if (!data.success) {
            return;
        }
        if (data.data)
            setSubjectName(data.data)
    }

    const getAllSyllabus = async () => {
        const data = await getAllSyllabusBySubjectIdAction(subjectId);
        if (data.data && data.data.length > 0) {
            setSyllabusFiles(data.data.map((syllabus: { title: string | null; doc_link: string | null }) => ({
                title: syllabus.title,
                url: syllabus.doc_link
            })))
        }
    }

    const getAllTestLink = async () => {
        const data = await getAllTestlinkForSUbjectAction(subjectId);
        if (data.data && data.data.length > 0) {
            setTestLinks(data.data.filter((test: { title: string | null }) => test.title !== null) as { test_link: string; start_ts: Date; duration: number; title: string }[])
        }
    }

    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-blue-50 to-purple-100 py-10 mt-16">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                    {subjectName} Resources
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Syllabus Section */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-indigo-50 transition duration-300 ease-in-out">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
                            <Book size={24} className="text-blue-500" /> Syllabus
                        </h2>
                        {isLoading ? (
                            <div className="animate-pulse space-y-2">
                                <div className="h-4 bg-blue-200 rounded w-3/4"></div>
                                <div className="h-4 bg-blue-200 rounded w-1/2"></div>
                            </div>
                        ) : (
                            <ul className="text-gray-700 text-sm space-y-2">
                                {syllabusFiles && syllabusFiles.map((file, index) => (
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
                            </ul>
                        )}
                    </div>

                    {/* Notes Section */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-indigo-50 transition duration-300 ease-in-out">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
                            <File size={24} className="text-green-500" /> Notes
                        </h2>
                        {isLoading ? (
                            <div className="animate-pulse space-y-2">
                                <div className="h-4 bg-green-200 rounded w-3/4"></div>
                                <div className="h-4 bg-green-200 rounded w-1/2"></div>
                            </div>
                        ) : (
                            <ul className="text-gray-700 text-sm space-y-2">
                                {notesFiles && notesFiles.map((file, index) => (
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
                            </ul>
                        )}
                    </div>

                    {/* Test Links Section */}
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:bg-indigo-50 transition duration-300 ease-in-out">
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2 text-gray-900">
                            <Link size={24} className="text-red-500" /> Test Links
                        </h2>
                        {isLoading ? (
                            <div className="animate-pulse space-y-2">
                                <div className="h-4 bg-red-200 rounded w-3/4"></div>
                                <div className="h-4 bg-red-200 rounded w-1/2"></div>
                            </div>
                        ) : (
                            <ul className="text-gray-700 text-sm space-y-2">
                                {testLinks && testLinks.map((link, index) => (
                                    <li key={index} className="bg-red-50 p-2 rounded-md flex items-center gap-2">
                                        <Link size={18} className="text-gray-600" />
                                        <a href={link.test_link} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                                            {link.title}
                                        </a>
                                        duration: {link.duration} minutes
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubjectSourcePage;
