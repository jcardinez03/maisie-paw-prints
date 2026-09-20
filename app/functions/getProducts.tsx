export const getProducts = async () => {
    const response = await fetch('http://localhost:8000/api/products', {
        method:"GET",
        headers: {
            "Accept":"application/json"
        }
    });

    const data = await response.json();

    return data;
}