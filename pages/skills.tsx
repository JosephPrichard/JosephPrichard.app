import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import TopBanner from "../src/components/TopBanner";
import React from "react";
import { SkillGroup } from "../src/data/types";
import SkillsPanel from "../src/components/SkillsPanel";
import { groups } from "../src/data/groups";
import BottomBanner from "../src/components/BottomBanner";

interface Props {
    groups: SkillGroup[];
}

const SkillPage: NextPage<Props> = ({ groups }: Props) => {
    return (
        <>
            <NextSeo title="Skills | Joseph Prichard"/>
            <TopBanner/>
            <div className="Display">
                <h1 className="CenteredText">
                    Skills
                </h1>
                <p className="CenteredText SkillText">
                    Motivated and skillful Software Engineer with experience in
                    frontend development, backend development, databases, and computer theory.
                    Adaptive team-player with the ability to develop maintainable
                    yet efficient solutions.
                    I love learning about new technologies and programming languages!
                </p>
                <SkillsPanel groups={groups}/>
            </div>
            <BottomBanner/>
        </>
    );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    return { props: { groups: [...groups] } };
}

export default SkillPage;