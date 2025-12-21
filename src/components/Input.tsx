import { forwardRef } from "react";

import type { IInputProps } from "../types";



const Input = forwardRef<HTMLInputElement, IInputProps>((
  { name, type, placeholder, className, id, ariaLabel, checked, onInput, onChange }, 
  ref
) => {

  return (
    <input
      ref={ref}
      name={name}
      id={id}
      aria-label={ariaLabel}
      type={type}
      placeholder={placeholder}
      className={`input ${className ? className : ''}`}
      checked={checked}
      onInput={onInput ? (e) => onInput((e.target as HTMLInputElement).value) : undefined}
      onChange={onChange ? (e) => onChange((e.target as HTMLInputElement).checked) : undefined}
    />
  );
});

export default Input;