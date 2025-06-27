import Masonry from '@bakunya/react-masonry'
import React, { useCallback, useState, useEffect, memo } from 'react'
import MasonryCardChildProject from '@/components/mollecules/MasonryCardChildProject'

const MasonryProjects = ({ projects }) => {
    const settingColumns = useCallback(() => {
        if(window.innerWidth >= 475) return 2
        return 1
    }, [])
    const [column, setColumn] = useState(() => settingColumns())
    useEffect(() => {
        window.addEventListener('resize', () => setColumn(() => settingColumns()))

        return window.removeEventListener('resize', () => setColumn(() => settingColumns()))
    }, [setColumn, settingColumns])

    return (
        <section className="mt-5">
            {
                Array.isArray(projects) && (
                    <Masonry
                        dataArray={projects}
                        columnCount={column}
                        ChildsElement={MasonryCardChildProject}
                    />
                )
            }
        </section>
    )
}

export default memo(MasonryProjects)