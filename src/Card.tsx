import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export const Card: React.FC<Props> = ({ children }) => {
	return (
		<div className="p-4 bg-gray-100 dark:bg-gray-800 w-full">
			{children}
		</div>
	);
};

export const CardTitle: React.FC<Props> = ({ children }) => {
	return <div className="flex items-center ">{children}</div>;
};

export const CardText: React.FC<Props> = ({ children }) => {
	return <p className="mt-5 w-96 text-lg">{children}</p>;
};

export const CardFooter: React.FC<Props> = ({ children }) => {
	return (
		<div className="mt-8 flex items-end justify-between">{children}</div>
	);
};
