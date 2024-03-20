
function fetchData(callback) {
    setTimeout(() => {
        callback('peanut');
    }, 1000);
}

module.exports = fetchData;