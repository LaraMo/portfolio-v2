import { ReactNode } from "react";
/* Interface */
interface SpanType {
  children: ReactNode;
  className?: string;
}
export default function Span({ children, className }: SpanType) {
  return (
    <span
      className={`px-1 text-light-accent font-medium dark:text-blue-50 ${className}`}
    >
      {children}
    </span>
  );
}
