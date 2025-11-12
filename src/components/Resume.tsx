import { FaFileDownload } from 'react-icons/fa';

export default function Resume() {
    return (    
    <section id="resume" className="flex items-center justify-center pt-20 pb-20 pointer-events-none">
        <a  href="/Matthew Bachelder.pdf"
            download
            className="flex items-center justify-center text-2xl w-70 h-20 rounded-lg pointer-events-auto transition" 
            id="download-resume">
                Download Resume <FaFileDownload className="ml-3"/>
        </a>
    </section>
    );
}