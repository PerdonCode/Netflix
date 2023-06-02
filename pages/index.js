import styles from "../styles/Home.module.css";
import Head from "next/head";
import Banner from "../components/banner/banner";
import Card from "../components/card/card";

export default function Home() {
 return (
<div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford2.jpg" />

      <Card imgUrl="/static/clifford2.jpg" size="large" />
      <Card imgUrl="/static/clifford2.jpg" size="medium" />
      <Card imgUrl="/static/clifford2.jpg" size="small" />
    </div>
 );
}