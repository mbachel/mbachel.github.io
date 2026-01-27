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


export default function FooterMobile() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true)
    }, []);

    if (!mounted) return null;

    return (
        <footer className="flex flex-col gap-6 font-inter text-center px-6 py-8 shadow-lg">
            <section className="space-y-3">
                <h2 className="text-base">This website was hand-built using:</h2>
                <div className="flex flex-wrap items-center justify-center gap-3">
                    <Link 
                        href="https://nextjs.org/" 
                        title="Next.js" 
                        rel="noopener noreferrer" 
                        target="_blank">
                        <RiNextjsLine size={28} />
                    </Link>
                    <Link 
                        href="https://nodejs.org/" 
                        title="Node.js" 
                        rel="noopener noreferrer" 
                        target="_blank">
                        <FaNode size={28} />
                    </Link>
                    <Link 
                        href="https://react.dev/" 
                        title="React" 
                        rel="noopener noreferrer" 
                        target="_blank">
                        <FaReact size={28} />
                    </Link>
                    <Link 
                        href="https://www.typescriptlang.org/" 
                        title="TypeScript" 
                        rel="noopener noreferrer" 
                        target="_blank">
                        <SiTypescript size={28} />
                    </Link>
                    <Link 
                        href="https://tailwindcss.com/" 
                        title="Tailwind CSS" 
                        rel="noopener noreferrer" 
                        target="_blank">
                        <RiTailwindCssFill size={28} />
                    </Link>
                </div>
            </section>
            <section className="flex items-center justify-center">
                {resolvedTheme === "dark" ? (
                    <Image 
                        src="images/logo-dark.png"
                        alt="Logo"
                        width={90}
                        height={90}
                    />
                    ) : (
                    <Image 
                        src="images/logo-light.png"
                        alt="Logo"
                        width={90}
                        height={90}
                    />
                )}
            </section>
            <section>
                <p className="flex flex-col items-center justify-center gap-2 text-sm">
                    <Link 
                        href="https://www.instagram.com/matty.c.b02/" 
                        title="Instagram" 
                        rel="noopener noreferrer" 
                        target="_blank"
                        className="inline-flex items-center gap-2"
                    >
                        <FaInstagram size={24} />
                        Instagram
                    </Link>
                    <span>© 2025 Matthew Bachelder. All rights reserved.</span>
                </p>
            </section>
        </footer>
    );
}
