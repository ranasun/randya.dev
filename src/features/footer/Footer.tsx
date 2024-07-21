import Icon from '@common/Icon';

interface Props {
	darkMode: boolean;
}

const Footer: React.FC<Props> = ({ darkMode }) => {
	return (
		<footer className="pt-20">
			<div className="flex justify-center flex-col-reverse md:flex-row md:justify-between items-center gap-4">
				<span className="text-xs font-light text-center text-gray-400">This site was built from scratch using React, Taildwindcss, and Iconoir.</span>
				<span className="flex gap-8 md:gap-4">
					<Icon url="https://github.com/ranasun" target="__blank">
						<svg
							width="24px"
							height="24px"
							strokeWidth="1.45"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							color={darkMode ? '#000000' : '#ffffff'}
						>
							<path
								d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3"
								stroke={darkMode ? '#000000' : '#ffffff'}
								strokeWidth="1.45"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
					</Icon>
					<Icon url="https://codepen.io/randyadev" target="__blank">
						<svg
							width="24px"
							height="24px"
							strokeWidth="1.45"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							color={darkMode ? '#000000' : '#ffffff'}
						>
							<path
								d="M21 9v6M3 15V9M12 21v-6M12 3v6M12 15L3 9l9-6 9 6-9 6z"
								stroke={darkMode ? '#000000' : '#ffffff'}
								strokeWidth="1.45"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M12 21l-9-6 9-6 9 6-9 6z"
								stroke={darkMode ? '#000000' : '#ffffff'}
								strokeWidth="1.45"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
					</Icon>
					<Icon url="https://www.linkedin.com/in/randyasuncion/" target="__blank">
						<svg
							width="24px"
							height="24px"
							strokeWidth="1.45"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							color={darkMode ? '#000000' : '#ffffff'}
						>
							<path
								d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7"
								stroke={darkMode ? '#000000' : '#ffffff'}
								strokeWidth="1.45"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011"
								stroke={darkMode ? '#000000' : '#ffffff'}
								strokeWidth="1.45"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
					</Icon>
					<Icon url="https://www.instagram.com/randya.dev/" target="__blank">
						<svg
							width="24px"
							height="24px"
							strokeWidth="1.45"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							color={darkMode ? '#000000' : '#ffffff'}
						>
							<path
								d="M12 16a4 4 0 100-8 4 4 0 000 8z"
								stroke={darkMode ? '#000000' : '#ffffff'}
								strokeWidth="1.45"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
							<path
								d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z"
								stroke={darkMode ? '#000000' : '#ffffff'}
								strokeWidth="1.45"
							></path>
							<path
								d="M17.5 6.51l.01-.011"
								stroke={darkMode ? '#000000' : '#ffffff'}
								strokeWidth="1.45"
								strokeLinecap="round"
								strokeLinejoin="round"
							></path>
						</svg>
					</Icon>
				</span>
			</div>
		</footer>
	);
};

export default Footer;
