"use client";
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiX } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import ThemeSwitch from './ThemeSwitch';
import Image  from 'next/image';
import { Albert_Sans } from 'next/font/google';

const albert = Albert_Sans({
  variable: "--font-albert",
  subsets: ["latin"],
});

export default function Navbar() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true)
    }, []);

    useEffect(() => {
        if (!mounted) return;
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = menuOpen ? "hidden" : originalOverflow;
        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [menuOpen, mounted]);

    const pathname = usePathname();
    if (!mounted) return null;

    const links = [
        {href: "/", label: "Home"},
        {href: "/experience", label: "Experience"},
        {href: "/projects", label: "Projects"},
        {href: "/about", label: "About"},
        {href: "/contact", label: "Contact"},
    ];

    return (
        <header id="navbar" className="relative z-30 w-full shadow-lg">
            <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2">
                    {resolvedTheme === "dark" ? (
                        <Image
                            src="images/logo-dark.png"
                            alt="Logo"
                            width={48}
                            height={48}
                            className="h-10 w-10"
                        />
                    ) : (
                        <Image
                            src="images/logo-light.png"
                            alt="Logo"
                            width={48}
                            height={48}
                            className="h-10 w-10"
                        />
                    )}
                    <span className={`text-lg ${albert.variable}`}>
                        <span className="font-bold">Matthew</span>Bachelder
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <ThemeSwitch />
                    <div className="relative z-50">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center h-10 w-10 rounded-md border transition-colors duration-200"
                            aria-label="Toggle navigation menu"
                            aria-expanded={menuOpen}
                            aria-controls="mobile-nav"
                            onClick={() => setMenuOpen((open) => !open)}
                        >
                            {menuOpen ? (
                                <FiX className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <GiHamburgerMenu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <div
                className={`fixed inset-0 z-40 flex justify-end transition-opacity duration-200 ${
                    menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
                aria-hidden={!menuOpen}
            >
                <button
                    type="button"
                    aria-label="Close navigation menu"
                    className="absolute inset-0 bg-black/60"
                    onClick={() => setMenuOpen(false)}
                />
                <div
                    className={`relative h-full w-lg shadow-2xl transition-transform duration-200 ease-out ${
                        menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                    style={{
                        backgroundColor: "var(--primary-accent)",
                        color: "var(--text-color)",
                    }}
                >
                    <div className="flex items-center justify-between px-6 py-5">
                        <div className="flex items-center gap-2">
                            {resolvedTheme === "dark" ? (
                                <Image
                                    src="images/logo-dark.png"
                                    alt="Logo"
                                    width={48}
                                    height={48}
                                    className="h-10 w-10"
                                />
                            ) : (
                                <Image
                                    src="images/logo-light.png"
                                    alt="Logo"
                                    width={48}
                                    height={48}
                                    className="h-10 w-10"
                                />
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                aria-label="Close navigation menu"
                                className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-black/20"
                                onClick={() => setMenuOpen(false)}
                            >
                                <FiX className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                    <nav
                        id="mobile-nav"
                        className="px-6 pt-4"
                        aria-label="Mobile navigation"
                    >
                        <ul className="flex flex-col gap-6 text-left">
                            {links.map(({ href, label }) => (
                                <li key={href}>
                                    <Link
                                        href={href}
                                        className="text-xl font-medium tracking-tight transition-opacity duration-150 hover:opacity-80"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}