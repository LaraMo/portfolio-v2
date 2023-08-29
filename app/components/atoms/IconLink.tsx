import { ReactNode } from "react";
/* Interface */
interface IconLinkType {
  children: ReactNode;
  href: string;
}
export default function IconLink({ children, href }: IconLinkType) {
  return (
    <a
      className="cursor-pointer accent-light-font dark:accent-dark-accent"
      href={href}
    >
      {children}
    </a>
  );
}
