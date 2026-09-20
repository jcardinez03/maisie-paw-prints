export const getOrder = async (orderId: string) => {
    const response = await fetch (`${process.env.NEXT_PUBLIC_API_URL}/api/orders/${orderId}`,{
        method: "GET",
        headers : {
            Accept: "application/json"
        }
    })

    const data = await response.json();

    return data;
}