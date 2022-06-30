import Head from 'next/head';
import Script from 'next/script';
import '../styles/globals.css'
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// import "../scss/style.scss";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    AOS.init();
  }, []);

  return (

    <>

      <Head>

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>



      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossOrigin="anonymous" />
      <Script src="https://kit.fontawesome.com/d01e5a8307.js" crossOrigin="anonymous" />
      <Script src='https://uploads-ssl.webflow.com/622b98d77f03094279ee9a46/js/webflow.58844266b.js' />
      {/* <script src="https://codepen.io/osublake/pen/e72106811a34efcccff91a03568cc790.js?v=3" /> */}

      <Component {...pageProps} />

    </>

  );


}

export default MyApp
