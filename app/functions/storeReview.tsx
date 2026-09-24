interface ReviewForm {
    name: string;
    product: string;
    rating: number;
    details: string;
    image: File[];
}

export const storeReview = async (reviewForm: ReviewForm) => {
    try {
        const formData = new FormData();
    
        formData.append('name', reviewForm.name);
        formData.append('product', reviewForm.product);
        formData.append('rating', String(reviewForm.rating));
        formData.append('details', reviewForm.details);
    
        reviewForm.image.forEach((image) => {
            formData.append('image[]', image)
        });
    
        const response = await fetch(`/api/reviews`, {
            method: "POST",
            body: formData
        });
    
        const data = await response.json();
     
        if(!response.ok){
            throw new Error(data.message || 'Something went wrong.')
        }

        return data;
    } catch(error) {
        console.error(error);
        throw error;
    }
}