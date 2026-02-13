import { use } from "react";
import Style from "./History.module.css";
import img from "../../assets/imghistory.jpg";
import AppContext from "../../context/AppContext";
import ListSimple from "../../UI/ListSimple";

export function IndexHistory() {
  const { History } = use(AppContext);

  return (
    <section className={Style.history} id="app_section_history">
      <div className={Style.img}>
        <img src={img} alt="imagem" />
      </div>
      <div className={Style.history_text}>
        <p className={Style.mini_titulo}>Sobre o EngenharíaPro</p>
        <h1 className={Style.titulo}>
          Construído por engenheiros, para engenheiros
        </h1>
        <h2 className={Style.paragrafo}>
          O EngenharíaPro foi desenvolvido especificamente para atender as
          necessidades das empresas de construção civil. Entendemos os desafios
          do dia a dia em obras e criamos uma solução que realmente resolve os
          problemas do setor.
        </h2>
        <ListSimple
          list={History}
          classNameUl={Style.lista}
          classNameLi={Style.item_lista}
          classNameP={Style.texto_lista}
          classNameIcon={Style.icone_lista}
          printText={true}
          printIcon={true}
        ></ListSimple>
        <div className={Style.demonstracao}>
          <div className={Style.demonstracao_cabecalho}>
            <p className={Style.demonstracao_icone}>🏗️</p>
            <div className={Style.demonstracao_texto}>
              <p className={Style.demonstracao_titulo}>
                Demonstração Exclusiva
              </p>
              <p className={Style.demonstracao_subtitulo}>
                Conheça o sistema em detalhes
              </p>
            </div>
          </div>
          <p className={Style.demonstracao_paragrafo}>
            Agende uma apresentação personalizada com um especialista e veja
            como transformar a gestão da sua construtora.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IndexHistory;
