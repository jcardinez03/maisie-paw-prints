import { useState } from "react"

export const useShowPassword = () => {
    
    const [showPassword, setShowPassword] = useState(false);

    return {showPassword, setShowPassword};
}