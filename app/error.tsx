"use client";
import Image from "next/image";
import error from "../public/error.png";

export default function Error() {
  return (
    <div className="h-screen flex justify-center flex-col items-center gap-4">
      <h1 className="font-bold text-5xl">Oops!</h1>
      <Image alt="error" src={error} width={100} height={100} />
      <p>An error has occured, refresh to try again!</p>
    </div>
  );
}
