import { saveJournalEntries } from "./JournalDataProvider.js";

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")

    eventHub.dispatchEvent(entryStateChangedEvent)
}

saveJournalEntries().then(dispatchStateChangeEvent())


export const createEntry = ( entryObject ) => {
    return `
    <div class="entryItem">
        <p>Date:${new Date(entryObject.timestamp).toLocaleDateString()}</p>
        <p>Mood: ${entryObject.mood}</p>
        <p>Concept: ${entryObject.concept}</p>
        <p>Entry: ${entryObject.entry}</p>
    </div>
    `

    }