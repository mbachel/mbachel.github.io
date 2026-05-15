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
                    <p className="flex items-center justify-center text-lg pt-6 max-w-3xl mx-auto text-center">
                        A selection of projects I&apos;ve built independently and collaboratively, spanning
                        cloud infrastructure, full-stack web development, software engineering, and computer engineering.
                        Each entry includes a description, tech stack, an image, and links where available.
                    </p>
                </div>
                <Projects />
            </section>
        </>
    );
} 