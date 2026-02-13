import type { Feature } from "../../../Index/context/AppContext";

interface IProps {
  lista_cards: Feature[];
  class_grid: string;
  class_card: string;
  class_icon: string;
}

function CardsSimples({ lista_cards, class_grid, class_card, class_icon }: IProps) {
  return (
    <div className={class_grid}>
      {lista_cards.map((item, index: number) => {
        const Icon = item.icon;

        return (
          <div
            className={class_card}
            id={{ class_card } + String(index + 1)}
            key={index}
          >
            <div className={class_icon}>
              <Icon size={32} strokeWidth={2} />
            </div>

            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CardsSimples;
