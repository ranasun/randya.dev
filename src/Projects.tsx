import { Card, CardFooter, CardText, CardTitle } from './Card';
import Anchor from './Anchor';
import Tag from './Tag';

const Projects = () => {
	return (
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
					<h3 className="text-lg font-bold">Invoice Generator</h3>
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
	);
};

export default Projects;
