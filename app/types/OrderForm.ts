export interface OrderForm {
    name: string;
    email: string;
    phone_number: string;
    product_id: number;
    details: string;
    image: File[];
}

export const initialForm: OrderForm = {
    name: "",
    email: "",
    phone_number:"",
    product_id:0,
    details:"",
    image:[]
}
