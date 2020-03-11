/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entry) => {
    return `
        <section class="journalEntry">
            <div>Entry: ${entry.entry}</div>
        </section>
    `
}

export default JournalEntryComponent