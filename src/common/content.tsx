import jsNotebookImg from '@assets/screenshots/js-notebook.webp';
import heartlyImg from '@assets/screenshots/heartly.webp';
import invoiceGeneratorImg from '@assets/screenshots/invoice-generator.webp';
import guhitImg from '@assets/screenshots/guhit.webp';

export const experience = [
	{
		title: 'Full Stack Developer',
		company: 'Water Source Solutions',
		start: '2013',
		end: 'Present',
	},
	{
		title: 'Front End Developer',
		company: 'CRS Consulting',
		start: '2016',
		end: '2017',
	},
];

export const education = [
	{
		degree: 'BS Computer Science',
		school: 'Western Governors University',
		start: '2021',
		end: '2022',
	},
	{
		degree: 'Associates in Computer Technology',
		school: 'Systems Technology Institute',
		start: '1999',
		end: '2001',
	},
];

export const certifications = [
	{
		title: 'ITIL Foundation Certificate in IT Service Management',
		company: 'AXELOS Global Best Practice',
		year: '2022',
	},
	{
		title: 'CompTIA Project+ Certification',
		company: 'CompTIA',
		year: '2022',
	},
];

export const projects = [
	{
		title: 'JS Notebook',
		description: 'A jupyter notebook clone for javascript.',
		tags: [
			'Typescript',
			'React',
			'Redux-Toolkit',
			'Tailwindcss',
			'Cypress',
		],
		url: 'https://ranasun.github.io/js-notebook/',
		// imgUrl: './assets/js-notebook.png',
		imgUrl: jsNotebookImg,
	},
	{
		title: 'Heartly',
		description: "Calculates a person's risk factor for heart disease.",
		tags: [
			'Vue.js',
			'Python',
			'Flask',
			'Vuetify',
			'Machine Learning',
			'REST API',
		],
		url: 'https://heartly.randya.dev',
		imgUrl: heartlyImg,
	},
	{
		title: 'Invoice Generator',
		description: 'Create invoices and download them as pdf.',
		tags: ['Vue.js', 'Tailwindcss', 'Pdfmake', 'PWA'],
		url: 'https://ranasun.github.io/invoice-generator/',
		imgUrl: invoiceGeneratorImg,
	},
	{
		title: 'Guhit',
		description: 'A simple drawing app using canvas.',
		tags: ['Typescript', 'React', 'canvas-api', 'PWA'],
		url: 'https://ranasun.github.io/guhit/',
		imgUrl: guhitImg,
	},
];
