import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full  border border-primary bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-default placeholder:font-manuale placeholder:text-place-holder focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary  disabled:cursor-not-allowed disabled:opacity-50 dark:border-primary dark:bg-background dark:ring-offset-input  dark:placeholder:text-place-holder dark:focus-visible:ring-primary",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
