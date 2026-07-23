
export const foldetPath = "/projects/coding/";
export const  programmingProjects: ProjectInterface[] = [
    {
        "projectName": "IOTQT",
        "backgroundColour": "black",
        "foregroundColour": "white",
        "imgUrl": "IOTQT.png",
        "techStack":["next", "tailwind", "postgres", "prisma", "sqlalchamy", "framer"],
        "type": "Web Dev"
    },
    {
        "projectName": "Pac-man",
        "backgroundColour": "#FFDE42",
        "foregroundColour": "black",
        "imgUrl": "pacman.png",
        "techStack":["python", "pygame"],
        "type": "Desktop app"
    },
    {
        "projectName": "Sticky",
        "backgroundColour": "#FF85BB",
        "foregroundColour": "#021A54",
        "imgUrl": "sticky.png",
        "techStack":["csharp", "sql", "wpf"],
        "type": "Desktop app"
    },
    {
        "projectName": "Space Invaders",
        "backgroundColour": "#406AAF",
        "foregroundColour": "#F7DD7D",
        "imgUrl": "jet.png",
        "techStack":["javascript", "html", "css", "phaser"],
        "type": "Web Dev"
    },
    {
        "projectName": "GoCar",
        "backgroundColour": "#00994E",
        "foregroundColour": "#761513",
        "imgUrl": "gocar.png",
        "techStack":["csharp", "sql"],
        "type": "Desktop app"
    },
    {
        "projectName": "Swift",
        "backgroundColour": "#6865ae",
        "foregroundColour": "#21b894",
        "imgUrl": "swift.png",
        "techStack":["jquery", "html", "css", "mongo", "express"],
        "type": "Web Dev"
    },
]

export interface ProjectInterface{
    "projectName": string,
    "backgroundColour": string,
    "foregroundColour": string,
    "imgUrl": string,
    "techStack": string[] | [],
    "type": string,
}