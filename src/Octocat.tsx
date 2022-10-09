interface Props {
	content: string;
}

const Octocat: React.FC<Props> = ({ content }) => {
	return (
		<div className="text-xs shadow-md">
			<div className=" bg-slate-700 rounded-t-lg p-2 flex gap-2 items-center">
				<div className="flex gap-2 w-1/3">
					<div className="h-3 w-3 bg-red-400 rounded-full"></div>
					<div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
					<div className="h-3 w-3 bg-green-400 rounded-full"></div>
				</div>
				<div className="text-gray-400 text-center font-semibold mono w-1/3">
					https://api.github.com/octocat
				</div>
				<div className="w-1/3"></div>
			</div>
			<div className="rounded-b-lg  bg-black text-white pb-5 leading-none">
				<pre>
					<code dangerouslySetInnerHTML={{ __html: content }}></code>
				</pre>
			</div>
		</div>
	);
};

export default Octocat;
