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
                    <p className='main-theme-typography indent-14 mt-9 leading-relaxed tracking-wide text-justify'>Bakunya is a freelance and fullstack JavaScript developer based in Yogyakarta. With his passion in programming and background of two years of experience in both professional and self-employment within non-profit organizations, Bakunya has experience in technology stacks such as JavaScript, NodeJS, PHP, Laravel, and various database management systems. When not online, Bakunya usually read his favorite fantasy novel with a cup of coffee and music. Although often struggles with code, he also slightly interested in digital art. Sometimes also talks about his dream to become an indie developer.</p>
                </SelfDescription>
                <SelfDescription>
                    <Link to="/portfolio" className="btn-primary flex justify-between items-center mx-auto block w-fit py-3 px-5">
                        Check all portfolio
                        <ChevronRight size={20} className="ml-3" />
                    </Link>
                </SelfDescription>
                <SelfDescription id="education" title="Bio">
                    <table className='mt-5'>
                        <tbody>
                            <tr>
                                <td className='pt-4 main-theme-typography font-semibold flex'>2021</td>
                                <td className='pt-4 main-theme-typography pl-4'>Graduated from Vocational high School in software engineering</td>
                            </tr>
                            <tr>
                                <td className='pt-4 main-theme-typography font-semibold flex'>2021</td>
                                <td className='pt-4 main-theme-typography pl-4'>Internship at Circle Creative company as a Frontend Developer</td>
                            </tr>
                            <tr>
                                <td className='pt-4 main-theme-typography font-semibold flex'>Present</td>
                                <td className='pt-4 main-theme-typography pl-4'>Learning in Amikom Yogyakarta as an computer science student and working freelance as an web developer</td>
                            </tr>
                        </tbody>
                    </table>
                </SelfDescription>
                <SelfDescription id="contacts" title="let's connect">
                    <div className="flex flex-col items-start mt-9">
                        <a href="https://github.com/bakunya" target="_blank" className='contact outline-none relative flex items-center main-theme-typography'>
                            <GithubIcon className="mr-3" size={25} />
                            <span>Github</span>
                        </a>
                        <a href="https://www.linkedin.com/in/irvan-hakim/" target="_blank" className='contact outline-none relative mt-5 flex items-center main-theme-typography'>
                            <LinkedinIcon className="mr-3" size={25} />
                            <span>Linkedin</span>
                        </a>
                        <a href="mailto:irvanhakim.dev@gmail.com" target="blank" className='contact outline-none relative mt-5 flex items-center main-theme-typography'>
                            <MailIcon className="mr-3" size={25} />
                            <span>Email</span>
                        </a>
                    </div>
                </SelfDescription>
            </main>
        </section>
    )
}

export default React.memo(Home)