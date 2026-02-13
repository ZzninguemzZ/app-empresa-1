import type React from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  classdiv?: string;
}

function Input({ children, ...props }: InputProps) {
  return (
    <div className={props.classdiv}>
      <label htmlFor={props.id}>{children}</label>
      <input {...props} placeholder={props.placeholder} />
    </div>
  );
}

export default Input;