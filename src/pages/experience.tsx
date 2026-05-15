import Head from "next/head";
import Skills from "@/components/Skills";
import Link from "next/link";
import {
    Bs1CircleFill,
    Bs2CircleFill,
    Bs3CircleFill,
    Bs4CircleFill,
    Bs5CircleFill,
} from 'react-icons/bs';

export default function experience() {
    return (
        <>
            <Head>
                <title>My Experience</title>
                <meta name="description" content="Learn about my experiences." />
            </Head>
            <div className="font-nunito min-h-screen px-4 md:px-0" id="timeline">
                <h1 className="flex items-center justify-center text-4xl md:text-5xl pt-12 md:pt-20 pb-8 md:pb-10 text-center" id="education">Education</h1>
                <div className="flex flex-col items-center w-full gap-10 md:gap-0">
                    <div className="relative flex w-full max-w-3xl md:w-240 min-h-37.5">
                        <div className="flex-1 px-6 pt-10 pb-6 md:pl-36 md:pr-16 md:pt-0 md:pb-8 border-2 md:border-0 md:border-r-4 md:border-b-4 rounded-xl md:rounded-none [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-xl md:text-2xl">January - May 2024</h2>
                            <p className="text-sm md:text-md">
                                Started Bachelor of Arts in Computer Science, concentration in Information Technology.<br />
                                University of North Carolina at Charlotte, 4.0 GPA
                            </p>
                            <ul className="list-disc pl-5 text-sm md:text-base">
                                <li>Courses: Calculus, Intro to Computer Science, Computers and their Impact on Society</li>
                                <li>Skills: Python, Computing Basics, Solo & Group Presentations</li>
                                <li>Achievements: Chancellor&apos;s List (&gt;3.8+ GPA), Venturing Leadership Award</li>
                            </ul>
                        </div>
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:left-auto md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-[47%] z-10">
                            <Bs1CircleFill size={50} className="text-[#A02C3D] bg-(--primary-background) rounded-full shadow scale-90 md:scale-100" />
                        </div>
                    </div>

                    <div className="relative flex w-full max-w-3xl md:w-240 min-h-37.5">
                        <div className="flex-1 px-6 pt-10 pb-6 md:pl-36 md:pr-16 md:pt-8 md:pb-8 border-2 md:border-0 md:border-l-4 md:border-b-4 rounded-xl md:rounded-none [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-xl md:text-2xl">August - December 2024</h2>
                            <p className="text-sm md:text-md">
                                First semester as an undergraduate Instructional Assistant for ITSC 1212 (Intro to Computer Science), teaching computing
                                fundamentals and basic Python programming to freshmen and transfer students. 3.8 GPA
                            </p>
                            <ul className="list-disc pl-5 text-sm md:text-base">
                                <li>Courses: Data Structures and Algorithms, Logic and Algorithms, Elements of Statistics I, Database
                                    Design and Implementation, Human-Centered Computing</li>
                                <li>Skills: Java, SQL, UI/UX Design, DSA, Usability Studies, Prototyping, Heuristic Evaluation</li>
                                <li>Achievements: Chancellor&apos;s List (&gt;3.8+ GPA)</li>
                            </ul>
                        </div>
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:left-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-[47%] z-10">
                            <Bs2CircleFill size={50} className="bg-(--primary-background) text-[#758ecd] rounded-full shadow scale-90 md:scale-100" />
                        </div>
                    </div>

                    <div className="relative flex w-full max-w-3xl md:w-240 min-h-37.5">
                        <div className="flex-1 px-6 pt-10 pb-6 md:pl-36 md:pr-16 md:pt-8 md:pb-8 border-2 md:border-0 md:border-r-4 md:border-b-4 rounded-xl md:rounded-none [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-xl md:text-2xl">January - May 2025</h2>
                            <p className="text-sm md:text-md">
                                Applied and accepted into the Early Entry Graduate Program, allowing me to take graduate-level
                                courses as an undergraduate, starting in Fall 2025. 4.0 GPA
                            </p>
                            <ul className="list-disc pl-5 text-sm md:text-base">
                                <li>Courses: Design and Implementation of Object-Oriented Systems, Computer Networks, Software
                                    Engineering, Web-Based Application Design and Development, Info Security and Privacy</li>
                                <li>Skills: HTML, CSS, JS, MySQL, Git & GitHub, Object-Oriented Principles, Software Development Life
                                    Cycle (SDLC), Agile Methodologies</li>
                                <li>
                                    Projects:&nbsp;
                                        <Link 
                                            href="/projects#projects"
                                            title="Restaurant Database API"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="underline"
                                        >Restaurant Database API
                                        </Link>,&nbsp;
                                        <Link 
                                            href="/projects#projects"
                                            title="J.A. Routh IT Portfolio"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="underline"
                                            >J.A. Routh IT Portfolio
                                        </Link>
                                </li>
                                <li>Achievements: Chancellor&apos;s List (&gt;3.8+ GPA), Wood Badge Owl, CompTIA Security Pro</li>
                            </ul>
                        </div>
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:left-auto md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-[47%] z-10">
                            <Bs3CircleFill size={50} className="text-[#A02C3D] bg-(--primary-background) rounded-full shadow scale-90 md:scale-100" />
                        </div>
                    </div>

                    <div className="relative flex w-full max-w-3xl md:w-240 min-h-37.5">
                        <div className="flex-1 px-6 pt-10 pb-6 md:pl-36 md:pr-16 md:pt-8 md:pb-8 border-2 md:border-0 md:border-l-4 md:border-b-4 rounded-xl md:rounded-none [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-xl md:text-2xl">August - December 2025</h2>
                            <p className="text-sm md:text-md">
                                Promoted to Lab Instructor (Lead Instructional Assistant), instructing a lab section of 60+ students and
                                mentoring 3 Instructional Assistants. 4.0 GPA
                            </p>
                            <ul className="list-disc pl-5 text-sm md:text-base">
                                <li>Courses: Physical Computing (Graduate), Network-Based Application Development (Graduate), Info
                                    Security and Privacy (Graduate), Elements of Statistics II</li>
                                <li>Skills: TypeScript, React, Angular, R, MongoDB, Autodesk Fusion, 3D Printing, Arduino, CLI 
                                    Application Architecture</li>
                                <li>
                                    Projects:&nbsp;
                                        <Link 
                                            href="/projects#projects"
                                            title="Personal Portfolio Website"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="underline"
                                        >Personal Portfolio Website
                                        </Link>,&nbsp;
                                        <Link 
                                            href="/projects#projects"
                                            title="M62"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="underline"
                                        >M62
                                        </Link>
                                </li>
                                <li>Achievements: Early Entry Graduate Student, Chancellor&apos;s list (&gt;3.8+ GPA)</li>
                            </ul>
                        </div>
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:left-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-[47%] z-10">
                            <Bs4CircleFill size={50} className="bg-(--primary-background) text-[#758ecd] rounded-full shadow scale-90 md:scale-100" />
                        </div>
                    </div>
                    <div className="relative flex w-full max-w-3xl md:w-240 min-h-37.5">
                        <div className="flex-1 px-6 pt-10 pb-6 md:pl-36 md:pr-16 md:pt-8 md:pb-8 border-2 md:border-0 md:border-r-4 rounded-xl md:rounded-none [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-xl md:text-2xl">January - May 2026</h2>
                            <p className="text-sm md:text-md">
                                Brought all concepts together during my final semester as an undergraduate at UNC Charlotte, 
                                completing my capstone course, learning about IT project management and secure programming,  
                                and graduating with my Bachelor of Arts in Computer Science.
                            </p>
                            <ul className="list-disc pl-5 text-sm md:text-base">
                                <li>Courses: IT Project Management (Graduate), Penetration Testing and Secure Programming (Graduate), Software Development Projects</li>
                                <li>Skills: Docker, AWS, GitHub Actions, CI/CD, Cloudflare, </li>
                                <li>
                                    Projects:&nbsp;
                                        <Link 
                                            href="/projects#"
                                            title=""
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="underline"
                                        >
                                        </Link>
                                </li>
                                <li>Achievements: Bachelor of Arts in Computer Science, Chancellor&apos;s list (&gt;3.8+ GPA)</li>
                            </ul>
                        </div>
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:left-auto md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-[47%] z-10">
                            <Bs5CircleFill size={50} className="text-[#A02C3D] bg-(--primary-background) rounded-full shadow scale-90 md:scale-100" />
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <h1 className="flex items-center justify-center mx-6 md:mx-auto md:w-full md:max-w-3xl text-4xl md:text-5xl pt-12 md:pt-20 pb-8 md:pb-10 border-r-4 [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]" id="skills">Skills</h1>
                <div className="border-4 mx-2 md:mx-16 [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                    <Skills />
                </div>

                {/* Experience Section */}
                    <h1 className="flex items-center justify-center mx-6 md:mx-auto md:w-full md:max-w-3xl text-4xl md:text-5xl pt-12 md:pt-20 pb-8 md:pb-10 border-r-4 [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]" id="experience">Experience</h1>
                    <div className="flex flex-col items-center w-full gap-10 md:gap-0">
                    <div className="relative flex w-full max-w-3xl md:w-240 min-h-37.5">
                        <div className="flex-1 px-6 pt-10 pb-6 md:pl-36 md:pr-16 md:pt-0 md:pb-8 border-2 md:border-0 md:border-r-4 md:border-b-4 rounded-xl md:rounded-none [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-xl md:text-2xl">July 2021 - July 2022</h2>
                            <p className="text-sm md:text-md">
                                Served as Kitchen Manager of Webelos Adventure Camp, overseeing food prep and safety for 200+
                                campers and staff during 4-day camp sessions over 2 weeks.
                            </p>
                            <ul className="list-disc pl-5 text-sm md:text-base">
                                <li>Developed a full menu, including vegetarian, vegan, gluten-free, and other dietary options.</li>
                                <li>Managed a team of 4 youth and 1 adult kitchen staff to ensure efficient meal service for all.</li>
                                <li>Implemented food safety protocols and trained staff on proper food handling techniques.</li>
                            </ul>
                        </div>
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:left-auto md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-[47%] z-10">
                            <Bs1CircleFill size={50} className="text-[#A02C3D] bg-(--primary-background) rounded-full shadow scale-90 md:scale-100" />
                        </div>
                    </div>

                    <div className="relative flex w-full max-w-3xl md:w-240 min-h-37.5">
                        <div className="flex-1 px-6 pt-10 pb-6 md:pl-36 md:pr-16 md:pt-8 md:pb-8 border-2 md:border-0 md:border-l-4 md:border-b-4 rounded-xl md:rounded-none [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-xl md:text-2xl">September 2021 - June 2022</h2>
                            <p className="text-sm md:text-md">
                                Directed a National Youth Leadership Training (NYLT) course as Senior Patrol Leader and Course Lead.
                            </p>
                            <ul className="list-disc pl-5 text-sm md:text-base">
                                <li>Directed a team of 20+ staff to deliver a week-long leadership program for 60 participants.</li>
                                <li>Modeled servant leadership and conflict resolution, fostering a collaborative course culture.</li>
                                <li>Coordinated scheduling, logistics, and presentations across a 6-day curriculum.</li>
                                <li>Mentored staff in leadership, communication, and presentation skills.</li>
                            </ul>
                        </div>
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:left-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-[47%] z-10">
                            <Bs2CircleFill size={50} className="bg-(--primary-background) text-[#758ecd] rounded-full shadow scale-90 md:scale-100" />
                        </div>
                    </div>

                    <div className="relative flex w-full max-w-3xl md:w-240 min-h-37.5">
                        <div className="flex-1 px-6 pt-10 pb-6 md:pl-36 md:pr-16 md:pt-8 md:pb-8 border-2 md:border-0 md:border-r-4 md:border-b-4 rounded-xl md:rounded-none [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-xl md:text-2xl">September 2021 - December 2024</h2>
                            <p className="text-sm md:text-md">
                                Sales Associate
                            </p>
                            <ul className="list-disc pl-5 text-sm md:text-base">
                                <li>Assisted new and existing Scouting families in purchasing Scouting essentials.</li>
                                <li>Overhauled the storage of inventory overstock, keeping efficiency high and reducing retrieval times.</li>
                                <li>Maintained a clean and organized sales floor, ensuring a positive shopping experience.</li>
                                <li>Supported office staff in daily operations and customer service tasks.</li>
                            </ul>
                        </div>
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:left-auto md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-[47%] z-10">
                            <Bs3CircleFill size={50} className="text-[#A02C3D] bg-(--primary-background) rounded-full shadow scale-90 md:scale-100" />
                        </div>
                    </div>

                    <div className="relative flex w-full max-w-3xl md:w-240 min-h-37.5">
                        <div className="flex-1 px-6 pt-10 pb-6 md:pl-36 md:pr-16 md:pt-8 md:pb-8 border-2 md:border-0 md:border-l-4 md:border-b-4 rounded-xl md:rounded-none [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-xl md:text-2xl">August 2024 - May 2025</h2>
                            <p className="text-sm md:text-md">
                                Worked part-time during school as an Instructional Assistant for ITSC 1212 (Intro to Computer Science),
                                teaching computing fundamentals and basic Python programming to freshmen and transfer students.
                            </p>
                            <ul className="list-disc pl-5 text-sm md:text-base">
                                <li>Collaborated with a team of Instructional Assistants in conducting labs.</li>
                                <li>Held office hours, graded assignments, and provided feedback to students weekly.</li>
                                <li>Attended weekly team meetings to reflect and improve instructional strategies.</li>
                                <li>Assisted in the development of lab materials and resources.</li>
                            </ul>
                        </div>
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:left-0 md:top-1/2 md:-translate-y-1/2 md:-translate-x-[47%] z-10">
                            <Bs4CircleFill size={50} className="bg-(--primary-background) text-[#758ecd] rounded-full shadow scale-90 md:scale-100" />
                        </div>
                    </div>

                    <div className="relative flex w-full max-w-3xl md:w-240 min-h-37.5">
                        <div className="flex-1 px-6 pt-10 pb-6 md:pl-36 md:pr-16 md:pt-8 md:pb-8 border-2 md:border-0 md:border-r-4 rounded-xl md:rounded-none [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-xl md:text-2xl">August 2025 - May 2026</h2>
                            <p className="text-sm md:text-md">
                                Promoted to Lab Instructor (Lead Instructional Assistant), instructing 4 lab sections serving 180+ students and
                                mentoring 8 Instructional Assistants.
                            </p>
                            <ul className="list-disc pl-5 text-sm md:text-base">
                                <li>Instructed 180+ students in Python fundamentals, translating lecture concepts into hands-on exercises each week.</li>
                                <li>Collaborated in weekly TA syncs to coordinate grading responsibilities and refine lab instruction approaches.</li>
                                <li>Guided students through debugging Python errors in real time across lab sessions and office hours.</li>
                            </ul>
                        </div>
                        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:left-auto md:right-0 md:top-1/2 md:-translate-y-1/2 md:translate-x-[47%] z-10">
                            <Bs5CircleFill size={50} className="text-[#A02C3D] bg-(--primary-background) rounded-full shadow scale-90 md:scale-100" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 