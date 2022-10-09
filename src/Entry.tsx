interface Props {
	title: string;
	subtitle: string;
	start?: string;
	end: string;
}

const Entry: React.FC<Props> = ({ title, subtitle, start, end }) => {
	return (
		<div>
			<h4 className="text-lg mt-2">{title}</h4>
			<h5 className="uppercase mono text-sm">
				{subtitle} {start} &mdash; {end}
			</h5>
		</div>
	);
};

export default Entry;
