"use client";

import FileUploadForm from "@/app/(components)/FileUploadForm";
import React from "react";

interface ModalProps {
    onClose: () => void;
    title: string;
    // children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, title }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
                <h2 className="text-xl font-bold mb-4">{title}</h2>
                {/* <FileUploadForm /> */}

                {/* {children} */}
                {/* <button
                    className="mt-4 w-full bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition"
                    onClick={onClose}
                >
                    Close
                </button> */}
            </div>
        </div>
    );
};

export default Modal;
