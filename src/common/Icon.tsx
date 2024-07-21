import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	url?: string;
	target?: string;
}

const Icon: React.FC<Props> = ({ children, url, target = '' }) => {
	return (
		<a href={url} target={target}>
			<div className="w-10 h-10 rounded-full bg-black text-white dark:text-black dark:bg-white flex items-center justify-center text-xl">{children}</div>
		</a>
	);
};

export default Icon;
