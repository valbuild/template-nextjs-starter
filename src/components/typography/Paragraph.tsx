import { cn } from "@/app/utils/cn";

export function Paragraph({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <p className={cn("min-h-4", className)}>{children}</p>;
}
