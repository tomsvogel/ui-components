"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-4 w-4 shrink-0  border  ring-offset-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary  disabled:cursor-not-allowed disabled:opacity-50  data-[state=checked]:bg-foreground hover:data-[state=checked]:bg-primary data-[state=checked]:text-background  border-primary  dark:ring-offset-primary-foreground dark:focus-visible:ring-primary-foreground  dark:data-[state=checked]:hover:bg-primary",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
