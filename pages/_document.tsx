import React from "react";
import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <meta name="color-scheme" content="dark light"/>
                <link rel="shortcut icon" href="/face.jpg" />
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    );
}

export default Document;