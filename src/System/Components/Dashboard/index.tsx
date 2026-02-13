import style from "./style.module.css";

import Context, {
  number_Coin,
  number_percents,
  type card,
  type Coin,
  type Percents,
} from "../../Constext.ts";
import { DollarSign, FileText, FolderKanban, Users } from "lucide-react";
import { use } from "react";
export default function Dashboard() {

    const {language} = use(Context)

  const temp1: number = 24;
  const temp2: Percents = number_percents(0.12);
  const temp3: number = 156;
  const temp4: Percents = number_percents(0.08);
  const temp5: number = 12;
  const temp6: Percents = number_percents(0.03);
  const temp7: Coin = number_Coin(458000);
  const temp8: Percents = number_percents(0.18);

  const cards_summaries: card[] = [
    {
      position: 10,
      title: "Projeto Ativos",
      icon: FolderKanban,
      value: temp1,
      percent: temp2,
    },
    {
      position: 20,
      title: "Clientes Ativos",
      icon: Users,
      value: temp3,
      percent: temp4,
    },
    {
      position: 30,
      title: "Orçamentos Pendentes",
      icon: FileText,
      value: temp5,
      percent: temp6,
    },
    {
      position: 40,
      title: "Receita Mensal",
      icon: DollarSign,
      price: temp7,
      percent: temp8,
    },
  ];

  return (
    <>
      <section className={style.cards1}>
        {cards_summaries
          .sort((a, b) => a.position - b.position)
          .map((card, key: number) => {
            return (
              <div key={key} className={style.card}>
                <div>
                  <h1>{card.title}</h1>
                  <p>{(card.value) ? card.value : card.price!.toLocaleString(language, { style: "currency", currency: "BRL" })}</p>
                </div>
              </div>
            );
          })}
      </section>
      <section className={style.cardsmiddle}></section>
    </>
  );
}
