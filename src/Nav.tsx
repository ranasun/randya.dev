import Icon from './Icon';
import Mode from './Mode';

interface Props {
	darkMode: boolean;
	onClick(): void;
}

const Nav: React.FC<Props> = ({ darkMode, onClick }) => {
	return (
		<nav className="flex justify-between items-center py-2">
			<a href="/">
				<Icon>RA</Icon>
			</a>
			<div className="cursor-pointer" onClick={onClick}>
				<Mode darkMode={darkMode} />
			</div>
		</nav>
	);
};

export default Nav;
