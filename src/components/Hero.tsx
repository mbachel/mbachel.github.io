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
                    <h2 className="text-xl pb-6">
                        Early Entry MS Information Technology
                        <br />
                        BA Computer Science, IT Concentration
                    </h2>
                    <div className="pb-6 pointer-events-auto inline-block">
                        <Link 
                            href="/contact" 
                            title="Contact Me">
                            <FaEnvelope
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
                    <p className="text-lg pb-20 mx-16">
                        Experience in Python, Git, SQL, and web development. 
                        Knowledge in backend systems, databases, and full-stack applications using React, Angular, and FastAPI.
                    </p>
                </div>
            </div>
        </header>
    );
}