import styles from "../styles/Home.module.css";
import Head from "next/head";
import Banner from "../components/banner/banner";
import NavBar from "../components/nav/navbar";

export default function Home() {
 return (
<div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar username = "Niels"/>
      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford2.jpg"
      />

     
      {/* <Card /> */}
    </div>
 );
}