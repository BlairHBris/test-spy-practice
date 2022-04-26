import { map } from "./index";

test("map function acts as described", () => {
    const positiveInteger1 = 2
    const positiveInteger2 = 3

    const sum = add(positiveInteger1, positiveInteger2)

    expect(sum).toBe(5)
})