import { useForm, ValidationError } from '@formspree/react';
import { FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mblzpjob");
    if (state.succeeded) {
        return (
            <div className="text-center p-8">
                <FaCheckCircle className="text-green-500 mx-auto mb-4" size={48} />
                <h2 className="text-2xl font-bold mb-2">Thanks for reaching out!</h2>
                <p className="text-lg">
                    I will get back to you as soon as I can.<br />
                    In the meantime, don&apos;t forget to check out my other pages,<br />
                    and feel free to connect with me on <Link 
                            href="https://www.linkedin.com/in/matthewbachelder/" 
                            title="LinkedIn" 
                            rel="noopener noreferrer" 
                            target="_blank"
                            className="underline">
                            LinkedIn
                        </Link>!
                </p>
            </div>
        )
    }
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-evenly gap-4 rounded-lg w-full max-w-md p-4 m-4">
                <div className="flex flex-col w-full justify-between p-2">
                    <label htmlFor="name" className="text-xl">
                        Name<span className="text-lg text-red-700">*</span>
                    </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="w-full rounded-md px-3.5 py-2 outline-1 -outline-offset-1 outline-gray-600 dark:outline-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 caret-indigo-500"
                    />
                    <ValidationError
                        prefix="Name"
                        field="name"
                        errors={state.errors}
                        className="text-red-600 mt-1 text-base"
                    />
                </div>
                <div className="flex flex-col w-full justify-between p-2">
                    <label htmlFor="email" className="text-xl">
                        Email<span className="text-lg text-red-700">*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        placeholder="example@email.com"
                        className="w-full rounded-md px-3.5 py-2 outline-1 -outline-offset-1 outline-gray-600 dark:outline-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 caret-indigo-500"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                        className="text-red-600 mt-1 text-base"
                    />
                </div>
                <div className="flex flex-col p-2 w-full h-48">
                    <label htmlFor="message" className="text-xl">
                        Message<span className="text-lg text-red-700">*</span>
                    </label>
                    <textarea
                        required
                        id="message"
                        name="message"
                        placeholder="Your message here..."
                        className="w-full h-full rounded-md px-3.5 py-2 outline-1 -outline-offset-1 outline-gray-600 dark:outline-gray-800 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 caret-indigo-500"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                        className="text-red-600 mt-1 text-base"
                    />
                </div>
                <button 
                    type="submit"
                    className="w-full bg-(--tertiary-accent) text-xl py-2 rounded-md hover:bg-(--secondary-accent) hover:cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
                    disabled={state.submitting}
                >
                    Send message
                </button>
            </form>
        </div>
    )
}