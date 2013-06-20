var rb = require("../app/reversed-binary/ReversedBinary.js");

describe("Puzzle collection: ", function() {

    describe("Reversed Binary", function() {

        it("should have a convert prototype function", function() {
            expect(typeof rb["convert"]).toBe("function");
        });

        it("should return the correct value", function() {
            expect(rb.convert(13)).toEqual(11);
            expect(rb.convert(47)).toEqual(61);
        });

        it("should handle string based integers", function() {
            expect(rb.convert("13")).toEqual(11);
            expect(rb.convert("47")).toEqual(61);
        });

        it("should handle non-integer types", function() {
            expect(rb.convert("abc")).toBeUndefined();
        });

    });
});
