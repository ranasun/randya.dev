import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}
const Tag: React.FC<Props> = ({ children }) => {
	return (
		<span className="bg-gray-300 dark:bg-gray-700 dark:text-gray-300 py-1 px-4 inline-block rounded-full text-xs">
			{children}
		</span>
	);
};

export default Tag;
