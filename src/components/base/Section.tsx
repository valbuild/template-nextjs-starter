import { cn } from "../../app/utils/cn";

export function Section({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("py-4 flex flex-col gap-4", className)}>
      {children}
    </section>
  );
}
