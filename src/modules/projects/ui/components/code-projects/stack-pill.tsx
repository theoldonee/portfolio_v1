import { JSX } from "react";
import { CSharpSvg } from "../svg/csharp";
import { StyleInterface } from "@/lib/sharedInterfaces";
import { FlaskSvg } from "../svg/flask";
import { NextSvg } from "../svg/next";
import { NumpySvg } from "../svg/numpy";
import { PostgresSvg } from "../svg/postgresql";
import { PythonSvg } from "../svg/python";
import { JquerySvg } from "../svg/jquery";
import { HtmlSvg } from "../svg/html";
import { CssSvg } from "../svg/css";
import { TypescriptSvg } from "../svg/typescript";
import { TailwindSvg } from "../svg/tailwind";
import { MongoSvg } from "../svg/mongo";
import { SqlSvg } from "../svg/sql";
import { JavascriptSvg } from "../svg/javascript";
import { PygameSvg } from "../svg/pygame";
import { ExpressSvg } from "../svg/express";
import { PhaserSvg } from "../svg/phaser";
import { SqlalchamySvg } from "../svg/sqlalchamy";
import { PrismaSvg } from "../svg/prisma";
import { FramerSvg } from "../svg/framer";

export const StackPill =  ({stack, style} : {stack: string, style : StyleInterface}) =>{
        
    const pillDict: Record<string, JSX.Element> = {
    "csharp": (<><CSharpSvg style={style} /> <span>CSharp</span></>),
    "flask": (<><FlaskSvg style={style} /> <span>Flask</span></>),
    "next": (<><NextSvg style={style} /> <span>Next.js</span></>),
    "numpy": (<><NumpySvg style={style} /> <span>Numpy</span></>),
    'postgres': (<><PostgresSvg style={style} /> <span>PostgreSQL</span></>),
    "python": (<><PythonSvg style={style} /> <span>Python</span></>),
    "jquery": (<><JquerySvg style={style} /></>),
    "html": (<><HtmlSvg style={style} /> <span>HTML</span></>),
    "css": (<><CssSvg style={style} /> <span>CSS</span></>),
    "mongo": (<><MongoSvg style={style} /> <span>Mongo Db</span></>),
    "typescript": (<><TypescriptSvg style={style} /> <span>TypeScript</span></>),
    "tailwind": (<><TailwindSvg style={style} /> <span>Tailwind CSS</span></>),
    "sql": (<><SqlSvg style={style} /> <span>SQL</span></>),
    "javascript": (<><JavascriptSvg style={style} /> <span>JavaScript</span></>),
    "pygame": (<><PygameSvg style={style} /></>),
    "express": (<><ExpressSvg style={style} /> <span>Express Js</span></>),
    "phaser": (<><PhaserSvg style={style} /></>),
    "sqlalchamy": (<><SqlalchamySvg style={style} /></>),
    "prisma": (<><PrismaSvg style={style} /> <span>Prisma</span></>),
    "framer": (<><FramerSvg style={style} /> <span>Framer Motion</span></>),
    }
    
    return(
        <div className="flex items-center gap-2 border-2 rounded-2xl p-2 font-bold"  style={{borderColor: style.fill, color: style.fill}}>
            {stack in pillDict ? pillDict[stack] : <span>{stack.charAt(0).toUpperCase() + stack.slice(1)}</span>}
        </div>
    )
    }