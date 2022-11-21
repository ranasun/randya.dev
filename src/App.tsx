import { useState } from 'react';
import Page from '@common/Page';
import Footer from '@features/footer/Footer';
import Nav from '@features/nav/Nav';
import Intro from '@features/intro/Intro';
import About from '@features/about/About';
import Projects from '@features/projects/Projects';
import Contact from '@features/contact/Contact';

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
