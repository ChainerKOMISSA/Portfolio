import {GridItem, Category, BlogItem, SocialMedia, Service} from "./types";

export const navItems = [
  { name: "A propos", link: "#about" },
  { name: "Projets", link: "#projects" },
  { name: "Expérience", link: "#experience" },
  { name: "Services", link: "#services" },
  { name: "Contacts", link: "#contact" },
  { name: "Blog", link: "/blog" }
];
export const gridItems = [
  {
    id: 1,
    title: "Je suis Chainer KOMISSA ZOTSU, développeuse web full stack.",
    description: "A propos de moi",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 4,
    title: "CDI en développement web full stack\nAoût 2025",
    description: "En recherche de ",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "",
    description: "Mes outils",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "N'hésitez pas à me contacter!",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Allez sur ma page Github pour avoir un aperçu de mes projets",
    description: "Mon profil Github",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  }
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
  {
    id: 5,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience= [
  {
    id: 1,
    title: "Développement d'applications",
    desc: `Conception et développement d'application <b>web</b> et <b>mobiles</b> avec des interfaces permettant une belle expérience utilisateur.`,
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Administration de bases de données",
    desc: `Création, Gestion, Sécurité et administration de bases de données SQL et NoSQL. SGBDs : MySQL, PostgreSQL, MongoDB.`,
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "Création des sites web",
    desc: "Conception et développement de sites web vitrines ou dynamiques avec conception de tableaux de bord.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "UI/UX Design",
    desc: "Conception d'interfaces simples et efficaces améliorant l'expérience utilisateur.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  // {
  //   id: 5,
  //   title: "Social media management",
  //   desc: "Gestion de réseaux sociaux, planification de posts, Création de contenus.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
  // {
  //   id: 6,
  //   title: "Graphisme",
  //   desc: "Conception d'affiches publicitaires, de calendriers, etc. Conception et Impression de bâches et autocollants. Impression sur tous supports.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia  = [
  {
    id: 1,
    img: "",
    title: "Github",
    link: "https://github.com/ChainerKOMISSA"
  },
  {
    id: 4,
    img: "",
    title: "Gitlab",
    link: "https://gitlab.com/Shine17"
  },
  {
    id: 2,
    img: "",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/essi-chainer-komissa-zotsu-aba1b81a3/"
  },
  {
    id: 3,
    img: "",
    title: "Whatsapp",
    link: "https://wa.me/message/3RTFYUDPU2WAO1"
  }
];

export const categories = [
  {
    id: 1,
    name: "Templates de code"
  },
  {
    id: 2,
    name: "Découvertes"
  },
  {
    id: 3,
    name: "Expériences"
  },
  {
    id: 4,
    name: "Tutoriels"
  }
]

export const blogItems= [
  {
    id: 1,
    title: "Backend NodeJS",
    desc: "Template de base pour un projet NodeJS avec Express.js et MongoDB.",
    img: "/imgnode.png",
    date: "2025-05-17",
    category: categories[0].name,
    link : "https://github.com/ChainerKOMISSA/BackendNodeJS",
    technologies: ["nodejs", "javascript", "mongodb", "express"],
  },
  {
    id: 2,
    title: "Tests unitaires avec Bruno",
    desc: "Tutoriel expliquant pas à pas comment réaliser des tests unitaires avec Bruno.",
    img: "/bruno3-2.png",
    date: "2025-05-19",
    category: categories[3].name,
    link : "/blog/tests-bruno",
    technologies: [],
  },
  {
    id: 3,
    title: "Application Angular",
    desc: "Template de base pour un projet avec Angular 16",
    img: "/imgangular.png",
    date: "2025-05-29",
    category: categories[0].name,
    link : "https://github.com/ChainerKOMISSA/Boilerplate_Angular",
    technologies: ["angular", "typescript", "tailwindcss"],
  },
  {
    id: 4,
    title: "Application Java (JEE)",
    desc: "Template de base pour un projet backend Java",
    img: "/imgjava.png",
    date: "2025-05-31",
    category: categories[0].name,
    link : "https://github.com/ChainerKOMISSA/Boilerplate_JEE",
    technologies: ["java"],
  },
  {
    id: 5,
    title: "Déployer une application sur Vercel",
    desc: "Tutoriel expliquant pas à pas comment déployer une application sur Vercel.",
    img: "/bgvercel.png",
    date: "2025-06-01",
    category: categories[3].name,
    link : "/blog/deploiement-vercel",
    technologies: [],
  },
  {
    id: 6,
    title: "Analyser le trafic sur son site web avec Vercel",
    desc: "Tutoriel expliquant comment analyser le trafic sur son site web avec Vercel.",
    img: "/bgvercelanalytics.png",
    date: "2025-06-01",
    category: categories[3].name,
    link : "/blog/vercel-analytics",
    technologies: [],
  },
  {
    id: 7,
    title: "Application React",
    desc: "Template de base pour un projet avec React js",
    img: "/imgreact.png",
    date: "2025-06-04",
    category: categories[0].name,
    link : "https://github.com/ChainerKOMISSA/Boilerplat_Reactjs",
    technologies: ["react", "javascript", "tailwindcss"],
  },
  {
    id: 8,
    title: "Application Python",
    desc: "Template de base pour un projet avec Python",
    img: "/imgpython.png",
    date: " A venir",
    category: categories[0].name,
    link: "",
    technologies: ["python"],
  }/*,
  {
    id: 9,
    title: "Mon expérience aux 24h du code",
    desc: "Je partage avec toi mon expérience aux 24h du code.",
    img: "/img24h.jpg",
    date: " A venir",
    category: categories[2].name,
    link : "",
    technologies: [],
  },
  {
    id: 10,
    title: "Mon expérience en tant que Scrum Master",
    desc: "Je partage avec toi mon expérience en tant que Scrum Master. Ce que j'ai appris et ce que j'ai fait.",
    img: "/scrummaster.png",
    date: " A venir",
    category: categories[2].name,
    link : "",
    technologies: [],
  }*/
  ,
  {
    id: 11,
    title: "Déployer une application web sur Github Pages",
    desc: "Tutoriel expliquant comment déployer une application web sur Github Pages.",
    img: "/bggithub.png",
    date: "2025-06-01",
    category: categories[3].name,
    link : "/blog/github-pages",
    technologies: [],
  },
  {
    id: 12,
    title: "Série : Envoyer des emails en Javascript",
    desc: " Cette série de tutoriels vous guide pas à pas pour envoyer des emails avec JavaScript, SMTP.js, Node.js, etc.",
    img: "/bgemails.jpg",
    date: " ",
    category: categories[3].name,
    link : "/blog/emails",
    technologies: ["serie"],
  }/*,
  {
    id: 13,
    title: "MermaidJS",
    desc: "Une bibliothèque JavaScript qui permet de créer des diagrammes et des graphiques en texte brut.",
    img: "/bgmermaid.png",
    date: "A venir",
    category: categories[1].name,
    link : "",
    technologies: [],
  },
  {
    id: 14,
    title: "Radix UI",
    desc: "Une bibliothèque JavaScript qui permet de créer des diagrammes et des graphiques en texte brut.",
    img: "/bgradix.png",
    date: "A venir",
    category: categories[1].name,
    link : "",
    technologies: [],
  }*/
    ,
  {
    id: 15,
    title: "Ajouter un bloc de code à copier sur son site web",
    desc: "Tutoriel expliquant comment ajouter un bloc de code en Reactjs ou Nextjs.",
    img: "/b5.svg",
    date: "2025-06-08",
    category: categories[3].name,
    link : "/blog/bloc-code",
    technologies: [],
  }
]
export const emailtutorialsItems= [
  {
    id: 1,
    title: "Envoyer un email en utilisant mailto:",
    desc: "Tutoriel expliquant comment envoyer un mail avec la méthode mailto:",
    img: "/bghtml.png",
    date: "2025-06-07",
    category: categories[3].name,
    link : "/blog/emails/mailto",
    technologies: ["html"],
  },
  {
    id: 2,
    title: "Envoyer un mail en utilisant SmtpJS",
    desc: "Tutoriel expliquant comment coder des envois de mail avec SmtpJS.",
    img: "/bgsmtpjs.png",
    date: "2025-06-07",
    category: categories[3].name,
    link : "/blog/emails/smtpjs",
    technologies: ["javascript"],
  },
  {
    id: 3,
    title: "Envoyer un mail en utilisant NodeJS et NodeMailer",
    desc: "Tutoriel expliquant comment envoyer un mail avec NodeMailer",
    img: "/bgnodemailer.png",
    date: "2025-06-08",
    category: categories[3].name,
    link : "/blog/emails/nodemailer",
    technologies: ["nodejs"],
  },
  {
    id: 4,
    title: "Envoyer un mail en utilisant EmailJS",
    desc: "Tutoriels expliquant comment coder des envois de mail avec EmailJS.",
    img: "/bgemailjs.png",
    date: "A venir",
    category: categories[3].name,
    link : "/blog/emails/emailjs",
    technologies: [],
  },
  {
    id: 5,
    title: "Envoyer un mail en utilisant Sendgrid",
    desc: "Tutoriels expliquant comment coder des envois de mail avec Sendgrid.",
    img: "/bgsendgrid.png",
    date: "A venir",
    category: categories[3].name,
    link:"",
    ///link : "/blog/emails/sendgrid",
    technologies: [],
  }
]


export const links = [
  {
    id : 1,
    name : "React Icons",
    link : "https://react-icons.github.io/react-icons/",
    logo : "react"
  },
  {
    id : 2,
    name : "Radix UI",
    link : "https://www.radix-ui.com/",
    logo : "javascript"
  },
  {
    id : 3,
    name : "SweetAlert2",
    link : "https://sweetalert2.github.io/",
    logo : "javascript"
  },
  {
    id : 4,
    name : "Aceternity UI",
    link : "https://ui.aceternity.com/",
    logo : "react"
  },
  {
    id : 5,
    name : "Wappalyser",
    link : "https://www.wappalyzer.com/",
    logo : "web"
  }
]
