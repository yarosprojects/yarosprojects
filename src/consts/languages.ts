import type { Language } from "@src/types/language.type";
import { i18n } from "./i18n.files";

const LANGUAGES = (locale: Language) => {
    const translate = i18n[locale];
    return {
        frontend: {
            id: 'frontend',
            name: translate.projects.frontend,
            content: {
                html: {
                    id: 'html',
                    name: 'Html',
                    animation_delay: '0',
                    img: '/img/programming-languages/html5.webp',
                },
                css: {
                    id: 'css',
                    name: 'Css',
                    animation_delay: '100',
                    img: '/img/programming-languages/css.webp',
                },
                javascript: {
                    id: 'javascript',
                    name: 'JavaScript',
                    animation_delay: '200',
                    img: '/img/programming-languages/js.webp',
                },
            },
        },
    
        backend: {
            id: 'backend',
            name: translate.projects.backend,
            content: {
                java: {
                    id: 'java',
                    name: 'Java',
                    animation_delay: '400',
                    img: '/img/programming-languages/java.webp',
                },
                python: {
                    id: 'python',
                    name: 'Python',
                    animation_delay: '500',
                    img: '/img/programming-languages/python.webp',
                },
                php: {
                    id: 'php',
                    name: 'Php',
                    animation_delay: '600',
                    img: '/img/programming-languages/php.webp',
                },
                mysql: {
                    id: 'mysql',
                    name: 'MySQL',
                    animation_delay: '700',
                    img: '/img/programming-languages/mysql.webp',
                },
                postgresql: {
                    id: 'postgresql',
                    name: 'PostgreSQL',
                    animation_delay: '800',
                    img: '/img/programming-languages/postgresql.webp',
                },
                c: {
                    id: 'c',
                    name: 'C',
                    animation_delay: '1000',
                    img: '/img/programming-languages/c.webp',
                },
                cplusplus: {
                    id: 'cplusplus',
                    name: 'C++',
                    animation_delay: '1100',
                    img: '/img/programming-languages/cplusplus.webp',
                },
                nodejs: {
                    id: 'nodejs',
                    name: 'NodeJS',
                    animation_delay: '1200',
                    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
                },
            },
        },
    
        fullstack: {
            id: 'fullstack',
            name: translate.projects.fullstack,
            content: {
                typescript: {
                    id: 'typescript',
                    name: 'TypeScript',
                    animation_delay: '300',
                    img: '/img/programming-languages/typescript.webp',
                },
            },
        },
    
        others: {
            id: 'others',
            name: translate.projects.others,
            content: {
                xml: {
                    id: 'xml',
                    name: 'Xml',
                    animation_delay: '900',
                    img: '/img/programming-languages/xml.webp',
                },
                r: {
                    id: 'r',
                    name: 'R',
                    animation_delay: '1200',
                    img: '/img/programming-languages/r.webp',
                },
                jquery: {
                    id: 'jquery',
                    name: 'jQuery',
                    animation_delay: '1200',
                    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg',
                },
            },
        }
    }
}

export default LANGUAGES;