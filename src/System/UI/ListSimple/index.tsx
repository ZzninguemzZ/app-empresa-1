import type { list_icon } from "../../Constext";

function ListSimple({
  list,
  classNameUl,
  classNameLi,
  classNameLi2,
  classNameP,
  classNameIcon,
  printText,
  printIcon,
  onClickLi,
}: {
  list: list_icon[];
  classNameUl: string;
  classNameLi: string;
  classNameLi2?: (id: string) => string;
  classNameP: string;
  classNameIcon?: string;
  printText: boolean;
  printIcon: boolean;
  onClickLi?: (id: string) => void;
}) {
  return (
    <ul className={classNameUl}>
      {list.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <li
            key={index}
            className={`${classNameLi} ${classNameLi2 ? classNameLi2(feature.id) : ""}`}
            onClick={() => onClickLi?.(feature.id)}
          >
            {printIcon ? (
              <Icon size={24} strokeWidth={2} className={classNameIcon} />
            ) : null}
            {printText ? (
              <p className={classNameP}>{feature.description}</p>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}

export default ListSimple;
