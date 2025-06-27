import React from 'react'
import { Link } from 'react-router-dom'
import Badge from '@/components/atoms/Badge'
import NavBar from '@/components/organisms/NavBar'
import GithubIcon from 'react-bootstrap-icons/dist/icons/github'
import SelfDescription from '@/components/mollecules/SelfDescription'
import MailIcon from 'react-bootstrap-icons/dist/icons/envelope-fill'
import ChevronRight from 'react-bootstrap-icons/dist/icons/chevron-compact-right'
import LinkedinIcon from 'react-bootstrap-icons/dist/icons/linkedin'

const Experience = () => {
	return (
		<section className="main-theme-background">
			<NavBar />
			<main className="container-600">
				<Badge />
				<SelfDescription id="exp-1" title="Alpha Platform Development & Business Pivot">
					<table className='mt-5 text-justify'>
						<tbody>
							<tr className='flex flex-col sm:table-row'>
								<td className='pt-4 main-theme-typography font-semibold whitespace-nowrap flex'>Situation</td>
								<td className='pt-4 sm:pl-8 main-theme-typography'>The company <i><code>{ "<hidden>" }</code></i>  needed to rapidly test a new business model for an assessment management platform without committing significant resources to a full-scale public release. The business team required a functional prototype to validate their ideas and map out the business model's potential.</td>
							</tr>
							<tr className='flex flex-col mt-5 sm:mt-0 sm:table-row'>
								<td className='pt-4 main-theme-typography font-semibold whitespace-nowrap flex'>Task</td>
								<td className='pt-4 sm:pl-8 main-theme-typography'>As a Javascript Fullstack Web Developer, Bakunya was to develop the alpha versions of the platform. This included not only building core features and scenarios but also providing technical advice to the business team to help them assess the feasibility and potential of their ideas.</td>
							</tr>
							<tr className='flex flex-col mt-5 sm:mt-0 sm:table-row'>
								<td className='pt-4 main-theme-typography font-semibold whitespace-nowrap flex'>Action</td>
								<td className='pt-4 pl-5 sm:pl-10 main-theme-typography'>
									<ul className='flex flex-col gap-3 list-disc'>
										<li>
											<strong className="font-semibold underline">Architected</strong> and developed the core features for multiple alpha versions of the assessment management and user dashboard panels.
										</li>
										<li>
											<strong className="font-semibold underline">Utilized</strong> a modern tech stack including Hono.js, TypeScript, and Cloudflare Workers to ensure rapid development and technical feasibility.
										</li>
										<li>
											<strong className="font-semibold underline">Proactively</strong> provided technical counsel to the business team and senior members, helping them validate concepts and evaluate potential changes.
										</li>
										<li>
											<strong className="font-semibold underline">Engineered</strong> key scenarios for user interaction, from assessor-assessee pairing to self-assessment tests.
										</li>
									</ul>
								</td>
							</tr>
							<tr className='flex flex-col mt-5 sm:mt-0 sm:table-row'>
								<td className='pt-4 main-theme-typography font-semibold whitespace-nowrap flex'>Result</td>
								<td className='pt-4 sm:pl-8 main-theme-typography'><strong className="font-semibold underline">Enabled a critical business pivot.</strong> The alpha applications He developed allowed the business team to discover key opportunities and flaws in the initial model. This led to a strategic decision to change the core business workflow before a costly public launch, <strong className="font-semibold">saving significant development time and resources</strong>. The platform's adaptability allowed the business to evolve its strategy effectively</td>
							</tr>
						</tbody>
					</table>
				</SelfDescription>
				<SelfDescription id="exp-2" title="Business Operations Digitalization (Inventory & Management App)">
					<table className='mt-5 text-justify'>
						<tbody>
							<tr className='flex flex-col sm:table-row'>
								<td className='pt-4 main-theme-typography font-semibold whitespace-nowrap flex'>Situation</td>
								<td className='pt-4 sm:pl-8 main-theme-typography'>A chicken broker company was managing its complex operations manually, including inventory for resale, broker and supplier management, customer transactions, and revenue/tax calculations. This process was inefficient and prone to errors.</td>
							</tr>
							<tr className='flex flex-col mt-5 sm:mt-0 sm:table-row'>
								<td className='pt-4 main-theme-typography font-semibold whitespace-nowrap flex'>Task</td>
								<td className='pt-4 sm:pl-8 main-theme-typography'>As the fullstack developer, Bakunya was tasked with designing and building a comprehensive web application to automate and streamline their entire business operation.</td>
							</tr>
							<tr className='flex flex-col mt-5 sm:mt-0 sm:table-row'>
								<td className='pt-4 main-theme-typography font-semibold whitespace-nowrap flex'>Action</td>
								<td className='pt-4 pl-5 sm:pl-10 main-theme-typography'>
									<ul className='flex flex-col gap-3 list-disc'>
										<li>
											<strong className="font-semibold underline">Developed</strong> a full-stack application from the ground up using Laravel, PHP, and MySQL to create a robust backend and inventory management system.
										</li>
										<li>
											<strong className="font-semibold underline">Designed and implemented</strong> a user-friendly frontend with Bootstrap, allowing non-technical staff to easily manage inventory, track transactions, and manage user roles (brokers, suppliers, customers).
										</li>
										<li>
											<strong className="font-semibold underline">Integrated modules</strong> for calculating revenue and taxes, automating a critical financial process for the company.
										</li>
									</ul>
								</td>
							</tr>
							<tr className='flex flex-col mt-5 sm:mt-0 sm:table-row'>
								<td className='pt-4 main-theme-typography font-semibold whitespace-nowrap flex'>Result</td>
								<td className='pt-4 sm:pl-8 main-theme-typography'><strong className="font-semibold underline">Dramatically increased operational efficiency.</strong> The application streamlined core business processes, from inventory to finance. This move from manual tracking to a centralized digital system <strong className="font-semibold">significantly reduced the potential for human error and saved administrative time</strong>, allowing the company to manage its operations more effectively and accurately.</td>
							</tr>
						</tbody>
					</table>
				</SelfDescription>
				<SelfDescription id="exp-3" title="Local Government Collaboration & Monitoring Application">
					<table className='mt-5 text-justify'>
						<tbody>
							<tr className='flex flex-col sm:table-row'>
								<td className='pt-4 main-theme-typography font-semibold whitespace-nowrap flex'>Situation</td>
								<td className='pt-4 sm:pl-8 main-theme-typography'>A local government entity required a centralized system to effectively manage, monitor, and evaluate its various collaboration projects with the community. The existing process lacked a streamlined way to track progress and ensure accountability for these initiatives.</td>
							</tr>
							<tr className='flex flex-col mt-5 sm:mt-0 sm:table-row'>
								<td className='pt-4 main-theme-typography font-semibold whitespace-nowrap flex'>Task</td>
								<td className='pt-4 sm:pl-8 main-theme-typography'>As a fullstack developer on the team, He was tasked with developing the core modules essential for the application's primary functions: managing community collaborations and facilitating the monitoring and evaluation of the work involved.</td>
							</tr>
							<tr className='flex flex-col mt-5 sm:mt-0 sm:table-row'>
								<td className='pt-4 main-theme-typography font-semibold whitespace-nowrap flex'>Action</td>
								<td className='pt-4 pl-5 sm:pl-10 main-theme-typography'>
									<ul className='flex flex-col gap-3 list-disc'>
										<li>
											<strong className="font-semibold underline">Developed</strong> two critical modules from the ground up using Laravel and PHP to handle the logic for managing collaboration data and tracking evaluation metrics.
										</li>
										<li>
											<strong className="font-semibold underline">Engineered</strong> the database schema with MySQL to efficiently store and retrieve complex data related to community projects, partners, and evaluation results.
										</li>
										<li>
											<strong className="font-semibold underline">Constructed</strong> a user-friendly and responsive interface with TailwindCSS, enabling government staff to easily input and access collaboration information.
										</li>
										<li>
											<strong className="font-semibold underline">Collaborated</strong> closely with other developers to integrate my modules into the larger application, ensuring seamless functionality and project success.
										</li>
									</ul>
								</td>
							</tr>
							<tr className='flex flex-col mt-5 sm:mt-0 sm:table-row'>
								<td className='pt-4 main-theme-typography font-semibold whitespace-nowrap flex'>Result</td>
								<td className='pt-4 sm:pl-8 main-theme-typography'><strong className="font-semibold underline">Improved government efficiency and transparency.</strong> The new modules provided a structured and centralized system for managing community projects. This streamlined the monitoring and evaluation process, enabling better oversight and accountability. By digitalizing this workflow, the application reduced administrative overhead and provided the local government with reliable data for decision-making on community collaborations.
								</td>
							</tr>
						</tbody>
					</table>
				</SelfDescription>
				<SelfDescription>
					<Link to="/portfolio" className="btn-primary flex justify-between items-center mx-auto block w-fit py-3 px-5">
						Check all portfolio
						<ChevronRight size={ 20 } className="ml-3" />
					</Link>
				</SelfDescription>
				<SelfDescription id="contacts" title="let's connect">
					<p className='main-theme-typography mt-9 leading-relaxed tracking-wide text-justify'>
						Bakunya remained open to connecting with other professionals, always willing to explore how his skills might contribute to future web development endeavors. If you ever needed a partner who brings both strategic insight and technical execution, <a href="mailto:bakunya.dev@gmail.com" className='underline font-semibold italic'>Bakunya was ready.</a>
					</p>
					<div className="flex flex-col items-start mt-9">
						<a href="https://github.com/bakunya" target="_blank" className='contact outline-none relative flex items-center main-theme-typography'>
							<GithubIcon className="mr-3" size={ 25 } />
							<span>Github</span>
						</a>
						<a href="https://www.linkedin.com/in/bakunya-kirisaki-rem-841633352/" target="_blank" className='contact outline-none relative mt-5 flex items-center main-theme-typography'>
							<LinkedinIcon className="mr-3" size={ 25 } />
							<span>Linkedin</span>
						</a>
						<a href="mailto:bakunya.dev@gmail.com" target="blank" className='contact outline-none relative mt-5 flex items-center main-theme-typography'>
							<MailIcon className="mr-3" size={ 25 } />
							<span>Email</span>
						</a>
					</div>
				</SelfDescription>
			</main >
		</section >
	)
}

export default React.memo(Experience)