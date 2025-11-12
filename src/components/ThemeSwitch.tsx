"use client";

import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ThemeSwitch() {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return (
        <Image 
            src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
            width={40}
            height={40}
            sizes="36x36"
            alt="Loading theme toggle"
            priority={false}
            title="Loading theme toggle"
            className="hover:cursor-pointer mx-6"
        />
    );

    if (resolvedTheme === 'dark') {
        return <FiSun size={45} className="flex items-center mx-6 hover:cursor-pointer hover:bg-(--secondary-accent) rounded-full p-1 transition" onClick={() => setTheme('light')} />;
    }

    if (resolvedTheme === 'light') {
        return <FiMoon size={45} className="flex items-center mx-6 hover:cursor-pointer hover:bg-(--secondary-accent) rounded-full p-1 transition" onClick={() => setTheme('dark')} />;
    }
}