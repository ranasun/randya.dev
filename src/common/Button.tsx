import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const Button: React.FC<Props> = ({ children }) => {
	return (
		<button className=" text-white bg-black dark:bg-white dark:text-black px-5 py-2 rounded">
			{children}
		</button>
	);
};

export default Button;
