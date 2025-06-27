import React, { memo } from 'react'
import ImageLazy from '@/components/atoms/ImageLazy'

const CardProject = ({ full_name, html_url, description, name, image_url }) => {
    return (
        <div className="m-2 bg-light-dark/20 dark:bg-dark-light/20 p-2 rounded relative shadow-lg shadow-light-dark/30 dark:shadow-dark-light/10">
            { html_url && <a href={html_url} target="_blank" className='absolute inset-0 bg-transparent' /> }
            <ImageLazy 
                alt="avatar" 
                src={image_url ?? 'https://avatars.githubusercontent.com/u/67939204?v=4'} 
                className='rounded max-h-[130px] h-[130px] w-full object-cover object-center'
            />
            <p className="main-theme-typography text-xs mt-3">Projects - { name }</p>
            <p className='font-semibold main-theme-typography text-xs mt-2 leading-relaxed tracking-normal'>{full_name}: { description ?? html_url }</p>
            <p className="main-theme-typography text-xs mt-2">{ html_url }</p>
        </div>
    )
}

export default memo(CardProject)