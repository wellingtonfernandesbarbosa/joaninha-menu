import Image from "next/image";
import Joaninha from "@/images/Joaninha.png";
import styles from "./Header.module.scss";
import { Item } from "@/types";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1>Cardáprio da Dona Joaninha</h1>
        <Image src={Joaninha} width={150} height={150} alt="Logo da cantina" />
      </div>
    </header>
  );
}
