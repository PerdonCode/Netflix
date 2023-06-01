import { getURL } from "next/dist/shared/lib/utils";

const Banner = (props) => {
        // desstructure different props
        const { title, subTitle, imgUrl } = props;
        const handleOnPlay = () =>{
            console.log("clicked");
        }
    return (
        <div>
            <h3>{title}</h3>
            <h4>{subTitle}</h4>
            <button onClick={handleOnPlay}>play</button>
            <div
              style={{ 
                backgroundImage: `url(${imgUrl})`, 
                width: "100%", 
                height: "100%", 
                position: "absolute", 
                backgroundSize: "cover",
                backgroundPosition: "50% 50%",
            }}>
        </div>
        </div>
    );
};
export default Banner;