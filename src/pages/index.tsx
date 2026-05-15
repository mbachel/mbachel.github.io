import Head from "next/head";
import Link from "next/link";
import {
    FaGithub,
    FaGraduationCap,
    FaCloud,
} from "react-icons/fa";
import {
    RiGitRepositoryFill,
    RiInfoCardFill,
} from "react-icons/ri";
import { MdContactPage } from "react-icons/md";
import { LuExternalLink } from "react-icons/lu";
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
                        <h2 className="text-3xl flex items-center gap-4 pb-2 text-center md:text-end">Why Matthew?</h2>
                        <p className="text-xl text-center md:text-end max-w-2xl md:max-w-164">
                            I recently graduated Summa Cum Laude with a B.A. in Computer Science
                            from UNC Charlotte. I've shipped projects built with Docker, React, and
                            more, hosted on DigitalOcean and AWS. I'm currently teaching myself
                            IaC tools like Terraform and visualization tools like Grafana.
                        </p>
                    </div>
                </div>
                <div className="flex w-full max-w-6xl flex-col items-center gap-6 pt-12 md:flex-row md:items-start">
                    <div className="order-2 flex flex-col items-center justify-start md:order-1 md:items-start md:pt-10 md:pb-10">
                        <h2 className="text-3xl flex items-center gap-4 pb-2 text-center md:text-start">What Can Matthew Do?</h2>
                        <p className="text-xl pb-2 text-center md:text-start">Here&apos;s a snapshot of my core competencies:</p>
                        <ul className="text-xl text-left md:text-start max-w-2xl md:max-w-180 list-disc pl-6">
                            <li><span className="font-bold">Cloud</span> - AWS (Lambda, S3, CloudFront, API Gateway, DynamoDB, SAM).</li>
                            <li><span className="font-bold">DevOps</span> - GitHub Actions, Docker, CI/CD pipelines.</li>
                            <li><span className="font-bold">Full-Stack</span> - React/Next.js, TypeScript, FastAPI, Node.js.</li>
                            <li><span className="font-bold">Database</span> - MongoDB, MySQL, schema design, data modeling.</li>
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
                        <h2 className="text-3xl flex items-center gap-4 pb-2 text-center md:text-end">Who Is Matthew?</h2>
                        <p className="text-xl text-center md:text-end max-w-2xl md:max-w-164">
                            During my time at UNC Charlotte, I continued to volunteer in Scouting as
                            the Advisor of a Venturing Crew. I also worked as a Lead Instructional
                            Assistant for ITSC 1212 (Computer Science I), where I taught students
                            the fundamentals of programming and problem-solving.
                        </p>
                    </div>
                </div>
                <div className="flex w-full max-w-6xl flex-col items-center gap-6 pt-12 md:flex-row md:items-start">
                    <div className="order-2 flex flex-col items-center justify-start md:order-1 md:items-start md:pt-10">
                        <h2 className="text-3xl flex items-center gap-4 pb-2 text-center md:text-start">How About Matthew?</h2>
                        <p className="text-xl text-center md:text-start max-w-2xl md:max-w-160">
                            I&apos;m actively seeking junior DevOps and cloud engineering roles,
                            targeting Charlotte or remote. Whether you have an opportunity
                            or just want to chat, feel free to connect with me!
                        </p>
                    </div>
                    <Link 
                        className="order-1 flex items-center justify-center md:order-2 md:justify-end md:flex-1" 
                        href="/contact">
                            <MdContactPage size={240}/>
                    </Link>
                </div>
                <div className="pt-12 flex w-full max-w-6xl mx-auto flex-col items-center gap-6 md:flex-row md:items-end pb-20">
                    <a
                        href="https://resume.bachelder.me"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pb-0 md:pb-15 order-1 flex items-center justify-center md:order-0 md:justify-start"
                    >
                        <FaCloud size={240} />
                    </a>
                    <div className="order-2 flex flex-col items-center justify-end md:order-0 md:items-end md:justify-end md:flex-1 md:pt-10 md:pb-10">
                        <p className="text-sm uppercase tracking-widest opacity-60 pb-1 text-center md:text-end">Featured Project</p>
                        <h2 className="text-3xl flex items-center gap-3 pb-2 justify-center md:justify-end">
                            Cloud Resume Challenge
                            <a href="https://github.com/mbachel/cloud-resume" target="_blank" rel="noopener noreferrer" title="View on GitHub">
                                <FaGithub size={22} />
                            </a>
                            <a href="https://resume.bachelder.me" target="_blank" rel="noopener noreferrer" title="Open Project">
                                <LuExternalLink size={22} />
                            </a>
                        </h2>
                        <p className="text-base  opacity-60 text-center md:text-end">
                            AWS SAM · Lambda · Python · S3 · CloudFront<br />
                            API Gateway · DynamoDB · ACM · GitHub Actions
                        </p>
                        <p className="text-xl text-center md:text-end max-w-2xl md:max-w-164">
                            Serverless resume site hosted on AWS. Static front end served via S3
                            and CloudFront, with a Python Lambda function tracking visitor counts
                            through API Gateway and DynamoDB. Infrastructure managed with
                            AWS SAM and deployments automated through GitHub Actions.
                        </p>
                        <div className="pt-4">
                            <Link href="/projects" className="text-base underline opacity-70">
                                View all projects →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}