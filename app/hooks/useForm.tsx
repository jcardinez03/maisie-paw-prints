import { useState } from "react";

export default function useForm<T>(initialForm: T) {
    const [form, setForm] = useState<T>(initialForm);

    
    return {form, setForm};
}