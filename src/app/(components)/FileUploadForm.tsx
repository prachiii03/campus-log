// "use client";

// import React, { useState } from "react";

// interface FileUploadFormProps {
//     setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
//     uploadType: string;
// }

// const FileUploadForm: React.FC<FileUploadFormProps> = ({ setShowModal, uploadType }) => {
//     const [file, setFile] = useState<File | null>(null);
//     const [fileType, setFileType] = useState<string>("pdf");
//     const [title, setTitle] = useState<string>("");
//     const [uploadUrl, setUploadUrl] = useState<string>("");
//     const [duration, setDuration] = useState<string>(""); 
//     const [startTime, setStartTime] = useState<string>(""); 
//     const [testLink, setTestLink] = useState<string>(""); // New state for Test Link
//     const [isOpen, setIsOpen] = useState<boolean>(true);

//     const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         if (event.target.files) {
//             setFile(event.target.files[0]);
//         }
//     };

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();

//         if (uploadType === "Test" && !testLink) {
//             alert("Please enter a Test Link.");
//             return;
//         }

//         const formData = new FormData();
//         if (file) formData.append("file", file);
//         formData.append("title", title);
//         formData.append("fileType", fileType);

//         if (uploadType === "Test") {
//             formData.append("duration", duration);
//             formData.append("startTime", startTime);
//             formData.append("testLink", testLink); // Append test link
//         }

//         try {
//             const response = await fetch("/api/upload", {
//                 method: "POST",
//                 body: formData,
//             });

//             if (!response.ok) {
//                 throw new Error("File upload failed");
//             }

//             const data = await response.json();
//             setUploadUrl(data.url);
//             alert("File uploaded successfully!");
//         } catch (error) {
//             console.error("Error uploading file:", error);
//         }
//     };

//     const onClose = () => {
//         setIsOpen(false);
//         setShowModal(false);
//     };

//     return isOpen ? (
//         <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 z-50">
//             <div className="bg-white text-black p-8 rounded-lg shadow-lg w-[90%] sm:w-[500px] mt-[80px] relative">
//                 <h1 className="text-2xl font-bold mb-4 text-center">Upload {uploadType}</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-4">
//                         <label className="block font-semibold mb-1">Title</label>
//                         <input
//                             type="text"
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                             className="border rounded px-4 py-2 w-full bg-white text-black"
//                             required
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block font-semibold mb-1">File Type</label>
//                         <select
//                             value={fileType}
//                             onChange={(e) => setFileType(e.target.value)}
//                             className="border rounded px-4 py-2 w-full bg-white text-black"
//                         >
//                             <option value="pdf">PDF</option>
//                             <option value="docx">DOCX</option>
//                             <option value="excel">Excel</option>
//                             <option value="url">URL</option>
//                         </select>
//                     </div>

//                     {/* Conditionally render for Test uploads */}
//                     {uploadType === "Test" && (
//                         <>
//                             <div className="mb-4">
//                                 <label className="block font-semibold mb-1">Duration (in minutes)</label>
//                                 <input
//                                     type="number"
//                                     value={duration}
//                                     onChange={(e) => setDuration(e.target.value)}
//                                     className="border rounded px-4 py-2 w-full bg-white text-black"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block font-semibold mb-1">Start Time</label>
//                                 <input
//                                     type="datetime-local"
//                                     value={startTime}
//                                     onChange={(e) => setStartTime(e.target.value)}
//                                     className="border rounded px-4 py-2 w-full bg-white text-black"
//                                     required
//                                 />
//                             </div>
//                             <div className="mb-4">
//                                 <label className="block font-semibold mb-1">Test Link</label>
//                                 <input
//                                     type="url"
//                                     value={testLink}
//                                     onChange={(e) => setTestLink(e.target.value)}
//                                     className="border rounded px-4 py-2 w-full bg-white text-black"
//                                     placeholder="Enter Test Link"
//                                     required
//                                 />
//                             </div>
//                         </>
//                     )}

