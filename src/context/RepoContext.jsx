import React from 'react'

const RepoContext = React.createContext()

export const useRepoContext = () => React.useContext(RepoContext)

const initialState = {
    isLoading: false,
    error: '',
    data: []
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'setData':
            return {
                ...state,
                data: action.payload
            }
        case 'setError':
            return {
                ...state,
                error: action.payload
            }
        case 'setLoading':
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

let abortController = null

const RepoProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    const getGithubRepo = React.useCallback(() => {
        if (abortController) abortController.abort()
        if (state.data.length || state.isLoading) return
        abortController = new AbortController()

        dispatch({
            type: 'setLoading',
            payload: true,
        })
        dispatch({
            type: 'setError',
            payload: '',
        })

        fetch('https://bakunya.github.io/repos.json?v=2', { signal: abortController.signal })
            .then(res => {
                if (res.status !== 200) throw Error(res.statusText)
                dispatch({
                    type: 'setError',
                    payload: '',
                })
                return res.json()
            })
            .then(res => dispatch({
                type: 'setData',
                payload: res.data
            }))
            .catch(e => {
                dispatch({
                    type: 'setError',
                    payload: e.message
                })
            })
            .finally(() => dispatch({
                type: 'setLoading',
                payload: false
            }))

    }, [])

    React.useEffect(() => {

        getGithubRepo()

        return () => {
            if (abortController) abortController.abort()
        }

    }, [getGithubRepo])


    return (
        <RepoContext.Provider value={{ getGithubRepo, state }}>
            {children}
        </RepoContext.Provider>
    )
}

export default RepoProvider
