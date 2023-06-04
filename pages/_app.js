import "../styles/globals.css";
import NavBar from "../components/nav/navbar";

function MyApp({ Component, pageProps }) {
  return( 
    <div>
       {/* <NavBar username = "Niels"/> */}
      <Component {...pageProps} />{" "}
     
    </div>
  );
}

export default MyApp;
