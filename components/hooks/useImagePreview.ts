import { useEffect, useState } from "react"

export const useImagePreview = () => {
    const [image, setImage] = useState<File[]>([]);
    const [imagePreview, setImagePreview] = useState<string[]>([]);

    useEffect (() => {
        if(image.length === 0) {
            setImagePreview([]);
            return
        }

        const imageUrl = image.map((file) =>
            URL.createObjectURL(file))
        
        setImagePreview(imageUrl);
        

        return () => {
            imageUrl.forEach((url) => {
                URL.revokeObjectURL(url);
            })
        }
    }, [image]);

    return {image, setImage, imagePreview};
} 