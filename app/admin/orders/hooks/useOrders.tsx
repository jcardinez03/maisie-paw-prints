import { useEffect, useState } from "react";
import { getOrders } from "../functions/getOrders";
import { useLoading } from "@/components/hooks/useLoading";

export interface Order {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    product_id: number;
    details: string;
    product: {
        id: number;
        name: string;
    }
    status:string;
    created_at: string;
}
export default function useOrders() {
    const [orders, setOrders] = useState<Order[]>([]);
    const { setIsLoading } = useLoading();
    useEffect(() => {
        const fetchOrders = async () => {
            setIsLoading(true);
            try {
                const data = await getOrders();
                setOrders(data);

            } catch (error) {
                console.error(error);
            } finally {

                setIsLoading(false)

            }
        }

        fetchOrders();

        const interval = setInterval(fetchOrders, 30000);

        return () => clearInterval(interval);
    }, []);

    return { orders }
}