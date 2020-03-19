let entries = []

const eventHub = document.querySelector(".journalEntries")

// const dispatchStateChangeEvent = () => {
//     const entryStateChangedEvent = new CustomEvent("entryStateChanged")

//     eventHub.dispatchEvent(entryStateChangedEvent)
// }

export const useJournalEntries = () => entries.slice()

export const getJournalEntries = () => {
    return fetch('http://localhost:3000/entries') 
    .then(response => response.json())
    .then(parsedEntries => {
        entries = parsedEntries
    })
}


export const saveJournalEntries = (entry) => {
    return fetch('http://localhost:3000/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getJournalEntries)
    
}