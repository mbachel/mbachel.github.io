import Projects from "@/components/Projects";
import Head from "next/head";

export default function projects() {
    return (
        <>
            <Head>
                <title>My Projects</title>
                <meta name="description" content="Explore my projects and works." />
            </Head>
            <section className="max-w-5xl mx-auto px-6">
                <h1 className="flex items-center justify-center text-5xl pt-20">Projects</h1>
                <div>
                    <p className="flex items-center justify-center text-lg pt-6 max-w-2xl mx-auto text-center">
                        During my time in Computer Science, I&apos;ve had the opportunity to work on a large
                        variety of projects, both independently and collaboratively. Below is a selection of
                        some of the most notable projects I&apos;ve worked on, showcasing my skills and
                        interests in different areas of technology. Each project includes a brief description,
                        GitHub link, tech stack, and possibly external links if applicable.
                    </p>
                </div>
                <Projects />
                {/* <div id="wip" className="flex items-center justify-center flex-col text-2xl pt-10 pb-30 max-w-lg mx-auto">
                    <p className="text-center">This page is a work in progress. <br />Please check back later for updates!</p>
                    <br />
                    <p className="text-center">In the meantime, please explore the other pages, or check out my GitHub!</p>
                </div> */}
            </section>
        </>
    );
} 