import { blogs } from "@/lib/data";
import React from "react";

export default function BlogListLoading() {
	return (
		<>
			{blogs?.map((blog, index) => {
				return (
					<div
						className="w-full  border rounded-md dark:bg-graident-dark p-5 hover:ring-2 ring-green-500 transition-all cursor-pointer space-y-5 first:lg:col-span-2 first:md:col-span-3"
						key={index}
					>
						<div className="w-full h-72 sm:w-full  md:h-64 xl:h-96  relative"></div>
						<div className="space-y-2">
							<p className="text-sm dark:text-gray-400 h-5 bg-gray-500"></p>
							<p className="text-sm dark:text-gray-400 h-10 bg-gray-500"></p>
						</div>
					</div>
				);
			})}
		</>
	);
}
