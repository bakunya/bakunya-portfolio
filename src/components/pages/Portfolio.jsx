import Badge from '@/components/atoms/Badge'
import RepoProvider from '@/context/RepoContext'
import NavBar from '@/components/organisms/NavBar'
import { useRepoContext } from '@/context/RepoContext'
import MasonryProjects from '@/components/organisms/MasonryProjects'
import CircularLoader from '@/components/atoms/Icons/CircularLoader'
import SelfDescription from '@/components/mollecules/SelfDescription'

// load all portfolio projects from clients
import clients from '@/variables/clients'

const Portfolio = () => {
    const { state, getGithubRepo } = useRepoContext()

    return (
        <section className="main-theme-background min-h-[100vh]">
            <NavBar />
            <main className='container-600'>
                <Badge />
                <SelfDescription id="clients" title="clients projects">
                    <MasonryProjects projects={clients} />
                </SelfDescription>
                <div className='my-20 w-full border border-light-dark/20 dark:border-dark-light/20' />
                <SelfDescription id="personal" title="personal projects">
                    {
                        state.isLoading && <CircularLoader className="mt-10 mx-auto block main-theme-typography animate-[spin_0.5s_linear_infinite]" />
                    }
                    {
                        !state.isLoading && Array.isArray(state.data) && <MasonryProjects projects={state.data} />
                    }
                    {
                        !state.isLoading && (state.error && !state.error.includes('operation was aborted')) && (
                            <>
                                <p className="text-center main-theme-typography mt-10">Ups, something wrong.</p>
                                <button className='btn-primary block mx-auto mt-5 px-8 py-2' onClick={getGithubRepo}>Refresh</button>
                            </>
                        )
                    }
                </SelfDescription>
            </main>
        </section>
    )
}

const PortfolioWithContext = () => {
    return (
        <RepoProvider>
            <Portfolio />
        </RepoProvider>
    )
}

export default PortfolioWithContext