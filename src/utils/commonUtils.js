export const sorter = (service1, service2) => {
    if (service1.modeName < service2.modeName) return -1;
    if (service1.modeName > service2.modeName) return 1;
    if (service1.name > service2.name) return 1;
    if (service1.name < service2.name) return -1;
}

export const isLineAvailableAtNight = (line) => {
    let item = line.serviceTypes.filter((item) => item.name === 'Night');
    return item.length > 0
}

export const isLineDisrupted = (line) => {
    if (line) {
        let disruptedLines = line.lineStatuses.filter((item) => item.statusSeverity !== 10);
        return disruptedLines.length > 0
    }
}

export const getDisruptedLines = (line) => {
    if (line) {
        return line.lineStatuses.filter((item) => item.statusSeverity !== 10);
    }
}

export const getFilteredItems = (items, searchText)=> {
    let filteredItems  = items.find((item) => item.searchKey === searchText);
    if(filteredItems){
        return filteredItems.values
    }
}

export const getFromCache = (getState, reducerkey, searchText) => {
    // return from the redux store if item is present.
    return getState()[reducerkey].items.find((item)=> item.searchKey === searchText);
}
export default {}