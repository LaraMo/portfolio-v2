"use client"; // This is a client component 👈🏽
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Nav({
  setDarkMode,
  darkMode,
}: {
  setDarkMode: any;
  darkMode: any;
}) {
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-secondary">Developed by LaraMo</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-xl"
          />
        </li>
        <li>
          <a
            target="_blank"
            className="w-fit ml-10 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
            href="https://www.canva.com/design/DAFl_JjDzGc/QM_-qMKVASy7sUrIOn-K8A/view?utm_content=DAFl_JjDzGc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          >
            Résumé
          </a>
        </li>
      </ul>
    </nav>
  );
}
