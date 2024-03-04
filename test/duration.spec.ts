import { Duration } from "../src/time/duration";

describe("Duration", () => {
    test("Duration", () => {
        const duration1 = Duration.ofMilliSeconds(2 * 24 * 60 * 59 * 1000 + 822);
        const duration2 = Duration.ofSeconds(2 * 24 * 60 * 59);
        const duration3 = Duration.ofMinutes(2 * 24 * 60);
        const duration4 = Duration.ofHours(2 * 24);
        const duration5 = Duration.ofDays(2);

        expect(duration1.equals(duration2)).toBe(false);
        expect(duration2.equals(duration3)).toBe(false);
        expect(duration3.equals(duration4)).toBe(true);
        expect(duration5.equals(duration4)).toBe(true);

        expect(duration1.getInMilliSeconds()).not.toBe(duration2.getInMilliSeconds())
        expect(duration1.getInSeconds()).toBe(duration2.getInSeconds())

        expect(duration2.getInSeconds()).not.toBe(duration3.getInSeconds())
        expect(duration2.getInSeconds()).not.toBe(duration4.getInSeconds())
        expect(duration2.getInSeconds()).not.toBe(duration5.getInSeconds())

        expect(duration3.getInSeconds()).toBe(duration4.getInSeconds())
        expect(duration3.getInSeconds()).toBe(duration5.getInSeconds())

        expect(duration5.getValue()).toBe(duration5.getInMilliSeconds())
        expect(duration5.getValue()).toBe(new Duration(duration5.getValue()).getValue())

        const duration = Duration.ofMilliSeconds(3 * 24 * 60 * 60 * 1000 + 111)
        const date11 = new Date(2024, 1, 27, 1, 1, 1, 1);
        const date12 = new Date(2024, 2, 1, 1, 1, 1, 112);

        const date21 = new Date(2023, 1, 27, 1, 1, 1, 1);
        const date22 = new Date(2023, 2, 2, 1, 1, 1, 112);


        expect(+duration.addTo(date11)).toBe(+date12)
        expect(+duration.removeFrom(date12)).toBe(+date11)

        expect(+duration.addTo(date21)).toBe(+date22)
        expect(+duration.removeFrom(date22)).toBe(+date21)
    })
})