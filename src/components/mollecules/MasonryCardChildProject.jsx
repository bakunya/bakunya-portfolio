import React, { memo } from 'react'
import CardProject from '@/components/mollecules/CardProject'

const MasonryCardChildProject = ({ value: { full_name, html_url, description, name, image_url } }) => {
    return (
        <CardProject 
            full_name={full_name}
            html_url={html_url}
            description={description}
            name={name}
            image_url={image_url}
        />
    )
}

export default memo(MasonryCardChildProject)