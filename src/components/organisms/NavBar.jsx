import React from 'react'
import { Link } from 'react-router-dom'
import PopoverMenu from '@/components/organisms/PopoverMenu'
import ThemeModeButton from '@/components/mollecules/ThemeModeButton'

const NavBar = () => {
	return (
		<nav className="container-800 navbar">
			<Link to="/" className="h2 main-theme-typography">@Bakunya</Link>
			<Link to="/experience" className="main-theme-typography ml-8 hidden sm:block">Experience</Link>
			<Link to="/portfolio" className="main-theme-typography ml-4 hidden sm:block">Projects</Link>
			<a href="#" className="main-theme-typography ml-4 hidden sm:block">Blogs</a>
			<section className='flex items-center ml-auto relative'>
				<ThemeModeButton />
				<PopoverMenu />
			</section>
		</nav>
	)
}

export default React.memo(NavBar)
