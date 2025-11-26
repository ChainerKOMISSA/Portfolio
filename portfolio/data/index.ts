import { GridItem, Category, BlogItem, SocialMedia, Service } from "./types";
import { CardDemo } from "@/app/blog/ui/Card";

export const navItems = [
  { name: "A propos", link: "#about" },
  { name: "Projets", link: "#projects" },
  { name: "Expérience", link: "#experience" },
  { name: "Services", link: "#services" },
  { name: "Contacts", link: "#contact" },
  { name: "Blog", link: "/blog" },
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
    title: "CDI en développement web full stack",
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
  },
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

export const workExperience = [
  {
    id: 1,
    title: "Développement d'applications",
    desc: `Conception et développement d&apos;application <b>web</b> avec des interfaces permettant une belle expérience utilisateur.`,
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

export const socialMedia = [
  {
    id: 1,
    img: "",
    title: "Github",
    link: "https://github.com/ChainerKOMISSA",
  },
  {
    id: 4,
    img: "",
    title: "Gitlab",
    link: "https://gitlab.com/Shine17",
  },
  {
    id: 2,
    img: "",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/essi-chainer-komissa-zotsu-aba1b81a3/",
  },
  {
    id: 3,
    img: "",
    title: "Whatsapp",
    link: "https://wa.me/message/3RTFYUDPU2WAO1",
  },
];

export const categories = [
  {
    id: 1,
    name: "Templates de code",
  },
  {
    id: 2,
    name: "Cheat Sheets",
  },
  {
    id: 3,
    name: "Expériences",
  },
  {
    id: 4,
    name: "Tutoriels",
  },
];

export const blogItems = [
  {
    id: 1,
    title: "Backend NodeJS",
    desc: "Template de base pour un projet NodeJS avec Express.js et MongoDB.",
    img: "/imgnode.png",
    date: "2025-05-17",
    category: categories[0].name,
    link: "https://github.com/ChainerKOMISSA/BackendNodeJS",
    technologies: ["nodejs", "javascript", "mongodb", "express"],
  },
  {
    id: 2,
    title: "Tests unitaires avec Bruno",
    desc: "Tutoriel expliquant pas à pas comment réaliser des tests unitaires avec Bruno.",
    img: "/bruno3-2.png",
    date: "2025-05-19",
    category: categories[3].name,
    link: "/blog/tests-bruno",
    technologies: [],
  },
  {
    id: 3,
    title: "Application Angular",
    desc: "Template de base pour un projet avec Angular 16",
    img: "/imgangular.png",
    date: "2025-05-29",
    category: categories[0].name,
    link: "https://github.com/ChainerKOMISSA/Boilerplate_Angular",
    technologies: ["angular", "typescript", "tailwindcss"],
  },
  {
    id: 4,
    title: "Application Java (JEE)",
    desc: "Template de base pour un projet backend Java",
    img: "/imgjava.png",
    date: "2025-05-31",
    category: categories[0].name,
    link: "https://github.com/ChainerKOMISSA/Boilerplate_JEE",
    technologies: ["java"],
  },
  {
    id: 5,
    title: "Déployer une application sur Vercel",
    desc: "Tutoriel expliquant pas à pas comment déployer une application sur Vercel.",
    img: "/bgvercel.png",
    date: "2025-06-01",
    category: categories[3].name,
    link: "/blog/deploiement-vercel",
    technologies: [],
  },
  {
    id: 6,
    title: "Analyser le trafic sur son site web avec Vercel",
    desc: "Tutoriel expliquant comment analyser le trafic sur son site web avec Vercel.",
    img: "/bgvercelanalytics.png",
    date: "2025-06-01",
    category: categories[3].name,
    link: "/blog/vercel-analytics",
    technologies: [],
  },
  {
    id: 7,
    title: "Application React",
    desc: "Template de base pour un projet avec React js",
    img: "/imgreact.png",
    date: "2025-06-04",
    category: categories[0].name,
    link: "https://github.com/ChainerKOMISSA/Boilerplat_Reactjs",
    technologies: ["react", "javascript", "tailwindcss"],
  } /*,
  {
    id: 8,
    title: "Application Python",
    desc: "Template de base pour un projet avec Python",
    img: "/imgpython.png",
    date: " A venir",
    category: categories[0].name,
    link: "",
    technologies: ["python"],
  }*/ /*,
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
  }*/,
  {
    id: 11,
    title: "Déployer une application web sur Github Pages",
    desc: "Tutoriel expliquant comment déployer une application web sur Github Pages.",
    img: "/bggithub.png",
    date: "2025-06-01",
    category: categories[3].name,
    link: "/blog/github-pages",
    technologies: [],
  },
  {
    id: 12,
    title: "Série : Envoyer des emails en Javascript",
    desc: " Cette série de tutoriels vous guide pas à pas pour envoyer des emails avec JavaScript, SMTP.js, Node.js, etc.",
    img: "/bgemails.jpg",
    date: " ",
    category: categories[3].name,
    link: "/blog/emails",
    technologies: ["serie"],
  },
  /*{
    id: 13,
    title: "Cheat Sheet Git",
    desc: "Une bibliothèque JavaScript qui permet de créer des diagrammes et des graphiques en texte brut.",
    img: "/bgmermaid.png",
    date: "2025-06-21",
    category: categories[1].name,
    link:"",
    //link : "/blog/git-cheatsheet",
    technologies: [],
  },*/
  {
    id: 15,
    title: "Ajouter un bloc de code à copier sur son site web",
    desc: "Tutoriel expliquant comment ajouter un bloc de code en Reactjs ou Nextjs.",
    img: "/b5.svg",
    date: "2025-06-08",
    category: categories[3].name,
    link: "/blog/bloc-code",
    technologies: [],
  },
  {
    id: 16,
    title: "Série : Intégrer des solutions de paiement en ligne",
    desc: " Cette série de tutoriels vous guide pas à pas dans l'intégration de solutions de paiement en ligne comme PayPal, Stripe, Square ainsi que Google Pay et Apple Pay.",
    img: "/paiements.png",
    date: "",
    category: categories[3].name,
    link: "/blog/paiements",
    technologies: ["serie"],
  },
  {
    id: 17,
    title: "Série : Mettre en place du CI/CD",
    desc: "Cette série de tutoriels te guide pas à pas dans la mise en place de pipelines d’intégration et de déploiement continus (CI/CD) à l’aide d’outils modernes.",
    img: "/intro.png",
    date: "",
    category: categories[3].name,
    link: "/blog/ci-cd",
    technologies: ["serie"],
  },
];

export const emailtutorialsItems = [
  {
    id: 1,
    title: "Envoyer un email en utilisant mailto:",
    desc: "Tutoriel expliquant comment envoyer un mail avec la méthode mailto:",
    img: "/bghtml.png",
    date: "2025-06-07",
    category: categories[3].name,
    link: "/blog/emails/mailto",
    technologies: ["html"],
  },
  {
    id: 2,
    title: "Envoyer un mail en utilisant SmtpJS",
    desc: "Tutoriel expliquant comment coder des envois de mail avec SmtpJS.",
    img: "/bgsmtpjs.png",
    date: "2025-06-07",
    category: categories[3].name,
    link: "/blog/emails/smtpjs",
    technologies: ["javascript"],
  },
  {
    id: 3,
    title: "Envoyer un mail en utilisant NodeJS et NodeMailer",
    desc: "Tutoriel expliquant comment envoyer un mail avec NodeMailer",
    img: "/bgnodemailer.png",
    date: "2025-06-08",
    category: categories[3].name,
    link: "/blog/emails/nodemailer",
    technologies: ["nodejs"],
  },
  {
    id: 4,
    title: "Envoyer un mail en utilisant EmailJS",
    desc: "Tutoriels expliquant comment coder des envois de mail avec EmailJS.",
    img: "/bgemailjs.png",
    date: "2025-06-08",
    category: categories[3].name,
    link: "/blog/emails/emailjs",
    technologies: [],
  },
  {
    id: 5,
    title: "Envoyer un mail en utilisant Sendgrid",
    desc: "Tutoriels expliquant comment coder des envois de mail avec Sendgrid.",
    img: "/bgsendgrid.png",
    date: "A venir",
    category: categories[3].name,
    link: "",
    ///link : "/blog/emails/sendgrid",
    technologies: [],
  },
];

export const paiementtutorialsItems = [
  {
    id: 1,
    title: "Paypal",
    desc: "Tutoriel expliquant comment intégrer PayPal comme solution de paiement en ligne, étape par étape",
    img: "/bgpaypal.png",
    date: "2025-09-26",
    category: categories[3].name,
    link: "/blog/paiements/paypal",
    technologies: [],
  },
  {
    id: 2,
    title: "Stripe",
    desc: "Tutoriel pratique pour mettre en place Stripe et accepter des paiements par carte bancaire de façon sécurisée.",
    img: "/bgstripe.png",
    date: "2025-09-28",
    category: categories[3].name,
    link: "/blog/paiements/stripe",
    technologies: [],
  },
  /*,
  {
    id: 4,
    title: "Square",
    desc: "Apprenez à intégrer Square pour gérer les transactions en ligne et en magasin avec une seule solution",
    img: "/bgemailjs.png",
    date: "2025-06-08",
    category: categories[3].name,
    link : "/blog/paiements/square",
    technologies: [],
  }*/
];

export const cicdtutorialsItems = [
  {
    id: 1,
    title: "Comprendre le CI/CD : les bases et les concepts clés",
    desc: "Découvre les principes fondamentaux du CI/CD et pourquoi ils sont essentiels dans un workflow moderne.",
    img: "/intro.png",
    date: "2025-11-09",
    category: categories[3].name,
    technologies: [""],
    link: "/blog/ci-cd/intro",
  },
  {
    id: 2,
    title: "Créer ton premier pipeline CI/CD avec GitHub Actions",
    desc: "Automatise les tests et le déploiement de ton projet grâce à GitHub Actions.",
    img: "/actions.png",
    date: "2025-11-22",
    category: categories[3].name,
    technologies: [""],
    link: "/blog/ci-cd/github-actions",
  },
  {
    id: 3,
    title: "CI/CD avec GitLab : du push au déploiement automatique",
    desc: "Apprends à créer un pipeline complet et robuste avec GitLab CI/CD pour tes projets web.",
    img: "/gitlab.png",
    date: "",
    category: categories[3].name,
    technologies: [""],
    link:""
    //link: "/blog/ci-cd/gitlab",
  },
  {
    id: 4,
    title: "Utiliser Jenkins pour un pipeline local ou sur serveur",
    desc: "Installe et configure Jenkins pour automatiser tes builds et déploiements en toute flexibilité.",
    img: "/jenkins.png",
    date: "",
    category: categories[3].name,
    technologies: [""],
    link: "",
    //link: "/blog/ci-cd/jenkins",
  },
  {
    id: 5,
    title: "Déployer sur AWS avec CodePipeline et CodeBuild",
    desc: "Crée un pipeline cloud complet avec les outils natifs d’AWS pour ton application.",
    img: "/aws.png",
    date: "",
    category: categories[3].name,
    technologies: [""],
    link: "",
    //link: "/blog/ci-cd/aws",
  },
  {
    id: 6,
    title: "Déployer sur Firebase automatiquement avec GitHub Actions",
    desc: "Automatise le déploiement de ton application sur Firebase Hosting en quelques étapes.",
    img: "/firebase.png",
    date: "",
    category: categories[3].name,
    technologies: [""],
    link: "",
    //link: "/blog/ci-cd/firebase",
  },
  {
    id: 7,
    title: "Pipeline multiplateforme avec Bitbucket Pipelines",
    desc: "Apprends à configurer un pipeline complet et collaboratif sur Bitbucket.",
    img: "/bitbucket.png",
    date: "",
    category: categories[3].name,
    technologies: [""],
    link: "",
    //link: "/blog/ci-cd/bitbucket",
  },
  {
    id: 8,
    title: "Optimiser et sécuriser ton pipeline CI/CD",
    desc: "Découvre les meilleures pratiques pour rendre ton pipeline plus rapide, stable et sécurisé.",
    img: "/intro.png",
    date: "",
    category: categories[3].name,
    technologies: [""],
    link: "",
    //link: "/blog/ci-cd/security",
  },
  {
    id: 9,
    title: "Comment fonctionne le CI/CD sur Vercel",
    desc: "Explore le système de CI/CD intégré de Vercel pour déployer tes applications front-end en un clin d'œil.",
    img: "/bgvercel.png",
    date: "",
    category: categories[3].name,
    technologies: [""],
    link: "",
    //link: "/blog/ci-cd/vercel",
  },
];

export const links = [
  {
    id: 1,
    name: "React Icons",
    link: "https://react-icons.github.io/react-icons/",
    logo: "react",
    description:
      "Une collection d’icônes populaires unifiées pour les projets React.",
  },
  {
    id: 2,
    name: "Radix UI",
    link: "https://www.radix-ui.com/",
    logo: "javascript",
    description:
      "Des composants accessibles et non stylés pour construire des interfaces design.",
  },
  {
    id: 3,
    name: "SweetAlert2",
    link: "https://sweetalert2.github.io/",
    logo: "javascript",
    description:
      "Une bibliothèque élégante pour afficher des pop-ups personnalisés.",
  },
  {
    id: 4,
    name: "Aceternity UI",
    link: "https://ui.aceternity.com/",
    logo: "react",
    description:
      "Composants et animations modernes pour sites React avec un style épuré.",
  },
  {
    id: 5,
    name: "Wappalyser",
    link: "https://www.wappalyzer.com/",
    logo: "web",
    description:
      "Outil d’analyse pour détecter les technologies utilisées sur un site web.",
  },
  {
    id: 6,
    name: "Coolors",
    link: "https://coolors.co/",
    logo: "css",
    description:
      "Générateur de palettes de couleurs intuitif pour tes projets créatifs.",
  },
  {
    id: 7,
    name: "Tailwind UI",
    link: "https://tailwindcss.com/plus/ui-blocks",
    logo: "tailwindcss",
    description: "Composants UI premium et réactifs conçus pour Tailwind CSS.",
  },
  {
    id: 8,
    name: "React Native Paper",
    link: "https://reactnativepaper.com/",
    logo: "reactnative",
    description:
      "Bibliothèque de composants Material Design pour React Native.",
  },
  {
    id: 9,
    name: "Appetize.io",
    link: "https://appetize.io/",
    logo: "web",
    description:
      "Émulateur en ligne pour tester des applications mobiles dans un navigateur.",
  },
  {
    id: 10,
    name: "Shots",
    link: "https://shots.so/",
    logo: "design",
    description:
      "Générateur de maquettes visuelles pour présenter des captures d’écran.",
  },
  {
    id: 11,
    name: "Rapid API",
    link: "https://rapidapi.com/",
    logo: "code",
    description:
      "Marketplace centralisée pour découvrir et intégrer des APIs facilement.",
  },
  {
    id: 12,
    name: "Crypto JS",
    link: "https://cryptojs.gitbook.io/docs",
    logo: "javascript",
    description:
      "Bibliothèque JavaScript pour chiffrer, décrypter et hasher facilement des données.",
  },
  {
    id: 13,
    name: "Sentry.io",
    link: "https://sentry.io/welcome/",
    logo: "code",
    description:
      "Surveillance d’erreurs en temps réel pour améliorer la stabilité de vos apps.",
  },
  {
    id: 14,
    name: "Calendly",
    link: "https://calendly.com/",
    logo: "web",
    description:
      "Planificateur en ligne pour réserver des rendez-vous sans prise de tête.",
  },
  {
    id: 15,
    name: "Motion.dev",
    link: "https://motion.dev/",
    logo: "javascript",
    description:
      "Animations web fluides et performantes avec une API moderne pour React.",
  },
  {
    id: 16,
    name: "Railway",
    link: "https://railway.com/features#network-and-connect",
    logo: "web",
    description:
      "Plateforme tout-en-un pour déployer et gérer facilement tes applications back-end.",
  },
  {
    id: 17,
    name: "Handlebars",
    link: "https://handlebarsjs.com/",
    logo: "javascript",
    description:
      "Moteur de templates JavaScript simple et puissant pour générer du HTML.",
  },
  {
    id: 18,
    name: "Origin UI",
    link: "https://originui.com/",
    logo: "react",
    description:
      "Composants React élégants et prêts à l’emploi pour accélérer ton design.",
  },
  {
    id: 19,
    name: "21st dev",
    link: "https://21st.dev/home",
    logo: "javascript",
    description:
      "Ressources, boilerplates et outils modernes pour développeurs JavaScript.",
  },
  {
    id: 20,
    name: "Tiny MCE",
    link: "https://www.tiny.cloud/",
    logo: "javascript",
    description:
      "Éditeur WYSIWYG puissant pour créer des contenus HTML riches facilement.",
  },
  {
    id: 21,
    name: "ZeroBounce",
    link: "https://www.zerobounce.net/api/email-validation-api/",
    logo: "code",
    description:
      "API de validation d’email pour améliorer la délivrabilité de tes campagnes.",
  },
  {
    id: 22,
    name: "Tom Select",
    link: "https://tom-select.js.org/",
    logo: "code",
    description:
      "Plugin JavaScript pour des champs de sélection dynamiques et personnalisables.",
  },
  {
    id: 23,
    name: "Bolt.new",
    link: "https://bolt.new/",
    logo: "ia",
    description:
      "Outil de création d'applications basé sur navigateur et optimisé par l'intelligence artificielle.",
  },
  {
    id: 24,
    name: "Flexbox froggy",
    link: "https://flexboxfroggy.com/",
    logo: "css",
    description: "Jeu permettant d'apprendre CSS flexbox.",
  },
  {
    id: 25,
    name: "Stitch",
    link: "https://stitch.withgoogle.com/",
    logo: "ia",
    description:
      "Outil de création de maquettes UX basé sur navigateur et optimisé par l'intelligence artificielle.",
  },
  {
    id: 26,
    name: "Git Branching",
    link: "https://learngitbranching.js.org/",
    logo: "git",
    description: "Jeu permettant d'apprendre git",
  },
  {
    id: 27,
    name: "Grid Garden",
    link: "https://cssgridgarden.com/",
    logo: "css",
    description: "Jeu permettant d'apprendre CSS grid.",
  },
  {
    id: 28,
    name: "Base 44",
    link: "https://base44.com/",
    logo: "ia",
    description:
      "Outil de création d'applications basé sur navigateur et optimisé par l'intelligence artificielle.",
  },
];
