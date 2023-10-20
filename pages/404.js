import Link from "next/link";
import Image from "next/image";
import { NotFoundImage } from "@/public";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image src={NotFoundImage} alt="404 Not Found" width={300} height={300} />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mt-8">
        Oops! It's a 404!
      </h1>
      <p className="text-lg md:text-xl lg:text-2xl text-center mt-4">
        Looks like you've ventured into uncharted territory.
      </p>
      <Link href="/" className="button mt-8">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
