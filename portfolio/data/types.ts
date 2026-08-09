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

export type QuizOption = {
    id: "A" | "B" | "C" | "D";
    label: string;
};

export type QuizQuestionData = {
    id: string;
    prompt: string;
    code?: string; // snippet optionnel affiché au-dessus des options
    options: QuizOption[];
    correctOptionId: QuizOption["id"];
};

export type Quiz = {
    slug: string;
    title: string;
    questions: QuizQuestionData[];
};