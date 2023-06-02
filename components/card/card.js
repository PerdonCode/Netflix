import Image from "next/image";
import styles from './card.module.css'
import { useState } from "react";

const Card = (props) =>{
    const {imgUrl, size = "medium"} = props;
    // set imgUrl to default when found otherwise function handleOnError
    const [imgSrc, setImgSrc] = useState(imgUrl);
    const classMap = {
        'large': styles.lgItem,
        'medium': styles.mdItem,
        'small': styles.smItem
    }
    const handleOnError = () => {
        console.log("hi error");
        // set img 
        setImgSrc('/static/clifford2.jpg')
    }
    return(
        <div className={styles.container}>
            <div className={classMap[size]}>
                <Image src={imgSrc} alt="image" layout="fill" className={styles.cardImg} onError={handleOnError}/>
            </div>
        </div>
    );
}
export default Card;