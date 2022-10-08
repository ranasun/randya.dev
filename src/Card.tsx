import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export const Card: React.FC<Props> = ({ children }) => {
	return (
		<div className="w-full my-4 flex gap-4 items-center flex-col md:flex-row py-4">
			<div className="w-full md:w-[200px]">
				<div className="h-[200px] w-full md:w-[200px] bg-gray-200"></div>
			</div>
			<div className="w-full">{children}</div>
		</div>
	);
};

export const CardTitle: React.FC<Props> = ({ children }) => {
	return <div className="flex items-center ">{children}</div>;
};

export const CardText: React.FC<Props> = ({ children }) => {
	return <p className="mt-5 text-lg">{children}</p>;
};

export const CardFooter: React.FC<Props> = ({ children }) => {
	return (
		<div className="mt-8 flex gap-2 items-start flex-col-reverse justify-between md:flex-row md:items-end">
			{children}
		</div>
	);
};
