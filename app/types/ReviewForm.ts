export interface ReviewForm {
    name: string;
    product: string;
    rating: number;
    details: string;
    image: File[];
}

export const initialForm: ReviewForm = {
    name: "",
    product: "",
    rating:5,
    details:"",
    image:[]
}
