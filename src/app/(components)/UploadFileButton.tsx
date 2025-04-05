import React, { useState } from "react";
import axios from "axios";
interface UploadFileButtonProps {
    setImage: React.Dispatch<React.SetStateAction<string | null>>;

}
const UploadFileButton: React.FC<UploadFileButtonProps> = ({ setImage }) => {
    const preset_key = "visiting-card";
    const cloud_name = "dump4bxcm";
    //const [image, setImage] = useState<string | null>(null);

    const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) {
            console.log("No file selected");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", preset_key);

        axios
            .post(`https://api.cloudinary.com/v1_1/${cloud_name}/auto/upload`, formData)
            .then((res: { data: { secure_url: React.SetStateAction<string | null>; }; }) => {
                console.log(res.data);
                setImage(res.data.secure_url); // Save uploaded image URL
            })
            .catch((err) => console.error("Upload error: ", err));
    };

    return (
        <div className="flex text-center m-auto">
            <label htmlFor="file-upload" className="flex text-center m-auto">
                Upload File
            </label>
            <input
                id="file-upload"
                type="file"
                name="image"
                onChange={handleFile}
                style={{ display: "none" }}
            />
        </div>
    );
};

export default UploadFileButton;