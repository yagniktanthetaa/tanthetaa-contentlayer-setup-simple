import React from "react";
import Markdown from "../common/Markdown";

export const OurDevelopment = ({ content }) => {
	return (
		<>
			<div className="container mx-auto  mt-16 md:mt-[140px] px-4 md:px-24 lg:px-24 xl:px-0">
				<div className="w-full text-center">
					<h2 className={`text-2xl lg:text-5xl leading-snug font-bold font-mono text-[#410EAD]`}>
						{content?.title && content?.title} <br />
						<span className={`text-black font-mono`}>{content?.subtitle && content?.subtitle}</span>
					</h2>

					{content?.description && (
						<p className="font-inter mt-8 text-[#333333] max-w-5xl mx-auto font-normal text-lg leading-6 w-full">
							<Markdown text={content?.description} />
						</p>
					)}
				</div>
			</div>
		</>
	);
};
