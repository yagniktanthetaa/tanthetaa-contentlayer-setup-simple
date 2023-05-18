/* eslint-disable @next/next/no-img-element */
import React from "react";
import Markdown from "./Markdown";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const Blogs = ({ content, path }) => {
  return (
    <>
      <div className="flex justify-center w-full my-10">
        <div className="container grid gap-4 mx-auto lg:gap-8 md:grid-cols-2 lg:grid-cols-3 place-items-center">
          {content?.map((item) => (
            <Link
              href={item?.link}
              key={item?.id}
              className="hover:scale-105 transition delay-150 duration-300 ease-in-out"
            >
              <img
                className="w-full"
                src={`${`/assets/${path}/${item?.image}`}.png`}
                alt={item?.alt}
              />
              <h4 className="my-5 font-mono text-lg font-bold">
                <Markdown text={item?.title} />
              </h4>
              <p className="font-inter text-base font-normal text-[#59587B]">
                <Markdown text={item?.description} />
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
