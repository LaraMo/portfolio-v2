"use client";
import { useEffect, useState } from "react";
import { aboutMe } from "@/src/const";

export default function AboutMe() {
  /**
   * Hooks
   */
  const [aboutMeIndex, setAboutMeIndex] = useState(0);

  /**
   * Show case a list of chars that define me in an infinite loop
   */
  useEffect(() => {
    let interval = setInterval(() => {
      if (aboutMeIndex === aboutMe.length - 1) {
        setAboutMeIndex(0);
      } else {
        setAboutMeIndex(aboutMeIndex + 1);
      }
    }, 2500);
    return () => {
      clearInterval(interval);
    };
  }, [aboutMeIndex]);

  return (
    <h3 className="text-2xl">
      I am a <span>{aboutMe[aboutMeIndex]}</span>
    </h3>
  );
}
