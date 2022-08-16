import { NextPage } from "next";
import { NextSeo } from "next-seo";
import TopBanner from "../src/components/TopBanner";
import React from "react";
import { GitHub, Linkedin, MapPin } from "react-feather";

const ContactPage: NextPage = () => {
    return (
        <>
            <NextSeo title="Contact | Joseph Prichard"/>
            <TopBanner/>
            <div className="Display">
                <h1 className="CenteredText">
                    Contact Me
                </h1>
                <div className="Contacts">
                    <div className="Contact">
                        <div>
                            <GitHub size={35}/>
                        </div>
                        <div>
                            See my code
                        </div>
                        <a href="https://github.com/JosephPrichard" className="Highlight">
                            github.com
                        </a>
                    </div>
                    <div className="Contact">
                        <div>
                            <Linkedin size={35}/>
                        </div>
                        <div>
                            Hire me at
                        </div>
                        <a href="https://www.linkedin.com/in/joseph-p-66900a1b5/" className="Highlight">
                            linkedin.com
                        </a>
                    </div>
                    <div className="Contact">
                        <div>
                            <MapPin size={35}/>
                        </div>
                        <div>
                            I live in
                        </div>
                        <div>
                            Dallas, Texas
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContactPage;