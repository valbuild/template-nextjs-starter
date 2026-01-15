import { cn } from "@/app/utils/cn";
import {
  className as buttonClassName,
  variants as buttonVariants,
} from "./Button";
import { Link } from "./Link";
import { Variants } from "../base/variants.val";

export function LinkButton({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  variant?: Variants;
  children: React.ReactNode;
  className?: string;
}) {
  // For a more maintainable approach, use the radix-ui Slot in button component: https://www.radix-ui.com/primitives/docs/utilities/slot
  return (
    <Link
      href={href}
      className={cn(buttonClassName, buttonVariants[variant], className)}
    >
      {children}
    </Link>
  );
}
