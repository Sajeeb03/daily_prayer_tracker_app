const addToDb = () => {
    let savedTime = getTheDb()
    setTheDb(savedTime);
}

const getTheDb = () => {
    let dB = JSON.parse(localStorage.getItem('break-time'));
    return dB;

}

const setTheDb = (string) => {
    localStorage.setItem('break-time', JSON.stringify(string))
}

export {
    getTheDb,
    setTheDb,
    addToDb
}