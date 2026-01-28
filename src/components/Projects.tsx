"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Isotope from 'isotope-layout';
import { useTheme } from 'next-themes';
import { LuGithub, LuExternalLink, LuCalendar } from 'react-icons/lu';

const projects = [
    //Web Development
    { 
        name: "Personal Website",
        category: "web-dev",
        startDate: "09/2025",
        endDate: "Present",
        image: "images/personal-website.png",
        github: "https://github.com/mbachel/mbachel.github.io",
        link: "https://bachelder.me",
        class: "Extracurricular",
        techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions"],
        description: "A personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Showcases projects and skills in a modern design, deployed via GitHub Actions.",
    },
    { 
        name: "M62",
        category: "web-dev",
        startDate: "11/2025",
        endDate: "Present",
        image: "images/m62.png",
        github: "https://github.com/mbachel/m62",
        link: "https://m62.bachelder.me",
        class: "ITIS 5166 - Backend App. Dev.",
        techs: ["React Router", "NGINX", "FastAPI", "MongoDB", "Docker Compose"],
        description: "A full-stack GenAI web app using React, FastAPI, and MongoDB. Fully containerized with Docker Compose and deployed via automated CI/CD pipelines.",
    },
    {
        name: "J.A. Routh IT Portfolio",
        category: "web-dev",
        startDate: "01/2025",
        endDate: "05/2025",
        image: "images/routh.png",
        github: "https://github.com/mbachel/J.A.Routh.IT",
        link: "https://webpages.charlotte.edu/mbacheld/Assignment4/index.html",
        class: "ITIS 3135 - Web App Design",
        techs: ["HTML5", "CSS3", "Isotope", "JQuery"],
        description: "A small web app for fictitious IT consultant J.A. Routh. Features portfolio, services, and contact sections with Isotope filtering.",
    },

    //Physical Projects
    { 
        name: "Task Tracker",
        category: "physical",
        startDate: "11/2025",
        endDate: "12/2025",
        image: "images/task.png",
        github: "https://github.com/mbachel/physical-computing/tree/main/Projects/Project%206%20Undergraduate%20Project/Special%20Files",
        class: "ITIS 5358 - Physical Computing",
        techs: ["Arduino", "LEDs", "NTP"],
        description: "An Arduino-based weekly task tracker. Features LED indicators for days/tasks and button inputs. Syncs with NTP servers for accurate time tracking.",
    },
    {
        name: "Binary Converter",
        category: "physical",
        startDate: "11/2025",
        endDate: "12/2025",
        image: "images/binary.png",
        github: "https://github.com/mbachel/physical-computing/tree/main/Projects/Project%207%20Graduate%20Project",
        class: "ITIS 5358 - Physical Computing",
        techs: ["Arduino", "16x2 LCD", "LEDs"],
        description: "A bidirectional binary-decimal converter using Arduino. Features LED bit indicators and an LCD display for results. Allows user input via buttons.",
    },

    //Software Engineering
    { 
        name: "Restaurant Database API",
        category: "software",
        startDate: "01/2025",
        endDate: "05/2025",
        image: "images/restaurant.png",
        github: "https://github.com/Magnetize8953/itsc-3155-project",
        class: "ITSC 3155 - Software Engineering",
        techs: ["FastAPI", "SQLAlchemy", "MySQL", "GitHub"],
        description: "A RESTful API for restaurant data management using FastAPI and SQLAlchemy. Supports full CRUD operations for menus and resources.",
    },
];

const filterButtons = [
    { name: 'Show All', filter: '*' },
    { name: 'Physical Projects', filter: '.physical' },
    { name: 'Web Development', filter: '.web-dev' },
    { name: 'Software Engineering', filter: '.software' },
];

// const sortButtons = [
//     { name: "Default", sort: "name" },
//     { name: "By Start Date", sort: "startDate" },
//     { name: "By End Date", sort: "endDate" },
//     { name: "By Class", sort: "class" },
// ];

