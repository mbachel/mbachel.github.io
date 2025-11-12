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
        <div className="relative mx-auto h-24rem overflow-y-auto overflow-x-hidden">
            <div className="sticky top-0 z-10 flex justify-center py-6 bg-var(--primary-background)">
                <div className="flex items-center h-10 text-lg border-2 rounded-full overflow-hidden shadow-md">
                    {filterButtons.map((button) => (
                        <button
                            key={button.filter}
                            onClick={handleFilterKeyChange(button.filter)}
                            className={`px-5 h-full hover:bg-var(--secondary-accent) hover:cursor-pointer border-r last:border-r-0 ${
                                (filterKey === '*' && button.filter === '*') ||
                                `.${filterKey}` === button.filter
                                    ? 'font-bold bg-var(--tertiary-accent)'
                                    : ''
                            }`}
                        >
                            {button.name}
                        </button>
                    ))}
                </div>
            </div>

            <div ref={gridRef} className="grid w-full mx-auto">
                {/* Grid Sizer element for column width */}
                <div className="grid-sizer w-1/5"></div>
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className={`grid-item w-1/5 p-1 ${skill.category}`}
                    >
                        <div className="p-2 text-center border rounded-md shadow-sm h-full flex items-center justify-center bg-var(--secondary-background)">
                            <p className="text-base">{skill.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}