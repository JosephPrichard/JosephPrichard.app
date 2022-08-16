import ProjectPanel from "./ProjectPanel";
import React from "react";
import { Project } from "../data/types";

interface Props {
    projects: Project[];
    showCount?: number;
}

const ProjectsPanel = ({ projects, showCount }: Props) => {
    if (showCount) {
        projects.length = showCount;
    }

    return (
        <div className="ProjectWrapper">
            {projects.map((project, i) => {
                return (
                    <ProjectPanel project={project}/>
                );
            })}
        </div>
    );
}

export default ProjectsPanel;