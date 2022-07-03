import fetchData from "../../config/api.config";

const path = '/movies'

export const getMovies: GetMovies = ({ page = 1, title = '' } = {}, signal = undefined) => {

    const params = new URLSearchParams({ page: page.toString(), title: title }).toString()

    return fetchData({ method: "GET", path: `${path + "?" + params}`, signal })
}
export const getMovie: GetMovie = (id, { page = 1 } = {}, signal = undefined) => {

    let params = new URLSearchParams({ page: page.toString() }).toString()

    return fetchData({ method: "GET", path: `${path}/${id + "?" + params}`, signal })
}