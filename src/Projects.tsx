import { projects } from './content';
import Project from './Project';

const Projects = () => {
	return (
		<section className="py-10">
			<h2 className="text-3xl font-bold">Projects</h2>
			<p className="w-full md:w-2/3 mt-4 text-grey-darkest text-lg leading-normal">
				Here are some of the personal projects I've built recently.
			</p>
			{projects.map((props) => (
				<Project key={props.title} {...props} />
			))}
		</section>
	);
};

export default Projects;
