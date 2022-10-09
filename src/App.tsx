import { useEffect, useState } from 'react';
import Page from './Page';
import Initial from './Initial';
import Mode from './Mode';
import Button from './Button';
import Tag from './Tag';
import Anchor from './Anchor';
import { Card, CardFooter, CardText, CardTitle } from './Card';
import ShowToggle from './ShowToggle';
function App() {
	const [dark, setDark] = useState(false);
	const [now, setNow] = useState(0);
	const [showMore, setShowMore] = useState(false);

	const yoe = new Date().getFullYear() - 2013;

	useEffect(() => {
		let secTimer = setInterval(() => {
			const date1 = new Date();
			const date2 = new Date('2013-09-01 00:00:00');
			const seconds = Math.round(
				(date1.getTime() - date2.getTime()) / 1000
			);
			setNow(seconds);
		}, 1000);

		return () => clearInterval(secTimer);
	}, []);

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
						<h1 className="text-4xl md:leading-[48px]">
							Hello! 👋 I'm <strong>Randy.</strong>
							<br />I build modern web applications.
						</h1>
					</div>
				</section>

				{/* ABOUT */}
				<section className="py-10">
					<h2 className="text-3xl">About</h2>
					<div className="text-grey-darkest text-lg leading-normal flex flex-col-reverse gap-4 justify-between items-start mt-4 md:flex-row">
						<div className="w-full md:w-2/3 ">
							<p className=" ">
								I'm a software engineer specializing in web
								development. I'm based in Los Angeles, CA and
								currently work as a full stack developer for
								Water Source Solutions.
							</p>
							<p className="mt-4 ">
								I started as a self-taught developer and have
								been building web applications professionaly for
								more than {yoe} years now or exactly {now}{' '}
								seconds.
							</p>
							<div className={showMore ? 'block' : 'hidden'}>
									<div className="">
										<h3 className="mt-8 text-2xl">
											Experience
										</h3>
										<div>
											<h4 className="text-lg mt-2">
												Full Stack Developer
											</h4>
											<h5 className="uppercase mono text-sm">
												Water Source Solutions{' '}
												<span>
													2013 &mdash; Present
												</span>
											</h5>
										</div>
										<div>
											<h4 className="text-lg mt-2">
												Front End Developer
											</h4>
											<h5 className="uppercase mono text-sm">
												CRS Consulting 2016 &mdash; 2017
											</h5>
										</div>
										<h3 className="mt-8 text-2xl">
											Education
										</h3>
										<div>
											<h4 className="text-lg mt-2">
												BS Computer Science
											</h4>
											<h5 className="uppercase mono text-sm">
												Western Governors University
												2021 &mdash; 2022
											</h5>
										</div>
										<div>
											<h4 className="text-lg mt-2">
												Associates in Computer
												Technology
											</h4>
											<h5 className="uppercase mono text-sm">
												Systems Technology Institute{' '}
												1999 &mdash; 2021
											</h5>
										</div>
										<h3 className="mt-8 text-2xl">
											Certifications
										</h3>
										<div>
											<h4 className="text-lg mt-2">
												ITIL Foundation Certificate in
												IT Service Management
											</h4>
											<h5 className="uppercase mono text-sm">
												AXELOS Global Best Practice
												&mdash; 2022
											</h5>
										</div>
										<div>
											<h4 className="text-lg mt-2">
												CompTIA Project+ Certification
											</h4>
											<h5 className="uppercase mono text-sm">
												CompTIA &mdash; 2022
											</h5>
										</div>
										<div className="mt-8">
											<Anchor url="">
												Download Resume &rarr;
											</Anchor>
										</div>
									</div>
							</div>
							<ShowToggle
								onClick={() => setShowMore(!showMore)}
								state={showMore}
							/>
						</div>
						<div className="h-[80px] w-[80px] md:h-[150px] md:w-[150px] bg-gray-200 rounded-full"></div>
					</div>
				</section>

				{/* PROJECTS */}
				<section className="py-10">
					<h2 className="text-3xl">Projects</h2>
					<p className="w-full md:w-2/3 mt-4 text-grey-darkest text-lg leading-normal">
						Here are some of the projects I've built recently.
					</p>
					<Card>
						<CardTitle>
							<h3 className="text-lg font-bold">JS Notebook</h3>
						</CardTitle>
						<CardText>
							A jupyter notebook clone for javascript.
							<div className="flex flex-wrap gap-1 mt-4">
								<Tag>Typescript</Tag>
								<Tag>React</Tag>
								<Tag>Redux-Toolkit</Tag>
								<Tag>Tailwindcss</Tag>
								<Tag>Cypress</Tag>
							</div>
						</CardText>
						<CardFooter>
							<div className="">
								<Anchor url="">View website &rarr;</Anchor>
							</div>
						</CardFooter>
					</Card>
					<Card>
						<CardTitle>
							<h3 className="text-lg font-bold">Heartly</h3>
						</CardTitle>
						<CardText>
							Calculates a person's risk factor for heart disease.
							<div className="flex flex-wrap gap-1 mt-4">
								<Tag>Vue.js</Tag>
								<Tag>Python</Tag>
								<Tag>Flask</Tag>
								<Tag>Vuetify</Tag>
								<Tag>Machine Learning</Tag>
								<Tag>REST API</Tag>
							</div>
						</CardText>
						<CardFooter>
							<div className="">
								<Anchor url="">View website &rarr;</Anchor>
							</div>
						</CardFooter>
					</Card>
					<Card>
						<CardTitle>
							<h3 className="text-lg font-bold">
								Invoice Generator
							</h3>
						</CardTitle>
						<CardText>
							Create invoices and download them as pdf.
							<div className="flex flex-wrap gap-1 mt-4">
								<Tag>Vue.js</Tag>
								<Tag>Tailwindcss</Tag>
								<Tag>Pdfmake</Tag>
								<Tag>PWA</Tag>
							</div>
						</CardText>
						<CardFooter>
							<div className="">
								<Anchor url="">View website &rarr;</Anchor>
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
					<div className="flex justify-center flex-col-reverse md:flex-row md:justify-between items-center gap-4">
						<span className="text-xs text-center">
							This site was built from scratch using <u>React</u>,{' '}
							<u>Taildwindcss</u> & <u>Iconoir</u>.
						</span>
						<span className="flex gap-2">
							<Initial>
								<svg
									width="24px"
									height="24px"
									strokeWidth="1.45"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									color={dark ? '#000000' : '#ffffff'}
								>
									<path
										d="M16 22.027v-2.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7a5.44 5.44 0 00-1.5-3.75 5.07 5.07 0 00-.09-3.77s-1.18-.35-3.91 1.48a13.38 13.38 0 00-7 0c-2.73-1.83-3.91-1.48-3.91-1.48A5.07 5.07 0 005 5.797a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 00-.94 2.58v2.87M9 20.027c-3 .973-5.5 0-7-3"
										stroke={dark ? '#000000' : '#ffffff'}
										strokeWidth="1.45"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
							</Initial>
							<Initial>
								<svg
									width="24px"
									height="24px"
									strokeWidth="1.45"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									color={dark ? '#000000' : '#ffffff'}
								>
									<path
										d="M21 9v6M3 15V9M12 21v-6M12 3v6M12 15L3 9l9-6 9 6-9 6z"
										stroke={dark ? '#000000' : '#ffffff'}
										strokeWidth="1.45"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
									<path
										d="M12 21l-9-6 9-6 9 6-9 6z"
										stroke={dark ? '#000000' : '#ffffff'}
										strokeWidth="1.45"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
							</Initial>
							<Initial>
								<svg
									width="24px"
									height="24px"
									strokeWidth="1.45"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									color={dark ? '#000000' : '#ffffff'}
								>
									<path
										d="M21 8v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5h8a5 5 0 015 5zM7 17v-7"
										stroke={dark ? '#000000' : '#ffffff'}
										strokeWidth="1.45"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
									<path
										d="M11 17v-3.25M11 10v3.75m0 0c0-3.75 6-3.75 6 0V17M7 7.01l.01-.011"
										stroke={dark ? '#000000' : '#ffffff'}
										strokeWidth="1.45"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
								</svg>
							</Initial>
							<Initial>
								<svg
									width="24px"
									height="24px"
									strokeWidth="1.45"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									color={dark ? '#000000' : '#ffffff'}
								>
									<path
										d="M12 16a4 4 0 100-8 4 4 0 000 8z"
										stroke={dark ? '#000000' : '#ffffff'}
										strokeWidth="1.45"
										strokeLinecap="round"
										strokeLinejoin="round"
									></path>
									<path
										d="M3 16V8a5 5 0 015-5h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5z"
										stroke={dark ? '#000000' : '#ffffff'}
										strokeWidth="1.45"
									></path>
									<path
										d="M17.5 6.51l.01-.011"
										stroke={dark ? '#000000' : '#ffffff'}
										strokeWidth="1.45"
										strokeLinecap="round"
										strokeLinejoin="round"
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
