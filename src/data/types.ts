export interface Project {
    title: string;
    year: string;
    source?: string;
    demo?: string;
    desc: string;
    tags: string[];
}

export interface SkillGroup {
    title: string;
    type: string;
    skills: string[];
}