export const getReviews = async () => {
    const response = await fetch (`/api/reviews`, {
        method:"GET",
        headers: {
            "Accept" : "application/json"
        }

    });
    const data = await response.json();

    return data;
}