import clsx from 'clsx'
import React from 'react'

const SelfDescription = ({ title, children, className }) => {
    return (
        <section className={clsx(className, 'my-14')}>
            {
                title && <h1 className="capitalize main-theme-typography subtitle h3">{ title }</h1>
            }
            { children }
        </section>
    )
}

export default React.memo(SelfDescription)