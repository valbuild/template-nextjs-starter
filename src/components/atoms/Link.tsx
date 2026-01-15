import NextLink from "next/link";

/**
 * Use this link instead of Next.js Link component for Val's visual editing capabilities
 **/
export function Link({
  href,
  children,
  ...props
}: React.ComponentProps<typeof NextLink>) {
  return (
    <NextLink href={href} {...props}>
      {children}
    </NextLink>
  );
}
