import Head from "next/head";

export default function projects() {
    return (
        <>
            <Head>
                <title>My Projects</title>
                <meta name="description" content="Explore my projects and works." />
            </Head>
            <section className="max-w-5xl mx-auto px-6">
                <h1 className="flex items-center justify-center text-5xl pt-20" id="projects">Projects</h1>
                <div id="wip" className="flex items-center justify-center flex-col text-2xl pt-10 pb-30 max-w-lg mx-auto">
                    <p className="text-center">This page is a work in progress. <br />Please check back later for updates!</p>
                    <br />
                    <p className="text-center">In the meantime, please explore the other pages, or check out my GitHub!</p>
                </div>
            </section>
        </>
    );
} 