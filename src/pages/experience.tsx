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
            <div className="font-nunito min-h-screen" id="timeline">
                <h1 className="flex items-center justify-center text-5xl pt-20 pb-10" id="education">Education</h1>
                <div className="flex flex-col items-center w-full">
                    <div className="relative flex w-240 min-h-[150px]">
                        <div className="flex-1 pl-36 pr-16 pb-8 border-r-4 border-b-4 [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-2xl">January - May 2024</h2>
                            <p className="text-md">
                                Started Bachelor of Arts in Computer Science, concentration in Information Technology.<br />
                                University of North Carolina at Charlotte, 4.0 GPA
                            </p>
                            <ul className="list-disc pl-5">
                                <li>Courses: Calculus, Intro to Computer Science, Computers and their Impact on Society</li>
                                <li>Skills: Python, Computing Basics, Solo & Group Presentations</li>
                                <li>Achievements: Chancellor&apos;s List (&gt;3.8 GPA), Venturing Leadership Award</li>
                            </ul>
                        </div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[47%] z-10">
                            <Bs1CircleFill size={50} className="text-[#A02C3D] bg-var(--primary-background) rounded-full shadow" />
                        </div>
                    </div>

                    <div className="relative flex w-240 min-h-[150px]">
                        <div className="flex-1 pl-36 pr-16 pt-8 pb-8 border-l-4 border-b-4 [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-2xl">August - December 2024</h2>
                            <p className="text-md">
                                First semester as an undergraduate Instructional Assistant for ITSC 1212 (Intro to Computer Science), teaching computing
                                fundamentals and basic Python programming to freshmen and transfer students. 3.8 GPA
                            </p>
                            <ul className="list-disc pl-5">
                                <li>Courses: Data Structures and Algorithms, Logic and Algorithms, Elements of Statistics I, Database
                                    Design and Implementation, Human-Centered Computing</li>
                                <li>Skills: Java, SQL, UI/UX Design, DSA, Usability Studies, Prototyping, Heuristic Evaluation</li>
                                <li>Achievements: Chancellor&apos;s List (&gt;3.8 GPA)</li>
                            </ul>
                        </div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[47%] z-10">
                            <Bs2CircleFill size={50} className="bg-var(--primary-background) text-[#758ecd] rounded-full shadow" />
                        </div>
                    </div>

                    <div className="relative flex w-240 min-h-[150px]">
                        <div className="flex-1 pl-36 pr-16 pt-8 pb-8 border-r-4 border-b-4 [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-2xl">January - May 2025</h2>
                            <p className="text-md">
                                Applied and accepted into the Early Entry Graduate Program, allowing me to take graduate-level
                                courses as an undergraduate, starting in Fall 2025. 4.0 GPA
                            </p>
                            <ul className="list-disc pl-5">
                                <li>Courses: Design and Implementation of Object-Oriented Systems, Computer Networks, Software
                                    Engineering, Web-Based Application Design and Development, Info Security and Privacy</li>
                                <li>Skills: HTML, CSS, JS, MySQL, Git & GitHub, Object-Oriented Principles, Software Development Life
                                    Cycle (SDLC), Agile Methodologies</li>
                                <li>
                                    Projects:&nbsp;
                                        <Link 
                                            href="/projects#Restaurant"
                                            title="Restaurant Database API"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="underline"
                                        >Restaurant Database API
                                        </Link>,&nbsp;
                                        <Link 
                                            href="/projects#Routh"
                                            title="J.A. Routh IT Portfolio"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="underline"
                                            >J.A. Routh IT Portfolio
                                        </Link>
                                </li>
                                <li>Achievements: Chancellor&apos;s List (&gt;3.8 GPA), Wood Badge Owl, CompTIA Security Pro</li>
                            </ul>
                        </div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[47%] z-10">
                            <Bs3CircleFill size={50} className="text-[#A02C3D] bg-var(--primary-background) rounded-full shadow" />
                        </div>
                    </div>

                    <div className="relative flex w-240 min-h-[150px]">
                        <div className="flex-1 pl-36 pr-16 pt-8 pb-8 border-l-4 border-b-4 [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-2xl">August - December 2025</h2>
                            <p className="text-md">
                                Promoted to Lab Instructor (Lead Instructional Assistant), instructing a lab section of 60+ students and
                                mentoring 3 Instructional Assistants.
                            </p>
                            <ul className="list-disc pl-5">
                                <li>Courses: Physical Computing (Graduate), Network-Based Application Development (Graduate), Info
                                    Security and Privacy (Graduate), Elements of Statistics II</li>
                                <li>Skills: TypeScript, React, Angular, R, MongoDB, Docker, Autodesk Fusion, 3D Printing, Arduino, CLI, 
                                    Application Architecture</li>
                                <li>
                                    Projects:&nbsp;
                                        <Link 
                                            href="/projects#Portfolio"
                                            title="Personal Portfolio Website"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="underline"
                                        >Personal Portfolio Website
                                        </Link>
                                </li>
                                <li>Achievements: Early Entry Graduate Student</li>
                            </ul>
                        </div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[47%] z-10">
                            <Bs4CircleFill size={50} className="bg-var(--primary-background) text-[#758ecd] rounded-full shadow" />
                        </div>
                    </div>

                    <div className="relative flex w-240 min-h-[150px]">
                        <div className="flex-1 pl-36 pr-16 pt-8 pb-8 border-r-4 [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-2xl">January - May 2026</h2>
                            <p className="text-md">
                                Coming soon...
                            </p>
                        </div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[47%] z-10">
                            <Bs5CircleFill size={50} className="text-[#A02C3D] bg-var(--primary-background) rounded-full shadow" />
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <h1 className="flex items-center justify-center mx-24 text-5xl pt-20 pb-10 border-r-4 [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]" id="skills">Skills</h1>
                <div className="border-4 mx-16 [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                    <Skills />
                </div>

                {/* Experience Section */}
                    <h1 className="flex items-center justify-center mx-24 text-5xl pt-20 pb-10 border-r-4 [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]" id="experience">Experience</h1>
                    <div className="flex flex-col items-center w-full">
                    <div className="relative flex w-240 min-h-[150px]">
                        <div className="flex-1 pl-36 pr-16 pb-8 border-r-4 border-b-4 [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-2xl">July 2021 - July 2022</h2>
                            <p className="text-md">
                                Served as Kitchen Manager of Webelos Adventure Camp, overseeing food prep and safety for 200+
                                campers and staff during 4-day camp sessions over 2 weeks.
                            </p>
                            <ul className="list-disc pl-5">
                                <li>Developed a full menu, including vegetarian, vegan, gluten-free, and other dietary options.</li>
                                <li>Managed a team of 4 youth and 1 adult kitchen staff to ensure efficient meal service for all.</li>
                                <li>Implemented food safety protocols and trained staff on proper food handling techniques.</li>
                            </ul>
                        </div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[47%] z-10">
                            <Bs1CircleFill size={50} className="text-[#A02C3D] bg-var(--primary-background) rounded-full shadow" />
                        </div>
                    </div>

                    <div className="relative flex w-240 min-h-[150px]">
                        <div className="flex-1 pl-36 pr-16 pt-8 pb-8 border-l-4 border-b-4 [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-2xl">September 2021 - June 2022</h2>
                            <p className="text-md">
                                Directed a National Youth Leadership Training (NYLT) course as Senior Patrol Leader and Course Lead.
                            </p>
                            <ul className="list-disc pl-5">
                                <li>Directed a team of 20+ staff to deliver a week-long leadership program for 60 participants.</li>
                                <li>Modeled servant leadership and conflict resolution, fostering a collaborative course culture.</li>
                                <li>Coordinated scheduling, logistics, and presentations across a 6-day curriculum.</li>
                                <li>Mentored staff in leadership, communication, and presentation skills.</li>
                            </ul>
                        </div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[47%] z-10">
                            <Bs2CircleFill size={50} className="bg-var(--primary-background) text-[#758ecd] rounded-full shadow" />
                        </div>
                    </div>

                    <div className="relative flex w-240 min-h-[150px]">
                        <div className="flex-1 pl-36 pr-16 pt-8 pb-8 border-r-4 border-b-4 [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-2xl">September 2021 - December 2024</h2>
                            <p className="text-md">
                                Sales Associate
                            </p>
                            <ul className="list-disc pl-5">
                                <li>Assisted new and existing Scouting families in purchasing Scouting essentials.</li>
                                <li>Overhauled the storage of inventory overstock, keeping efficiency high and reducing retrieval times.</li>
                                <li>Maintained a clean and organized sales floor, ensuring a positive shopping experience.</li>
                                <li>Supported office staff in daily operations and customer service tasks.</li>
                            </ul>
                        </div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[47%] z-10">
                            <Bs3CircleFill size={50} className="text-[#A02C3D] bg-var(--primary-background) rounded-full shadow" />
                        </div>
                    </div>

                    <div className="relative flex w-240 min-h-[150px]">
                        <div className="flex-1 pl-36 pr-16 pt-8 pb-8 border-l-4 border-b-4 [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-2xl">August 2024 - May 2025</h2>
                            <p className="text-md">
                                Worked part-time during school as an Instructional Assistant for ITSC 1212 (Intro to Computer Science),
                                teaching computing fundamentals and basic Python programming to freshmen and transfer students.
                            </p>
                            <ul className="list-disc pl-5">
                                <li>Collaborated with a team of Instructional Assistants in conducting labs.</li>
                                <li>Held office hours, graded assignments, and provided feedback to students weekly.</li>
                                <li>Attended weekly team meetings to reflect and improve instructional strategies.</li>
                                <li>Assisted in the development of lab materials and resources.</li>
                            </ul>
                        </div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[47%] z-10">
                            <Bs4CircleFill size={50} className="bg-var(--primary-background) text-[#758ecd] rounded-full shadow" />
                        </div>
                    </div>

                    <div className="relative flex w-240 min-h-[150px]">
                        <div className="flex-1 pl-36 pr-16 pt-8 pb-8 border-r-4 [border-image:linear-gradient(to_right,#758ecd,#A02C3D)_1]">
                            <h2 className="text-2xl">August 2025 - Present</h2>
                            <p className="text-md">
                                Promoted to Lab Instructor (Lead Instructional Assistant), instructing a lab section of 60+ students and
                                mentoring 3 Instructional Assistants.
                            </p>
                            <ul className="list-disc pl-5">
                                <li>Instructor for a course with 600 students teaching computing fundamentals and Python basics.</li>
                                <li>Administer two lab sections with a combined 120+ students with an average student grade of ~95%.</li>
                                <li>Lead weekly meetings to mentor, check in with, and get feedback from Instructional Assistants.</li>
                                <li>Moderate weekly grades and office hours to support students in a one-on-one meeting.</li>
                            </ul>
                        </div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[47%] z-10">
                            <Bs5CircleFill size={50} className="text-[#A02C3D] bg-var(--primary-background) rounded-full shadow" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 