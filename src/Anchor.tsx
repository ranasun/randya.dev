import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	url: string;
}

const Anchor: React.FC<Props> = ({ children, url }) => {
	return (
		<div className="mt-2">
			<a href={url} className=" hover:underline">
				{children} →
			</a>
		</div>
	);
};

export default Anchor;
