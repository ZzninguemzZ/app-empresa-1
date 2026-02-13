import type React from "react";

type ButtonsAppProps = 
  React.ButtonHTMLAttributes<HTMLButtonElement>;


function ButtonApp({ children, ...props}: ButtonsAppProps) {
  return <button {...props} >{children}</button>;
}

export default ButtonApp;
