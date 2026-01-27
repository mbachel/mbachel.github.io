"use client";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import {
    FaInstagram,
    FaNode,
    FaReact,
} from "react-icons/fa";
import {
    RiNextjsLine,
    RiTailwindCssFill
} from "react-icons/ri";
import { SiTypescript } from "react-icons/si";


export default function FooterDesktop() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true)
    }, []);

    if (!mounted) return null;

    return (
        <footer className="flex flex-row font-inter items-center text-center justify-between h-30 px-50 shadow-lg">
            <section>
                <h2 className="text-xl">This website was hand-built using:</h2>
                <Link 
                    href="https://nextjs.org/" 
                    title="Next.js" 
                    rel="noopener noreferrer" 
                    target="_blank">
                    <RiNextjsLine 
                        size={32}
                        className="inline-block mx-2"
                    />
                </Link>
                <Link 
                    href="https://nodejs.org/" 
                    title="Node.js" 
                    rel="noopener noreferrer" 
                    target="_blank">
                    <FaNode 
                        size={32}
                        className="inline-block mx-2"
                    />
                </Link>
                <Link 
                    href="https://react.dev/" 
                    title="React" 
                    rel="noopener noreferrer" 
                    target="_blank">
                    <FaReact 
                        size={32}
                        className="inline-block mx-2"
                    />
                </Link>
                <Link 
                    href="https://www.typescriptlang.org/" 
                    title="TypeScript" 
                    rel="noopener noreferrer" 
                    target="_blank">
                    <SiTypescript 
                        size={32}
                        className="inline-block mx-2"
                    />
                </Link>
                <Link 
                    href="https://tailwindcss.com/" 
                    title="Tailwind CSS" 
                    rel="noopener noreferrer" 
                    target="_blank">
                    <RiTailwindCssFill 
                        size={32}
                        className="inline-block mx-2"
                    />
                </Link>
            </section>
            <section>
                {resolvedTheme === "dark" ? (
                    <Image 
                        src="images/logo-dark.png"
                        alt="Logo"
                        width={120}
                        height={120}
                    />
                    ) : (
                    <Image 
                        src="images/logo-light.png"
                        alt="Logo"
                        width={120}
                        height={120}
                    />
                )}
            </section>
            <section>
                <p className="flex items-center justify-center">
                    <Link 
                        href="https://www.instagram.com/matty.c.b02/" 
                        title="Instagram" 
                        rel="noopener noreferrer" 
                        target="_blank">
                        <FaInstagram
                            size={32}
                            className="inline-block mx-2"
                        />
                    </Link>
                    © 2025 Matthew Bachelder. All rights reserved.
                </p>
            </section>
        </footer>
    );
}
