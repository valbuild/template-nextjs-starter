import { cn } from "@/app/utils/cn";

export function Heading1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1 className={cn("text-xl md:text-3xl font-bold", className)}>
      {children}
    </h1>
  );
}
