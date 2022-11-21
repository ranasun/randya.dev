import { SunLight, HalfMoon } from 'iconoir-react';

interface Props {
	darkMode: boolean;
}

const Mode: React.FC<Props> = ({ darkMode }) => {
	return darkMode ? <SunLight /> : <HalfMoon />;
};

export default Mode;
