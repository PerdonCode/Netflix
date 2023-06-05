import "../styles/globals.css";
import React from "react";
import { UserProvider } from '@auth0/nextjs-auth0/client';

function MyApp({ Component, pageProps }) {
  return( 
    <div>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </div>
  );
}

export default MyApp;
