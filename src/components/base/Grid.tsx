import { cn } from "../../app/utils/cn";

export function Grid({
  children,
  className,
  cols = 1,
  gap = "md",
}: {
  children: React.ReactNode;
  className?: string;
  cols?: 1 | 2 | 3 | 4;
  gap?: "none" | "sm" | "md" | "lg";
}) {
  const colsClass = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[cols];

  const gapClass = {
    none: "gap-0",
    sm: "gap-2",
    md: "gap-4",
    lg: "gap-8",
  }[gap];

  return (
    <div className={cn("grid", colsClass, gapClass, className)}>{children}</div>
  );
}
