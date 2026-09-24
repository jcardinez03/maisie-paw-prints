import { getToken } from "./getToken";

export const getUser = async () => {
    const token = getToken();
    // attach the token to the request
    const response = await fetch(`/api/user`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
        },
    });

    return response;
};
