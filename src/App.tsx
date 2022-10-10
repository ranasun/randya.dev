import { useState } from 'react';
import Page from './Page';
import Footer from './Footer';
import Nav from './Nav';
import Intro from './Intro';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
	const [dark, setDark] = useState(false);

	return (
		<Page darkMode={dark}>
			<Nav darkMode={dark} onClick={() => setDark(!dark)} />
			<Intro />
			<About />
			<Projects />
			<Contact />
			<Footer darkMode={dark} />
		</Page>
	);
}

export default App;
