import { useRouter } from "next/router";
import  Modal  from "react-modal";
import styles from './video.module.css';
import clsx from 'classnames'

Modal.setAppElement("#__next");

export async function getStaticProps(){

  // data to fetch from api
    const video = {
    title: "Hi cute dog",
    publishTime: "1990-01-01",
    description: " A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger? A big red dog that is super cute, can he get any bigger?",
    channelTitle: "paramount Pictures",
    viewCount: 10000,
  }
  return{
    props: {
      video,
    }, 
    revalidate: 10,
  };
}

const video = ({video}) => {
  // use router for dinamic id
  const router = useRouter();  
  
  // destructure
  const {title, publishTime, description, channelTitle,viewCount } = video;
  return (
    <div className={styles.container}>
      <Modal
        isOpen={true} //boolean describing if the modal should be shown or not
        contentLabel="Watch the video" // String indicating how the content container should be announced
        onRequestClose={() => router.back()} // function that will be run when the modal is requested to be closed (.back navigates back in history)
        className={styles.modal}
        overlayClassName={styles.overlay} // string classname to be applied to the overlay 
      >


          <iframe
          id="ytplayer"
          className={styles.videoPlayer}
          type="text/html"
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${router.query.videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`} // with router.query.videoId it shows the right video
          frameBorder="0">
        </iframe>

        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>{publishTime}</p>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.col2}>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>Cast:</span>
                <span className={styles.channelTitle}>{channelTitle}</span>
              </p>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>View Count:</span>
                <span className={styles.channelTitle}>{viewCount}</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
export default video;