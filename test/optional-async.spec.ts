import { NullException } from "../src/exception";
import { OptionalAsync } from "../src/util"

describe("Optional Async", () => {
    test("Optional Async", async () => {
        const str1 = OptionalAsync.of<string>(Promise.resolve(null));
        const str2 = OptionalAsync.of<string>(Promise.resolve(""));

        await expect(str1.orThrow("Null")).rejects.toBe("Null")
        expect(await str2.orThrow("Null")).toBe("")

        expect(await str1.orElse("STR")).toBe("STR")
        expect(await str2.orElse("STR")).toBe("")

        await expect(str1.get()).rejects.toBeInstanceOf(NullException)
        expect(await str2.get()).toBe("")

        expect(await str1.isPresent()).toBe(false);
        expect(await str2.isPresent()).toBe(true);
    })
})

