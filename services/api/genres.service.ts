import fetchData from "../../config/api.config";

const path = '/genres'

export const getGenres: GetGenres = () => {
    return fetchData({ method: "GET", path })
}