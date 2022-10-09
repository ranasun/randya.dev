import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}
const Tag: React.FC<Props> = ({ children }) => {
	return (
		<span className="bg-gray-100 text-gray-400 dark:bg-gray-900 dark:text-gray-500 py-1 px-3 inline-block rounded-full text-xs whitespace-nowrap">
			{children}
		</span>
	);
};

export default Tag;
