import { useState } from 'react';
import Page from './Page';
import Initial from './Initial';
import Mode from './Mode';
import Button from './Button';
import Tag from './Tag';
import Anchor from './Anchor';
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
				{/* INTRO */}
				<section className="py-[120px]">
					<div>
						<h1 className="text-4xl leading-[48px]">
							Hello! 👋 I'm <strong>Randy.</strong>
							<br />I build modern web applications.
						</h1>
					</div>
				</section>

				{/* ABOUT */}
				<section className="py-10">
					<h2 className="text-3xl">About</h2>
					<div className="flex justify-between items-center mt-4">
						<div className="w-2/3">
							<p className="text-grey-darkest text-lg leading-normal mt-1">
								Hi, my name is Randy. I'm a software engineer
								specializing in web development. I'm based in
								Los Angeles, CA and currently work as a full
								stack developer for Water Source Solutions.
							</p>
						</div>
						<div className="h-[120px] w-[120px] bg-gray-200 rounded-full"></div>
					</div>
					<Anchor url="">Download Resume &darr;</Anchor>
				</section>

				{/* PROJECTS */}
				<section className="py-10">
					<h2 className="text-3xl">Projects</h2>
					<p className="w-2/3 mt-4 text-grey-darkest text-lg leading-normal">
						Here are some of the projects I've built recently.
					</p>
					<Card>
						<CardTitle>
							<Initial>jn</Initial>
							<h3 className="ml-4 text-lg font-bold">
								JS Notebook
							</h3>
						</CardTitle>
						<CardText>
							A jupyter notebook clone for javascript.
						</CardText>
						<CardFooter>
							<div className="">
								<Anchor url="">View website &rarr;</Anchor>
							</div>
							<div className="flex gap-1">
								<Tag>React</Tag>
								<Tag>Typescript</Tag>
							</div>
						</CardFooter>
					</Card>
					<Card>
						<CardTitle>
							<Initial>hy</Initial>
							<h3 className="ml-4 text-lg font-bold">Heartly</h3>
						</CardTitle>
						<CardText>
							A web application that calculates a person's risk
							factor for heart disease using machine learning.
						</CardText>
						<CardFooter>
							<div className="">
								<Anchor url="">View website &rarr;</Anchor>
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
							<h3 className="ml-4 text-lg font-bold">
								Invoice Generator
							</h3>
						</CardTitle>
						<CardText>A simple invoice generator.</CardText>
						<CardFooter>
							<div className="">
								<Anchor url="">View website &rarr;</Anchor>
							</div>
							<div className="flex gap-1">
								<Tag>React</Tag>
								<Tag>Typescript</Tag>
							</div>
						</CardFooter>
					</Card>
				</section>

				{/* CONTACT */}
				<section className=" py-40">
					<h1 className="text-3xl text-center">
						You've reach the end. Don't forget to <u>say hello</u>!
					</h1>
				</section>

				{/* FOOTER */}
				<footer>
					<div className="flex justify-between items-center">
						<span className="text-xs">
							This site was built from scratch using <u>React</u>,{' '}
							<u>TaildwindCSS</u> & <u>Iconoir</u>.
						</span>
						<span className="flex gap-2">
							<Initial>
								<svg
									width="24px"
									height="24px"
									stroke-width="1.45"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									color={dark ? '#000000' : '#ffffff'}
								>
									<path
										d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3"
										stroke={dark ? '#000000' : '#ffffff'}
										stroke-width="1.45"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
								</svg>
							</Initial>
							<Initial>
								<svg
									width="24px"
									height="24px"
									stroke-width="1.45"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									color={dark ? '#000000' : '#ffffff'}
								>
									<path
										d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7"
										stroke={dark ? '#000000' : '#ffffff'}
										stroke-width="1.45"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
									<path
										d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011"
										stroke={dark ? '#000000' : '#ffffff'}
										stroke-width="1.45"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
								</svg>
							</Initial>
							<Initial>
								<svg
									width="24px"
									height="24px"
									stroke-width="1.45"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									color={dark ? '#000000' : '#ffffff'}
								>
									<path
										d="M21 9v6M3 15V9M12 21v-6M12 3v6M12 15L3 9l9-6 9 6-9 6z"
										stroke={dark ? '#000000' : '#ffffff'}
										stroke-width="1.45"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
									<path
										d="M12 21l-9-6 9-6 9 6-9 6z"
										stroke={dark ? '#000000' : '#ffffff'}
										stroke-width="1.45"
										stroke-linecap="round"
										stroke-linejoin="round"
									></path>
								</svg>
							</Initial>
						</span>
					</div>
				</footer>
			</main>
		</Page>
	);
}

export default App;
