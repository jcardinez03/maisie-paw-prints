import { useEffect, useState } from "react";
import { getReviews } from "../functions/getReviews";
export interface ReviewProps {
    id: number;
    name: string;
    product: string;
    rating: number;
    details: string;
}
export default function useReviews() {
    const [reviews, setReviews] = useState<ReviewProps[]>([]);

    useEffect(() => {
        const fetchReviews = async () => {
            const data = await getReviews();
    
            setReviews(data);
        }

        fetchReviews();
    },[]);

    return { reviews }
}