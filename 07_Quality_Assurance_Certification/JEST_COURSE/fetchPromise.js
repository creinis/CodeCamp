
function fetchPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve('peanut'), 1000);
    });
}

module.exports = fetchPromise;