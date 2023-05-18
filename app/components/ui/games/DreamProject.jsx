import React from "react";
import Markdown from "../common/Markdown";

export const DreamProject = () => {
	return (
		<>
			<div className="bg-center p-6 md:p-20 lg:p-40  bg-cover h-min w-full  bg-[url('/assets/games/android-game-development-services/DreamProject.png')]">
				<div className="flex flex-col items-center justify-center text-center text-white">
					<h3 className="font-mono text-xl font-bold lg:text-3xl">
						<Markdown text="Kickstart Your Dream Project With Us" />
					</h3>
					<p className="text-base font-normal font-inter my-7">
						<Markdown text="We have worked with some of the best innovative ideas and brands in the" />
					</p>
					<button className="transition-colors duration-500 ease-in-out btn-primary">
						<Markdown text="Initiate a Partnership" />
					</button>
				</div>
			</div>
		</>
	);
};
