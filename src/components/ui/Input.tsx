import { forwardRef } from "react";

import type { IInputProps } from "../../types/Todo/types";



const Input = forwardRef<HTMLInputElement, IInputProps>((
  { className, ariaLabel, ...rest }, // Вытаскиваем только то, что будем менять, остальное в rest
  ref
) => {
  return (
    <input
      ref={ref}
      aria-label={ariaLabel}
      className={`input ${className || ''}`}
      {...rest} // Передаем все остальные стандартные пропсы (type, value, onChange и т.д.) автоматически
    />
  );
});

export default Input;