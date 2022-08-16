import React from "react";

interface Props {
    title: string;
    icon: React.ReactNode;
    skills: string[];
}

const SkillPanel = ({ icon, title, skills }: Props) => {
    return (
        <div className="SkillPanel">
            <div>
                { icon }
            </div>
            <h3>
                { title }
            </h3>
            <div>
                {skills.map((skill, i) => {
                    return (
                        <div className="Skill" key={i}>
                            { skill }
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default SkillPanel;