export default function Projects() {
    const isotope = useRef<Isotope | null>(null);
    const gridRef = useRef<HTMLDivElement | null>(null);
    const [filterKey, setFilterKey] = useState('*');
    // const [sortKey, setSortKey] = useState('name');
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('isotope-layout').then((IsotopeModule) => {
                const Isotope = IsotopeModule.default;
                if (gridRef.current) {
                    isotope.current = new Isotope(gridRef.current, {
                        itemSelector: '.grid-item',
                        layoutMode: 'masonry',
                        percentPosition: true,
                        masonry: {
                            columnWidth: '.grid-sizer'
                        },
                        // getSortData: {
                        //     name: '.project-name',
                        //     class: '.project-class',
                        //     startDate: (itemElem: unknown) => {
                        //         const element = itemElem as HTMLElement;
                        //         const dateStr = element.getAttribute('data-start-date');
                        //         return dateStr ? new Date(dateStr).getTime() : 0;
                        //     },
                        //     endDate: (itemElem: unknown) => {
                        //         const element = itemElem as HTMLElement;
                        //         const dateStr = element.getAttribute('data-end-date');
                        //         if (dateStr === 'Present') return Number.MAX_SAFE_INTEGER;
                        //         return dateStr ? new Date(dateStr).getTime() : 0;
                        //     }
                        // }
                    });
                }
            });
        }
        return () => {
            if (isotope.current) {
                isotope.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (isotope.current) {
            isotope.current.arrange({ 
                filter: filterKey === '*' ? '*' : `.${filterKey}`,
                // sortBy: sortKey,
                // sortAscending: {
                //     name: true,
                //     class: true,
                //     startDate: false,
                //     endDate: false
                // }
            });
        }
    }, [filterKey/* , sortKey */]);

    const handleFilterKeyChange = (key: string) => () => {
        setFilterKey(key.startsWith('.') ? key.substring(1) : key);
    };

    // const handleSortKeyChange = (key: string) => () => {
    //     setSortKey(key);
    // };

    const getProjectImage = (project: typeof projects[0]) => {
        if (!mounted) return `/${project.image}`;
        
        const themeableProjects = ['Personal Website', 'M62'];
        if (themeableProjects.includes(project.name)) {
            const baseName = project.image.split('/').pop()?.split('.')[0]; 
            const themeSuffix = resolvedTheme === 'dark' ? 'dark' : 'light';
            return `/images/${baseName}-${themeSuffix}.png`;
        }
        return `/${project.image}`;
    };

    return (
        <div className="container mx-auto px-4 py-8" id="projects">
            <div className="flex flex-col items-center gap-4 mb-8">
                {/* Filters */}
                <div className="grid w-full grid-cols-2 gap-2 text-lg md:flex md:h-10 md:w-auto md:gap-0 rounded-full md:border-2 md:shadow-md">
                    {filterButtons.map((button) => (
                        <button
                            key={button.filter}
                            onClick={handleFilterKeyChange(button.filter)}
                            className={`w-full rounded-lg border px-5 py-2 text-center hover:bg-(--secondary-accent) transition hover:cursor-pointer md:h-full md:w-auto md:rounded-none md:border-0 md:border-r md:first:rounded-l-full md:last:rounded-r-full md:last:border-r-0 md:px-6 md:py-0 ${
                                (filterKey === '*' && button.filter === '*') ||
                                `.${filterKey}` === button.filter
                                    ? 'font-bold bg-(--tertiary-accent)'
                                    : ''
                            }`}
                        >
                            {button.name}
                        </button>
                    ))}
                </div>

                {/* Sorting */}
                {/* <div className="flex flex-wrap gap-2 justify-center bg-(--primary-background)/90 backdrop-blur-md p-2 rounded-full border border-gray-200 dark:border-zinc-700 shadow-sm">
                    {sortButtons.map((button) => (
                        <button
                            key={button.name}
                            onClick={handleSortKeyChange(button.sort)}
                            className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                                sortKey === button.sort
                                    ? 'bg-(--tertiary-accent) text-white shadow-md transform scale-105'
                                    : 'text-gray-600 dark:text-gray-300 hover:bg-(--secondary-accent) hover:text-white'
                            }`}
                        >
                            {button.name}
                        </button>
                    ))}
                </div> */}
            </div>

            <div ref={gridRef} className="w-full">
                <div className="grid-sizer w-full md:w-1/2 lg:w-1/3"></div>
                {projects.map((project) => (
                    <div
                        key={project.name}
                        className={`grid-item w-full md:w-1/2 lg:w-1/3 p-4 ${project.category}`}
                        data-start-date={project.startDate}
                        data-end-date={project.endDate}
                    >
                        <div className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-transparent dark:border-zinc-700 transition-all duration-300 flex flex-col h-full group">
                            {/* Image Container */}
                            <div className="relative h-48 w-full overflow-hidden bg-gray-100 dark:bg-zinc-900 border-b border-gray-100 dark:border-zinc-700">
                                <Image 
                                    src={getProjectImage(project)} 
                                    alt={project.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                                </div>
                            </div>
                            {/* Content */}
                            <div className="p-6 flex flex-col grow">
                                <div className="flex justify-between items-start mb-3 gap-2">
                                    <div>
                                        <h3 className="project-name text-xl font-bold text-gray-900 dark:text-white transition-colors">
                                            {project.name}
                                        </h3>
                                        <div className="project-class text-xs font-semibold mt-1">
                                            {project.class}
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        {project.github && (
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="p-1.5 text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-zinc-700 rounded-full transition-colors"
                                                title="View on GitHub"
                                            >
                                                <LuGithub className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.link && (
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 dark:text-gray-400 dark:hover:text-blue-400 dark:hover:bg-blue-900/30 rounded-full transition-colors"
                                                title="Open Project"
                                            >
                                                <LuExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                                    <LuCalendar className="w-4 h-4 mr-2" />
                                    <span>{project.startDate} - {project.endDate}</span>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techs.map((tech) => (
                                        <span 
                                            key={tech} 
                                            className="px-2.5 py-1 text-xs font-medium bg-gray-100 dark:bg-zinc-700/50 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-zinc-700"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}