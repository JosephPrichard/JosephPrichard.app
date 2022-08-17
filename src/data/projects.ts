import { Project } from "./types";

export const projects: Project[] = [
    {
        title: "Pantheon",
        year: "2022-08-01",
        desc: "A social media website similar to Reddit where users can make posts and comments.",
        source: "https://github.com/JosephPrichard/Pantheon",
        tags: ["Typescript", "React", "Next.js", "Nest.js", "MikroOrm", "PostgreSQL"]
    },
    {
        title: "OthelloBot",
        year: "2022-06-01",
        desc: "A Discord bot for users to play Othello against other players or an AI.",
        source: "https://github.com/JosephPrichard/OthelloBot",
        demo: "/othello-bot-demo",
        tags: ["Java", "Hibernate", "JPA", "PostgreSQL"]
    },
    {
        title: "Pathfinder",
        year: "2021-02-01",
        desc: "An educational website to visualize pathfinding algorithms on 2D terrain.",
        source: "https://github.com/JosephPrichard/Pathfinder",
        demo: "https://josephprichard.github.io/Pathfinder",
        tags: ["Typescript", "React"]
    },
    {
        title: "ChessLite",
        year: "2020-07-01",
        desc: "A desktop GUI for playing Chess games on a personal computer.",
        source: "https://github.com/JosephPrichard/ChessLite",
        demo: "https://www.youtube.com/watch?v=m_j5ejDA-hc",
        tags: ["Java", "JavaFx"]
    },
    {
        title: "SlidingPuzzle",
        year: "2020-04-01",
        desc: "An AI to solve the sliding puzzle problem using the shortest number of steps.",
        source: "https://github.com/JosephPrichard/SlidingPuzzle",
        tags: ["Java"]
    },
    {
        title: "FunnelFinder",
        year: "2019-04-01",
        desc: "A desktop GUI for creating CAD scripts for funnel translations between shapes.",
        source: "https://github.com/JosephPrichard/FunnelFinder",
        tags: ["Java"]
    }
];