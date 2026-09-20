import { useState } from "react";
import { Order } from "../admin/orders/hooks/useOrders";
export default function usePagination(orders: Order[]) {
    const [currentPage, setCurrentPage] = useState(1);
    const ordersPerPage = 10;

    const startIndex = (currentPage - 1) * ordersPerPage;
    const endIndex = startIndex + ordersPerPage;

    const currentOrders = orders.slice(startIndex, endIndex);

    const nextPage = () => {
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1);
        }
    }
    const previousPage = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const totalPages = Math.ceil(orders.length/ordersPerPage);
    return {currentPage, setCurrentPage, totalPages, currentOrders, nextPage, previousPage}
}