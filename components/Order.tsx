"use client";
import Image from "next/image";
import { useImagePreview } from "./hooks/useImagePreview";
import useForm from "@/app/hooks/useForm";
import useProducts from "@/app/hooks/useProducts";
import { storeOrder } from "@/app/functions/storeOrder";
import { initialForm } from "@/app/types/OrderForm";
import { useRouter } from "next/navigation";
import useMessage from "@/app/hooks/useMessage";
import { X } from "lucide-react";
import { useLoading } from "./hooks/useLoading";
import { useState } from "react";
import { OrderModal } from "./modals/OrderModal";
type OrderProps = {
    pacifico: string;
    dancingScript: string;
}

export const Order = ({ pacifico, dancingScript }: OrderProps) => {
    const { image, setImage, imagePreview } = useImagePreview();
    const { form, setForm } = useForm(initialForm);
    const { products } = useProducts();
    const router = useRouter();
    const { message, setMessage } = useMessage();
    const { setIsLoading } = useLoading();
    const [orderModalOpen, setOrderModalOpen] = useState(false);
    console.log(orderModalOpen);
    return (
        <>
            <div className="bg-pink/8 border-t border-pink/20 py-20 relative overflow-hidden" id="order">
                <div className="absolute inset-0 bg-pink/5">
                    {/* for paw background */}

                </div>
                {orderModalOpen &&
                    <OrderModal setOrderModalOpen={setOrderModalOpen} />
                }
                <div className="max-w-2xl mx-auto px-5 text-center relative">
                    <Image src="/images/icon.png" alt="Maisie Icon" width={50} height={50} className="rounded-full mx-auto" />
                    <h2 className={`${pacifico} text-4xl md:text-5xl mt-4 mb-4 text-white`}>
                        Ready to <span className="text-pink">Print?</span>
                    </h2>
                    <p className="text-white/55 text-lg leading-relaxed mb-4">
                        Send us your design and let's make something amazing together! DM us on social media or fill out our order form.
                    </p>
                    <button type="button" className="text-xl text-pink rounded-2xl px-4 py-2 border border-pink mx-auto w-fit mb-8 hover:bg-pink hover:text-white transition-all duration-300" onClick={() => setOrderModalOpen(true)}>
                        Order Instructions
                    </button>
                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 text-left">
                        <h3 className="text-pink text-2xl mb-6 text-center">
                            Order Form
                        </h3>
                        <div className="space-y-4">
                            <form onSubmit={(e) => {
                                e.preventDefault();
                                setIsLoading(true);

                                storeOrder(form).then(() => {
                                    setForm(initialForm);
                                    setImage([]);
                                    setMessage("Successfully Ordered! Thank you!");
                                    setTimeout(() => {
                                        setMessage("");
                                    }, 10000);
                                }).finally(() => {
                                    setTimeout(() => {
                                        setIsLoading(false);
                                    }, 3000);
                                });
                            }} method="post">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="name" className="text-white/70 text-sm font-bold block mb-1.5">Name</label>
                                        <input type="text" name="name" id="name" placeholder="Maisie" className="w-full border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white bg-white/5 placeholder-white/25 focus:outline none focus:border-pink/60 focus:ring-2 focus:ring-pink/15 transition all" value={form.name} onChange={(e) =>
                                            setForm((prev) => ({
                                                ...prev,
                                                name: e.target.value
                                            }
                                            ))
                                        }
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="text-white/70 text-sm font-bold block mb-1.5">Email Address</label>
                                        <input type="email" name="email" id="email" placeholder="maisie@gmail.com" value={form.email} className="w-full border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white bg-white/5 placeholder-white/25 focus:outline-none focus:border-pink/60 focus:ring-2 focus:ring-pink/15 transition-all"
                                            onChange={(e) => setForm((prev) => ({
                                                ...prev,
                                                email: e.target.value
                                            }))} />
                                    </div>
                                    <div>
                                        <label htmlFor="Phone Number" className="text-white/70 text-sm font-bold block mb-1.5">
                                            Phone Number
                                        </label>
                                        <input type="text" name="phone" id="phone" maxLength={14} placeholder="09123456789" className="w-full border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white bg-white/5 placeholder-white/25 focus:outline-none focus:border-pink/60 focus:ring-2 focus:ring-pink/15 transition-all" value={form.phone_number}
                                            onChange={(e) => setForm((prev) => ({
                                                ...prev,
                                                phone_number: e.target.value
                                            }))}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="product" className="text-white/70 text-sm font-bold block mb-1.5 custom-cursor-default-hover">Product Type</label>
                                        <select name="product" id="product" className="w-full border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white bg-[#111] focus:outline-none focus:border-pink/60 focus:ring-pink/15 transition-all" value={form.product_id} onChange={(e) => setForm((prev) => ({
                                            ...prev,
                                            product_id: Number(e.target.value)
                                        }))}>
                                            <option hidden>Choose a product..</option>
                                            {products.map((product) => (
                                                <option value={product.id} key={product.id}>
                                                    {product.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="details" className="text-white/70 text-sm font-bold block mb-1.5">Order Details</label>
                                        <textarea name="details" id="details" className="w-full border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white bg-white/5 placeholder-white/25 focus:outline-none focus:border-pink/60 focus:ring-2 focus:ring-pink/15 transition-all resize-none" placeholder="Describe your design, quantity, size, and any special requests..." value={form.details} onChange={(e) => setForm((prev) => ({
                                            ...prev,
                                            details: e.target.value
                                        }))}></textarea>
                                    </div>

                                    <div className="sm:col-span-2">
                                        <label htmlFor="image" className="text-white/70 text-sm font-bold block mb-1.5">Image</label>
                                        <input type="file" name="image" id="image" accept="image/*" className="w-full border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-pink/60 focus:ring-pink/15 transition-all" onChange={(e) => {
                                            const files = Array.from(e.target.files ?? [])
                                            setImage(files);
                                            setForm((prev) => ({
                                                ...prev,
                                                image: files
                                            }));
                                        }
                                        } multiple />
                                    </div>
                                    {imagePreview.map((preview) => (
                                        <div className="border-2 h-50 w-50" key={preview}>
                                            <img key={preview} src={preview} alt="Preview" className="object-cover w-full h-full" />
                                        </div>
                                    ))}
                                    <button className="w-full bg-pink text-black font-bold py-3.5 rounded-xl hover:bg-[#f0c0d0] transition-colors shadow shadow-pink text-base sm:col-span-2">Send My Order</button>
                                    {message &&
                                        <div className="fixed animate-fade-in top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 backdrop-blur-2xl w-200 h-50 border border-white/20 rounded-2xl flex items-center justify-center">
                                            <div className="text-green-500 flex items-center gap-4">
                                                <span>{message}</span>

                                                <button onClick={() => setMessage("")} className="absolute top-4 right-4 text-white hover:text-pink-500">
                                                    <X />
                                                </button>
                                            </div>

                                        </div>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}