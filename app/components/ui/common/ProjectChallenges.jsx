import React from "react";
import "./PowerBiServices.css";
import { cx } from "class-variance-authority";
import Markdown from "./Markdown";
export const dynamic = "force-dynamic";

const ProjectChallenges = ({ content }) => {
  return (
    <>
      <section className="container mx-auto mt-10 relative">
        <div className="grid lg:grid-cols-2 gap-4 place-items-center lg:gap-8 power-bi-services">
          {content?.map((item) => (
            <div key={item?.id} className="max-w-xl mx-auto">
              <h3
                className={cx(
                  " font-bold text-xl font-mono leading-7",
                  item?.titleColor
                )}
              >
                {item?.title && <Markdown text={item?.title} />}
              </h3>
              <p className="my-5 text-[#59587B] font-inter text-base leading-4">
                {item?.description && <Markdown text={item?.description} />}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectChallenges;
