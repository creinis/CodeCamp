
const sum = require('./sum');

// Test Matchers
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;
    expect(data).toEqual({ one:1, two:2 });
});

test('null is falsy', () => {
    const n = null;
    expect(n).toBeFalsy();
});

test('one is truthy', () => {
    const n = 1;
    expect(n).toBeTruthy();
});


const myFunction = require('./myFunction');

test('throws on invalid input', () => {
    expect(() => {
        myFunction('asdf');
    }).toThrow();
});

// callback functions
const fetchData = require('./fetchData');

test('the data is peanut', done => {
    function callback(data) {
        try {
            expect(data).toBe('peanut');
            done();
        } catch (error) {
            done(error);
        }
    }
    fetchData(callback);
});

// Promise
const fetchPromise = require('./fetchPromise');

test('the data is peanut', () => {
    return expect(fetchPromise()).resolves.toBe('peanut');
});

// Async Await
test('the data is peanut', async () => {
    const data = await fetchPromise();
    expect(data).toBe('peanut');
});

// Mock
test('mock implementation of a basic function', () => {
    const mock = jest.fn(x => 42 + x);
    expect(mock(1)).toBe(43);
    expect(mock).toHaveBeenCalledWith(1);
    expect(mock(42)).toBe(84);
    expect(mock).toHaveBeenCalledWith(42);
});