//                     {(uploadType === "Syllabus" || uploadType === "Notes") && (
//                         <>
//                             <div className="mb-4">
//                                 <label className="block font-semibold mb-1">File</label>
//                                 <input type="file" onChange={handleFileChange} className="w-full" />
//                             </div>
//                         </>
//                     )}

//                     <button
//                                 type="submit"
//                                 className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
//                             >
//                                 Upload
//                             </button>
//                 </form>

//                 {uploadUrl && (
//                     <div className="mt-6 text-center">
//                         <h2 className="text-lg font-semibold">File URL</h2>
//                         <a href={uploadUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                             Open File
//                         </a>
//                     </div>
//                 )}

//                 {uploadUrl && uploadUrl.endsWith(".pdf") && (
//                     <div className="mt-4">
//                         <h2 className="text-lg font-semibold text-center">PDF Preview</h2>
//                         <iframe
//                             src={uploadUrl}
//                             className="w-full h-[500px] border mt-2"
//                             title="PDF Preview"
//                         ></iframe>
//                     </div>
//                 )}

//                 <button
//                     className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-xl"
//                     onClick={onClose}
//                 >
//                     ✖
//                 </button>
//             </div>
//         </div>
//     ) : null;
// };

// export default FileUploadForm;



"use client";

import React, { useEffect, useState } from "react";
import UploadFileButton from "./UploadFileButton";
import { createNewSyllabusAction } from "@/actions/stude-materials/syllabus";
import { Notes, Syllabus, Test } from "@/types/types";
import { createNewTestAction } from "@/actions/stude-materials/test";
import { createNewNotesAction } from "@/actions/stude-materials/notes";

interface FileUploadFormProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    uploadType: string;
    faculty_id: string;
    subject_id: string;
}


