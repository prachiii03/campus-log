// "use client";

// import React, { useState } from "react";

// const FileUploadForm = () => {
//     const url = "http://res.cloudinary.com/dump4bxcm/image/upload/v1735790398/qgzvhbxth1ragqx2dgqj.pdf";
//     const [file, setFile] = useState<File | null>(null);
//     const [fileType, setFileType] = useState<string>("pdf");
//     const [title, setTitle] = useState<string>("");
//     const [uploadUrl, setUploadUrl] = useState<string>("");

//     const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//         if (event.target.files) {
//             setFile(event.target.files[0]);
//         }
//     };

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();

//         if (!file) {
//             alert("Please select a file to upload");
//             return;
//         }

//         const formData = new FormData();
//         formData.append("file", file);

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

//     return (
//         <div className="p-8 bg-gray-100 min-h-screen mt-12">
//             <h1 className="text-2xl font-bold mb-4">Upload File</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-4">
//                     <label className="block font-semibold mb-1">Title</label>
//                     <input
//                         type="text"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         className="border rounded px-4 py-2 w-full"
//                         required
//                     />
//                 </div>
//                 <div className="mb-4">
//                     <label className="block font-semibold mb-1">File Type</label>
//                     <select
//                         value={fileType}
//                         onChange={(e) => setFileType(e.target.value)}
//                         className="border rounded px-4 py-2 w-full"
//                     >
//                         <option value="pdf">PDF</option>
//                         <option value="docx">DOCX</option>
//                         <option value="excel">Excel</option>
//                     </select>
//                 </div>
//                 <div className="mb-4">
//                     <label className="block font-semibold mb-1">File</label>
//                     <input type="file" onChange={handleFileChange} className="w-full" required />
//                 </div>
//                 <button
//                     type="submit"
//                     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 >
//                     Upload
//                 </button>
//             </form>

//             <div className="mt-6">
//                 <h2 className="text-lg font-semibold">File URL</h2>
//                 <a
//                     href={url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-blue-500 underline"
//                 >
//                     Open PDF
//                 </a>

//                 <div className="mt-4">
//                     <h2 className="text-lg font-semibold">PDF Preview</h2>
//                     <iframe
//                         src={url}
//                         className="w-full h-[500px] border mt-2"
//                         title="PDF Preview"
//                     ></iframe>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FileUploadForm;


"use client";

import React, { useState } from "react";
interface FileUploadFormProps {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;

}
const FileUploadForm: React.FC<FileUploadFormProps> = ({ setShowModal }) => {
    const [file, setFile] = useState<File | null>(null);
    const [fileType, setFileType] = useState<string>("pdf");
    const [title, setTitle] = useState<string>("");
    const [uploadUrl, setUploadUrl] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(true); // Manage modal visibility

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!file) {
            alert("Please select a file to upload");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch("/api/upload", {
                method: "POST",
                body: formData,
            });

            if (!response.ok) {
                throw new Error("File upload failed");
            }

            const data = await response.json();
            setUploadUrl(data.url);
            alert("File uploaded successfully!");
        } catch (error) {
            console.error("Error uploading file:", error);
        }
    };

    const onClose = () => {
        setIsOpen(false); // Close the modal
    };

    return isOpen ? (
        <div className="fixed inset-0 flex items-start justify-center bg-white bg-opacity-50 z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-[90%] sm:w-[500px] mt-[80px] relative">
                <h1 className="text-2xl font-bold mb-4 text-center">Upload File</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block font-semibold mb-1">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="border rounded px-4 py-2 w-full"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-1">File Type</label>
                        <select
                            value={fileType}
                            onChange={(e) => setFileType(e.target.value)}
                            className="border rounded px-4 py-2 w-full"
                        >
                            <option value="pdf">PDF</option>
                            <option value="docx">DOCX</option>
                            <option value="excel">Excel</option>
                            <option value="url">Url</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block font-semibold mb-1">File</label>
                        <input type="file" onChange={handleFileChange} className="w-full" required />
                    </div>
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
