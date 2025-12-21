// Rahukalam, Yamagandam, and Kuligai times based on weekday
// These are fixed times for each day of the week

export const RAHUKALAM_TIMES = {
    0: { rahukalam: "4:30 PM - 6:00 PM", yamagandam: "12:00 PM - 1:30 PM", kuligai: "3:00 PM - 4:30 PM" }, // Sunday
    1: { rahukalam: "7:30 AM - 9:00 AM", yamagandam: "10:30 AM - 12:00 PM", kuligai: "1:30 PM - 3:00 PM" }, // Monday
    2: { rahukalam: "3:00 PM - 4:30 PM", yamagandam: "9:00 AM - 10:30 AM", kuligai: "12:00 PM - 1:30 PM" }, // Tuesday
    3: { rahukalam: "12:00 PM - 1:30 PM", yamagandam: "7:30 AM - 9:00 AM", kuligai: "10:30 AM - 12:00 PM" }, // Wednesday
    4: { rahukalam: "1:30 PM - 3:00 PM", yamagandam: "6:00 AM - 7:30 AM", kuligai: "9:00 AM - 10:30 AM" }, // Thursday
    5: { rahukalam: "10:30 AM - 12:00 PM", yamagandam: "3:00 PM - 4:30 PM", kuligai: "7:30 AM - 9:00 AM" }, // Friday
    6: { rahukalam: "9:00 AM - 10:30 AM", yamagandam: "1:30 PM - 3:00 PM", kuligai: "6:00 AM - 7:30 AM" }  // Saturday
};

// Get Rahukalam data for a specific date
export function getRahukalamData(year, month, day) {
    const date = new Date(year, month, day);
    const dayOfWeek = date.getDay();
    return RAHUKALAM_TIMES[dayOfWeek];
}
