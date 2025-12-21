// Tamil Calendar Conversion Utility
// Tamil months and their approximate Gregorian start dates for 2026

const TAMIL_MONTHS = [
    { name: "சித்திரை", nameEn: "Chithirai" },      // Apr 14 - May 14
    { name: "வைகாசி", nameEn: "Vaikasi" },          // May 15 - Jun 14
    { name: "ஆனி", nameEn: "Aani" },                 // Jun 15 - Jul 16
    { name: "ஆடி", nameEn: "Aadi" },                 // Jul 17 - Aug 16
    { name: "ஆவணி", nameEn: "Aavani" },              // Aug 17 - Sep 16
    { name: "புரட்டாசி", nameEn: "Purattasi" },     // Sep 17 - Oct 17
    { name: "ஐப்பசி", nameEn: "Aippasi" },          // Oct 18 - Nov 15
    { name: "கார்த்திகை", nameEn: "Karthigai" },   // Nov 16 - Dec 15
    { name: "மார்கழி", nameEn: "Margazhi" },        // Dec 16 - Jan 13
    { name: "தை", nameEn: "Thai" },                  // Jan 14 - Feb 12
    { name: "மாசி", nameEn: "Maasi" },               // Feb 13 - Mar 13
    { name: "பங்குனி", nameEn: "Panguni" }          // Mar 14 - Apr 13
];

// Tamil month start dates for 2026 (approximate - based on astronomical calculations)
// Format: [month (0-indexed), day]
const TAMIL_MONTH_STARTS_2026 = [
    [3, 14],   // Chithirai starts Apr 14
    [4, 15],   // Vaikasi starts May 15
    [5, 15],   // Aani starts Jun 15
    [6, 17],   // Aadi starts Jul 17
    [7, 17],   // Aavani starts Aug 17
    [8, 17],   // Purattasi starts Sep 17
    [9, 18],   // Aippasi starts Oct 18
    [10, 16],  // Karthigai starts Nov 16
    [11, 16],  // Margazhi starts Dec 16
    [0, 14],   // Thai starts Jan 14 (next year context)
    [1, 13],   // Maasi starts Feb 13
    [2, 14]    // Panguni starts Mar 14
];

// Get Tamil date for a given Gregorian date
export function getTamilDate(gregorianYear, gregorianMonth, gregorianDay) {
    const date = new Date(gregorianYear, gregorianMonth, gregorianDay);

    // Create reference dates for Tamil months in the given year
    const tamilYearStart = new Date(gregorianYear, 3, 14); // Chithirai 1 (Apr 14)

    // Determine if we're before or after Tamil New Year
    let tamilYear;
    if (date < tamilYearStart) {
        tamilYear = gregorianYear - 1; // Still in previous Tamil year
    } else {
        tamilYear = gregorianYear;
    }

    // Calculate Tamil month and day
    let tamilMonthIndex = -1;
    let tamilDay = 1;

    // Create array of Tamil month start dates for calculation
    const monthStarts = [];

    // Add month starts for the Tamil year
    for (let i = 0; i < 12; i++) {
        const [gMonth, gDay] = TAMIL_MONTH_STARTS_2026[i];
        let year = tamilYear;

        // Months Jan-Mar belong to the next Gregorian year in the same Tamil year
        if (gMonth < 3) {
            year = tamilYear + 1;
        }

        monthStarts.push({
            index: i,
            date: new Date(year, gMonth, gDay)
        });
    }

    // Sort by date
    monthStarts.sort((a, b) => a.date - b.date);

    // Find which Tamil month the date falls into
    for (let i = 0; i < monthStarts.length; i++) {
        const currentStart = monthStarts[i].date;
        const nextStart = monthStarts[i + 1]?.date || new Date(tamilYear + 1, 3, 14);

        if (date >= currentStart && date < nextStart) {
            tamilMonthIndex = monthStarts[i].index;
            tamilDay = Math.floor((date - currentStart) / (1000 * 60 * 60 * 24)) + 1;
            break;
        }
    }

    // Handle edge cases
    if (tamilMonthIndex === -1) {
        // Date is before first Tamil month of the year, use Panguni from previous year
        tamilMonthIndex = 11; // Panguni
        const panguniStart = new Date(tamilYear, 2, 14);
        tamilDay = Math.floor((date - panguniStart) / (1000 * 60 * 60 * 24)) + 1;
    }

    return {
        day: tamilDay,
        month: TAMIL_MONTHS[tamilMonthIndex].name,
        monthEn: TAMIL_MONTHS[tamilMonthIndex].nameEn,
        year: tamilYear
    };
}

// Get all Tamil dates for a given Gregorian month
export function getTamilDatesForMonth(gregorianYear, gregorianMonth) {
    const daysInMonth = new Date(gregorianYear, gregorianMonth + 1, 0).getDate();
    const tamilDates = [];

    for (let day = 1; day <= daysInMonth; day++) {
        tamilDates.push(getTamilDate(gregorianYear, gregorianMonth, day));
    }

    return tamilDates;
}

// Get Tamil months that span a Gregorian month
export function getTamilMonthsInGregorianMonth(gregorianYear, gregorianMonth) {
    const tamilDates = getTamilDatesForMonth(gregorianYear, gregorianMonth);
    const uniqueMonths = [];

    tamilDates.forEach(td => {
        if (!uniqueMonths.find(m => m.name === td.month)) {
            uniqueMonths.push({ name: td.month, nameEn: td.monthEn });
        }
    });

    return uniqueMonths;
}

export { TAMIL_MONTHS };
