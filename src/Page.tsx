import { ReactNode } from 'react';

interface Props {
	darkMode: boolean;
	children: ReactNode;
}

const Page: React.FC<Props> = ({ children, darkMode }) => {
	return (
		<div className={`${darkMode && 'dark'} h-full`}>
			<div className="max-w-screen-lg mx-auto p-4 dark:text-white pb-28">
				{children}
			</div>
			<div className="fixed left-0 right-0 top-0 bottom-0 bg-white dark:bg-black -z-10"></div>
		</div>
	);
};

export default Page;
