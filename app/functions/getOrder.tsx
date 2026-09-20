export const getOrder = async (orderId: string) => {
    const response = await fetch (`http://localhost:8000/api/orders/${orderId}`,{
        method: "GET",
        headers : {
            Accept: "application/json"
        }
    })

    const data = await response.json();

    return data;
}