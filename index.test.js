function map(array, transform) {
    const newArray = []

    for (let i = 0; i < array.length; i++) {
        const oldElement = array[i]
        const newElement = transform(oldElement)
        newArray.push(newElement)
    }

    return newArray
}

describe("Tests for the map function", () => {
    it("Returns a transformed array of items when given a single item", () => {
        const singleItemArray = [1];
        const transform = jest.fn(() => 2);

        const transformedArray = map(singleItemArray, transform);

        expect(transformedArray).toEqual([2]);
    });

    it("Returns a transformed array of items when given multiple items", () => {
        const multiItemArray = [1, 2, 3];
        const transform = jest
            .fn()
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(4)
            .mockReturnValueOnce(6);

        const transformedArray = map(multiItemArray, transform);

        expect(transformedArray).toEqual([2, 4, 6]);
    });
})

function filter(array, predicate) {
    const newArray = []

    for (let i = 0; i < array.length; i++) {
        const element = array[i]
        if (predicate(element)) {
            const newElement = JSON.parse(JSON.stringify(element))
            newArray.push(newElement)
        }
    }

    return newArray
}

describe("Tests for the filter function", () => {
    it("Returns only even numbers when given multiple numbers and an isEven function", () => {
        const numberArray = [1, 2, 3];
        const isEven = jest
            .fn()
            .mockReturnValueOnce(false)
            .mockReturnValueOnce(true)
            .mockReturnValueOnce(false);

        const filteredArray = filter(numberArray, isEven);

        expect(filteredArray).toEqual([2]);
    });
    it("Returns only active users  when given an array of users and an isActive function", () => {
        const userArray = [
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

        const filteredArray = filter(userArray, isActive);

        expect(filteredArray).toEqual([
            {
                name: "Kyle",
                isActive: true
            }
        ]);
    });
})



