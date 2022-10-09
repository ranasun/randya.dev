import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const Icon: React.FC<Props> = ({ children }) => {
	return (
		<div className="w-10 h-10 rounded-full bg-black text-white dark:text-black dark:bg-white flex items-center justify-center text-xl">
			{children}
		</div>
	);
};

export default Icon;
