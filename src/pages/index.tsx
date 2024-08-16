import styles from "./index.module.scss";

import Head from "next/head";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ItemList from "@/components/ItemList";

import { lanches, porcoes, bebidasSemAlcool, bebidasAlcoolicas, drinks, vinhos, doces } from "@/data/menu";


export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <meta lang="pt-br" />
        <title>Cardáprio da Dona Joaninha</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Cardáprio da Cantina da Dona Joaninha" />
      </Head>
      <Header />
      <main className={styles.container__main}>
        <ItemList title="Lanches" itens={lanches} />
        <ItemList title="Porções" itens={porcoes} />
        <ItemList title="Bebidas sem alcool" itens={bebidasSemAlcool} />
        <ItemList title="Bebidas alcoolicas" itens={bebidasAlcoolicas} />
        <ItemList title="Drinks" itens={drinks} />
        <ItemList title="Vinhos" itens={vinhos} />
        <ItemList title="Doces" itens={doces} />
      </main>
      <Footer />
    </div>
  );
}
