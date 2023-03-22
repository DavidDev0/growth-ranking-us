import axios from 'axios'

export const getMeasures = ({ measures, year }: { measures: string; year: string }) => {
    const body = { drilldowns: 'State', measures, year }
    return axios
        .get('https://datausa.io/api/data', { params: { ...body } })
        .then(({ data }) => data)
}
