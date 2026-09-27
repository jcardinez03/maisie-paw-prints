type OrderProps = {
    id: number,
    status: string
}

export const updateStatus = async ({id, status} : OrderProps) => {
    const response = await fetch(`api/orders/${id}`, {
        method: "PATCH", 
        headers : {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({status})
    })

    const data = await response.json();

    return data;
}