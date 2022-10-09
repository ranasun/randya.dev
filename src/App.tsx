import { useState } from 'react';
import Page from './Page';
import Footer from './Footer';
import Nav from './Nav';
import Heading from './Heading';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function App() {
	const [dark, setDark] = useState(false);

	return (
		<Page darkMode={dark}>
			<Nav darkMode={dark} onClick={() => setDark(!dark)} />
			<Heading />
			<About />
			<Projects />
			<Contact />
			<Footer darkMode={dark} />
		</Page>
	);
}

export default App;
