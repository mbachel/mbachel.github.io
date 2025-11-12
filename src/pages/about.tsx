import Head from "next/head";

export default function About() {
    return (
        <>
            <Head>
                <title>My History</title>
                <meta name="description" content="Get to know Matthew beyond the resume - my journey into tech, leadership background, and what I do outside of work." />
            </Head>
            <section className="text-center max-w-4xl mx-auto px-6">
                <h1 className="flex items-center justify-center text-5xl pt-20" id="about">About</h1>

                <div id="path" className="relative pt-8 pb-8 px-8 mb-12 text-left">
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-(--primary-accent)"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-(--primary-accent)"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-(--primary-accent)"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-(--primary-accent)"></div>
                    
                    <div className="flex items-baseline gap-4 mb-6">
                        <span className="text-5xl font-bold text-(--primary-accent)">01</span>
                        <h2 className="text-3xl">My Path to Tech</h2>
                    </div>
                    <p className="text-lg leading-relaxed mb-4">
                        I started at CPCC and earned my Associate in Arts in May 2022. After that, I worked a few
                        different jobs that I couldn&apos;t find passion for. After a bit of exploring, I realized that I often spend
                        my time on and around computers, and that I always had drive to learn more about the field of
                        Computer Science. I applied to UNC Charlotte in fall of 2023, and was accepted to study CS with
                        a concentration in Information Technology. So far, it&apos;s been a good fit; I&apos;ve made great connections
                        with peers and professors, and I&apos;m excited to see where this journey takes me.
                    </p>
                </div>

                <div id="service" className="relative pt-8 pb-8 px-8 mb-12 text-left">
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-(--primary-accent)"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-(--primary-accent)"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-(--primary-accent)"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-(--primary-accent)"></div>

                    <div className="flex items-baseline gap-4 mb-6">
                        <span className="text-5xl font-bold text-(--secondary-accent)">02</span>
                        <h2 className="text-3xl">Service and Leadership</h2>
                    </div>
                    <p className="text-lg leading-relaxed mb-4">
                        I&apos;ve been involved in Scouting since I was 6 years old, and it&apos;s been one of the most formative
                        parts of my life. The service that I have provided throughout this journey has been incredibly
                        rewarding, especially since becoming an adult. The life-changing experiences of attending Sea
                        Base in Florida in 2018, Northern Tier in Atikokan in 2019, and the National Jamboree in 2023
                        have all shaped my perspective and commitment to Scouting. The leadership experiences have
                        also been plentiful and impactful.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        In May 2024, I organized a weekend event that brought together over 75 participants. It was a
                        massive undertaking that involved coordinating logistics, managing staff, and making sure
                        everything ran smoothly. That weekend, I earned the Venturing Leadership Award, which
                        recognized the work I&apos;d put into planning and executing the event. Since then, I&apos;ve continued
                        developing my leadership skills, including attending Wood Badge training in Spring 2025.
                    </p>
                    <p className="text-lg leading-relaxed">
                        I&apos;ve also had the chance to direct National Youth Leadership Training (NYLT) courses, leading a
                        staff of 20 to deliver leadership development programs. These experiences taught me how to
                        manage teams, adapt to challenges on the fly, and mentor others - skills that translate directly
                        into how I approach collaborative technical work.
                    </p>
                </div>

                <div id="accomplishments" className="relative pt-8 pb-8 px-8 mb-12 text-left">
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-(--primary-accent)"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-(--primary-accent)"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-(--primary-accent)"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-(--primary-accent)"></div>

                    <div className="flex items-baseline gap-4 mb-6">
                        <span className="text-5xl font-bold text-(--tertiary-accent)">03</span>
                        <h2 className="text-3xl">Accomplishments</h2>
                    </div>
                    <p className="text-lg leading-relaxed mb-4">
                        At UNC Charlotte, I was honored to be accepted into the Early Entry Graduate Program and
                        recognized on the Chancellor&apos;s List for 2024-25. These reflect the work I&apos;ve put into maintaining
                        strong academic performance while balancing instructing and Scouting commitments.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Before graduating high school, I earned the rank of Eagle Scout in March of 2020, which was an
                        achievement I had been dreaming about since the age of 5. I&apos;ve also earned the Vigil Honor,
                        which is the highest recognition in Scouting&apos;s Honor Society, the Order of the Arrow.
                    </p>
                </div>

                <div id="off" className="relative pt-8 pb-8 px-8 text-left">
                    <div className="absolute top-0 left-0 w-8 h-8 border-l-4 border-t-4 border-(--primary-accent)"></div>
                    <div className="absolute top-0 right-0 w-8 h-8 border-r-4 border-t-4 border-(--primary-accent)"></div>
                    <div className="absolute bottom-0 left-0 w-8 h-8 border-l-4 border-b-4 border-(--primary-accent)"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-r-4 border-b-4 border-(--primary-accent)"></div>
                    
                    <div className="flex items-baseline gap-4 mb-6">
                        <span className="text-5xl font-bold text-(--primary-accent)">04</span>
                        <h2 className="text-3xl">Off the Clock</h2>
                    </div>
                    <p className="text-lg leading-relaxed mb-4">
                        When I&apos;m not working or studying, I spend a lot of time with friends. We go fishing, travel when
                        we can, and generally just hang out. It&apos;s a good way to unwind and stay grounded.
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                        I&apos;m a big Formula 1 fan. Charles Leclerc is my favorite driver, but what really draws me to the
                        sport is the engineering. These cars are incredible feats of technology, and watching teams push
                        the limits of what&apos;s possible is fascinating. I appreciate Ferrari&apos;s history and legacy in the sport,
                        but I tend to follow drivers more than teams. I was lucky enough to attend the 2025 Austin
                        Grand Prix in person, which was an unforgettable experience.
                    </p>
                    <p className="text-lg leading-relaxed">
                        Space has always captivated me. I&apos;ve dreamed of going to space since I was a kid, and the idea
                        still hasn&apos;t lost its appeal. I&apos;ve been fortunate enough to see a SpaceX launch in person and visit
                        both the Johnson Space Center in Texas and the Kennedy Space Center in Florida. There&apos;s
                        something about the scale and ambition of space exploration that never gets old.
                    </p>
                </div>
            </section>
        </>
    );
}
