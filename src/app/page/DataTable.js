import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns'
import { getData } from './DataSlice';
import generateTableData from '../components/generateData';


const DataTable = () => {

    const dispatch = useDispatch();
    const { data } = useSelector((state) => {
        return state?.dataSlice
    })

    useEffect(() => {
        dispatch(getData())
    }, [])


    const [tableContent, setTableContent] = useState([]);

    const renderTHead = () => {
        let theadElement = ["Апр.", "Май", "Июнь", "Июль", "Авг.", "Сент.", "Окт.", "Нояб.", "Дек.", "Янв.", "Февр.", "Март"]

        return theadElement.map((elem, index) => {
            return <td colSpan={4} className='thead' key={index}>{elem}</td>
        })
    }

    useEffect(() => {
        const generatedData = generateTableData();
        setTableContent(generatedData);
    }, []);


    const matchData = (cellData) => {
        if (data.hasOwnProperty(cellData)) {
            return true
        }
    };

    const getContributionColor = (contributeNumber) => {
        if (contributeNumber <= 9) return 'blue-200';
        if (contributeNumber <= 19) return 'blue-300';
        if (contributeNumber <= 29) return 'blue-400';
        return 'blue-500';
    };

    const getTooltipText = (cellData) => {
        const hasContribution = data[cellData];
        const time = format(new Date(cellData), 'iiii MMM M, yyyy');
        console.log(time)

        let text = hasContribution <= 9 ? '1-9' : hasContribution <= 19 ? '10-19' : hasContribution <= 29 ? '20-29' : '30+';

        return hasContribution ? `${text} contributions ${time}` : `No contributions ${time}`

    };

    return (
        <div className='app'>
            <table>
                <thead>
                    <tr>{renderTHead()}</tr>
                </thead>
                <tbody>
                    {tableContent.map((rowData, rowIndex) => (
                        <tr key={rowIndex}>
                            {rowData.map((cellData, cellIndex) => (
                                <>
                                    <td
                                        className={`td ${matchData(cellData) ? getContributionColor(data[cellData]) : ''}`}

                                        key={cellIndex}
                                        title={getTooltipText(cellData)}
                                        data-tooltip 
                                    ></td>
                                </>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='contribution-nav'>
                <span className='span'>Меньше</span>
                <div className='contribution-row'>
                    <div className='cell gray'></div>
                    <div className='cell blue-200'></div>
                    <div className='cell blue-300'></div>
                    <div className='cell blue-400'></div>
                    <div className='cell blue-500'></div>
                </div>
                <span className='span'>Больше</span>
            </div>
        </div>
    )
}

export default DataTable