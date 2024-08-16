import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <p className={styles.footer__content__text}>
          Desenvolvido por:{" "}
          <a href="https://wellingtonfernandes.vercel.app/" className={styles.footer__content__link}>
            Wellington Fernandes
          </a>
        </p>
      </div>
    </footer>
  );
}
