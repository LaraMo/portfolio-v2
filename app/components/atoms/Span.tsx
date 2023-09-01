import { ReactNode } from "react";
/* Props */
type SpanProps = {
  children: ReactNode;
  className?: string;
};
export default function Span({ children, className }: SpanProps) {
  return (
    <span
      className={`px-1 text-light-accent font-medium dark:text-blue-50 ${className}`}
    >
      {children}
    </span>
  );
}
