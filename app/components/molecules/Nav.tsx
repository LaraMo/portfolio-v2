"use client";
import { Dispatch, SetStateAction } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import CustomLink from "../atoms/CustomLink";

/* Props */
type NavProps = {
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  darkMode: boolean;
};
export default function Nav({ setDarkMode, darkMode }: NavProps) {
  return (
    <nav className=" px-10 md:px-20 lg:px-40 py-10 flex justify-between gap-10 items-center flex-col sm:flex-row">
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
