"use client";
import { useState } from "react";
import Input from "../molecules/Input";
import Button from "../atoms/Button";
import Textarea from "../molecules/Textarea";

export default function ContactMeForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  return (
    <form className="flex gap-4 flex-col">
      <Input label="Name" value={name} onChange={setName} />
      <Input label="Email" value={email} onChange={setEmail} />
      <Textarea label="Comment" value={comment} onChange={setComment} />

      <Button text="Submit" onClick={() => console.log("TODO")} />
    </form>
  );
}
