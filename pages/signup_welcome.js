import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

import signThanks from "../public/signup-thanks.png";

function Welcome() {
  const { data: session, status } = useSession();

  if (status === "loading") return <div>Loading...</div>;
  if (status === "unauthenticated")
    return (
      <div>
        Sorry you are not logged in <Link href="/login">Login</Link>
      </div>
    );

  return (
    <div className="min-h-screen py-10 px-3 bg-[url('/clipped-rings.svg')] bg-no-repeat bg-right">
      <div className="flex flex-col items-center gap-7 py-5">
        <div>
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <h1 className="text-xl font-bold">*D O M*</h1>
          </Link>
        </div>

        <div className="form-container bg-white border w-full border-zinc-300 rounded-md px-4 py-6 max-w-lg min-w-[290px]">
          <h2 className="text-2xl font-semibold mb-1 text-center">
            Thanks for signing up
          </h2>
          <hr />

          <div className="bg my-3">
            <Image
              src={signThanks}
              alt="flincap's logo"
              className="mx-auto my-6"
              width={150}
              priority
            />
          </div>

          <p className="text-center text-zinc-400 text-lg">
            We sent a verification email to {session.user?.email} <br /> Click
            the link inside to get started!
          </p>
          <Link
            href="/"
            className="mx-auto w-fit block px-4 py-1 mt-5 bg-blue text-white rounded"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
