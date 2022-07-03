interface DataDiscover {
    _id: string
    title: string
    movies: { _id: string, title: string, image: string }[]
}

interface GetDiscoversResponse {
    success: boolean,
    message: string,
    page: number
    total_page: number
    total_data: number
    data: DataDiscover[] | []
}

interface GetDiscoverResponse {
    success: boolean,
    message: string,
    page: number
    total_page: number
    total_movies: number
    data: DataDiscover
}

interface DiscoversParams {
    page?: number
    title?: string
}

type GetDiscovers = (params?: DiscoversParams, signal?: AbortSignal | undefined) => Promise<GetDiscoversResponse>
type GetDiscover = (id: string, params?: DiscoversParams, signal?: AbortSignal | undefined) => Promise<GetDiscoverResponse>
type LoadMoreDiscovers = () => void

type UseDiscovers = () => {
    data: DataDiscover[],
    setData: Dispatch<DataDiscover[]>,
    totalData: number,
    setTotalData: Dispatch<number>,
    loadMore: LoadMoreDiscovers
}