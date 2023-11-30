import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center  whitespace-nowrap rounded-md text-sm font-default ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring  disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 ",
  {
    variants: {
      variant: {
        default:
          " border border-primary  button-animation  dark:text-primary hover:text-primary-foreground dark:hover:text-primary-foreground",
        destructive:
          " border border-destructive  text-destructive button-animation-cancel focus-visible:ring-destructive dark:text-destructive hover:text-destructive-foreground dark:hover:text-destructive-foreground",
        primary:
          "border border-primary bg-primary text-white  hover:scale-105 transition ease-linear",
        secondary:
          "bg-secondary text-secondary-foreground hover:scale-105 transition ease-linear  focus-visible:ring-secondary",
        ghost:
          "hover:bg-accent hover:text-accent-foreground hover:text-primary",
        link: "underline hover:no-underline hover:text-primary",
        outline:
          "border border-primary bg-white dark:bg-background hover:bg-background hover:dark:bg-card ",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "text-sm min-w-[150px] px-5 py-2 ",
        lg: "min-w-button p-10 text-lg",
        icon: "h-10 w-10 text-base",
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
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
