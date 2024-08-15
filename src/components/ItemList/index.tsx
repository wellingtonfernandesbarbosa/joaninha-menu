import styles from "./ItemList.module.scss";

import { Item } from "@/types";

export default function ItemList({ itens, title }: { itens: Item[]; title: string }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.container__title}>{title}</h2>
      <ul className={styles.container__list}>
        {itens.map((item) => (
          <li key={item.id} className={styles.container__list__item}>
            <span className={styles.container__list__item__name}>
              {item.name}
            </span>
            <span className={styles.container__list__item__price}>
              R$ {item.price.toFixed(2).replace(".", ",")}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
