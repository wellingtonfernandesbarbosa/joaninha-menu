import styles from "./index.module.scss";
import Head from "next/head";

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <meta lang="pt-br" />
        <title>Cardáprio da Dona Joaninha</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Cardáprio da Cantina da Dona Joaninha" />
      </Head>
      <main>
        <h1>Cardáprio da Dona Joaninha</h1>
      </main>
    </div>
  );
}
