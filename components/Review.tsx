"use client";
import { PawPrint } from "lucide-react";
import { useState } from "react";
import { useImagePreview } from "./hooks/useImagePreview";
import { storeReview } from "@/app/functions/storeReview";
import useForm from "@/app/hooks/useForm";
import { initialForm } from "@/app/types/ReviewForm";
import useMessage from "@/app/hooks/useMessage";
import { X } from "lucide-react";
import { useLoading } from "./hooks/useLoading";
import useReviews from "@/app/hooks/useReviews";
type ReviewProps = {
    pacifico: string;
    dancingScript: string;
}

export const Review = ({ pacifico, dancingScript }: ReviewProps) => {
    const [isShowingForm, setIsShowingForm] = useState(false);
    const { form, setForm } = useForm(initialForm);
    const { setImage, imagePreview } = useImagePreview();
    const { message, setMessage } = useMessage();
    const { setIsLoading } = useLoading();
    const { reviews } = useReviews();
    console.log(reviews);
    const handleCancel = () => {
        setForm({
            name: "",
            product: "",
            rating: 5,
            details: "",
            image: []
        });
        setIsShowingForm(false);
    };

    return (
        <>
            <div className="bg-white/3 border-y border-white/10 py-10 w-full" id="reviews">
                <div className="w-full md:w-[70%] mx-auto px-5" id="reviews">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <PawPrint className="text-pink" />
                            <span className="text-pink font-bold text-sm uppercase tracking-widest">HEAR FROM OUR CUSTOMERS!</span>
                            <PawPrint className="text-pink" />
                        </div>
                        <h2 className={`text-4xl md:text-5xl ${pacifico} text-white`}>Paw-some Reviews</h2>
                        <p className="text-white/60 max-w-2xl mx-auto mt-4">What our customers are saying about Maisie Paw Prints</p>
                        {!isShowingForm && (
                            <button
                                onClick={() => setIsShowingForm(true)}
                                className="mt-6 inline-flex items-center px-6 py-3 bg-pink/20 border border-pink/40 text-pink font-medium rounded-xl hover:bg-pink/30 hover:border-pink/50 transition-all duration-300 gap-2"
                            >
                                <PawPrint className="mr-2" />
                                Add a Review
                            </button>
                        )}
                    </div>

                    {isShowingForm ? (
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            setIsLoading(true);
                            storeReview(form).then(() => {
                                setForm(initialForm);
                                setImage([]);
                                setIsShowingForm(false);
                                setMessage("Thank you for your review!");
                                setTimeout(() => {
                                    setMessage("");
                                }, 5000);
                            }).finally(() => {
                                setIsLoading(false);
                            });
                        }} className="space-y-6">
                            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-white/70 mb-2 font-medium">Your Name</label>
                                        <input
                                            type="text"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-pink/50"
                                            placeholder="Enter your name"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white/70 mb-2 font-medium">Product</label>
                                        <input
                                            type="text"
                                            value={form.product}
                                            onChange={(e) => setForm({ ...form, product: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-pink/50"
                                            placeholder="Example: Badge"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-white/70 mb-2 font-medium">Rating</label>
                                        <div className="flex items-center space-x-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button
                                                    key={star}
                                                    type="button"
                                                    onClick={() => setForm({ ...form, rating: star })}
                                                    className={`w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-pink rounded-lg transition-colors duration-200 ${form.rating >= star ? 'text-pink/80' : 'text-white/50'}`}
                                                >
                                                    <PawPrint size={16} fill="currentColor" />
                                                </button>
                                            ))}
                                        </div>
                                        <p className="mt-2 text-white/50 text-sm">Selected: {form.rating} paws</p>
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
                                    <div className="flex flex-col md:flex-row gap-4">
                                        {imagePreview.map((preview) => (
                                            <div className="border-2 h-50 w-50" key={preview}>
                                                <img key={preview} src={preview} alt="Preview" className="object-cover w-full h-full" />
                                            </div>
                                        ))}
                                    </div>

                                    <div>
                                        <label className="block text-white/70 mb-2 font-medium">Your Review</label>
                                        <textarea
                                            value={form.details}
                                            onChange={(e) => setForm({ ...form, details: e.target.value })}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-pink/50 resize-y min-h-[100px]"
                                            placeholder="Share your experience with Maisie Paw Prints..."
                                            required
                                            maxLength={500}
                                        />
                                        <p className="mt-1 text-white/40 text-sm">{form.details.length}/500 characters</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    onClick={handleCancel}
                                    className="px-6 py-3 bg-white/10 border border-white/20 text-white/70 rounded-xl hover:bg-white/20 hover:text-white transition-colors duration-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-pink/20 border border-pink/40 text-pink font-medium rounded-xl hover:bg-pink/30 hover:border-pink/50 transition-all duration-300"
                                >
                                    Submit Review
                                </button>

                            </div>
                        </form>
                    ) : (
                        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
                            {reviews.length > 0 ? (
                                reviews.slice(0, 3).map((review) =>
                                    <div key={review.id} className="group w-full text-white gap-5 items-center border border-white/20 px-6 py-5 rounded-lg hover:border-pink transition-all duration-300">
                                        <div className="text-xl">{review.name}</div>
                                        <div className="text-white/40">Product: {review.product}</div>
                                        <div className="flex flex-row gap-2 mt-2">
                                            {Array.from({ length: review.rating }).map((_, index) => (
                                                <PawPrint key={index} size={15} fill="currentColor" className="text-pink" />
                                            ))}
                                        </div>
                                        <hr className="mt-3" />
                                        <div className="text-white mt-2">{review.details}</div>
                                    </div>
                                )
                            )
                                :

                                <div className="text-center py-12 col-span-3">
                                    <p className="text-white/60 text-lg">No reviews yet</p>
                                    <p className="text-white/40 max-w-xl mx-auto mt-2">
                                        Be the first to share your experience with Maisie Paw Prints!
                                    </p>
                                </div>

                            }
                        </div>
                    )}
                </div>

                {message &&
                    <div className="fixed animate-fade-in top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 backdrop-blur-2xl w-[90%] max-w-200 min-h-50 border border-white/20 rounded-2xl flex items-center justify-center">
                        <div className="text-green-500 flex items-center gap-4">
                            <span>{message}</span>

                            <button onClick={() => setMessage("")} className="absolute top-4 right-4 text-white hover:text-pink-500">
                                <X />
                            </button>
                        </div>

                    </div>
                }
            </div>

        </>
    );
};