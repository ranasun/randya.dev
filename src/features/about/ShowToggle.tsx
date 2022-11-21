interface Props {
	state: boolean;
	onClick(): void;
}

const ShowToggle: React.FC<Props> = ({ state, onClick }) => {
	return (
		<span
			className=" text-gray-400 cursor-pointer hover:underline text-sm font-thin uppercase mt-8 inline-block"
			onClick={onClick}
		>
			{state ? <>&uarr; Show Less</> : <>&darr; Show More</>}
		</span>
	);
};

export default ShowToggle;
