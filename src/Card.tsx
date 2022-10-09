import { ReactNode } from 'react';
import Screenshot from './Screenshot';

interface Props {
	children: ReactNode;
}

export const Card: React.FC<Props> = ({ children }) => {
	return (
		<div className="w-full my-4 flex gap-4 items-center flex-col md:flex-row py-4">
			<div className="w-full md:w-2/5 h-full">
				<Screenshot
					imgUrl={
						'https://raw.githubusercontent.com/ranasun/js-notebook/main/screenshot.png'
					}
				/>
			</div>
			<div className="w-full md:w-3/5">{children}</div>
		</div>
	);
};

export const CardTitle: React.FC<Props> = ({ children }) => {
	return <div className="">{children}</div>;
};

export const CardText: React.FC<Props> = ({ children }) => {
	return <div className="text-lg">{children}</div>;
};

export const CardFooter: React.FC<Props> = ({ children }) => {
	return (
		<div className="mt-4 flex gap-2 items-start flex-col-reverse justify-between md:flex-row md:items-end">
			{children}
		</div>
	);
};
