export const getOrders = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders`, {
        method:"GET",
        headers : {
            "Content-Type" : "application/json"
        }
    })
    const data = response.json();

    return data;
}