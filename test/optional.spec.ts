import { NullException } from "../src/exception";
import { Optional } from "../src/util"

describe("Optional", () => {
    test("Optional", () => {
        const str1 = Optional.of<string>(null);
        const str2 = Optional.of<string>("");

        expect(() => str1.orThrow("Null")).toThrow("Null")
        expect(str2.orThrow("Null")).toBe("")

        expect(str1.orElse("STR")).toBe("STR")
        expect(str2.orElse("STR")).toBe("")

        expect(() => str1.get()).toThrow(NullException)
        expect(str2.get()).toBe("")

        expect(str1.isPresent()).toBe(false);
        expect(str2.isPresent()).toBe(true);
    })
})

