import Head from "next/head";
import styles from './login.module.css'
import Image from "next/image";
import Link from "next/link";
import { useState} from "react";
import { useRouter } from "next/router";

const login = () =>{
    // use state = set var and use it in different functions
    const [userMsg, setUserMsg] = useState("");
    const [email, setEmail] = useState("");

    // use router = if router is right then use router.push
    const router = useRouter();

    const handleOnChangeEmail = (e) => {
        setUserMsg("");
        const email = e.target.value;
        setEmail(email);
    }

 const handleLoginWithEmail = (e) => {
    // prevent page refresh
    e.preventDefault();
    console.log("hi button!");

    if(email){
        if(email === "niels.perdon@gmail.com"){
            // route to dashboard 
        console.log("route to dashboard");
        router.push("/");
     }else{
        setUserMsg("something went wrong loging in");
     }
    }else{
         // show user message
        setUserMsg("enter valid email adress") 
    }
 }
    return(
        <div className={styles.container}>
        <Head>
          <title>Netflix SignIn</title>
        </Head>
  
        <header className={styles.header}>
          <div className={styles.headerWrapper}>
            <Link className={styles.logoLink} href="/">
                <div className={styles.logoWrapper}>
                  <Image
                    src="/static/icons/netflix.svg"
                    alt="Netflix logo"
                    width="128"
                    height="34"
                  />
                </div>
            </Link>
          </div>
        </header>
  
        <main className={styles.main}>
          <div className={styles.mainWrapper}>
            <h1 className={styles.signinHeader}>Sign In</h1>
  
            <input
              type="text"
              placeholder="Email address"
              className={styles.emailInput}
              onChange={handleOnChangeEmail}
            />
  
            <p className={styles.userMsg}>{userMsg}</p>
            <button onClick={handleLoginWithEmail} className={styles.loginBtn}>Sign In
            </button>
          </div>
        </main>
      </div> 
    );
}
// needs to export otherwise it isn't a react component
export default login;