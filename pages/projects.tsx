import { GetStaticProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import TopBanner from "../src/components/TopBanner";
import React from "react";
import { Project } from "../src/data/types";
import ProjectsPanel from "../src/components/ProjectsPanel";
import { projects } from "../src/data/projects";
import BottomBanner from "../src/components/BottomBanner";

interface Props {
    projects: Project[];
}

const ProjectPage: NextPage<Props> = ({ projects }: Props) => {
    return (
        <>
            <NextSeo title="Projects | Joseph Prichard"/>
            <TopBanner/>
            <div className="Display">
                <h1 className="Indented">
                    Projects
                </h1>
                <ProjectsPanel projects={projects}/>
            </div>
            <BottomBanner/>
        </>
    );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
    return { props: { projects: [...projects] } };
}

export default ProjectPage;