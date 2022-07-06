interface GenreData {
    _id: string
    name: string
}

interface GetGenresResponse {
    success: boolean,
    message: string,
    data: [] | GenreData[]
}