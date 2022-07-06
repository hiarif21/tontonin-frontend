import fetchData from "../../config/api.config";

const path = '/movies'

export const getMovies: GetMovies = ({
    page = 1,
    title = '',
    watch_options = "",
    persons = "",
    genres = ""
} = {}, signal = undefined) => {

    const params = new URLSearchParams({
        page: page.toString(),
        title: title,
        watch_options: watch_options,
        persons: persons,
        genres: genres
    }).toString()

    return fetchData({ method: "GET", path: `${path + "?" + params}`, signal })
}
export const getMovie: GetMovie = (id) => {

    return fetchData({ method: "GET", path: `${path}/${id}` })
}