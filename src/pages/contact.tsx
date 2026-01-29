import Head from "next/head";
import ContactForm from "@/components/ContactForm";
import Resume from "@/components/Resume";

export default function contact() {
    return (
        <>
            <Head>
                <title>My Contact</title>
                <meta name="description" content="Get in touch with me." />
            </Head>
            <h1 className="flex items-center justify-center text-5xl pt-20" id="contact">Contact</h1>
            <Resume />
            <section id="info" className="mx-auto">
                <div>
                    <h2 className="text-3xl text-center pb-10">Let&apos;s Connect!</h2>
                    <p className="text-xl text-center mx-4 md:mx-40">
                        I&apos;m always excited to connect with new people, whether it&apos;s for
                        potential job opportunities, collaborations, or just to chat about tech
                        and innovation. Feel free to reach out through the contact form below
                        or connect with me on LinkedIn. I look forward to hearing from you!
                    </p>
                    <p className="text-xl text-center mx-4 md:mx-40 pt-5">
                        If you want to send me an email directly, you can reach me at:<br />
                        <a href="mailto:matthew@bachelder.me" className="text-blue-500 underline ml-1">
                            matthew@bachelder.me
                        </a>
                    </p>
                </div>
            </section>
            <section id="form">
                <ContactForm />
            </section>
        </>
    );
}   