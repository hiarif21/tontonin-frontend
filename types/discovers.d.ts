interface DiscoverData {
    _id: string
    title: string
    movies: MoviesData[] | []
}

interface GetDiscoversResponse {
    success: boolean,
    message: string,
    page: number
    total_page: number
    total_data: number
    data: DiscoverData[] | []
}

interface GetDiscoverResponse {
    success: boolean,
    message: string,
    page: number
    total_page: number
    total_movies: number
    data: DiscoverData
}

interface DiscoversParams {
    page?: number
    title?: string
}

type TypeMoreDiscovers = "popular" | "new"

type GetDiscovers = (params?: DiscoversParams, signal?: AbortSignal | undefined) => Promise<GetDiscoversResponse>
type GetDiscover = (id: string, params?: DiscoversParams, signal?: AbortSignal | undefined) => Promise<GetDiscoverResponse>
type LoadMoreDiscovers = () => void
type GetMoreDiscovers = (params?: DiscoversParams, signal?: AbortSignal | undefined, type: TypeMoreDiscovers) => Promise<GetDiscoversResponse>
type LoadMoreDiscoversDiscovers = (type: TypeMoreDiscovers) => void
type LoadMoreDiscover = (id: string) => void

type UseDiscovers = () => {
    data: DiscoverData[],
    setData: React.Dispatch<DiscoverData[]>,
    totalData: number,
    setTotalData: React.Dispatch<number>,
    loadMore: LoadMoreDiscovers
    loadMoreDiscovers: LoadMoreDiscoversDiscovers
    moreDiscoversData: MoreDiscoversData
    setMoreDiscoversData: React.Dispatch<MoreDiscoversData>
    totalMoreDiscoversData: TotalMoreDiscoversData
    setTotalMoreDiscoversData: React.Dispatch<TotalMoreDiscoversData>
    singleData: DiscoverData
    setSingleData: React.Dispatch<DiscoverData>
    totalSingleData: number
    setTotalSingleData: React.Dispatch<number>
    loadMoreDiscover: LoadMoreDiscover
}

interface MoreDiscoversData {
    popular: MoviesData[]
    new: MoviesData[]
}

interface TotalMoreDiscoversData {
    popular: number
    new: number
}