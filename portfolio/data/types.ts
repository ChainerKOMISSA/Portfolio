export interface GridItem {
    id: number;
    title: string;
    description: string;
    className: string;
    imgClassName: string;
    titleClassName: string;
    img: string;
    spareImg: string;
}

export interface Category {
    id: number;
    name: string;
}

export interface BlogItem {
    id: number;
    title: string;
    desc: string;
    img: string;
    date: string;
    category : Category["name"];
    technologies: string[];
    link: string;
    //likes : number;
    //views : number;
    //comments: number;
}

export interface SocialMedia {
    id: number;
    img: string;
    title : string;
    link: string;
}

export interface Service {
    id: number;
    title: string;
    desc: string;
    className: string;
    thumbnail : string;
}

export interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    image: string;
    icons : string[];
}

export interface Skill {
    id: number;
    quote: string;
    name: string;
    title: string;
    image: string;
    color: string;
    logo: string;
}

export interface Experience{
    id: number;
    description: string;
    content: string;
    date: string;
    technologies: string[];
}