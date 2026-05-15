"use client";
import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';

const skills = [
    // Cloud
    { name: 'Lambda', category: 'cloud' },
    { name: 'S3', category: 'cloud' },
    { name: 'CloudFront', category: 'cloud' },
    { name: 'API Gateway', category: 'cloud' },
    { name: 'DynamoDB', category: 'cloud' },
    { name: 'SAM', category: 'cloud' },
    { name: 'IAM', category: 'cloud' },
    { name: 'ACM', category: 'cloud' },
    { name: 'Route 53', category: 'cloud' },
    { name: 'AWS', category: 'cloud' },

    // DevOps
    { name: 'Docker', category: 'devops' },
    { name: 'Docker Compose', category: 'devops' },
    { name: 'GitHub Actions', category: 'devops' },
    { name: 'CI/CD', category: 'devops' },
    { name: 'Git & GitHub', category: 'devops' },
    { name: 'NGINX', category: 'devops' },
    { name: 'Linux', category: 'devops' },
    { name: 'Bash', category: 'devops' },

    // Full-Stack
    { name: 'React', category: 'fullstack' },
    { name: 'Next.js', category: 'fullstack' },
    { name: 'TypeScript', category: 'fullstack' },
    { name: 'JavaScript', category: 'fullstack' },
    { name: 'FastAPI', category: 'fullstack' },
    { name: 'Node.js', category: 'fullstack' },
    { name: 'Python', category: 'fullstack' },
    { name: 'Tailwind CSS', category: 'fullstack' },
    { name: 'HTML & CSS', category: 'fullstack' },
    { name: 'React Router', category: 'fullstack' },

    // Database
    { name: 'MongoDB', category: 'database' },
    { name: 'MySQL', category: 'database' },
    { name: 'SQL', category: 'database' },
    { name: 'SQLAlchemy', category: 'database' },
    { name: 'Schema Design', category: 'database' },
    { name: 'Data Modeling', category: 'database' },
];

const filterButtons = [
    { name: 'Show All', filter: '*' },
    { name: 'Cloud', filter: '.cloud' },
    { name: 'DevOps', filter: '.devops' },
    { name: 'Full-Stack', filter: '.fullstack' },
    { name: 'Database', filter: '.database' },
];

export default function Skills() {
    const isotope = useRef<Isotope | null>(null);
    const gridRef = useRef<HTMLDivElement | null>(null);
    const [filterKey, setFilterKey] = useState('*');

    useEffect(() => {
        import('isotope-layout').then((Isotope) => {
            if (gridRef.current) {
                isotope.current = new Isotope.default(gridRef.current, {
                    itemSelector: '.grid-item',
                    layoutMode: 'fitRows',
                });
            }
        });
        return () => {
            if (isotope.current) {
                isotope.current.destroy();
            }
        };
    }, []);

    useEffect(() => {
        if (isotope.current) {
            isotope.current.arrange({ filter: filterKey === '*' ? '*' : `.${filterKey}` });
        }
    }, [filterKey]);

    const handleFilterKeyChange = (key: string) => () => {
        setFilterKey(key.startsWith('.') ? key.substring(1) : key);
    };

    return (
        <div className="relative mx-auto flex h-124 md:h-124 flex-col">
            <div className="flex justify-center py-6 bg-(--primary-background)">
                <div className="grid w-full grid-cols-2 gap-2 text-base md:flex md:h-9 md:w-auto md:gap-0 rounded-full md:border-2 md:shadow-md">
                    {filterButtons.map((button) => (
                        <button
                            key={button.filter}
                            onClick={handleFilterKeyChange(button.filter)}
                            className={`w-full rounded-lg border px-4 py-1.5 text-center hover:bg-(--secondary-accent) transition hover:cursor-pointer md:h-full md:w-auto md:rounded-none md:border-0 md:border-r md:first:rounded-l-full md:last:rounded-r-full md:last:border-r-0 md:px-5 md:py-0 ${
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
            </div>

            <div className="flex-1 overflow-y-auto overflow-x-hidden">
                <div ref={gridRef} className="grid w-full mx-auto">
                    {/* Grid Sizer element for column width */}
                    <div className="grid-sizer w-1/2 sm:w-1/3 md:w-1/5"></div>
                    {skills.map((skill) => (
                        <div
                            key={skill.name}
                            className={`grid-item w-1/2 sm:w-1/3 md:w-1/5 p-2 ${skill.category}`}
                        >
                            <div className="p-3 text-center border rounded-md shadow-sm h-full flex items-center justify-center bg-(--secondary-background)">
                                <p className="text-sm sm:text-base leading-tight wrap-break-word">{skill.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}