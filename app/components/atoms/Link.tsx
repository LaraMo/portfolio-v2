import Link from "next/link";

/* Interface */
interface LinkType {
  url: string;
  text: string;
  className?: string;
}

/**
 * CustomLink
 * @param LinkType
 */
export default function CustomLink({ url, text, className }: LinkType) {
  return (
    <a
      href={url}
      className={`w-fit text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-blue-500 dark:text-white dark:hover:text-blue-500 dark:hover:bg-teal-50 dark:focus:ring-blue-800 ${className}`}
      target="_blank"
    >
      {text}
    </a>
  );
}
