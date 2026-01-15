import { cn } from "@/app/utils/cn";
import { Link } from "../atoms/Link";
import { val } from "../../../val.config";

export function LinkText({
  children,
  className,
  href,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={val.raw(href)}
      // Tag for visual editing capabilities:
      {...val.attrs({ href, children })}
      className={cn("hover:underline", className)}
    >
      {children}
    </Link>
  );
}
