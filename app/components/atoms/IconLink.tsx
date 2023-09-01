import { ReactNode } from "react";
/* Props */
type IconLinkProps = {
  children: ReactNode;
  href: string;
};
export default function IconLink({ children, href }: IconLinkProps) {
  return (
    <a
      className="cursor-pointer accent-light-font dark:accent-dark-accent"
      href={href}
    >
      {children}
    </a>
  );
}
