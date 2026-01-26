import {
    FaLinkedin,
    FaGithub,
    FaEnvelope
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";

export default function Hero() {
    return (
        <header className="relative">
            <BackgroundRippleEffect rows={13} cols={40} />
            <div className="relative flex font-inter justify-center items-center h-fit text-center pt-16 w-160 mx-auto pointer-events-none">
                <div className="z-10 ">
                    <div className="pb-4">
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
                    <h1 className="text-5xl mt-4 pb-2">
                        Matthew Bachelder
                    </h1>
                    <h3 className="text-lg pb-2">
                        Charlotte, NC
                    </h3>
                    <h2 className="text-2xl pb-2 font-semibold">
                        Aspiring DevOps Engineer & Backend Developer
                    </h2>
                    <p className="text-lg pb-6 text-gray-300">
                        MS Information Technology | BA Computer Science
                    </p>
                    <div className="pb-6 pointer-events-auto inline-block">
                        <Link 
                            href="/contact" 
                            title="Contact Me">
                            <FaEnvelope
                                size={32}
                                className="inline-block mx-2 hover:text-blue-400 transition-colors"
                            />
                        </Link>
                        <Link 
                            href="https://www.linkedin.com/in/matthewbachelder/" 
                            title="LinkedIn" 
                            rel="noopener noreferrer" 
                            target="_blank">
                            <FaLinkedin
                                size={32}
                                className="inline-block mx-2 hover:text-blue-400 transition-colors"
                            />
                        </Link>
                        <Link 
                            href="https://github.com/mbachel" 
                            title="GitHub" 
                            rel="noopener noreferrer" 
                            target="_blank">
                            <FaGithub
                                size={32}
                                className="inline-block mx-2 hover:text-blue-400 transition-colors"
                            />
                        </Link>
                    </div>
                    <p className="text-lg pb-20 mx-16 leading-relaxed">
                        Experience in Python, TypeScript, and Cloud Infrastructure. 
                        Proficient in building scalable full-stack applications with React, FastAPI, and MongoDB, 
                        and automating deployments using Docker, Terraform, and AWS.
                    </p>
                </div>
            </div>
        </header>
    );
}