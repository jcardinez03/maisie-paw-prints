export const getProducts = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
        method:"GET",
        headers: {
            "Accept":"application/json"
        }
    });

    const data = await response.json();

    return data;
}