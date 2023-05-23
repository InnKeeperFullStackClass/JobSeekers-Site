import DefaultLayout from "@/layout/DefaultLayout";
import React from "react";
import Image from "next/image";
import HomeHero from "../public/mentoringpic1.jpg";

export default function Home() {
  return (
    <DefaultLayout>
      <div>
        <div className="relative">
          <Image src={HomeHero} alt="homehero" className="max-w-full" />
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <p className="text-3xl font-bold text-white">
              Damilola Obidairo Mentoring Platform
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
