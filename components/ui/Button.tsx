"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base styles shared by ALL variants
  "relative inline-flex items-center justify-center whitespace-nowrap font-mono text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        // ── Neobrutalist: red border, transparent bg ──
        brutalist: `
          border-2 border-[var(--accent)]
          bg-transparent text-[var(--text-primary)]
          rounded-none
          duration-[var(--duration-base)] ease-[var(--ease-brutalist)]
          hover:shadow-[8px_8px_0px_var(--btn-shadow-color),-8px_-8px_0px_var(--btn-shadow-color)]
          active:shadow-none active:translate-x-[2px] active:translate-y-[2px]
        `,
        // ── Neobrutalist Filled: red bg, white text ──
        "brutalist-filled": `
          border-2 border-[var(--accent)]
          bg-[var(--accent)] text-white
          rounded-none
          duration-[var(--duration-base)] ease-[var(--ease-brutalist)]
          hover:bg-[var(--accent-hover)]
          hover:shadow-[8px_8px_0px_var(--btn-shadow-color),-8px_-8px_0px_var(--btn-shadow-color)]
          active:shadow-none active:translate-x-[2px] active:translate-y-[2px]
        `,
        // ── Neobrutalist Outline: subtle border, muted text ──
        "brutalist-outline": `
          border-2 border-[var(--border-strong)]
          bg-transparent text-[var(--text-muted)]
          rounded-none
          duration-[var(--duration-base)] ease-[var(--ease-brutalist)]
          hover:border-[var(--accent)] hover:text-[var(--text-primary)]
          hover:shadow-[8px_8px_0px_var(--btn-shadow-color),-8px_-8px_0px_var(--btn-shadow-color)]
          active:shadow-none active:translate-x-[2px] active:translate-y-[2px]
        `,
        // ── Ghost (for nav items, icon buttons) ──
        ghost: `
          bg-transparent text-[var(--text-muted)]
          rounded-md
          hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]
        `,
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "brutalist",
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