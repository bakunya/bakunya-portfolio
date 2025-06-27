import React from 'react'
import { Link } from 'react-router-dom'
import Badge from '@/components/atoms/Badge'
import NavBar from '@/components/organisms/NavBar'
import GithubIcon from 'react-bootstrap-icons/dist/icons/github'
import SelfDescription from '@/components/mollecules/SelfDescription'
import MailIcon from 'react-bootstrap-icons/dist/icons/envelope-fill'
import ChevronRight from 'react-bootstrap-icons/dist/icons/chevron-compact-right'
import LinkedinIcon from 'react-bootstrap-icons/dist/icons/linkedin'

const Home = () => {
	return (
		<section className="main-theme-background">
			<NavBar />
			<main className="container-600">
				<Badge />
				<SelfDescription id="about" title="Intro">
					<p className='main-theme-typography indent-14 mt-9 leading-relaxed tracking-wide text-justify'>
						As a fullstack web developer with over three years of experience, Bakunya centers his work on outcome-driven development—a philosophy forged through hands-on experience where his technical insights directly influenced strategic business decisions. He has played a key role in more than ten diverse projects, leveraging technology stacks like JavaScript, PHP, and Laravel, with a consistent dedication to building scalable and maintainable systems. Bakunya thrives on turning complex challenges into functional, high-impact web applications, and he’s always ready to contribute to projects that require not only strong technical expertise but also a sharp sense of strategic direction.
					</p>
				</SelfDescription>
				<SelfDescription>
					<Link to="/experience" className="btn-primary flex justify-between items-center mx-auto block w-fit py-3 px-5">
						See his experience
						<ChevronRight size={ 20 } className="ml-3" />
					</Link>
				</SelfDescription>
				<SelfDescription id="about" title="About">
					<p className='main-theme-typography indent-14 mt-9 leading-relaxed tracking-wide text-justify'>
						For over three years, Bakunya had dedicated himself to building efficient and well-functioning web applications. But his journey as a developer took a pivotal turn during his involvement in the development of several alpha-version applications at <i><code>{ "<hidden>" }</code></i> Company.
					</p>
					<p className='main-theme-typography indent-14 mt-5 leading-relaxed tracking-wide text-justify'>
						At that point, his role expanded beyond merely writing code. He was entrusted with the responsibility of providing direct technical guidance to the business team—validating ideas and mapping the potential of their business model. His contributions in shaping core features and designing key scenarios proved instrumental in helping the team uncover strategic opportunities, ultimately prompting them to rethink and restructure the business workflow itself.
					</p>
					<p className='main-theme-typography indent-14 mt-5 leading-relaxed tracking-wide text-justify'>
						That experience became a defining moment in Bakunya's career—one that solidified his work philosophy: outcome-driven development. Whether working solo or in a collaborative setting, he consistently focused on building solutions that weren't just technically sound, but also delivered real, strategic value. Over the course of his career, Bakunya had been involved in more than ten diverse projects—ranging from user dashboards and marketplaces to government management applications. Throughout, he leveraged technologies such as JavaScript, PHP, Laravel, and Cloudflare services to bring each project to life
					</p>
					<p className='main-theme-typography indent-14 mt-5 leading-relaxed tracking-wide text-justify'>
						He stood by the principles of clear communication, adaptability, and an insatiable drive for continuous learning. For Bakunya, scalable and maintainable architecture was not just best practice—it was the very foundation of great software. He remained open to connecting with other professionals, always willing to explore how his skills might contribute to future web development endeavors. If you ever needed a partner who brings both strategic insight and technical execution, <a href="mailto:bakunya.dev@gmail.com" className='underline font-semibold italic'>Bakunya was ready.</a>
					</p>
				</SelfDescription>
				<SelfDescription id="education" title="Journey">
					<table className='mt-5 text-justify'>
						<tbody>
							<tr>
								<td className='pt-4 main-theme-typography font-semibold whitespace-nowrap flex'>2021</td>
								<td className='pt-4 main-theme-typography pl-8'>Graduated from Vocational high School in software engineering</td>
							</tr>
							<tr>
								<td className='pt-4 main-theme-typography font-semibold whitespace-nowrap flex'>2021</td>
								<td className='pt-4 main-theme-typography pl-8'>Internship at <i><code>{ "<hidden>" }</code></i> as a Frontend Developer</td>
							</tr>
							<tr>
								<td className='pt-4 main-theme-typography font-semibold whitespace-nowrap flex'>2022 - 2025</td>
								<td className='pt-4 main-theme-typography pl-8'>Freelance contract based at <i><code>{ "<hidden>" }</code></i>  as a Frontend Developer</td>
							</tr>
							<tr>
								<td className='pt-4 main-theme-typography font-semibold whitespace-nowrap flex'>2022 - 2025</td>
								<td className='pt-4 main-theme-typography pl-8'>Learning in Amikom Yogyakarta as an computer science student and working freelance as an web developer</td>
							</tr>
							<tr>
								<td className='pt-4 main-theme-typography font-semibold whitespace-nowrap flex'>2023 - 2024</td>
								<td className='pt-4 main-theme-typography pl-8'>Part-time contract based at <i><code>{ "<hidden>" }</code></i>  company as a Fullstack Javascript Developer</td>
							</tr>
							<tr>
								<td className='pt-4 main-theme-typography font-semibold whitespace-nowrap flex'>2024 - Present</td>
								<td className='pt-4 main-theme-typography pl-8'>Fulltime at <i><code>{ "<hidden>" }</code></i>  company as a Team Lead and Fullstack Javascript Developer</td>
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

export default React.memo(Home)