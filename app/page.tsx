"use client";
import { useEffect, useState } from "react";
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
import { aboutMe, codingSkills } from "../src/const";
import IconLink from "./components/atoms/IconLink";
import Span from "./components/atoms/Span";
import Nav from "./components/molecules/Nav";
import ContactMeForm from "./components/organism/ContactMeForm";
import HTMLReactParser from "html-react-parser";

export default function Home({
  setDarkMode,
  darkMode,
}: {
  setDarkMode: any;
  darkMode: any;
}) {
  const [medium, setMedium] = useState([]);
  const [aboutMeIndex, setAboutMeIndex] = useState(0);

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
      .then((x) => setMedium(x.items))
      .catch((x) => console.log(x));
  }, []);

  useEffect(() => {
    let interval = setInterval(() => {
      if (aboutMeIndex === aboutMe.length - 1) {
        setAboutMeIndex(0);
      } else {
        setAboutMeIndex(aboutMeIndex + 1);
      }
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, [aboutMeIndex]);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-slate-50 text-gray-600 px-10 md:px-20 lg:px-40 dark:bg-indigo-900 dark:text-dark-font ">
        {/* Navbar */}
        <Nav darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Intro */}
        <section className="py-10">
          {/* About */}
          <div className="lg:flex justify-center items-center">
            <>
              <div className="relative rounded-full flex justify-center lg:py-10">
                <Me />
              </div>
              <div className="p-10">
                <div className="flex flex-col gap-2 sm:text-center">
                  <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r to-light-accent from-light-primary dark:to-dark-accent">
                      Liora Lara Mezirovsky
                    </span>{" "}
                  </h1>
                  {/* <h2 className="text-5xl text-light-accent font-medium  dark:text-dark-accent">
                    Liora Lara Mezirovsky
                  </h2> */}
                  <h3 className="text-2xl text-light-font dark:text-dark-font">
                    I am a{" "}
                    <span className="animate-fade-left animate-infinite animate-duration-[3003ms] animate-ease-in">
                      {aboutMe[aboutMeIndex]}
                    </span>
                  </h3>
                </div>
                <div className="flex text-5xl pt-6 justify-center gap-8">
                  <IconLink href="https://www.linkedin.com/in/laramo/">
                    <AiOutlineLinkedin />
                  </IconLink>
                  <IconLink href="">
                    <AiOutlineInstagram />
                  </IconLink>
                  <IconLink href="">
                    <AiOutlineFacebook />
                  </IconLink>
                </div>
              </div>
            </>
          </div>
          {/* About Text */}
          <div className="flex justify-center">
            <p className="first-letter:font-bold first-letter:text-8xl max-w-3xl first-letter:text-light-accent first-letter:dark:text-dark-accent">
              Well, hello there 👋
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

        {/* Services */}
        <section className="py-10">
          <h2 className="text-center text-5xl pb-10">What do I do?</h2>
          <div className="lg:flex justify-center gap-10">
            <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
              <div className="flex items-center">
                <Image width={75} height={75} alt="code" src={code} />
                <h3 className="font-bold text-2xl text-center pb-2">Code</h3>
              </div>
              <p>
                In my day-to-day, I am using the following languages and
                frameworks
              </p>
              <div className="flex flex-wrap justify-center">
                {codingSkills.map((skill, key) => {
                  return (
                    <span
                      key={key}
                      className="m-2 font-medium bg-slate-100 p-2 rounded-md dark:text-dark-font dark:bg-dark-tertiary"
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
              <p>
                P.S this website was made with <Span>Next.js</Span>,
                <Span>Tailwind</Span> and lots of love!
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col gap-2 justify-center items-center">
              <div className="flex items-center">
                <Image width={75} height={75} alt="code" src={writing} />
                <h3 className="font-bold text-2xl text-center pb-2">
                  {" "}
                  Technical Writing
                </h3>
              </div>
              {medium.slice(0, 3).map((x: any, key: number) => {
                return (
                  <a
                    href={x.link}
                    key={key}
                    className="flex flex-col md:flex-row gap-5 w-full p-3 m-2 shadow-[rgba(50,_50,_105,_0.15)_0px_2px_5px_0px,_rgba(0,_0,_0,_0.05)_0px_1px_1px_0px] dark:shadow-slate-900"
                  >
                    <Image
                      width={100}
                      height={100}
                      alt="thumbnail"
                      src={x.thumbnail}
                    />
                    <div className="flex flex-col gap-2">
                      <p className="text-xl font-medium">{x.title}</p>
                      <p className="text-light-border font-secondary dark:text-dark-border">
                        {new Date(x.pubDate).toDateString()}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {x.categories.map((category: string, key: number) => {
                          return (
                            <span
                              key={key}
                              className="mr-2 font-medium bg-slate-100 p-1 rounded-md dark:text-dark-font dark:bg-dark-tertiary"
                            >
                              #{category}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </a>
                );
              })}

              <a
                target="_blank"
                className="w-fit text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                href="https://medium.com/@laramo"
              >
                More
              </a>
            </div>
          </div>
        </section>
        <section className="flex justify-center flex-col py-10">
          <h2 className="text-center text-5xl pb-10">Work XP</h2>
          <div className="flex gap-8 justify-center">
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  March 2022 - Present
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  IT Developer @ Ubisoft
                </h3>
                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                  Code new and existing UI components and suggest improvements
                </p>
                <a
                  href="https://www.ubisoft.com/en-us/help"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  Learn more
                </a>
              </li>
              <li className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  September 2020 - March 2022
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Software Developer @ Bombardier
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Developing a mobile app to track maintenance status of
                  aircrafts built using ReactNative.js & Redux.js. <br />
                  In charge of interviewing and onboarding new dev interns
                </p>
              </li>
              <li className="ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  June 2019 - September 2020
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Software Developer @ Neptronic
                </h3>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Implemented new web pages for the in-house business tools
                  using React.js, C#, ASP.NET, and Microsoft SQL Server
                </p>
              </li>
            </ol>
            <Image
              className="hidden md:block"
              alt="work"
              src={work}
              width={300}
              height={300}
            />
          </div>
        </section>

        <footer className="flex justify-center flex-col py-10">
          <h2 className="text-center text-5xl pb-10">Lets Connect</h2>
          <div className="lg:flex gap-8 justify-center items-center my-10">
            <Image
              className="hover:animate-spin"
              width={500}
              height={500}
              src={contact}
              alt="contact"
            />
            <ContactMeForm />
          </div>
          <span className="text-center">
            💜 Made by LaraMo ©{new Date().getFullYear()}
          </span>
        </footer>
      </main>
    </div>
  );
}
