import { BlobOptions } from "buffer";
import { sum } from "./sum";
import { handleCategorySelect } from "./sum";

const categories  = [
    { id: 1, name: "Technology", isActive: true },
    { id: 2, name: "Finance", isActive: false },
    { id: 3, name: "Sports", isActive: false },
    { id: 4, name: "Politics", isActive: false },
    { id: 5, name: "Business", isActive: false },
];

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test("it should return the props that have been passed", () => {
    categories.forEach((cat) => {
        const result = handleCategorySelect(cat.name);
        expect(result).toEqual(cat.name);
    });
});