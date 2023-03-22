import { ItemCardModel, RequestResponse } from './Types'

export const groupBy = (list: any[], key: string) => {
    if (list.length === 0) return {}
    return list.reduce((accumulator, currentValue) => {
        const grouped = (accumulator[currentValue[key]] = accumulator[currentValue[key]] || [])
        grouped.push(currentValue)
        return accumulator
    }, {})
}

export const sortList = (list: any[], key: string, direction: 'asc' | 'desc') => {
    return list.sort((a, b) =>
        direction === 'asc'
            ? parseFloat(a[key]) - parseFloat(b[key])
            : parseFloat(b[key]) - parseFloat(a[key])
    )
}

export const calcGrowth = (items: any[], attribute: string): number => {
    const firstYear = items[0][attribute]
    const lastYear = items[items.length - 1][attribute]

    return Number(((lastYear - firstYear) / firstYear).toFixed(2))
}

export const formatDataTable = (
    response: RequestResponse[],
    attribute: string
): ItemCardModel[] => {
    const groupedByState = groupBy(response, 'ID State')
    const formattedList = Object.keys(groupedByState).map((stateKey: string) => {
        const state = groupedByState[stateKey]
        const ordered = sortList(state, 'ID Year', 'asc')
        const growth = calcGrowth(ordered, attribute)
        return { growth, value: ordered[ordered.length - 1][attribute], state: ordered[0].State }
    })
    return sortList(formattedList, 'growth', 'desc')
}

export const getPeriodYears = (year: number, period: string): string => {
    const count = Number(period.split(' ')[0])
    return `${year}, ${year + count}`
}
