import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";


export default function MiniHero() {
    return (
        <header className="relative">
            <BackgroundRippleEffect rows={7} cols={40} />
            <div className="relative flex flex-col font-inter items-center justify-center h-fit text-center pt-16">
                <div className="z-10 pointer-events-none">
                    <div className="pb-4 mb-2">
                        <Image 
                            src="images/me.png"
                            alt="Profile Picture" 
                            width={148} 
                            height={148} 
                            className="w-60 h-60 rounded-full object-cover object-center items-center mx-auto"
                            id="profile-picture"
                            priority
                        />
                    </div>
                    <div className="pb-8 mt-auto pointer-events-auto inline-block">
                        <Link 
                            href="/contact" 
                            title="Contact Me">
                            <MdMail
                                size={32}
                                className="inline-block mx-2"
                            />
                        </Link>
                        <Link 
                            href="https://www.linkedin.com/in/matthewbachelder/" 
                            title="LinkedIn" 
                            rel="noopener noreferrer" 
                            target="_blank">
                            <FaLinkedin
                                size={32}
                                className="inline-block mx-2"
                            />
                        </Link>
                        <Link 
                            href="https://github.com/mbachel" 
                            title="GitHub" 
                            rel="noopener noreferrer" 
                            target="_blank">
                            <FaGithub
                                size={32}
                                className="inline-block mx-2"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}