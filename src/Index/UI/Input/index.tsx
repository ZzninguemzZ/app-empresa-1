import React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  classdiv?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps> (({ children, ...props }: InputProps, ref) => {
  return (
    <div className={props.classdiv}>
      <label htmlFor={props.id}>{children}</label>
      <input ref={ref} {...props} placeholder={props.placeholder} />
    </div>
  );
});

Input.displayName = "Input"
export default Input;