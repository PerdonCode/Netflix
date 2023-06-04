import styles from "../styles/Home.module.css";
import Head from "next/head";
import Banner from "../components/banner/banner";
import Card from "../components/card/card";
import SectionCards from "../components/card/section-cards";
// these needs to be exported as default but you can only export 1 function on a page but you can import as default
import { default as getVideos, getPopularVideos} from "../lib/videos"


// Side has to start with capital S
export async function getServerSideProps(){

    const disneyVideos = await getVideos("disney trailer");
    const productivityVideos = await getVideos("productivity");
    const travelVideos = await getVideos("travel");
    const popularVideos = await getPopularVideos();
    //const popularVideos = await getVideos("disney trailer");

  return {
    props: {
      disneyVideos, // will be passed at the page component as props
      travelVideos,
      productivityVideos,
      popularVideos
    },
  }
}
export default function Home({disneyVideos, travelVideos, productivityVideos, popularVideos}) {
 return (
<div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="styles.main">

     
      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford2.jpg" />

      <div className={styles.sectionWrapper}>
        {/* array of objects */}
        <SectionCards title="Disney" videos={disneyVideos} size="large" />
        <SectionCards title="travel" videos={travelVideos} size="medium" />
        <SectionCards title="Productivity" videos={productivityVideos} size="small" />
        <SectionCards title="Popular" videos={popularVideos} size="small" />
      </div>
       </div>
    </div>
 );
}