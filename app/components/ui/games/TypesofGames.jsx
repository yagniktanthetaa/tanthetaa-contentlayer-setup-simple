import React from "react";
import Markdown from "../common/Markdown";

export const TypesofGames = ({ content, path }) => {
	return (
		<>
			<div className="justify-center hidden w-full mt-20 sm:flex">
				<div
					className="rounded-[46px] py-16 px-8 lg:px-40"
					style={{
						background: `url(${`/assets/${path}/${content.bgImage}.png`} ) no-repeat center center `,
						backgroundSize: "cover",
					}}
				>
					<div className="grid gap-8 xl:grid-cols-2 place-content-center ">
						{content?.services?.map((item) => (
							<div className="w-full lg:max-w-lg" key={item?.id}>
								<h4 className="font-mono text-lg font-bold text-white lg:text-3xl">
									<span className="text-[#FFCF10]">#</span>
									<Markdown text={item?.title} />
								</h4>
								<p className="mt-5 text-sm font-normal text-white font-inter lg:text-lg">
									<Markdown text={item?.description} />
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
