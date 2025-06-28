import React from 'react'
import { Link } from 'react-router-dom'

import ListIcon from 'react-bootstrap-icons/dist/icons/list'
import Popover from '@/components/mollecules/Popover'

const PopoverMenu = () => {
	const id = React.useId()
	const [show, setShow] = React.useState(false)

	const handleClick = React.useCallback((e) => {
		setShow(prev => !prev)
	}, [])

	React.useEffect(() => {
		const callbackEvent = (e) => {
			if (e.target.classList.contains(id)) return
			setShow(false)
			document.removeEventListener('click', callbackEvent)
		}

		setTimeout(() => show && document.addEventListener('click', callbackEvent), 1);
		return () => document.removeEventListener('click', callbackEvent)
	}, [id, show])

	return (
		<Popover className="block sm:hidden">
			<Popover.Button className="ml-2 p-3" onClick={ handleClick }>
				<ListIcon size={ 20 } />
			</Popover.Button>
			<Popover.List className={ `top-[55px] ${id}` } show={ show }>
				<a href="#" className={ `main-theme-typography transition-main rounded-md p-2 w-full ${id}` }>Blogs</a>
				<Link to="/experience" className={ `main-theme-typography transition-main rounded-md p-2 w-full mt-2 ${id}` }>Experience</Link>
				<Link to="/portfolio" className={ `main-theme-typography transition-main rounded-md p-2 w-full mt-2 ${id}` }>Projects</Link>
			</Popover.List>
		</Popover>
	)
}

export default React.memo(PopoverMenu)
