"use client";
import Link from 'next/link';
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

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true)
    }, []);

    //to show which page is current
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
        <div id="navbar" className="flex items-center justify-between shadow-lg">
            <div className="flex items-center h-18 text-xl">
                {resolvedTheme === "dark" ? (
                <Image 
                    src="images/logo-dark.png"
                    alt="Logo"
                    width={118}
                    height={118}
                />
                ) : (
                <Image 
                    src="images/logo-light.png"
                    alt="Logo"
                    width={118}
                    height={118}
                />
                )}
                <span className={`ml-3 text-3xl ${albert.variable}`}><span className="font-bold">Matthew</span>Bachelder</span>
            </div>
            <div className="flex items-center">
                <ThemeSwitch />
                <nav className="flex items-center h-10 text-xl border-2 rounded-full overflow-hidden mr-5">
                    {links.map(({ href, label }, idx) => (
                        <Link
                            key={href}
                            href={href}
                            className={[
                                "px-8 flex items-center h-full hover:bg-(--secondary-accent) transition",
                                idx !== 0 && "border-l",
                                idx === 0 && "rounded-l-full",
                                idx === links.length -1 && "rounded-r-full",
                                pathname === href ? "flex items-center" : ""
                            ].filter(Boolean).join(" ")}
                            id={pathname === href ? "active" : undefined}
                        >
                            {label}
                        </Link>
                    ))}
                </nav>
            </div>
        </div>
    );
}