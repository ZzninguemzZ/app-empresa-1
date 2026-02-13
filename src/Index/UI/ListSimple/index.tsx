
import type { List_icon } from "../../../Index/context/AppContext";




function ListSimple({
  list,
  classNameUl,
  classNameLi,
  classNameP,
  classNameIcon,
  printText,
  printIcon,
}: {
  list: List_icon[];
  classNameUl: string;
  classNameLi: string;
  classNameP: string;
  classNameIcon?: string;
  printText: boolean;
  printIcon: boolean;
}) {

  return (
    <ul className={classNameUl}>
      {list.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <li key={index} className={classNameLi}>
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
