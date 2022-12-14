import React from "react";
import { Project } from "../data/types";
import ButtonLink from "./ButtonLink";

interface Props {
    project: Project;
}

const ProjectPanel = ({ project }: Props) => {
    return (
        <div className="ProjectPanel">
            <div className="Date">
                { new Date(project.year).getFullYear() }
            </div>
            <h3 className="ProjectTitle">
                { project.title }
            </h3>
            <div className="ProjectContent">
                { project.desc }
            </div>
            <div className="ProjectBottom">
                <div className="ProjectTags">
                    {project.tags.map((tag, i) => {
                        return (
                            <div key={i} className="ProjectTag">
                                { tag }
                            </div>
                        );
                    })}
                </div>
            </div>
            <div>
                {!project.source || <ButtonLink href={project.source} title="Source"/>}
                {!project.demo || <ButtonLink href={project.demo} title="Demo"/>}
            </div>
        </div>
    )
}

export default ProjectPanel;