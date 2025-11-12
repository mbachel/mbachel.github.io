import Link from "next/link";
import { FaHome } from "react-icons/fa";

export default function Custom404() {
  return (
      <div className="flex flex-col items-center h-screen">
        <h1 className="pt-20 text-4xl font-bold">
          404 - Page Not Found
        </h1>
        <p className="pt-10 pb-20 text-2xl">
          The page you are looking for does not exist. <br />
          Please check the URL or return to the homepage:
        </p>
        <Link
          href="/"
          className="flex items-center justify-center text-2xl w-70 h-20 bg-(--primary-accent) rounded-lg hover:bg-(--secondary-accent) transition"
        >
           Home <FaHome className="ml-2" />
        </Link>
      </div>
  );
}