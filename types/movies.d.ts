interface DataMovie {
    _id: string
    title: string
    image: string
    release_year: number
    runtime: string
    storyline: string
    link_trailer: string
    watch_options: [] | {
        _id: string
        title: string
        link_streaming: string
    }[]
    persons: [] | {
        _id: string
        name: string
    }[]
    genres: [] | {
        _id: string
        name: string
    }[]
}

interface GetMoviesResponse {
    success: boolean,
    message: string,
    page: number
    total_page: number
    total_data: number
    data: DataMovie[] | []
}

interface GetMovieResponse {
    success: boolean,
    message: string,
    page: number
    total_page: number
    total_movies: number
    data: DataMovie
}

interface MoviesParams {
    page?: number
    title?: string
}

type GetMovies = (params?: MoviesParams, signal?: AbortSignal | undefined) => Promise<GetMoviesResponse>
type GetMovie = (id: string, params?: MoviesParams, signal?: AbortSignal | undefined) => Promise<GetMovieResponse>
type LoadMoreMovies = () => void

type UseMovies = () => {
    data: DataMovie[],
    setData: Dispatch<DataMovie[]>,
    totalData: number,
    setTotalData: Dispatch<number>,
    loadMore: LoadMoreMovies
}