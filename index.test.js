const { map, filter, reduce, log, someFunction } = require('./index')

describe("Tests for the map function", () => {
    it("Returns a transformed array of items when given a single item", () => {
        const array = [1];
        const transform = jest.fn(() => 2);

        const newArray = map(array, transform);

        expect(newArray).toEqual([2]);
    });

    it("Returns a transformed array of items when given multiple items", () => {
        const array = [1, 2, 3];
        const transform = jest
            .fn()
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(4)
            .mockReturnValueOnce(6);

        const newArray = map(array, transform);

        expect(newArray).toEqual([2, 4, 6]);
    });
})

describe("Tests for the filter function", () => {
    it("Returns only even numbers when given multiple numbers and an isEven function", () => {
        const array = [1, 2, 3];
        const isEven = jest
            .fn()
            .mockReturnValueOnce(false)
            .mockReturnValueOnce(true)
            .mockReturnValueOnce(false);

        const newArray = filter(array, isEven);

        expect(newArray).toEqual([2]);
    });
    it("Returns only active users  when given an array of users and an isActive function", () => {
        const array = [
            {
                name: "Kyle",
                isActive: true
            },
            {
                name: "Elyse",
                isActive: false
            }
        ];
        const isActive = jest
            .fn()
            .mockReturnValueOnce(true)
            .mockReturnValueOnce(false);

        const newArray = filter(array, isActive);

        expect(newArray).toEqual([
            {
                name: "Kyle",
                isActive: true
            }
        ]);
    });
})

describe("Tests for the reduce function", () => {
    it("Combines all elements of an array when presented with an array of multiple numbers", () => {
        const numbersArray = [1, 2, 3, 4];
        const reducer = jest.fn(() => 10)

        const accumulation = [reduce(numbersArray, reducer)]

        expect(accumulation).toEqual([10]);
    })
})


describe("Tests for the log function", () => {
    it("log calls a given function", () => {
        console.log = jest.fn()

        log('hello')

        expect(console.log).toHaveBeenCalledWith('LOG: hello');
    });
})

describe("Tests for the someFunction function", done => {
    it("someFunction works", () => {
        
        
    });
})
