import React from "react";
import { GetStaticProps, NextPage } from "next";
import TopBanner from "../src/components/TopBanner";
import { NextSeo } from "next-seo";
import { projects } from "../src/data/projects";
import { Project } from "../src/data/types";
import ProjectsPanel from "../src/components/ProjectsPanel";
import Link from "next/link";
import BottomBanner from "../src/components/BottomBanner";

interface Props {
    projects: Project[];
}

const IndexPage: NextPage<Props> = ({ projects }: Props) => {
    return (
        <>
            <NextSeo title="Home | Joseph Prichard"/>
            <TopBanner/>
            <div className="Display">
                {/*<AnimatedTitle finalText="Hi, I'm Joseph Prichard!"/>*/}
                <h1>
                    Hi, I'm Joseph Prichard!
                </h1>
                <h3>
                    I'm a Software Engineer and Computer Scientist attending University of Texas at Dallas as a Junior.
                </h3>
                <p>
                    I've been a passionate programmer and an avid follower of technology for 4+ years.
                    I'm interested in many topics ranging from web applications to computer theory to database systems.
                    I also love learning new languages and programming paradigms!
                </p>
                <p>
                    This website is a portfolio to showcase the projects I've created, and the tech stack I keep up to date on!
                </p>
                <h2 className="Indented BufferTitle">
                    Side Projects
                </h2>
                <ProjectsPanel projects={projects} showCount={3}/>
                <Link href={"/projects"}>
                    <div className="Indented SeeMoreButton">
                        See All Projects
                    </div>
                </Link>
            </div>
            <BottomBanner/>
        </>
    );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    return { props: { projects: [...projects] } };
}

export default IndexPage;