import { useEffect, useState } from "react";
import { getOrders } from "../functions/getOrders";
export interface Order {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    product_id: number;
    details: string;
}
export default function useOrders() {
    const [orders, setOrders] = useState<Order[]>([]);
    
    useEffect(() => {
        const fetchOrders = async () => {
            const data = await getOrders();
            setOrders(data);
        }

        fetchOrders();
    }, []);

    return {orders}
}