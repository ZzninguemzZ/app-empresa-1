import type { ReactNode } from "react";
import style from "./style.module.css"

function Workspace({ children }: { children: ReactNode }) {
  return (
    <main className={style.container}>
        {children}
    </main>
  );
}

export default Workspace;