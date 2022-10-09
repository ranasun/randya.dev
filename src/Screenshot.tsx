interface Props {
	title: string;
	imgUrl: string;
}

const Screenshot: React.FC<Props> = ({ title, imgUrl }) => {
	console.log(imgUrl);
	return (
		<div className="text-xs rounded-lg bg-clip-padding overflow-hidden shadow-md border-gray-200 dark:border-gray-800 border mx-auto md:w-full">
			<div className=" bg-slate-700 p-2 flex text-gray-400 font-bold mono items-center">
				<div className="flex w-1/3 gap-2">
					<div className="h-3 w-3 bg-red-400 rounded-full"></div>
					<div className="h-3 w-3 bg-yellow-400 rounded-full"></div>
					<div className="h-3 w-3 bg-green-400 rounded-full"></div>
				</div>
				<div className="w-1/3 text-center">{title}</div>
			</div>
			<div className="bg-cover h-[250px] md:h-[180px]">
				<img src={imgUrl} alt="" />
			</div>
		</div>
	);
};

export default Screenshot;
