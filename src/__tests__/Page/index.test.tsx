/* Libraries */
import { render, screen } from '@testing-library/react'

/* Components */
import Page from '../../Page'
import { calcGrowth, formatDataTable, getPeriodYears, groupBy, sortList } from '../../Page/Helper'

test('renders learn react link', () => {
    // Arrange
    render(<Page />)

    // Act
    const linkElement = screen.getByText(/Growth Ranking of U.S. States/i)

    // Assert
    expect(linkElement).toBeInTheDocument()
})
describe('Group elements by key', () => {
    test('Group empty list of elements by key', () => {
        expect(groupBy([], 'test')).toStrictEqual({})
    })
    test('Grouping elements by key', () => {
        expect(
            groupBy(
                [
                    { a: 1, b: 2 },
                    { a: 3, b: 4 },
                    { a: 1, b: 5 },
                ],
                'a'
            )
        ).toStrictEqual({
            1: [
                { a: 1, b: 2 },
                { a: 1, b: 5 },
            ],
            3: [{ a: 3, b: 4 }],
        })
    })
})

describe('Sort list', () => {
    test('Sort empty list', () => {
        expect(sortList([], 'test', 'asc')).toStrictEqual([])
    })

    test('Sort list ascending', () => {
        expect(
            sortList(
                [{ test: 1 }, { test: 8 }, { test: 2 }, { test: 4 }, { test: 3 }],
                'test',
                'asc'
            )
        ).toStrictEqual([{ test: 1 }, { test: 2 }, { test: 3 }, { test: 4 }, { test: 8 }])
    })

    test('Sort list descending', () => {
        expect(
            sortList(
                [{ test: 1 }, { test: 8 }, { test: 2 }, { test: 4 }, { test: 3 }],
                'test',
                'desc'
            )
        ).toStrictEqual([{ test: 8 }, { test: 4 }, { test: 3 }, { test: 2 }, { test: 1 }])
    })
})

test('Calculate growth', () => {
    expect(
        calcGrowth([{ test: 1 }, { test: 8 }, { test: 2 }, { test: 4 }, { test: 3 }], 'test')
    ).toBe(2)
})

test('Format data table', () => {
    expect(
        formatDataTable(
            [
                {
                    'ID State': '04000US01',
                    State: 'Alabama',
                    'ID Year': 2018,
                    Year: '2018',
                    Population: 14864680,
                    'Slug State': 'alabama',
                },
                {
                    'ID State': '04000US02',
                    State: 'Alaska',
                    'ID Year': 2018,
                    Year: '2018',
                    Population: 738516,
                    'Slug State': 'alaska',
                },
                {
                    'ID State': '04000US01',
                    State: 'Alabama',
                    'ID Year': 2017,
                    Year: '2017',
                    Population: 4850771,
                    'Slug State': 'alabama',
                },
            ],
            'Population'
        )
    ).toStrictEqual([
        { growth: 2.06, state: 'Alabama', value: 14864680 },
        { growth: 0, state: 'Alaska', value: 738516 },
    ])
})

test('Get periods of years', () => {
    expect(getPeriodYears(2000, '5 years')).toBe('2000, 2005')
})
