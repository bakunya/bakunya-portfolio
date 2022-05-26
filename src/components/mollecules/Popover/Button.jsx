import clsx from 'clsx'
import React from 'react'

const PopoverButton = ({ children, className, onClick = () => {} }) => {
    return (
        <button className={clsx(className, 'btn-tertiary')} onClick={onClick}>
            { children }
        </button>  
    )
}

export default PopoverButton