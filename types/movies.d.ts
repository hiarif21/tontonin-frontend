interface MovieData {
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
        streaming_service: { _id: string, name: string }
    }[]
    persons: [] | {
        _id: string
        name: string
        role: {
            _id: string
            name: string
        }
    }[]
    genres: [] | {
        _id: string
        name: string
    }[]
}

interface MoviesData {
    _id: string
    title: string
    image: string
}

interface GetMoviesResponse {
    success: boolean,
    message: string,
    page: number
    total_page: number
    total_data: number
    data: MoviesData[] | []
}

interface GetMovieResponse {
    success: boolean,
    message: string,
    page: number
    total_page: number
    total_movies: number
    data: MovieData
}

interface MoviesParams {
    page?: number
    title?: string
    watch_options?: string
    persons?: string
    genres?: string
}

type GetMovies = (params?: MoviesParams, signal?: AbortSignal | undefined) => Promise<GetMoviesResponse>
type GetMovie = (id: string) => Promise<GetMovieResponse>

type LoadFilteredDataMovies = (signal?: AbortSignal | undefined) => Promise<GetMoviesResponse>
type LoadMoreMovies = () => void
type LoadMoreFilteredMovies = () => void
type GetMovie = (id: string) => Promise<GetMovieResponse>


type UseMovies = () => {
    data: MoviesData[],
    setData: React.Dispatch<MoviesData[]>,
    totalData: number,
    setTotalData: React.Dispatch<number>,
    loadMore: LoadMoreMovies
    filteredData: MoviesData[],
    setFilteredData: React.Dispatch<MoviesData[]>
    filteredTotalData: number,
    setFilteredTotalData: React.Dispatch<number>
    loadMoreFiltered: LoadMoreFilteredMovies
    filter: FilterMovies
    setFilter: React.Dispatch<FilterMovies>,
    getData: GetMovie
}

interface FilterMovies {
    title?: string
    watch_options?: string
    persons?: string
    genres?: string
}