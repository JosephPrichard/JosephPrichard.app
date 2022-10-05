import { Project } from "./types";

export const projects: Project[] = [
    {
        title: "Pantheon",
        year: "2022-08-01",
        desc: "A message board where users can make posts and engage in a tree structured comment system.",
        source: "https://github.com/JosephPrichard/Pantheon",
        tags: ["Typescript", "React", "Next.js", "Nest.js", "MikroORM", "SQL", "CSS"]
    },
    {
        title: "Pathfinder",
        year: "2021-02-01",
        desc: "An educational website to visualize pathfinding algorithms on 2D terrain.",
        source: "https://github.com/JosephPrichard/Pathfinder",
        demo: "https://josephprichard.github.io/Pathfinder",
        tags: ["Typescript", "React", "Sass"]
    },
    {
        title: "OthelloBot",
        year: "2022-06-01",
        desc: "A Discord bot for users to play Othello against other players or the computer.",
        source: "https://github.com/JosephPrichard/OthelloBot",
        demo: "/othello-bot-demo",
        tags: ["Java", "Hibernate", "SQL"]
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
        title: "AirlineRouter",
        year: "2022-04-01",
        desc: "A program to calculate routes for an airline company.",
        source: "https://github.com/JosephPrichard/AirlineRouter",
        tags: ["C++"]
    },
    {
        title: "DataStructures.net",
        year: "2021-02-01",
        desc: "Efficient implementations of some common abstract data structures.",
        source: "https://github.com/JosephPrichard/DataStructures.net",
        tags: ["C#"]
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