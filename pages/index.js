import styles from "../styles/Home.module.css";
import Head from "next/head";
import Banner from "../components/banner/banner";
import Card from "../components/card/card";
import SectionCards from "../components/card/section-cards";

export default function Home() {
  const disneyVideos = [
    {imgUrl:'/static/clifford2.jpg'},
    {imgUrl:'/static/clifford2.jpg'},
    {imgUrl:'/static/clifford2.jpg'}
  ];
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
      <div className={styles.sectionWrapper}>
        {/* array of objects */}
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="Productivity" videos={disneyVideos} size="medium" />
      </div>
      
    </div>
 );
}