import styles from "../styles/Home.module.css";
import Head from "next/head";
import Banner from "../components/banner/banner";
import Card from "../components/card/card";
import SectionCards from "../components/card/section-cards";
import getVideos from "../lib/videos"


// Side has to start with capital S
export async function getServerSideProps(){

    const disneyVideos = await getVideos("disney trailer");
    const productivityVideos = await getVideos("productivity");
    const travelVideos = await getVideos("travel");
    //const popularVideos = await getVideos("disney trailer");

  return {
    props: {
      disneyVideos, // will be passed at the page component as props
      travelVideos,
      productivityVideos,
    },
  }
}
export default function Home({disneyVideos, travelVideos, productivityVideos}) {
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
        <SectionCards title="Productivity" videos={travelVideos} size="medium" />
        <SectionCards title="Popular" videos={productivityVideos} size="small" />
      </div>
      
    </div>
 );
}