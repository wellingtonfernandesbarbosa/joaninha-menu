import Image from "next/image";
import Joaninha from "@/images/Joaninha.png";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <h1 className={styles.header__content__title}>Cardáprio da Dona Joaninha</h1>
        <Image src={Joaninha} width={150} height={150} alt="Logo da cantina" />
      </div>
    </header>
  );
}
