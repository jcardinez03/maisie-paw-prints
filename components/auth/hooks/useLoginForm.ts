import { useState } from "react";
import { useRouter } from "next/navigation";
type Message = {
  email?: string;
  password?: string;
  login?: string
};


export const useLoginForm = () => {
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    });
    
    const [message, setMessage] = useState<Message>({});

    // validate form
    const validate = () => {
        let valid = true;
        if(loginForm.email === ""){
            setMessage((prev) => ({
                ...prev,
                email: "Please enter your email"
            }));
            valid = false;
        }

        if(loginForm.password === ""){
            setMessage((prev)=> ({
                ...prev,
                password: "Please enter your password"
            }));
            valid = false;
        }

        return valid;
    }

    const router = useRouter();
    return {
        loginForm,
        setLoginForm,
        message,
        setMessage,
        validate,
        router
    }
}
