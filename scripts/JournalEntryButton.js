const contentTarget = document.querySelector(".journalEntry__button")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveJournalEntry") {
        const customEvent = new CustomEvent("journalEntrySaved")

        eventHub.dispatchEvent(customEvent)
    }
})

export const DisplayJournalEntryButton = () => {
    contentTarget.innerHTML = "<button id='saveJournalEntry'>Save Journal Entry</button>"
}