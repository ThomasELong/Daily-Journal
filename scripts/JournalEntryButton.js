const contentTarget = document.querySelector(".journalEntry__button")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveJournalEntry") {
        // Create a custom event to tell any interested component that the user wants to see notes
        const customEvent = new CustomEvent("journalEntrySaved")

        // Dispatch it to the eventHub
        eventHub.dispatchEvent(customEvent)
    }
})

export const DisplayJournalEntryButton = () => {
    contentTarget.innerHTML = "<button id='saveJournalEntry'>Save Journal Entry</button>"
}