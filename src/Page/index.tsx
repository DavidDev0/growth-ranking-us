/* Components */
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'

/* Styles */
import { getMeasures } from '../Api'
import { Header } from '../Components/Header'
import { OPTIONS_GROWTH, OPTIONS_MEASURES, OPTIONS_YEAR } from './Constants'
import { Filter } from './Filter'
import { formatDataTable, getPeriodYears } from './Helper'
import './styles.scss'
import { ItemCardModel, RequestStatusModel } from './Types'
import { WrapperStates } from './WrapperStates'

function Page() {
    const [data, setData] = useState<ItemCardModel[]>([])
    const [requestStatus, setRequestStatus] = useState<RequestStatusModel>('success')
    const [filterValues, setFilterValues] = useState({
        year: OPTIONS_YEAR[0],
        period: OPTIONS_GROWTH[0],
        measure: OPTIONS_MEASURES[0],
    })

    const loadData = async (measure: string, year: string) => {
        try {
            const response = await getMeasures({ measures: measure, year })
            setData(formatDataTable(response.data, measure))
            setRequestStatus('success')
        } catch (err) {
            setRequestStatus('error')
            setData([])
        }
    }
    const handleChangeSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRequestStatus('loading')
        const { name, value } = event.target
        const updatedFilter = { ...filterValues, [name]: value }
        const year = getPeriodYears(Number(updatedFilter.year), updatedFilter.period)
        setFilterValues(updatedFilter)
        loadData(updatedFilter.measure, year)
    }
    useEffect(() => {
        loadData(
            OPTIONS_MEASURES[0],
            getPeriodYears(Number(filterValues.year), filterValues.period)
        )
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className='app'>
            <div className='formPanel'>
                <Container className='p-3'>
                    <Header />
                    <h1 className='header'>Growth Ranking of U.S. States</h1>
                    <Filter onChange={handleChangeSelect} />
                </Container>
            </div>
            <WrapperStates data={data} status={requestStatus} />
        </div>
    )
}

export default Page
