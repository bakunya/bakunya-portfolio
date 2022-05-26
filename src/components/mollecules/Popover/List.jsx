import clsx from 'clsx'
import React from 'react';
import { CSSTransition } from 'react-transition-group';

const PopoverList = ({ children, className, show, timeout, onEnter = () => {}, onExit = () => {} }) => {
    return (
        <CSSTransition
            in={show}
            unmountOnExit
            onExit={onExit}
            onEnter={onEnter}
            timeout={timeout ?? 300}
            classNames="popover-menu"
        >
            <section className={clsx(className, "popover-menu")}>
                { children }
            </section>
        </CSSTransition>
    )
}

export default PopoverList