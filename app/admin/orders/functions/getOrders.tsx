export const getOrders = async () => {
    const response = await fetch(`/api/orders`, {
        method:"GET",
        headers : {
            "Content-Type" : "application/json"
        }
    })
    const data = response.json();

    return data;
}