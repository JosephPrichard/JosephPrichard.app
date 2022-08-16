import SkillPanel from "./SkillPanel";
import React from "react";
import { SkillGroup } from "../data/types";
import { Code, Database, Layout, Server } from "react-feather";

const map: {[key: string]: React.ReactNode} = {
    "server": <Server size={60}/>,
    "layout": <Layout size={60}/>,
    "database": <Database size={60}/>,
    "code": <Code size={60}/>
};

interface Props {
    groups: SkillGroup[];
}

const SkillsPanel = ({ groups }: Props) => {
    return (
        <div className="SkillsWrapper">
            {groups.map((group, i) => {
                return (
                    <SkillPanel
                        key={i}
                        title={group.title}
                        icon={map[group.type]}
                        skills={group.skills}
                    />
                );
            })}
        </div>
    );
}

export default SkillsPanel;