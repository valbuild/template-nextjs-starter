import { cn } from "@/app/utils/cn";
import { Variants } from "../base/variants.val";

export const className = "px-4 py-2 rounded-md";
export const variants = {
  accent:
    "bg-bg-accent border border-border-accent bg-bg-accent text-fg-accent hover:bg-bg-accent/80",
  primary:
    "bg-bg-primary border border-border-primary text-fg-primary hover:bg-bg-primary/80",
  secondary:
    "bg-bg-secondary border border-border-secondary text-fg-secondary hover:bg-bg-secondary/80",
};

export type ButtonProps = {
  variant?: Variants;
  children: React.ReactNode;
};
export function Button({ variant = "primary", children }: ButtonProps) {
  //  use the radix-ui Slot in button component: https://www.radix-ui.com/primitives/docs/utilities/slot
  return (
    <button className={cn(className, variants[variant])}>{children}</button>
  );
}
