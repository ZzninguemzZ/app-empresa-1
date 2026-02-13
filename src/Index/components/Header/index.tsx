import logo from "../../assets/logo.png";
import Style from "./Header.module.css";
import NavBarPc from "./NavBarPc";

function IndexHeader() {
  return (
    <header>
      <div className={Style.leftContent}>
        <img
          src={logo}
          alt="C"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        />
        <p className={Style.nameApp}>SISTEMA CONSTRUFACIL</p>
      </div>
      <NavBarPc />
    </header>
  );
}

export default IndexHeader;
