import { AppProps } from "next/app";
import "../styles/global.css";
import React from "react";
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title> Joseph Prichard </title>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;