"use client"; // This is a client component 👈🏽
import { Dispatch, SetStateAction } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import CustomLink from "../atoms/Link";

export default function Nav({
  setDarkMode,
  darkMode,
}: {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
}) {
  return (
    <nav className="py-10 flex justify-between gap-10 items-center flex-col sm:flex-row">
      <h1 className="text-xl font-secondary">Developed by LaraMo</h1>
      <div className="flex items-center">
        <BsFillMoonStarsFill
          onClick={() => setDarkMode(!darkMode)}
          className="cursor-pointer text-xl mr-10"
        />
        <CustomLink
          text="Résumé"
          url="https://www.canva.com/design/DAFl_JjDzGc/QM_-qMKVASy7sUrIOn-K8A/view?utm_content=DAFl_JjDzGc&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
        />
      </div>
    </nav>
  );
}
