"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import Image from "next/image";
import writing from "../public/writing.png";
import code from "../public/code.png";
import contact from "../public/contact.png";
import work from "../public/work.png";

import Me from "./components/me";
import { aboutMe, codingSkills, workHistory } from "../src/const";
import IconLink from "./components/atoms/IconLink";
import Span from "./components/atoms/Span";
import Nav from "./components/molecules/Nav";
import ContactMeForm from "./components/organism/ContactMeForm";
import HTMLReactParser from "html-react-parser";
import CustomLink from "./components/atoms/Link";
import Button from "./components/atoms/Button";
import Timeline from "./components/molecules/Timeline";
import { getDays } from "@/src/helper";

export default function Home() {
  /**
   * Type
   */
  interface ArticleType {
    title: string;
    pubDate: string;
    link: string;
    guid: string;
    author: string;
    thumbnail: string;
    description: string;
    content: string;
    enclosure: unknown;
    categories: string[];
  }
  interface MediumType {
    status: string;
    feed: {
      url: string;
      title: string;
      link: string;
      author: string;
      description: string;
      image: string;
    };
    items: ArticleType[];
  }

  /**
   * Hooks
   */
  const [medium, setMedium] = useState<MediumType>();
  const [aboutMeIndex, setAboutMeIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    async function getMediumData() {
      const res = await fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@laramo",
        {
          headers: {},
        }
      );
      // The return value is *not* serialized
      // You can return Date, Map, Set, etc.
      console.log(res);

      if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }

      return res.json();
    }
    getMediumData()
      .then((x) => setMedium(x))
      .catch((x) => console.log(x));
  }, []);

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
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-slate-50 text-gray-600 px-10 md:px-20 lg:px-40 dark:bg-dark-primary dark:text-dark-font ">
        {/* Navbar */}
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <section className="pb-20">
            {/* About */}
            <div className="lg:flex justify-center items-center">
              <div className="relative rounded-full flex justify-center lg:pb-10">
                <Me />
              </div>
              <div className="p-10">
                <div className="flex flex-col text-center gap-1">
                  <span className="lg:text-6xl text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-light-accent from-light-primary dark:to-dark-accent">
                    Liora Lara Mezirovsky
                  </span>
                  <h3 className="text-2xl">
                    I am a <span>{aboutMe[aboutMeIndex]}</span>
                  </h3>
                </div>
                <div className="flex text-5xl pt-6 justify-center gap-8">
                  <IconLink href="https://www.linkedin.com/in/laramo/">
                    <AiOutlineLinkedin />
                  </IconLink>
                  <IconLink href="https://www.instagram.com/super_woman_in_shorts/">
                    <AiOutlineInstagram />
                  </IconLink>
                  <IconLink href="https://www.facebook.com/mrslorenmo">
                    <AiOutlineFacebook />
                  </IconLink>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="flex justify-center">
              <p className="first-letter:font-bold first-letter:text-8xl  first-letter:text-light-accent first-letter:dark:text-dark-accent leading-7">
                Let me introduce myself 👋
                <br />I am a skilled and motivated software developer with{" "}
                <Span>{new Date().getFullYear() - 2019}+</Span> years experience
                in developing innovative and efficient software solutions. I am
                proficient in <Span>React.js</Span> and <Span>Javascript</Span>{" "}
                with a focus on <Span>front-end development</Span>. I am
                interested in web/mobile development offering enthusiasm and
                understanding of various programming languages and frameworks.
              </p>
            </div>
          </section>

          {/* Skills */}
          <section className="flex flex-col justify-center gap-4 pb-20">
            <h3 className="first-letter:font-bold first-letter:text-8xl  first-letter:text-light-accent first-letter:dark:text-dark-accent text-xl font-semibold">
              A skill or two
            </h3>
            <div className="flex flex-wrap gap-4">
              {codingSkills.map((skill, key) => {
                return (
                  <span
                    key={key}
                    className="font-medium bg-slate-100 p-2 rounded-md dark:text-dark-font dark:bg-dark-tertiary"
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </section>

          {/* Work XP */}
          <section className="flex flex-col justify-center gap-4 pb-20">
            <h3 className="first-letter:font-bold first-letter:text-8xl first-letter:text-light-accent first-letter:dark:text-dark-accent text-xl font-semibold">
              Relevant work XP
            </h3>
            <Timeline events={workHistory} />
          </section>

          {/* Technical writing */}
          <section className="flex flex-col justify-center gap-4 pb-20">
            <h3 className="first-letter:font-bold first-letter:text-8xl  first-letter:text-light-accent first-letter:dark:text-dark-accent text-xl font-semibold">
              A few articles I wrote
            </h3>
            {medium && (
              <>
                <div className="flex flex-wrap gap-8 justify-center">
                  {medium?.items.slice(0, 3).map((x, key: number) => {
                    return (
                      <a
                        href={x.link}
                        key={key}
                        className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6 flex justify-center items-center gap-4"
                      >
                        <Image
                          width={100}
                          height={100}
                          alt="thumbnail"
                          className="rounded-md"
                          src={x.thumbnail}
                        />
                        <div className="flex gap-4 flex-col">
                          <div>
                            <p className="text-xl font-bold leading-none mr-1">
                              {x.title}
                            </p>
                            <time className="mb-1 text-sm text-light-accent dark:text-dark-accent font-semibold">
                              {getDays(x.pubDate)}
                            </time>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {x.categories.map(
                              (category: string, key: number) => {
                                return (
                                  <span
                                    key={key}
                                    className="mr-2 text-sm font-medium bg-slate-100 p-1 rounded-md dark:text-dark-font dark:bg-dark-tertiary"
                                  >
                                    #{category}
                                  </span>
                                );
                              }
                            )}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
                <CustomLink
                  className="mx-auto"
                  url={medium.feed.link}
                  text="Read More"
                />
              </>
            )}
          </section>

          {/* Footer */}
          <footer className="flex flex-col justify-center gap-4 items-center pb-20">
            <h3 className="text-3xl">Get in touch</h3>
            <p className="max-w-2xl">
              If you have any website suggestions, comments and/or if you want
              to collaborate and/or just to talk :)
            </p>
            <div className="flex flex-col justify-center items-center my-10">
              <Image
                className="hover:animate-spin"
                width={500}
                height={500}
                src={contact}
                alt="contact"
              />

              <Button
                text="Contact Me"
                onClick={() => window.open("mailto:laramo1999@gmail.com")}
              />
            </div>
            {/* <ContactMeForm /> */}

            <p className="text-center">
              💡 Pssst! this website was made with <Span>Next.js</Span>,
              <Span>Tailwind</Span> and lots of love! - ©
              {new Date().getFullYear()}
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
