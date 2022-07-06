import fetchData from "../../config/api.config";

const path = '/discovers'

export const getDiscovers: GetDiscovers = ({ page = 1, title = '' } = {}, signal = undefined) => {

    const params = new URLSearchParams({ page: page.toString(), title: title }).toString()

    return fetchData({ method: "GET", path: `${path + "?" + params}`, signal })
}

export const getDiscover: GetDiscover = (id, { page = 1 } = {}, signal = undefined) => {

    let params = new URLSearchParams({ page: page.toString() }).toString()

    return fetchData({ method: "GET", path: `${path}/${id + "?" + params}`, signal })
}

export const getMoreDiscovers: GetMoreDiscovers = ({ page = 1 } = {}, signal = undefined, type = 'popular') => {

    const params = new URLSearchParams({ page: page.toString() }).toString()

    return fetchData({ method: "GET", path: `${path + "/" + type + "?" + params}`, signal })
}