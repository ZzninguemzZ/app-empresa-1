import Style from "./Footer.module.css";
import logo from "../../assets/logo.png";
import { use } from "react";
import AppContext from "../../context/AppContext";
import ListSimple from "../../UI/ListSimple";

function IndexFooter() {
  const { FooterIcons, FooterLinks } = use(AppContext);

  return (
    <section id="App_footer" className={Style.Container}>
      <div className={Style.ContainerTop}>
        <div className={Style.ContainerLogoTitulo}>
          <div>
            <img src={logo} alt="Logo" />
            <h1>SISTEMA CONSTRUFACIL</h1>
          </div>
          <p className={Style.ContainerLogoTituloText}>
            Sistema completo de gestão para empresas de engenharia e construção
            civil.
          </p>
          <ListSimple
            list={FooterIcons}
            classNameUl={Style.UlSocialMedias}
            classNameLi={Style.LiSocialMedias}
            classNameP=""
            printText={false}
            printIcon={true}
          ></ListSimple>
        </div>
        <div className={Style.ContainerPrincipal}>
          {FooterLinks.map((item, index) => {
            return (
              <div id={"App_footer_" + index} key={index} className={Style.ContainerPrincipalColuns}>
                <p className={Style.ContainerPrincipalColunsTitle}>{item.title}</p>
                <ListSimple
                  list={item.links}
                  classNameUl={Style.ContainerPrincipalUl}
                  classNameLi={Style.ContainerPrincipalColunsLi}
                  classNameP=""
                  printText={true}
                  printIcon={false}
                ></ListSimple>
              </div>
            );
          })}
        </div>
      </div>
      <div className={Style.ContainerBottom}>
        <p className={Style.Copyright}>
          © 2025 EngenharíaPro. Todos os direitos reservados.
        </p>
        <div className={Style.ContainerBottomLinks}>
          <p>Termos</p>
          <p>Privacidade</p>
          <p>Cookies</p>
        </div>
      </div>
    </section>
  );
}

export default IndexFooter;
