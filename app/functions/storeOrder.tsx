
interface OrderForm {
    name: string;
    email: string;
    phone_number: string;
    product_id: number;
    details: string;
    image: File[];
    number_of_items: number;
}

export const storeOrder = async (orderForm : OrderForm) => {
    try {
        const formData = new FormData();
    
        formData.append("name", orderForm.name);
        formData.append("email", orderForm.email);
        formData.append("phone_number", orderForm.phone_number);
        formData.append("product_id", String(orderForm.product_id));
        formData.append("details", orderForm.details);
        formData.append("number_of_items", String(orderForm.number_of_items));
    
        orderForm.image.forEach((image) => {
            formData.append('image[]', image);
        });
    
        const response = await fetch(`/api/orders`, {
            method:"POST",
            body: formData
        });
    
        const data = await response.json();
    
        if(!response.ok){
            throw new Error(data.message || 'Something went wrong');
        }

        return data;
    } catch(error) {
        console.error(error)
        throw error;
    }
}