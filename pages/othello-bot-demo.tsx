import { NextPage } from "next";
import { NextSeo } from "next-seo";
import TopBanner from "../src/components/TopBanner";
import BottomBanner from "../src/components/BottomBanner";
import React from "react";

const OthelloBotDemoPage: NextPage = () => {
    return (
        <>
            <NextSeo title="Demo | Joseph Prichard"/>
            <TopBanner/>
            <div className="Display">
                <h1>
                    Othello Bot Demo
                </h1>
                <p>
                    This is a short demo of the OthelloBot I've created.
                    You can view the different channels to see how the commands work!
                    Discord Bots do not listen to other discord bots, so to use my bot you will need
                    to install it and add it to your server.
                </p>
                <div className="WidgetWrapper">
                    <iframe
                        className="Widget"
                        src="https://e.widgetbot.io/channels/1002390410959798343/1002390410959798346"
                        height="100%"
                        width="100%"
                    />
                </div>
                <div className="WidgetBotText">
                    Widget created with WidgetBot.io
                </div>
            </div>
            <BottomBanner/>
        </>
    );
}

export default OthelloBotDemoPage;