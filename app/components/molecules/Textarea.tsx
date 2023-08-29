import { InputType } from "./Input";

export default function Textarea({ label, value, onChange }: InputType) {
  return (
    <div className="flex flex-col gap-1">
      <label>{label}</label>
      <textarea
        rows={9}
        className="p-3 rounded-md bg-zinc-200 hover:bg-zinc-300  dark:bg-dark-secondary dark:hover:bg-dark-primary focus:outline-none"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
