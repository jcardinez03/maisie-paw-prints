"use client";

import Image from "next/image";
import { Eye, EyeClosed } from "lucide-react";
import { useLoginForm } from "./hooks/useLoginForm";
import { login } from "./functions/login";
import { saveToken } from "./functions/saveToken";
import { getToken } from "./functions/getToken";
import { getUser } from "./functions/getUser";
import { useShowPassword } from "./hooks/useShowPassword";
type LoginFormProps = {
    dancingScript: string;
    pacifico: string;
}

export const LoginForm = ({pacifico, dancingScript} : LoginFormProps) => {
    const {loginForm, setLoginForm, message, setMessage, validate, router} = useLoginForm();
    const {showPassword, setShowPassword} = useShowPassword();
    return (
        <div className="bg-[#111] h-screen pt-10">
            <div className="border border-white rounded-2xl max-w-xl mx-auto text-white">
                <div className="px-12 py-10">
                    
                    <div className="relative flex items-center justify-center flex-col text-center">
                        <div className="relative"> 
                            <Image src="/images/icon.png" loading="eager" width={80} height={80} alt="Maisie Image" className="relative rounded-full z-10"/>
                            <div className="absolute -inset-5 bg-pink/30 rounded-full blur-lg z-0" />
                        </div>
                        <h1 className={`font-bold tracking-wide uppercase mt-5 text-3xl`}>Welcome Back!</h1>
                    </div>

                    <form className="space-y-8 mt-4" onSubmit={async (e) => {
                            e.preventDefault();
                            
                            if(!validate()) return;

                            try{
                                await saveToken(loginForm.email, loginForm.password);
                                router.push('/admin');
                            } catch(error) {
                                setMessage((prev) => ({
                                    ...prev,
                                    login: "Invalid email or password"  
                                }))
                            }
                        }}>
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" name="email" id="email" className="w-full border mt-1.5 border-white/15 rounded-xl px-4 py-2.5 text-sm text-white bg-white/5 placeholder-white/25 focus:outline-none focus:border-pink/60 focus:ring-2 focus:ring-pink/15 transition-all" onChange={(e) => {
                                setLoginForm((prev) => ({
                                    ...prev,
                                    email: e.target.value
                                }));
                            }}/>
                        </div>
                        {
                            message.email &&
                            <div className="text-red-500">{message.email}</div>
                        }
                        <div className="relative">
                            <label htmlFor="password">Password</label>
                            <input type={showPassword ? 'text' : 'password'} name="password" id="password" className="w-full border mt-1.5 border-white/15 rounded-xl px-4 py-2.5 text-sm text-white bg-white/5 placeholder-white/25 focus:outline-none focus:border-pink/60 focus:ring-2 focus:ring-pink/15 transition-all" onChange={(e) => {
                                setLoginForm((prev) => ({
                                    ...prev,
                                    password: e.target.value
                                }));
                            }}/>
                            {showPassword ?
                            <Eye className="absolute right-4 top-1/2 translate-y-0.5" onClick={() => setShowPassword(
                                (prev) => !prev
                            )}/>
                            :
                            <EyeClosed className="absolute right-4 top-1/2 translate-y-0.5" onClick={() => setShowPassword(
                                (prev) => !prev
                            )}/>
                            }
                            
                        </div>
                        {
                            message.password &&
                            <div className="text-red-500">{message.password}</div>
                        }
                        <button className="w-full bg-pink text-center text-black py-3 rounded-2xl font-bold text-lg tracking-wider hover:-translate-y-0.5 transition-all duration-300">Sign In</button>
                        {
                            message.login &&
                            <div className="text-red-500">{message.login}</div>
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}