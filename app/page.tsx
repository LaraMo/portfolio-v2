import {
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
import { codingSkills, workHistory } from "../src/const";
import IconLink from "./components/atoms/IconLink";
import Span from "./components/atoms/Span";
import Timeline from "./components/molecules/Timeline";
import Articles from "./components/organism/Articles";
import AboutMe from "./components/AboutMe";
import Me from "./components/Me";
import Footer from "./components/organism/Footer";

export default function Home() {
  return (
    <>
      <main className="px-10 md:px-20 lg:px-40">
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
                  <AboutMe />
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
          <section className="flex flex-col justify-center gap-4">
            <h3 className="first-letter:font-bold first-letter:text-8xl  first-letter:text-light-accent first-letter:dark:text-dark-accent text-xl font-semibold">
              A few articles I wrote
            </h3>
            <Articles />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
