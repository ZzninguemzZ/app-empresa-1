import Style from "./style.module.css";
import logo from "../../assets/logo.png";

export default function Logo() {
  return (
    <>
      <img src={logo} alt="Logo" className={Style.logo} />
    </>
  );
}
