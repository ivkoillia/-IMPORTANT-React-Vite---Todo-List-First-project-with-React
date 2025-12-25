import { forwardRef } from "react";

import type { IInputProps } from "../../types/Todo/types";



const Input = forwardRef<HTMLInputElement, IInputProps>((
  props,
  ref
) => {

  const { className, ...rest } = props;

  return (
    <input
      ref={ref}
      className={`input ${className || ''}`}
      {...rest}
    />
  );
});

Input.displayName = "Input"

export default Input;