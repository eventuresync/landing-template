import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default: `transition-colors relative overflow-hidden text-white text-2xl rounded-full font-bold before:bg-gradient-to-bl before:from-pink-700 before:via-pink-400 before:to-pink-950 duration-1000 
        before:absolute before:inset-0 bg-gradient-to-tr from-pink-800 via-pink-600 to-pink-800 
        before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200
        z-10`,
                destructive:
                    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary: `transition-colors relative overflow-hidden text-white text-2xl rounded-full font-bold before:bg-gradient-to-bl before:from-pink-700 before:via-pink-400 before:to-pink-950 duration-1000 
        before:absolute before:inset-0  bg-white/70 text-black hover:text-white duration-500
        before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-200
        z-10`,
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
                xl: "h-18 px-12 py-4 sm:h-24 sm:px-16 sm:py-8",
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
    anchorId?: string;
    link?: string;
}

const Button = React.forwardRef<
    HTMLButtonElement | HTMLAnchorElement,
    ButtonProps
>(({ className, variant, size, asChild = false, anchorId, link , ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    if (anchorId || link) {
        return (
            <Link target={link ? "_blank" : "_self"} href={link || `#${anchorId}`}>
                <Comp
                    className={cn(buttonVariants({ variant, size, className }))}
                    ref={ref as React.ForwardedRef<HTMLButtonElement>}
                    style={{
                        boxShadow: "rgba(0, 0, 0, 0.7) 0px 1px 5px",
                    }}
                    {...props}
                />
            </Link>
        );
    } else {
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref as React.ForwardedRef<HTMLButtonElement>}
                {...props}
            />
        );
    }
});
Button.displayName = "Button";

export { Button, buttonVariants };
