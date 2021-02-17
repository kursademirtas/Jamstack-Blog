import App from 'next/app'
import Head from 'next/head';
import '../assets/css/style.css';
import { createContext } from 'react';
import { getStrapiMedia } from '../lib/media';
import { fetchAPI } from '../lib/api';

export const GlobalContext = createContext({});


const  MyApp = ({ Component, pageProps })  => {

  const { global } = pageProps;


  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/css/uikit.min.css"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.2.3/dist/js/uikit-icons.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.2.0/js/uikit.js" />
      </Head>
      <GlobalContext.Provider value={global}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
     
    </>
  )
}

MyApp.getInitialProps = async(ctx) => {
  const appProps = await App.getInitialProps(ctx);
  const global = await fetchAPI('/global');

  return {...appProps, pageProps: { global }}
}

export default MyApp;