const FileUploadForm: React.FC<FileUploadFormProps> = ({ setShowModal, uploadType, faculty_id, subject_id }) => {
    const [fileType, setFileType] = useState<string>("pdf");
    const [title, setTitle] = useState<string>("");
    const [uploadUrl, setUploadUrl] = useState<string>("");
    const [duration, setDuration] = useState<string>("");
    const [startTime, setStartTime] = useState<string>("");
    const [testLink, setTestLink] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const [presignedUrl, setpresignedUrl] = useState<string | null>("");


    useEffect(() => {
        if (presignedUrl) {
            setUploadUrl(presignedUrl);
        }
    }, [presignedUrl]);

    const handleNotesSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        //if (!file) return alert("Please upload a file.");

        const formData = new FormData();
        if (presignedUrl) {
            formData.append("doc_link", presignedUrl);

        }
        formData.append("title", title);
        formData.append("fileType", fileType);
        formData.append("faculty_id", faculty_id);
        formData.append("subject_id", subject_id);
        console.log({ formData })
        const dataToInser: Notes = {
            subject_id: subject_id,
            faculty_id: faculty_id,
            title: title,
            doc_url: uploadUrl
        }
        const data = await createNewNotesAction(dataToInser);
        if (!data.success) {
            console.log(data.message)
            return;
        }

        console.log(data.data);
        window.location.reload();

        setShowModal(false)


        //await uploadFile(formData);
    };

    const handleSyllabusSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        //if (!file) return alert("Please upload a file.");
        // const formData = new FormData();
        // if (presignedUrl) {
        //     formData.append("doc_link", presignedUrl);
        // }
        // formData.append("title", title);
        // formData.append("fileType", fileType);
        // formData.append("faculty_id", faculty_id);
        // formData.append("subject_id", subject_id);'

        console.log({ faculty_id })
        console.log({ subject_id })
        const dataToUpload: Syllabus = {
            id: 0,
            subject_id: subject_id,
            faculty_id: faculty_id,
            reference_book_link: "",
            practical_link: "",
            title: title,
            doc_link: uploadUrl
        }
        console.log({ dataToUpload })
        const data = await createNewSyllabusAction(dataToUpload);
        if (!data.success) {
            console.log('faild to upload file');
            console.log(data.message)
            return
        }
        setShowModal(false)
        window.location.reload();
        // console.log({ formData })
        // await uploadFile(formData);
    };

    const handleTestSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        //if (!testLink) return alert("Please enter a Test Link.");

        const formData = new FormData();
        formData.append("title", title);
        formData.append("duration", duration);
        formData.append("startTime", startTime);
        formData.append("testLink", testLink);
        formData.append("faculty_id", faculty_id);
        formData.append("subject_id", subject_id);

        const dataToUpload: Test = {
            id: 0,
            subject_id: subject_id,
            faculty_id: faculty_id,
            title: title,
            test_link: testLink,
            start_ts: startTime,
            duration: parseInt(duration)
        }
        const data = await createNewTestAction(dataToUpload);
        if (!data.success) {
            console.log("error while createing a test : ", data.message)
            return
        }
        console.log('test created')
        console.log({ dataToUpload })
        setShowModal(false)
        window.location.reload();

        //await uploadFile(formData);
    };

    const uploadFile = async (formData: FormData) => {
        try {
            // const response = await fetch("/api/upload", {
            //     method: "POST",
            //     body: formData,
            // });

            // if (!response.ok) throw new Error("File upload failed");

            // const data = await response.json();
            // setUploadUrl(data.url);
            // alert("Upload successful!");
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    useEffect(() => {
        console.log({ title })
    }, [title])

    const onClose = () => {
        setIsOpen(false);
        setShowModal(false);
    };

    return isOpen ? (
        <div className="fixed inset-0 flex items-start justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white text-black p-8 rounded-lg shadow-lg w-[90%] sm:w-[500px] mt-[80px] relative">
                <h1 className="text-2xl font-bold mb-4 text-center">Upload {uploadType}</h1>
                <form onSubmit={
                    uploadType === "Notes" ? handleNotesSubmit :
                        uploadType === "Syllabus" ? handleSyllabusSubmit :
                            handleTestSubmit
                }>
                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Title</label>
                        <input
                            id="title"
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border rounded px-4 py-2 w-full bg-white text-black"
                            required
                        />
                    </div>

                    {uploadType === "Test" && (
                        <>
                            <div className="mb-4">
                                <label className="block font-semibold mb-1">Duration (in minutes)</label>
                                <input
                                    type="number"
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                    className="border rounded px-4 py-2 w-full bg-white text-black"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold mb-1">Start Time</label>
                                <input
                                    type="datetime-local"
                                    value={startTime}
                                    onChange={(e) => setStartTime(e.target.value)}
                                    className="border rounded px-4 py-2 w-full bg-white text-black"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block font-semibold mb-1">Test Link</label>
                                <input
                                    type="url"
                                    value={testLink}
                                    onChange={(e) => setTestLink(e.target.value)}
                                    className="border rounded px-4 py-2 w-full bg-white text-black"
                                    placeholder="Enter Test Link"
                                    required
                                />
                            </div>
                        </>
                    )}

                    {(uploadType === "Syllabus" || uploadType === "Notes") && (
                        <div className="w-full text-center justify-center items-center hover:cursor-pointer mb-10 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                        >
                            <UploadFileButton setImage={setpresignedUrl} />
                        </div>
                    )}

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                    >
                        Upload
                    </button>
                </form>

                {uploadUrl && (
                    <div className="mt-6 text-center">
                        <h2 className="text-lg font-semibold">File URL</h2>
                        <a href={uploadUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                            Open File
                        </a>
                    </div>
                )}

                {uploadUrl && uploadUrl.endsWith(".pdf") && (
                    <div className="mt-4">
                        <h2 className="text-lg font-semibold text-center">PDF Preview</h2>
                        <iframe
                            src={uploadUrl}
                            className="w-full h-[500px] border mt-2"
                            title="PDF Preview"
                        ></iframe>
                    </div>
                )}

                <button
                    className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 text-xl"
                    onClick={onClose}
                >
                    ✖
                </button>
            </div>
        </div>
    ) : null;
};

export default FileUploadForm;
