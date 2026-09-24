export const getProducts = async () => {
    const response = await fetch(`/api/products`, {
        method:"GET",
        headers: {
            "Accept":"application/json"
        }
    });

    const data = await response.json();

    return data;
}