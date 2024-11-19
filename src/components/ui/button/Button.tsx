// Button.jsx
"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "bg-[#DEB8E9] text-white hover:bg-[#c9a3d0] focus:ring-[#DEB8E9]",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 focus:ring-red-600",
        outline:
          "border border-[#DEB8E9] text-[#DEB8E9] hover:bg-[#DEB8E9] hover:text-white focus:ring-[#DEB8E9]",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-gray-100",
        link: "text-[#DEB8E9] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : motion.button;
    return (
      <Comp 
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        whilehover={{ scale: 1.05 }}
        whiletap={{ scale: 0.95 }}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
