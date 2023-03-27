import React, { useState } from "react";
import { Button } from "react-bootstrap";

enum Holiday {
    Halloween = "🎃",
    Thanksgiving = "🦃",
    Valentines = "❤️",
    Christmas = "🎄",
    NewYear = "🎉"
}

export function CycleHoliday(): JSX.Element {
    const [currentHoliday, setCurrentHoliday] = useState<Holiday>(
        Holiday.Halloween
    );

    const nextHolidayByLetter = (holiday: Holiday): Holiday => {
        const holidays = [
            Holiday.Halloween,
            Holiday.Thanksgiving,
            Holiday.Valentines,
            Holiday.Christmas,
            Holiday.NewYear
        ];
        const currentIndex = holidays.findIndex((h) => h === holiday);
        const nextIndex = (currentIndex + 1) % holidays.length;
        return holidays[nextIndex];
    };

    const NextHolidayByYear = (holiday: Holiday): Holiday => {
        const holidaysInYearOrder: Holiday[] = [
            Holiday.Valentines,
            Holiday.Halloween,
            Holiday.Thanksgiving,
            Holiday.Christmas,
            Holiday.NewYear
        ];
        const currentIndex = holidaysInYearOrder.indexOf(holiday);
        const nextIndex = (currentIndex + 1) % holidaysInYearOrder.length;
        return holidaysInYearOrder[nextIndex];
    };

    const handleClickAlphabet = () => {
        const nextHoliday = nextHolidayByLetter(currentHoliday);
        setCurrentHoliday(nextHoliday);
    };

    const handleClickYear = () => {
        const nextHoliday = NextHolidayByYear(currentHoliday);
        setCurrentHoliday(nextHoliday);
    };

    return (
        <div>
            <div>Holiday: {currentHoliday}</div>
            <button onClick={handleClickAlphabet}>Advance by Alphabet</button>
            <button onClick={handleClickYear}>Advance by Year</button>
        </div>
    );
}
