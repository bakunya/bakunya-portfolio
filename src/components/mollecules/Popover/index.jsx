import clsx from 'clsx'
import React from 'react'
import { getChildrenByType } from 'react-nanny'

import PopoverList from './List'
import PopoverButton from './Button'

const Popover = ({ children, className }) => {
    const button = getChildrenByType(children, PopoverButton)
    const list = getChildrenByType(children, PopoverList)

    return (
        <section className={clsx(className, 'relative')}>
            { button }
            { list }
        </section>
    )
}

Popover.List = PopoverList
Popover.Button = PopoverButton
export default Popover