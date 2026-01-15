import { cn } from "@/app/utils/cn";

export function Heading3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3 className={cn("text-base md:text-lg font-bold", className)}>
      {children}
    </h3>
  );
}
