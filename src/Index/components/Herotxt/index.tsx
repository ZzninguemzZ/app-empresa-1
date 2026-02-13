import Style from "./Herotxt.module.css";
import heroimg from "../../assets/imghero.jpg";
import ButtonApp from "../../UI/Button";

function IndexHerotext() {
  return (
    <section className={Style.app_section_herotext}>
      <div id="herotxt" className={Style.herotxt}>
        <p className={Style.chamariz}>Usado por mais de 500 construtoras</p>
        <p className={Style.titulo1}>Gestão completa para</p>
        <p className={Style.titulo2}>obras de engenharia</p>
        <p className={Style.txt}>
          EngenhariaPro é o sistema completo para gerenciar sua construtora.
          Controle financeiro, obras, estoque, orçamentos, funcionários e muito
          mais em uma única plataforma.
        </p>
        <nav className={Style.CompraAndDemo}>
          <ButtonApp type="button" className={Style.button_compra}>
            Falar com Atendente →
          </ButtonApp>
          <ButtonApp type="button" className={Style.button_demo}>
            Ver demonstração
          </ButtonApp>
        </nav>
      </div>
      <div id="heroimg" className={Style.heroimg}>
        <img src={heroimg} alt="" />
      </div>
    </section>
  );
}

export default IndexHerotext;
