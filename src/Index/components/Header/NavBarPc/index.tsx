import { use } from "react";
import Style from "./NavBarPc.module.css";
import ButtonApp from "../../../UI/Button";
import AppContext from "../../../context/AppContext";

function IndexNavBarPc() {
  const { ModalNavBar, setModalNavBar, setModalLogin } =
    use(AppContext);

  return (
    <>
      {/*Botão de abrir e fechar sidebar*/}
      <ButtonApp
        type="button"
        className={Style.menuButton}
        onClick={() => setModalNavBar(!ModalNavBar)}
        /* onclick={() => console.log("funciona")} */
      >
        ☰
      </ButtonApp>

      {/* Overlay (fundo escuro) */}
      <div
        className={`${Style.overlay} ${ModalNavBar ? Style.ativo : ""}`}
        onClick={() => setModalNavBar(false)}
      />
      {/* 
            BOTÕES DE NAVEGAÇÃO
        */}
      <aside
        id="sidebarApp"
        className={`${Style.sidebarApp} ${ModalNavBar ? Style.ativa : ""}`}
      >
        <nav className={Style.botaoNavegacao}>
          <a href="#app_functions" onClick={() => setModalNavBar(false)}>Recursos</a>
          <a href="#app_section_history" onClick={() => setModalNavBar(false)}>Sobre</a>
          <a href="#App_Price" onClick={() => setModalNavBar(false)}>Preços</a>
          <a href="#App_footer" onClick={() => setModalNavBar(false)}>Contato</a>
        </nav>
        <div className=""></div>
        <div className={Style.loginDiv}>
          <ButtonApp
            type="button"
            className=""
            onClick={() => {
              setModalNavBar(false);
              setModalLogin(true);
            }}
          >
            Login
          </ButtonApp>
        </div>
        <ButtonApp
          type="button"
          className={Style.closeSidebar}
          onClick={() => setModalNavBar(false)}
        >
          X
        </ButtonApp>
      </aside>
    </>
  );
}

export default IndexNavBarPc;
