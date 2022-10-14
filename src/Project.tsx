import Screenshot from './Screenshot';
import Anchor from './Anchor';
import Tag from './Tag';

interface Props {
	title: string;
	description: string;
	tags: string[];
	url: string;
	imgUrl: string;
}
const Project: React.FC<Props> = ({
	title,
	description,
	tags,
	url,
	imgUrl,
}) => {
	return (
		<div className="w-full my-4 flex gap-4 flex-col md:flex-row-reverse py-4 pb-8 border-b dark:border-gray-700">
			<a
				href={url}
				target="__target"
				className="hidden md:block w-full md:w-2/5 h-full"
			>
				<Screenshot title={title} imgUrl={imgUrl} />
			</a>
			<div className="w-full md:w-3/5">
				<h3 className="text-xl font-bold">{title}</h3>
				<div className="text-lg">
					{description}
					<a className="md:hidden py-2" href={url} target="__target">
						<Screenshot title={title} imgUrl={imgUrl} />
					</a>
					<div className="flex flex-wrap gap-1 mt-4">
						{tags.map((tag) => (
							<Tag key={tag}>{tag}</Tag>
						))}
					</div>
				</div>
				<div className="mt-4">
					<Anchor url={url}>View website &rarr;</Anchor>
				</div>
			</div>
		</div>
	);
};

export default Project;
