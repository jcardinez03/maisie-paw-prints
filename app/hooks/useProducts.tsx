import { useEffect, useState } from "react";
import { getProducts } from "../functions/getProducts";
export interface Product {
    id:number;
    name:string;
    category_id:number;
}
export default function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await getProducts();
            setProducts(data);
        }

        fetchProducts();
    }, []);

    return { products }
}