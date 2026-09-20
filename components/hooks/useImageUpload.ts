import { useState } from "react";

export const useImageUpload = () => {
    const [uploadImages, setUploadImages] = useState<File[]>([]);


    return {uploadImages, setUploadImages};
}