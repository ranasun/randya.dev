import { useEffect, useState } from 'react';
import ShowToggle from './ShowToggle';
import { experience, education, certifications } from '@common/content';
import Entry from './Entry';
import Anchor from '@common/Anchor';

const About = () => {
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
		<section className="py-10">
			<h2 className="text-3xl font-bold">About</h2>
			<div className="text-grey-darkest text-lg leading-normal flex flex-col-reverse gap-4 justify-between items-start mt-4 md:flex-row">
				<div className="w-full md:w-2/3">
					<div className="md:hidden h-[120px] w-[120px] bg-cover bg-[url('./assets/photo.jpg')] rounded-full float-left mr-4"></div>
					<p className=" ">
						I'm a software engineer specializing in web development.
						I'm based in Los Angeles, CA and currently work as a
						full stack developer for Water Source Solutions.
					</p>
					<p className="mt-4 ">
						I started as a self-taught dev and have been building
						web applications professionally for more than{' '}
						<code>{yoe}</code> years now or exactly{' '}
						<code>{now}</code> seconds.
					</p>
					<div className={showMore ? 'block' : 'hidden'}>
						<div className="">
							<h3 className="mt-8 text-2xl">Experience</h3>
							{experience.map(
								({ title, company, start, end }) => (
									<Entry
										key={title}
										title={title}
										subtitle={company}
										start={start}
										end={end}
									/>
								)
							)}

							<h3 className="mt-8 text-2xl">Education</h3>
							{education.map(({ degree, school, start, end }) => (
								<Entry
									key={degree}
									title={degree}
									subtitle={school}
									start={start}
									end={end}
								/>
							))}
							<h3 className="mt-8 text-2xl">Certifications</h3>
							{certifications.map(({ title, company, year }) => (
								<Entry
									key={title}
									title={title}
									subtitle={company}
									end={year}
								/>
							))}
							<div className="mt-8">
								<Anchor url="./resume.pdf">
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
				<div className="hidden md:block h-[150px] w-[150px] bg-cover bg-[url('./assets/photo.jpg')] rounded-full"></div>
			</div>
		</section>
	);
};

export default About;
