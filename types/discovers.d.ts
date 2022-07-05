interface DiscoverData {
    _id: string
    title: string
    movies: {
        _id: string
        title: string
        image: string
    }[] | []
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

type GetDiscovers = (params?: DiscoversParams, signal?: AbortSignal | undefined) => Promise<GetDiscoversResponse>
type GetDiscover = (id: string, params?: DiscoversParams, signal?: AbortSignal | undefined) => Promise<GetDiscoverResponse>
type LoadMoreDiscovers = () => void

type UseDiscovers = () => {
    data: DiscoverData[],
    setData: Dispatch<DiscoverData[]>,
    totalData: number,
    setTotalData: Dispatch<number>,
    loadMore: LoadMoreDiscovers
}