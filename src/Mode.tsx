import { SunLight, HalfMoon } from 'iconoir-react';

interface Props {
	dark: boolean;
}

const Mode: React.FC<Props> = ({ dark }) => {
	return dark ? <SunLight /> : <HalfMoon />;
};

export default Mode;
