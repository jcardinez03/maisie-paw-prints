import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
}

export const Button = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(({ variant = "default", size = "default", className, ...props }, ref) => {
  const baseClasses = "flex items-center justify-center whitespace-nowrap";

  const variantClasses = {
    default: "bg-pink text-black font-bold",
    outline: "border border-pink text-pink hover:bg-pink/10",
    ghost: "text-pink hover:bg-pink/10",
  }[variant];

  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    default: "h-10 px-4 text-base",
    lg: "h-11 px-5 text-lg",
    icon: "h-8 w-8",
  }[size];

  return (
    <button
      ref={ref}
      className={`
        ${baseClasses}
        ${variantClasses}
        ${sizeClasses}
        rounded-full
        transition-all
        focus:outline-none focus:ring-2 focus:ring-pink focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:shadow-md
        ${className}
      `}
      {...props}
    />
  );
});