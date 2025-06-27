import React from 'react'
import NavBar from '@/components/organisms/NavBar'

const NotFound = () => {
    return (
        <section className="main-theme-background min-h-[100vh]">
            <section className='mx-auto'>
                <NavBar />
                <main className='container-centered container-600 mt-14'>
                    <h2 className="main-theme-typography">404 not found.</h2>
                </main>
            </section>
        </section>
    )
}

export default React.memo(NotFound)