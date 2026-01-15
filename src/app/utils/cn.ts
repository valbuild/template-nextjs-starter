export function cn(...inputs: (string | undefined | boolean)[]) {
  // TODO: extend this with clsx and tailwind-merge to merge the classes if you want to add more features
  return inputs.filter(Boolean).join(" ");
}
