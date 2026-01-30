"use client";
import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';

const skills = [
    //Web Development
    { name: 'Angular', category: 'web' },
    { name: 'CSS', category: 'web' },
    { name: 'HTML', category: 'web' },
    { name: 'Interactive Design', category: 'web' },
    { name: 'Isotope', category: 'web' },
    { name: 'JavaScript', category: 'web' },
    { name: 'Next.js', category: 'web' },
    { name: 'React', category: 'web' },
    { name: 'Tailwind CSS', category: 'web' },
    { name: 'TypeScript', category: 'web' },

    //Software Engineering
    { name: 'CI/CD', category: 'software' },
    { name: 'Data Structures', category: 'software' },
    { name: 'Git & GitHub', category: 'software' },
    { name: 'Java', category: 'software' },
    { name: 'Object Programming', category: 'software' },
    { name: 'Python', category: 'software' },
    { name: 'SDLC', category: 'software' },
    { name: 'SQL', category: 'software' },
    { name: 'Unit Testing', category: 'software' },
    { name: 'Version Control', category: 'software' },

    //System Architecture
    { name: 'API Design', category: 'system' },
    { name: 'Database Design', category: 'system' },
    { name: 'Database Integration', category: 'system' },
    { name: 'Modular Design', category: 'system' },
    { name: 'Network Design', category: 'system' },
    { name: 'Scalability', category: 'system' },
    { name: 'System Design', category: 'system' },

    //Project Management
    { name: 'Adaptability', category: 'project' },
    { name: 'Agile', category: 'project' },
    { name: 'Collaboration', category: 'project' },
    { name: 'Communication', category: 'project' },
    { name: 'Critical Thinking', category: 'project' },
    { name: 'Docker', category: 'project' },
    { name: 'Documentation', category: 'project' },
    { name: 'Leadership', category: 'project' },
    { name: 'Problem-Solving', category: 'project' },
    { name: 'Requirements Analysis', category: 'project' },
    { name: 'Scrum', category: 'project' },
    { name: 'Team Collaboration', category: 'project' },
    { name: 'Time Management', category: 'project' },
];

const filterButtons = [
    { name: 'Show All', filter: '*' },
    { name: 'System Architecture', filter: '.system' },
    { name: 'Web Development', filter: '.web' },
    { name: 'Project Management', filter: '.project' },
    { name: 'Software Engineering', filter: '.software' },
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