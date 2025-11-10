import Head from "next/head";
import ContactForm from "@/components/ContactForm";
import { FaFileDownload } from "react-icons/fa";

export default function contact() {
    return (
        <>
            <Head>
                <title>My Contact</title>
                <meta name="description" content="Get in touch with me." />
            </Head>
            <h1 className="flex items-center justify-center text-5xl pt-20" id="contact">Contact</h1>
            <section id="resume" className="pb-20 pt-10">
                <a  href="/Matthew Bachelder.pdf"
                    download
                    className="flex items-center justify-center">
                        <p className="flex items-center justify-center text-2xl w-70 h-20 rounded-lg" 
                        id="download-resume">
                            Download Resume <FaFileDownload className="ml-3"/>
                        </p>
                </a>
            </section>
            <section id="info">
                <div>
                    <h2 className="text-3xl text-center pb-10">Let&apos;s Connect!</h2>
                    <p className="text-xl text-center max-w-160 mx-auto">
                        I&apos;m always excited to connect with new people, whether it&apos;s for
                        potential job opportunities, collaborations, or just to chat about tech
                        and innovation. Feel free to reach out through the contact form below
                        or connect with me on LinkedIn. I look forward to hearing from you!
                    </p>
                    <p className="text-xl text-center max-w-160 mx-auto pt-5">
                        If you want to send me an email directly, you can reach me at:<br />
                        <a href="mailto:matthew.c.bachelder@gmail.com" className="text-blue-500 underline ml-1">
                            matthew.c.bachelder@gmail.com
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