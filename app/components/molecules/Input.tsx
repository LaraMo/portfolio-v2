import { Dispatch, SetStateAction } from "react";

/* Props */
export type InputProps = {
  label: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
};
export default function Input({ label, value, onChange }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={label}>{label}</label>
      <input
        name={label}
        id={label}
        className="p-3 rounded-md bg-zinc-200 hover:bg-zinc-300  dark:bg-dark-secondary dark:hover:bg-dark-primary focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
