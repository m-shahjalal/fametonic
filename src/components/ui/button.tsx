import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-base",
      lg: "h-12 px-6 text-lg",
    };

    const variantClasses = {
      primary: "bg-primary text-background shadow-lg",
      secondary: "bg-secondary shadow-[2px_2px_10px_0px_#00E7F9]",
      outline: "border-2 border-primary text-primary ",
      ghost: "text-foreground",
    };

    const combinedClasses = [
      "flex justify-center gap-2 items-center rounded-md font-semibold",
      sizeClasses[size],
      variantClasses[variant],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return <button className={combinedClasses} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";
