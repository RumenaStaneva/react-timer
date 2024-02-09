import {
  ComponentPropsWithoutRef,
  HTMLInputTypeAttribute,
  forwardRef,
} from "react";

type InputProps = {
  type: HTMLInputTypeAttribute;
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { type, label, id, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...props} ref={ref} name={id} />
    </p>
  );
});

export default Input;
