/*
 * Copyright (c) Joseph Prichard 2022.
 */

import { NextPage } from "next";
import React from "react";
import TopBanner from "../src/components/TopBanner";

const Error404Page: NextPage = () => {
    return (
        <>
            <TopBanner/>
            <div className="Error">
                <h1>
                    <b> 404 </b> error
                </h1>
                <h4>
                    That page doesn't exist!
                </h4>
            </div>
        </>
    );
};

export default Error404Page;