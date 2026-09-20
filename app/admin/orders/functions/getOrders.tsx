export const getOrders = async () => {
    const response = await fetch('http://localhost:8000/api/orders', {
        method:"GET",
        headers : {
            "Content-Type" : "application/json"
        }
    })
    const data = response.json();

    return data;
}