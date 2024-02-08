import { ComponentPropsWithoutRef, HTMLInputTypeAttribute } from "react";

type InputProps = {
  type: HTMLInputTypeAttribute;
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input({ type, label, id, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...props} />
    </p>
  );
}
