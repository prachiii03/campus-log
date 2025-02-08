"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { FileText, File, Link, Book, Download } from "lucide-react"; // Importing icons

const SubjectSourcePage = () => {
    const { CollegeName, SubjectId } = useParams();
    const [syllabusFiles, setSyllabusFiles] = useState<string[]>(["Syllabus1.pdf"]);
    const [notesFiles, setNotesFiles] = useState<string[]>(["Notes1.pdf"]);
    const [testLinks, setTestLinks] = useState<string[]>(["https://test.com/sample"]);
    const [isLoading, setIsLoading] = useState(true); // Loading state

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false); // Simulating a delay before content loads
        }, 2000); // 2 seconds delay
    }, []);

    return (
        <div className="min-h-screen w-full bg-gradient-to-r from-blue-50 to-purple-100 py-10 mt-16">
            <div className="max-w-6xl mx-auto px-6">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
                    {SubjectId} - {CollegeName} Resources
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
                                {syllabusFiles.map((file, index) => (
                                    <li key={index} className="flex justify-between items-center bg-blue-50 p-2 rounded-md">
                                        <a href={file} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-2">
                                            <FileText size={18} className="text-gray-600" />
                                            {file.split("/").pop()}
                                        </a>
                                        <a href={file} download className="text-gray-700 hover:text-gray-900">
                                            <Download size={18} />
                                        </a>
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
                                {notesFiles.map((file, index) => (
                                    <li key={index} className="flex justify-between items-center bg-green-50 p-2 rounded-md">
                                        <a href={file} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline flex items-center gap-2">
                                            <FileText size={18} className="text-gray-600" />
                                            {file.split("/").pop()}
                                        </a>
                                        <a href={file} download className="text-gray-700 hover:text-gray-900">
                                            <Download size={18} />
                                        </a>
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
                                {testLinks.map((link, index) => (
                                    <li key={index} className="bg-red-50 p-2 rounded-md flex items-center gap-2">
                                        <Link size={18} className="text-gray-600" />
                                        <a href={link} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">
                                            {link}
                                        </a>
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
