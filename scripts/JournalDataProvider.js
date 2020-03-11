/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok",
    },
    {
        date: "03/01/2020",
        concept: "JavaScript",
        entry: "I worked on auto populating my fish and tips on Martin's Aquarium",
        mood: "Excited",
    },
    {
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "I worked on formatting Martin's Aquarium to better suit what I think he wants it to look like",
        mood: "Frustrated",
    }

]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}