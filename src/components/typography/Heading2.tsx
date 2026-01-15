import { cn } from "@/app/utils/cn";

export function Heading2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2 className={cn("text-lg md:text-xl font-bold", className)}>
      {children}
    </h2>
  );
}
