import { use } from "react";
import ListSimple from "../../UI/ListSimple";
import Context from "../../Constext";
import Style from "./style.module.css";
import Logo from "../Logo";

function NavigationSidebar() {
  const {
    navigationSidebar,
    setTextNavbar,
    TextNavbar,
    ModulesName,
    setModulesName,
    setnavTop,
    navMap,
  } = use(Context);

  return (
    <section className={Style.container}>
      <div
        className={Style.logo}
        onClick={() => {
          setTextNavbar(!TextNavbar);
          console.log(TextNavbar);
        }}
      >
        <Logo />
        <h1 className={`${TextNavbar && Style.none ? Style.none : ""}`}>
          CONSTRUFACIL
        </h1>
      </div>
      <ListSimple
        classNameLi={Style.li}
        classNameLi2={(id) => `${id === ModulesName ? Style.li2 : ""}`}
        classNameP={`${TextNavbar && Style.none ? Style.none : ""}`}
        classNameUl={Style.ul}
        classNameIcon={Style.icon}
        list={navigationSidebar}
        printIcon={true}
        printText={true}
        onClickLi={(id) => {
          (setModulesName(id),
            ModulesName === id ? "" : setnavTop(`${navMap[`nav${id}`][0].id}`),
            console.log(id));
        }}
      />
    </section>
  );
}

export default NavigationSidebar;
