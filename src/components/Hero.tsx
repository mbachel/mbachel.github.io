import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";

const socialLinks = [
    {
        href: "/contact",
        title: "Contact Me",
        icon: MdMail,
        size: 36,
        rel: "noopener noreferrer",
        target: "_blank",
    },
    {
        href: "https://www.linkedin.com/in/matthewbachelder/",
        title: "LinkedIn",
        icon: FaLinkedin,
        size: 32,
        rel: "noopener noreferrer",
        target: "_blank",
    },
    {
        href: "https://github.com/mbachel",
        title: "GitHub",
        icon: FaGithub,
        size: 32,
        rel: "noopener noreferrer",
        target: "_blank",
    },
];

export default function Hero() {
    return (
        <header className="relative min-h-dvh overflow-hidden">
            <div className="flex items-center justify-center">
                <BackgroundRippleEffect rows={16} cols={32} />
            </div>
            <div className="relative flex font-inter justify-center items-center text-center pt-14 max-w-lg mx-auto pointer-events-none">
                <div className="z-10">
                    <div className="pb-4">
                        <Image
                            src="images/me.png"
                            alt="Profile Picture"
                            width={148}
                            height={148}
                            className="w-60 h-60 rounded-full object-cover object-center items-center mx-auto shadow-xl"
                            id="profile-picture"
                            priority
                        />
                    </div>
                    <h1 className="text-5xl mt-4 pb-2">Matthew Bachelder</h1>
                    <h3 className="text-lg pb-2">Charlotte, NC</h3>
                    <h2 className="text-xl pb-6">
                        Aspiring DevOps & Cloud Engineer
                        <br />
                        B.A. CS, Early Entry M.S. IT at UNC Charlotte
                    </h2>
                    <div className="pb-6 pointer-events-auto inline-block">
                        {socialLinks.map(({ href, title, icon: Icon, size, rel, target }) => (
                            <Link
                                key={title}
                                href={href}
                                title={title}
                                rel={rel}
                                target={target}
                            >
                                <Icon size={size} className="inline-block mx-2" />
                            </Link>
                        ))}
                    </div>
                    <p className="text-lg">
                        Experience in Docker, CI/CD, and full-stack development.
                        Passionate about leadership, learning, and collaboration.
                    </p>
                </div>
            </div>
        </header>
    );
}