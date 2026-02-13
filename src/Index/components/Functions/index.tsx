import { use } from "react";
import CardsSimples from "../../UI/CardsSimples";
import Style from "./Functions.module.css";
import AppContext from "../../context/AppContext";

function IndexFunctions() {
  const { features } = use(AppContext);

  return (
    <section className={Style.app_functions} id="app_functions">
      <h1>Tudo que sua Construtora Precisa</h1>
      <h3>
        Ferramentas completas para gerenciar cada aspecto da sua obra com
        eficiência
      </h3>

      <CardsSimples
        lista_cards={features}
        class_grid={Style.grid}
        class_card={Style.card}
        class_icon={Style.icon_box}
      />
    </section>
  );
}

export default IndexFunctions;
