import { format } from 'date-fns'

function generateTableData() {
    const currentDate = new Date();
    const tableData = [];

    // Отнимаем 50 недель (7 дней * 50) от текущей даты
    currentDate.setDate(currentDate.getDate() - (7 * 50));

    // Создаем данные для таблицы
    for (let i = 0; i < 7; i++) {
        const rowData = [];
        for (let j = 0; j < 51; j++) {
            let trueDataFormat = format(new Date(currentDate), "yyyy-MM-dd")
            rowData.push(`${trueDataFormat}`);
            currentDate.setDate(currentDate.getDate() + 1);
        }
        tableData.push(rowData);
    }

    return tableData;
}

export default generateTableData