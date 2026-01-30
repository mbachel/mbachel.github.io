import Head from "next/head";
import Link from "next/link";
import { 
    FaBatteryQuarter,
    FaBatteryHalf,
    FaBatteryThreeQuarters,
    FaBatteryFull,
    FaGraduationCap,
} from "react-icons/fa";
import {
    RiGitRepositoryFill,
    RiInfoCardFill,
} from "react-icons/ri";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { MdContactPage } from "react-icons/md";
import Resume from "@/components/Resume";

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Home Page</title>
                <meta name="description" content="Welcome to my personal website!" />
            </Head>
            <Resume />
            <section className="font-nunito min-h-screen flex flex-col items-center justify-center px-6 md:px-20">
                <div className="flex w-full max-w-6xl flex-col items-center gap-6 md:flex-row md:items-end">
                    <Link 
                        className="flex items-center justify-center md:justify-start" 
                        href="/experience">
                            <FaGraduationCap size={240}/>
                    </Link>
                    <div className="flex flex-col items-center justify-end md:items-end md:justify-end md:flex-1 md:pt-20 md:pb-10 md:ml-5">
                        <h2 className="text-3xl flex items-center gap-4 pb-2 text-center md:text-end"><FaBatteryQuarter /> Why Matthew?</h2>
                        <p className="text-xl text-center md:text-end max-w-2xl md:max-w-160">
                            As a soon-to-be graduate with my Bachelor&apos;s in Computer Science, I
                            am eager to apply my skills and knowledge in a professional setting.
                            As an Early Entry Master&apos;s in Information Technology student, I am
                            committed to continuous learning and growth in tech. Explore my
                            website to learn more about my skills, experiences, and projects.
                        </p>
                    </div>
                </div>
                <div className="flex w-full max-w-6xl flex-col items-center gap-6 pt-12 md:flex-row md:items-start">
                    <div className="order-2 flex flex-col items-center justify-start md:order-1 md:items-start md:pt-10 md:pb-10">
                        <h2 className="text-3xl flex items-center gap-4 pb-2 text-center md:text-start">What Can Matthew Do? <FaBatteryHalf /></h2>
                        <p className="text-xl pb-2 text-center md:text-start">Here&apos;s a snapshot of my core competencies:</p>
                        <ul className="text-xl text-left md:text-start max-w-2xl md:max-w-180 list-disc pl-6">
                            <li><span className="font-bold">Full-Stack Development</span> - React/Next.js, TypeScript, Node.js.</li>
                            <li><span className="font-bold">DevOps Engineering</span> - GitHub Actions, Docker, CI/CD pipelines.</li>
                            <li><span className="font-bold">Software Engineering</span> - Git workflows, unit testing, version control.</li>
                            <li><span className="font-bold">Database Integration</span> - MongoDB/SQL, schema design, data modeling.</li>
                        </ul>
                    </div>
                    <Link 
                        className="order-1 flex items-center justify-center md:order-2 md:justify-end md:flex-1" 
                        href="/projects">
                            <RiGitRepositoryFill size={240}/>
                    </Link>
                </div>
                <div className="flex w-full max-w-6xl flex-col items-center gap-6 pt-12 md:flex-row md:items-end">
                    <Link 
                        className="order-1 flex items-center justify-center md:order-0 md:justify-start" 
                        href="/about">
                            <RiInfoCardFill className="animate-fade-right" size={240}/>
                    </Link>
                    <div className="order-2 flex flex-col items-center justify-end md:order-0 md:items-end md:justify-end md:flex-1 md:pt-10 md:pb-10">
                        <h2 className="text-3xl flex items-center gap-4 pb-2 text-center md:text-end"><FaBatteryThreeQuarters /> Who Is Matthew?</h2>
                        <p className="text-xl text-center md:text-end max-w-2xl md:max-w-160">
                            I&apos;m in my Senior year at the University of North Carolina at Charlotte,
                            studying a Computer Scince Bachelor&apos;s degree with a concentration in
                            Information Technology. I was also accepted into the Early Entry
                            program at UNCC for a Master&apos;s in Information Technology. In my free
                            time, I enjoy fishing, traveling, and gaming with my friends.
                        </p>
                    </div>
                </div>
                <div className="flex w-full max-w-6xl flex-col items-center gap-6 pt-12 md:flex-row md:items-start">
                    <div className="order-2 flex flex-col items-center justify-start md:order-1 md:items-start md:pt-10">
                        <h2 className="text-3xl flex items-center gap-4 pb-2 text-center md:text-start">How About Matthew? <FaBatteryFull /></h2>
                        <p className="text-xl text-center md:text-start max-w-2xl md:max-w-160">
                            I&apos;m currently looking for new opportunities to 
                            forward my career, starting in May 2026!
                            Whether you are looking for new interns, full-time employees, 
                            or just want to chat, feel free to connect with me!
                        </p>
                    </div>
                    <Link 
                        className="order-1 flex items-center justify-center md:order-2 md:justify-end md:flex-1" 
                        href="/contact">
                            <MdContactPage size={240}/>
                    </Link>
                </div>
            </section>
            <section id="improvements" className="pt-16 pb-24 px-6 md:px-20">
                <h2 className="flex items-center justify-center gap-2 text-center text-2xl font-bold md:text-4xl">
                    <HiWrenchScrewdriver />
                    <span>Plans for Improvement</span>
                    <HiWrenchScrewdriver />
                </h2>
                <div className="mx-auto mt-6 flex max-w-4xl flex-col gap-4 text-base md:text-2xl">
                    <p className="text-center md:text-left">
                        Just like myself, my website is constantly changing and improving.
                        Here are my current plans for improvement and expansion (in no particular order):
                    </p>
                    <ul className="list-disc space-y-2 pl-6 text-left md:text-left">
                        <li>Incorporate images throughout the website to improve visual appeal.</li>
                        <li>Add animations and interactive elements to enhance engagement.</li>
                        <li>Improve SEO, performance, and accessibility for better usability.</li>
                        <li>Implement specific project demos to showcase functionality.</li>
                        <li className="line-through">Optimize for all devices to ensure a seamless experience.</li>
                        <li className="line-through">Finish the projects page, with filtering capabilities.</li>
                    </ul>
                </div>
            </section>
        </>
    );
}