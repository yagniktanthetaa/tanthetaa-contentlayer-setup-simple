import React from "react";
import Markdown from "./Markdown";
import Button from "./Button/page";
import Link from "next/link";

export const dynamic = "force-dynamic";

const ProjectsPartnership = () => {
  return (
    <>
      <div className="bg-center p-6 md:p-20 lg:p-40 bg-cover h-min w-full bg-[url('/assets/games/android-game-development-services/DreamProject.png')] border-b-[6px] border-[#410ead]">
        <div className="flex flex-col items-center justify-center text-center text-white">
          <h3 className="font-mono text-xl font-bold lg:text-3xl">
            <Markdown text="Kickstart Your Dream Project With Us" />
          </h3>
          <p className="text-base font-normal font-inter my-7">
            <Markdown text="We have worked with some of the best innovative ideas and brands in the" />
          </p>

          <Button className="btn-primary">
            <Link href="contact-us-to-develop-software-for-your-business">
              <Markdown text="Initiate a Partnership" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default ProjectsPartnership;
