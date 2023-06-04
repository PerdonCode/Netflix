import Card from "./card";
import styles from "./section-cards.module.css";
const sectionCards = (props) =>{
    // destructure props
    const {title, videos = [], size} = props;
    return(
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
            {videos.map((video, idx) => {
                console.log({video});
                 return <Card key={idx} id={idx} imgUrl={video.imgUrl} size={size} />;
            })}       
            </div>
        </section>
    );
} 
export default sectionCards;