import { use } from "react";
import Style from "./Price.module.css";
import AppContext from "../../context/AppContext";
import clsx from "clsx";
import ButtonApp from "../../UI/Button";
import ListSimple from "../../UI/ListSimple";

function IndexPrices() {
  /*Funtion for section Prices */
  const { app_prices } =
    use(AppContext); /*request const app_prices from Context API APP */

  return (
    <section id="App_Price" className={Style.container}>
      <h1>Encontre o Plano Ideal</h1> {/*Title from section price*/}
      <h2>
        {/*Sub-Title from section price*/}
        Escolha o perfil que melhor se adapta ao momento da sua construtora.
      </h2>
      <div id="App_Price_Card" className={Style.cards}>
        {/*DIV that groups the Cards */}
        {app_prices.map((plano, index: number) => {
          {
            /*Function that generates cards from the constant*/
          }
          return (
            <div /*DIV of each Card*/
              id={"App_Price_Card_" + plano.title_id}
              className={clsx(Style[`card_${plano.title_id}`], Style.card)}
              key={index}
            >
              {plano.decoy /*If the decoy exists, it will be displayed*/ && (
                <p className={Style[`card_${plano.title_id}_decoy`]}>
                  {plano.decoy}
                </p>
              )}
              <h1>{plano.title}</h1> {/*Title from each card*/}
              <h2>{plano.sub_title}</h2> {/*Sub-Title from each card*/}
              <ListSimple
                list={plano.itemList}
                classNameUl={Style.lista}
                classNameLi={Style.item_lista}
                classNameP={Style.texto_lista}
                printText={true}
                printIcon={true}
              ></ListSimple>
              <ButtonApp className={Style[`button_${plano.title_id}`]}>
                Conversar com vendedor
              </ButtonApp>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default IndexPrices;
