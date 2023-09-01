"use client";
import Image from "next/image";
import Button from "../atoms/Button";
import contact from "../../../public/contact.png";
import Span from "../atoms/Span";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t to-slate-50 from-slate-300 dark:to-dark-primary  dark:from-dark-secondary flex flex-col justify-center gap-4 items-center pt-20 pb-10 px-10 text-gray-600 dark:text-dark-font">
      <h3 className="text-3xl">Get in touch</h3>
      <p className="max-w-2xl text-center">
        If you have any website suggestions, comments and/or if you want to
        collaborate and/or just to talk :)
      </p>
      <div className="flex flex-col justify-center items-center">
        <Image
          className="animate-spin-slow"
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

      <p className="text-center">
        💡 Pssst! this website was made with <Span>Next.js</Span>,
        <Span>Tailwind</Span> and lots of love! - ©{new Date().getFullYear()}
      </p>
    </footer>
  );
}
