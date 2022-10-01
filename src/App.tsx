import { useState } from 'react';
import Page from './Page';
import Initial from './Initial';
import Mode from './Mode';
import Button from './Button';
import Tag from './Tag';
import { Card, CardFooter, CardText, CardTitle } from './Card';

function App() {
	const [dark, setDark] = useState(false);

	return (
		<Page darkMode={dark}>
			<nav className="flex justify-between items-center py-2">
				<Initial>RA</Initial>
				<div className="cursor-pointer" onClick={() => setDark(!dark)}>
					<Mode dark={dark} />
				</div>
			</nav>
			<main>
				<section className="flex items-center h-screen -mt-[56px]">
					<div>
						<h1 className="text-[40px] leading-[48px]">
							Hello! I'm <strong>Randy.</strong>
							<br />I build modern web applications.
						</h1>
						<div className="w-[40%] border-t border-t-black dark:border-t-white mt-4"></div>
						<p className="mt-4 text-lg">
							I’m a Software Engineer based in Los Angeles, CA.
						</p>
						<div className="mt-8">
							<Button>Say Hello!</Button>
						</div>
					</div>
				</section>
				<section className="">
					<h1 className="text-[40px]">Projects</h1>
					<p className="mt-4 text-lg">
						Here are some of my most recent personal projects.
					</p>
					<div className="mt-4">
						<Card>
							<CardTitle>
								<Initial>hy</Initial>
								<h3 className="ml-4">Heartly</h3>
							</CardTitle>
							<CardText>
								A web application that calculates a person's
								risk factor for heart disease using machine
								learning.
							</CardText>
							<CardFooter>
								<div className="flex gap-4">
									<Button>View Project</Button>
									<Button>Github</Button>
								</div>
								<div className="flex gap-1">
									<Tag>Machine Learning</Tag>
									<Tag>Python/Flask</Tag>
									<Tag>Vue.js</Tag>
								</div>
							</CardFooter>
						</Card>
					</div>
					<div className="mt-4 flex flex-row gap-4">
						<Card>
							<CardTitle>
								<Initial>jn</Initial>
								<h3 className="ml-4">Jupiter Notebook</h3>
							</CardTitle>
							<CardText>
								A jupyter notebook clone for javascript.
							</CardText>
							<CardFooter>
								<div className="flex gap-4">
									<Button>View Project</Button>
									<Button>Github</Button>
								</div>
								<div className="flex gap-1">
									<Tag>React</Tag>
									<Tag>Typescript</Tag>
								</div>
							</CardFooter>
						</Card>
						<Card>
							<CardTitle>
								<Initial>ig</Initial>
								<h3 className="ml-4">Invoice Generator</h3>
							</CardTitle>
							<CardText>
								Create invoices and download them as PDF.
							</CardText>
							<CardFooter>
								<div className="flex gap-4">
									<Button>View Project</Button>
									<Button>Github</Button>
								</div>
								<div className="flex gap-1">
									<Tag>Vue.js</Tag>
								</div>
							</CardFooter>
						</Card>
					</div>
				</section>
			</main>
		</Page>
	);
}

export default App;
